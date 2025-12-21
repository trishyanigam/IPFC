import React, { useState, useContext, useEffect } from "react";
import { MessageCircle, X } from "lucide-react";
import { AuthContext } from "../../context/AuthContext";
import ChatBox from "../ChatBox";
import socket from "../../socket";

export default function FloatingChat() {
  const { user, role, loading } = useContext(AuthContext);

  const [open, setOpen] = useState(false);
  const [activeRoom, setActiveRoom] = useState(null);
  const [applicantRooms, setApplicantRooms] = useState([]);

  // 🔌 CONNECT SOCKET (unconditional hook)
  useEffect(() => {
    if (!loading && user && !socket.connected) {
      socket.connect();
    }
  }, [loading, user]);

  // 👤 APPLICANT AUTO ROOM
  useEffect(() => {
    if (!loading && role === "applicant" && user?.uid) {
      setActiveRoom(user.uid);
    }
  }, [loading, role, user]);

  // 👮 ADMIN NOTIFICATIONS
  useEffect(() => {
    if (loading || role !== "admin") return;

    const handler = (msg) => {
      setApplicantRooms((prev) =>
        prev.includes(msg.roomId) ? prev : [...prev, msg.roomId]
      );
    };

    socket.on("admin_notify", handler);
    return () => socket.off("admin_notify", handler);
  }, [loading, role]);

  // ✅ SAFE EARLY RETURN (AFTER hooks)
  if (loading || !user) return null;

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 bg-purple-600 p-4 rounded-full z-50"
      >
        <MessageCircle />
      </button>

      {/* Chat Window */}
      {open && (
        <div className="fixed bottom-20 right-6 w-80 h-[420px] bg-gray-900 rounded-xl z-50">

          {/* ADMIN: applicant list */}
          {role === "admin" && !activeRoom && (
            <div className="p-3">
              <h4 className="font-semibold mb-2">Applicants</h4>
              {applicantRooms.length === 0 ? (
                <p className="text-gray-400">No messages yet</p>
              ) : (
                applicantRooms.map((uid) => (
                  <button
                    key={uid}
                    onClick={() => setActiveRoom(uid)}
                    className="block w-full p-2 mb-1 bg-gray-800 rounded text-left"
                  >
                    Applicant: {uid.slice(0, 6)}
                  </button>
                ))
              )}
            </div>
          )}

          {/* CHAT */}
          {activeRoom && (
            <ChatBox
              roomId={activeRoom}
              sender={role}
              onClose={() => setActiveRoom(null)}
            />
          )}
        </div>
      )}
    </>
  );
}
