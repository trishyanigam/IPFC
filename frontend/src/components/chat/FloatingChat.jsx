import React, { useState, useContext } from "react";
import { MessageCircle, X } from "lucide-react";
import { AuthContext } from "../../context/AuthContext";
import ChatBox from "../ChatBox.jsx";


export default function FloatingChat() {
  const { user } = useContext(AuthContext);
  const [open, setOpen] = useState(false);

  // Safety guard
  if (!user) return null;

  return (
    <>
      {/* CHAT WINDOW */}
      {open && (
        <div
          className="
            fixed bottom-20 right-6 z-50
            w-[320px] h-[420px]
            bg-gray-900 border border-gray-700
            rounded-2xl shadow-2xl
            overflow-hidden
          "
        >
          {/* Header */}
          <div className="flex items-center justify-between px-4 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
            <span className="font-semibold">Live Chat</span>
            <button onClick={() => setOpen(false)}>
              <X size={18} />
            </button>
          </div>

          {/* Chat */}
          <ChatBox
            user={{ uid: user.uid, role: "applicant" }}
            roomId={user.uid}
          />
        </div>
      )}

      {/* FLOATING BUTTON */}
      <button
        onClick={() => setOpen(true)}
        className="
          fixed bottom-6 right-6 z-50
          w-14 h-14 rounded-full
          bg-gradient-to-r from-purple-600 to-indigo-600
          text-white
          flex items-center justify-center
          shadow-xl hover:scale-110 transition
        "
      >
        <MessageCircle size={26} />
      </button>
    </>
  );
}
