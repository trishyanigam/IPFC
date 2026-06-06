// src/pages/applicant/ApplicantNotifications.jsx
import React, { useState, useEffect, useRef } from "react";
import { Bell, BellDot, Clock, Trash2 } from "lucide-react";
import api from "../../services/api";
import toast from "react-hot-toast";

export default function ApplicantNotifications() {
  const [open, setOpen] = useState(false);
  const [notifications, setNotifications] = useState([]);
  const [loading, setLoading] = useState(true);
  const prevRef = useRef([]);
  const ref = useRef(null);

  const load = async () => {
    setLoading(true);
    try {
      const res = await api.get("/notifications/my");
      const list = res.data || [];

      // Detect new notifications
      const prev = prevRef.current;
      list.forEach((n) => {
        if (!prev.find((p) => p._id === n._id)) {
          toast(`${n.message}`, { icon: "🔔" });
        }
      });

      prevRef.current = list;
      setNotifications(list);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    load();
    const interval = setInterval(load, 5000);
    return () => clearInterval(interval);
  }, []);

  // close dropdown on outside click
  useEffect(() => {
    const handle = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", handle);
    return () => document.removeEventListener("mousedown", handle);
  }, []);

  const markAllRead = async () => {
    try {
      await api.patch("/notifications/mark-all-read");
      setNotifications((prev) => prev.map((n) => ({ ...n, read: true })));
      toast.success("All marked read");
    } catch (err) {
      console.error(err);
    }
  };

  const toggleRead = async (id) => {
    try {
      await api.patch(`/notifications/${id}/toggle-read`);
      setNotifications((prev) =>
        prev.map((n) => (n._id === id ? { ...n, read: !n.read } : n))
      );
    } catch (err) {
      console.error(err);
    }
  };

  const deleteNotif = async (id) => {
    try {
      await api.delete(`/notifications/${id}`);
      setNotifications((prev) => prev.filter((n) => n._id !== id));
      toast.success("Deleted");
    } catch (err) {
      console.error(err);
    }
  };

  const clearAll = async () => {
    try {
      await api.delete("/notifications/clear-all");
      setNotifications([]);
      toast.success("Cleared");
    } catch (err) {
      console.error(err);
    }
  };

  const unreadCount = notifications.filter((n) => !n.read).length;

  return (
    <div className="relative" ref={ref}>
      {/* Bell Icon */}
      <button
        onClick={() => {
          setOpen((p) => !p);
          if (!open) load();
        }}
        className="p-2 relative rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition"
      >
        {unreadCount > 0 ? (
          <BellDot size={24} className="text-purple-600 dark:text-purple-400" />
        ) : (
          <Bell size={24} className="text-gray-700 dark:text-gray-300" />
        )}

        {unreadCount > 0 && (
          <span className="absolute top-1 right-1 w-2.5 h-2.5 bg-red-500 rounded-full" />
        )}
      </button>

      {/* Dropdown */}
      {open && (
        <div className="absolute right-0 mt-3 w-80 rounded-2xl shadow-2xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 z-50">
          {/* Header */}
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

          {/* List */}
          <div className="max-h-80 overflow-y-auto">
            {loading ? (
              <p className="p-4 text-sm text-gray-500">Loading...</p>
            ) : notifications.length === 0 ? (
              <div className="p-6 text-center text-sm text-gray-500">
                No notifications 🎉
              </div>
            ) : (
              notifications.map((n) => (
                <div
                  key={n._id}
                  onClick={() => toggleRead(n._id)}
                  className={`px-4 py-3 border-b border-gray-200 dark:border-gray-800 flex justify-between cursor-pointer transition 
                      ${
                        n.read
                          ? "bg-white dark:bg-gray-900"
                          : "bg-gray-100 dark:bg-gray-800/50"
                      }`}
                >
                  <div>
                    <p className="text-sm">{n.message}</p>
                    <div className="flex items-center gap-2 mt-1 text-xs text-gray-500 dark:text-gray-400">
                      <Clock size={14} />{" "}
                      {new Date(n.createdAt).toLocaleString()}
                    </div>
                  </div>

                  <Trash2
                    size={18}
                    onClick={(e) => {
                      e.stopPropagation();
                      deleteNotif(n._id);
                    }}
                    className="text-red-500 hover:text-red-700 cursor-pointer"
                  />
                </div>
              ))
            )}
          </div>

          {/* Footer */}
          <div className="px-4 py-3 text-center text-sm text-purple-600 dark:text-purple-400 cursor-pointer hover:underline">
            View All Notifications
          </div>
        </div>
      )}
    </div>
  );
}

