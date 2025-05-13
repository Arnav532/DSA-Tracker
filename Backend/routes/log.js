// routes/log.js
const express = require('express');
const router = express.Router();

// Define your routes
router.post('/', (req, res) => {
  // Handle POST request to /api/log
  // Your logic here
  res.status(200).json({ message: 'Log received' });
});

router.get('/', (req, res) => {
  // Handle GET request to /api/log
  // Your logic here
  res.status(200).json({ message: 'Logs retrieved' });
});

// Export the router
module.exports = router;