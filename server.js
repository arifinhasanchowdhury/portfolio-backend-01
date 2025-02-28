const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const authRoutes = require('./routes/authRoutes');
const portfolioRoutes = require('./routes/portfolioRoutes');
const { protect } = require('./middleware/authMiddleware');
const connectDB = require('./config/db');

// Initialize Express App
const app = express();

// Connect to Database
connectDB();

// Middleware
app.use(express.json()); // To parse incoming request bodies in JSON format
app.use(cookieParser()); // To parse cookies

// Routes
app.use('/api/auth', authRoutes); // Routes related to user authentication
app.use('/api/portfolio', protect, portfolioRoutes); // Routes related to portfolios are protected

// Server Listen
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
