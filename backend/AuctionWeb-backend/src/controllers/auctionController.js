import Auction from '../models/auctionModel.js';

export const createAuction = async (req, res) => {
  try {
    const auction = new Auction(req.body);
    await auction.save();
    res.status(201).json(auction);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const getAuctions = async (req, res) => {
  try {
    const auctions = await Auction.find();
    res.status(200).json(auctions);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getAuctionById = async (req, res) => {
  try {
    const auction = await Auction.findById(req.params.id);
    if (!auction) {
      return res.status(404).json({ message: 'Auction not found' });
    }
    res.status(200).json(auction);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateAuction = async (req, res) => {
  try {
    const auction = await Auction.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!auction) {
      return res.status(404).json({ message: 'Auction not found' });
    }
    res.status(200).json(auction);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const deleteAuction = async (req, res) => {
  try {
    const auction = await Auction.findByIdAndDelete(req.params.id);
    if (!auction) {
      return res.status(404).json({ message: 'Auction not found' });
    }
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};