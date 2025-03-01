import mongoose from 'mongoose';

const auctionSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  startingBid: {
    type: Number,
    required: true,
  },
  currentBid: {
    type: Number,
    default: 0,
  },
  auctionEndTime: {
    type: Date,
    required: true,
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  bidders: [{
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    bidAmount: {
      type: Number,
    },
    bidTime: {
      type: Date,
      default: Date.now,
    },
  }],
}, { timestamps: true });

const Auction = mongoose.model('Auction', auctionSchema);

export default Auction;