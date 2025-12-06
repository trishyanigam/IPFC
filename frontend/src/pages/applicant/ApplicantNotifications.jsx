import React, { useState, useEffect, useRef } from "react";
import { Bell, BellDot, Clock, Trash2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function ApplicantNotifications() {
  const [open, setOpen] = useState(false);
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      message: "Your Patent Application #IP-2024-001 has been approved 🎉",
      time: "2 hours ago",
      read: false,
    },
    {
      id: 2,
      message: "Additional documents required for Trademark application.",
      time: "1 day ago",
      read: false,
    },
    {
      id: 3,
      message: "Admin moved your application to 'Under Review'.",
      time: "3 days ago",
      read: true,
    },
  ]);

  const notifRef = useRef(null);

  useEffect(() => {
    const handler = (e) => {
      if (notifRef.current && !notifRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const unreadCount = notifications.filter((n) => !n.read).length;

  const markAllRead = () => {
    setNotifications((prev) => prev.map((n) => ({ ...n, read: true })));
  };

  const toggleRead = (id) => {
    setNotifications((prev) =>
      prev.map((n) => (n.id === id ? { ...n, read: !n.read } : n))
    );
  };

  const deleteNotif = (id) => {
    setNotifications((prev) => prev.filter((n) => n.id !== id));
  };

  const clearAll = () => {
    setNotifications([]);
  };

  // Optional sound effect:
  // useEffect(() => {
  //   if (unreadCount > 0) new Audio("/notif-sound.mp3").play();
  // }, [unreadCount]);

  return (
    <div className="relative" ref={notifRef}>
      {/* BELL ICON */}
      <motion.button
        onClick={() => setOpen((prev) => !prev)}
        whileTap={{ scale: 0.9 }}
        animate={unreadCount > 0 ? { rotate: [0, -10, 10, -10, 0] } : {}}
        transition={{ duration: 0.4 }}
        className="relative p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition"
      >
        {unreadCount > 0 ? (
          <BellDot size={24} className="text-purple-600 dark:text-purple-400" />
        ) : (
          <Bell size={24} />
        )}

        {unreadCount > 0 && (
          <span className="absolute top-1 right-1 w-3 h-3 bg-red-500 rounded-full animate-ping" />
        )}
      </motion.button>

      {/* DROPDOWN */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: -10 }}
            transition={{ duration: 0.25 }}
            className="
              absolute right-0 mt-3 w-80 bg-white dark:bg-gray-900 
              border border-gray-300 dark:border-gray-700 rounded-2xl shadow-2xl
              overflow-hidden z-50
            "
          >
            <div className="px-4 py-3 border-b border-gray-300 dark:border-gray-700 flex justify-between items-center">
              <h3 className="font-semibold">Notifications</h3>
              {notifications.length > 0 && (
                <div className="flex gap-3 items-center">
                  {unreadCount > 0 && (
                    <button
                      onClick={markAllRead}
                      className="text-sm text-purple-600 dark:text-purple-400 hover:underline"
                    >
                      Mark all read
                    </button>
                  )}
                  <button
                    onClick={clearAll}
                    className="text-sm text-red-500 hover:underline"
                  >
                    Clear All
                  </button>
                </div>
              )}
            </div>

            {/* Notification List */}
            <div className="max-h-80 overflow-y-auto">
              <AnimatePresence>
                {notifications.map((note) => (
                  <motion.div
                    key={note.id}
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -40 }}
                    transition={{ duration: 0.2 }}
                    onClick={() => toggleRead(note.id)}
                    className={`
                      px-4 py-3 border-b border-gray-200 dark:border-gray-800 
                      cursor-pointer transition flex justify-between
                      ${
                        note.read
                          ? "bg-white dark:bg-gray-900"
                          : "bg-purple-50 dark:bg-purple-800/20"
                      }
                      hover:bg-gray-100 dark:hover:bg-gray-800
                    `}
                  >
                    <div>
                      <p className="text-sm">{note.message}</p>
                      <div className="flex items-center gap-2 mt-1 text-xs text-gray-500 dark:text-gray-400">
                        <Clock size={14} /> {note.time}
                      </div>
                    </div>

                    {/* Delete icon */}
                    <Trash2
                      size={18}
                      onClick={(e) => {
                        e.stopPropagation();
                        deleteNotif(note.id);
                      }}
                      className="text-red-500 hover:text-red-700"
                    />
                  </motion.div>
                ))}

                {/* Empty State */}
                {notifications.length === 0 && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="p-6 text-center text-sm text-gray-500 dark:text-gray-400"
                  >
                    No notifications 🎉
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <div className="px-4 py-3 text-center text-sm text-purple-600 dark:text-purple-400 hover:underline cursor-pointer">
              View All Notifications
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
