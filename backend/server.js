// backend/server.js
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');
const connectDB = require('./src/config/db');
const http = require("http");
const { Server } = require("socket.io");

const userRoutes = require('./src/routes/userRoutes');
const applicationRoutes = require('./src/routes/applicationRoutes');
const documentRoutes = require('./src/routes/documentRoutes');
const notificationRoutes = require('./src/routes/notificationRoutes');
const supportRoutes = require('./src/routes/supportRoutes');
const reportRoutes = require('./src/routes/reportRoutes');
const authRoutes = require("./src/routes/authRoutes");



const app = express();
app.use(cors({
  origin: ["https://ipfc-alpha.vercel.app", "http://localhost:5173"],
  credentials: true,
}));
app.use(express.json());

const server = http.createServer(app);

/* ---------- SOCKET.IO ---------- */
const io = new Server(server, {
  cors: {
    origin: ["https://ipfc-alpha.vercel.app", "http://localhost:5173"],
    methods: ["GET", "POST"],
    credentials: true,
  },
});

// in-memory chat store (for demo)
// later you can move this to MongoDB
const chats = {};

io.on("connection", (socket) => {
  console.log("🔌 Socket connected:", socket.id);

  socket.on("join_room", ({ roomId }) => {
    socket.join(roomId);
    socket.emit("chat_history", chats[roomId] || []);
  });

  socket.on("send_message", ({ roomId, sender, message }) => {
  const msg = {
    roomId,
    sender,
    message,
    time: new Date().toISOString(),
  };

  if (!chats[roomId]) chats[roomId] = [];
  chats[roomId].push(msg);

  // 1️⃣ Send to chat room (applicant + admin when joined)
  io.to(roomId).emit("receive_message", msg);

  // 2️⃣ Notify admins (VERY IMPORTANT)
  io.emit("admin_notify", msg);
});




  socket.on("disconnect", () => {
    console.log("❌ Socket disconnected:", socket.id);
  });
});


// connect DB
connectDB();
// serve uploads securely (NOT public browsing)
app.use("/uploads", express.static(path.join(__dirname, "uploads")));


app.use("/api/auth", authRoutes);

// mount routes (NO AUTH HERE)
app.use('/api/users', userRoutes);
app.use('/api/applications', applicationRoutes);
app.use('/api/documents', documentRoutes);
app.use('/api/notifications', notificationRoutes);
app.use('/api/support', supportRoutes);
app.use('/api/reports', reportRoutes);

// health check
app.get('/api/health', (req, res) => res.json({ ok: true }));

// error handler
app.use((err, req, res, next) => {
  console.error('Unhandled error:', err);
  res.status(err.status || 500).json({
    error: err.message || 'Internal server error',
  });
});

const PORT = process.env.PORT || 5000;
server.listen(PORT, () =>
  console.log(`🚀 Server running with sockets on port ${PORT}`)
);

