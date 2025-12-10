// backend/server.js
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./src/config/db');
const path = require('path');

const app = express();

// connect DB
connectDB();

// middleware
app.use(cors());
app.use(express.json());

// static uploads (if used)
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// routes
app.use('/api/applications', require('./src/routes/applicationRoutes'));
app.use('/api/documents', require('./src/routes/documentRoutes'));
app.use('/api/users', require('./src/routes/userRoutes'));
app.use('/api/notifications', require('./src/routes/notificationRoutes'));
app.use('/api/support', require('./src/routes/supportRoutes'));


// health
app.get('/api/health', (req, res) => res.json({ ok: true }));

// error handler
app.use((err, req, res, next) => {
  console.error(err);
  res.status(err.status || 500).json({ error: err.message || 'Server Error' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
