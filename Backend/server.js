// server.js

const express = require('express');
const cors    = require('cors');
const dotenv  = require('dotenv');

dotenv.config();              // 1️⃣ Load .env vars into process.env

const app = express();

// ─── MIDDLEWARE ──────────────────────────────────────────────
app.use(cors());              // 2️⃣ Allow cross-origin (frontend ↔ backend)
app.use(express.json());      // 3️⃣ Parse incoming JSON bodies

// ─── ROUTES ──────────────────────────────────────────────────
const logRoute = require('./routes/log');
app.use('/api/log', logRoute);

app.get('/', (req, res) => {  // 4️⃣ Health check
  res.send('🚀 DSA Tracker Backend is Live!');
});

// ─── START SERVER ────────────────────────────────────────────
const PORT = process.env.PORT || 3002;
app.listen(PORT, () => {
  console.log(`✅ Server is running on http://localhost:${PORT}`);
});