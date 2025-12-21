import React, { useEffect, useState } from "react";
import socket from "../socket";

export default function ChatBox({ roomId, sender, onClose }) {
  const [messages, setMessages] = useState([]);
  const [text, setText] = useState("");

  useEffect(() => {
    if (!roomId) return;

    // ✅ Join room
    socket.emit("join_room", { roomId });

    // ✅ Receive previous chat history
    const handleHistory = (history) => {
      setMessages(history);
    };

    // ✅ Receive live messages
    const handleReceive = (msg) => {
      if (msg.roomId === roomId) {
        setMessages((prev) => [...prev, msg]);
      }
    };

    socket.on("chat_history", handleHistory);
    socket.on("receive_message", handleReceive);

    return () => {
      socket.off("chat_history", handleHistory);
      socket.off("receive_message", handleReceive);
    };
  }, [roomId]);

  const sendMessage = () => {
    if (!text.trim()) return;

    socket.emit("send_message", {
      roomId,
      sender,
      message: text,
    });

    setText("");
  };

  return (
    <div className="flex flex-col h-full bg-gray-900 rounded-lg">
      
      {/* HEADER */}
      <div className="flex justify-between items-center p-3 border-b border-gray-700">
        <h3 className="text-white font-semibold">Live Chat</h3>
        {onClose && (
          <button onClick={onClose} className="text-gray-400 hover:text-white">
            ✕
          </button>
        )}
      </div>

      {/* MESSAGES */}
      <div className="flex-1 overflow-y-auto p-3 space-y-2">
        {messages.length === 0 && (
          <p className="text-gray-500 text-sm text-center">
            No messages yet
          </p>
        )}

        {messages.map((m, i) => (
          <div
            key={i}
            className={`p-2 rounded-lg max-w-[75%] ${
              m.sender === sender
                ? "bg-purple-600 ml-auto text-white"
                : "bg-gray-700 text-white"
            }`}
          >
            {m.message}
          </div>
        ))}
      </div>

      {/* INPUT */}
      <div className="p-2 flex gap-2 border-t border-gray-700">
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="flex-1 p-2 rounded bg-gray-800 text-white"
          placeholder="Type message..."
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
        />
        <button
          onClick={sendMessage}
          className="bg-purple-600 px-4 rounded text-white"
        >
          Send
        </button>
      </div>
    </div>
  );
}

