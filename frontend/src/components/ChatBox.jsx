import React from "react";
import { useEffect, useState } from "react";
import { io } from "socket.io-client";

const socket = io("http://localhost:5000", {
  transports: ["websocket"],
});

export default function ChatBox({ user, roomId }) {
  const [messages, setMessages] = useState([]);
  const [text, setText] = useState("");

  useEffect(() => {
    if (!roomId) return;

    socket.emit("join-room", roomId);

    socket.on("receive-message", (msg) => {
      setMessages((prev) => [...prev, msg]);
    });

    return () => socket.off("receive-message");
  }, [roomId]);

  const sendMessage = () => {
    if (!text.trim()) return;

    socket.emit("send-message", {
      roomId,
      message: text,
      sender: user.role,
    });

    setText("");
  };

  if (!roomId) {
    return <p className="text-gray-400">Loading chat...</p>;
  }

  return (
    <div className="border rounded-xl p-4 w-full max-w-sm">
      <h3 className="font-bold mb-2">Live Chat</h3>

      <div className="h-40 overflow-y-auto mb-2 space-y-2">
        {messages.map((m, i) => (
          <div
            key={i}
            className={`p-2 rounded ${
              m.sender === user.role
                ? "bg-purple-600 text-white ml-auto"
                : "bg-gray-300 text-black"
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
          className="flex-1 border rounded px-2"
          placeholder="Type message..."
        />
        <button onClick={sendMessage} className="bg-purple-600 text-white px-3 rounded">
          Send
        </button>
      </div>
    </div>
  );
}
