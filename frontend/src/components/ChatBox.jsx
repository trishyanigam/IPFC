import React, { useEffect, useState } from "react";
import socket from "../socket";

export default function ChatBox({ roomId, sender }) {
  const [messages, setMessages] = useState([]);
  const [text, setText] = useState("");

  useEffect(() => {
    if (!roomId) return;

    socket.emit("join_room", { roomId });

    const handleReceive = (msg) => {
      setMessages((prev) => [...prev, msg]);
    };

    socket.on("receive_message", handleReceive);

    return () => socket.off("receive_message", handleReceive);
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
    <div className="p-4 bg-gray-900 rounded-lg">
      <div className="h-48 overflow-y-auto space-y-2 mb-3">
        {messages.map((m, i) => (
          <div
            key={i}
            className={`p-2 rounded max-w-[75%] ${
              m.sender === sender
                ? "bg-purple-600 ml-auto text-white"
                : "bg-gray-700 text-white"
            }`}
          >
            {m.message}
          </div>
        ))}
      </div>

      <div className="flex gap-2">
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="flex-1 p-2 rounded bg-gray-800 text-white"
          placeholder="Type message..."
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
