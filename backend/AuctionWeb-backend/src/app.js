const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/authRoutes');
const auctionRoutes = require('./routes/auctionRoutes');
const userRoutes = require('./routes/userRoutes');
const { connectDB } = require('./config/db');

const app = express();

// Middleware
app.use(express.json());

// Database connection
connectDB();

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/auctions', auctionRoutes);
app.use('/api/users', userRoutes);

module.exports = app;