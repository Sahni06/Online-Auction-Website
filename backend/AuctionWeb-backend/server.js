const express = require('express');
const cors = require('cors');
const multer = require('multer');
const path = require('path');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();

// Configure CORS
app.use(cors({
    origin: 'http://localhost:5173', // Your frontend URL
    credentials: true
}));

app.use(express.json());

// Configure multer for file uploads
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/')
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname)
    }
});

const upload = multer({ storage: storage });

// Create uploads directory
const fs = require('fs');
if (!fs.existsSync('uploads')) {
    fs.mkdirSync('uploads');
}

// Add this near the top with other middleware
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/auctionDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('MongoDB connection error:', err));

// Define Auction Schema
const auctionSchema = new mongoose.Schema({
    title: { type: String, required: true },
    category: { type: String, required: true },
    description: { type: String, required: true },
    condition: { type: String, required: true },
    startingPrice: { type: Number, required: true },
    reservePrice: { type: Number },
    startDate: { type: Date, required: true },
    endDate: { type: Date, required: true },
    shippingMethod: { type: String, required: true },
    shippingCost: { type: Number, required: true },
    location: { type: String, required: true },
    acceptedPayments: [{ type: String }],
    images: [{ type: String }],
    createdAt: { type: Date, default: Date.now }
});

const Auction = mongoose.model('Auction', auctionSchema);

// Routes
app.get('/', (req, res) => {
    res.json({ message: 'Auction API is running!' });
});

// Create new auction
app.post('/api/auctions', upload.array('images', 5), async (req, res) => {
    try {
        const {
            title,
            category,
            description,
            condition,
            startingPrice,
            reservePrice,
            startDate,
            startTime,
            endDate,
            endTime,
            shippingMethod,
            shippingCost,
            location,
            acceptedPayments
        } = req.body;

        // Combine date and time
        const startDateTime = new Date(`${startDate}T${startTime}`);
        const endDateTime = new Date(`${endDate}T${endTime}`);

        // Log the files being uploaded
        console.log('Uploaded files:', req.files);
        const imagePaths = req.files.map(file => file.filename);
        console.log('Image paths saved:', imagePaths);

        // Create new auction
        const auction = new Auction({
            title,
            category,
            description,
            condition,
            startingPrice,
            reservePrice,
            startDate: startDateTime,
            endDate: endDateTime,
            shippingMethod,
            shippingCost,
            location,
            acceptedPayments: JSON.parse(acceptedPayments),
            images: imagePaths
        });

        await auction.save();

        res.status(201).json({
            message: 'Auction created successfully',
            auction
        });

    } catch (error) {
        console.error('Error creating auction:', error);
        res.status(500).json({ 
            message: 'Error creating auction', 
            error: error.message 
        });
    }
});

// Get all auctions
app.get('/api/auctions', async (req, res) => {
    try {
        const auctions = await Auction.find().sort({ createdAt: -1 });
        res.json(auctions);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching auctions', error: error.message });
    }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});