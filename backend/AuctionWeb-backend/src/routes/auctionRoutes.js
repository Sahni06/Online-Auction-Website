import express from 'express';
import {
  createAuction,
  getAuctions,
  getAuctionById,
  updateAuction,
  deleteAuction
} from '../controllers/auctionController.js';

const router = express.Router();

// Route to create a new auction
router.post('/', createAuction);

// Route to get all auctions
router.get('/', getAuctions);

// Route to get a specific auction by ID
router.get('/:id', getAuctionById);

// Route to update an auction by ID
router.put('/:id', updateAuction);

// Route to delete an auction by ID
router.delete('/:id', deleteAuction);

export default router;