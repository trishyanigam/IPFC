import React, { useState, useContext, useEffect } from "react";
import { MessageCircle, X } from "lucide-react";
import { AuthContext } from "../../context/AuthContext";
import ChatBox from "../ChatBox";

const APPLICANT_ID = "4bVOWI73fuYdtCu9odV7mmH3dSW2";

export default function FloatingChat() {
  const { user, role } = useContext(AuthContext);
  const [open, setOpen] = useState(false);
  const [roomId, setRoomId] = useState(null);

  useEffect(() => {
    if (!user) return;

    // 🔥 BOTH ADMIN & APPLICANT USE SAME ROOM
    setRoomId(APPLICANT_ID);
  }, [user, role]);

  if (!roomId) return null;

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-6 right-6 bg-purple-600 p-4 rounded-full z-50"
      >
        <MessageCircle />
      </button>

      {open && (
        <div className="fixed bottom-20 right-6 w-80 bg-gray-900 rounded-lg z-50">
          <div className="flex justify-between p-3 border-b border-gray-700">
            <h3 className="text-white font-semibold">
              {role === "admin" ? "Applicant Chat" : "Chat with Admin"}
            </h3>
            <button onClick={() => setOpen(false)}>
              <X className="text-gray-400" />
            </button>
          </div>

          <ChatBox roomId={roomId} sender={role} />
        </div>
      )}
    </>
  );
}
