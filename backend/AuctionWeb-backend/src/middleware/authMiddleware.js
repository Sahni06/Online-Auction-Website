import jwt from 'jsonwebtoken';
import { promisify } from 'util';

export const protect = async (req, res, next) => {
  let token;

  // Check if token is provided in the headers
  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    token = req.headers.authorization.split(' ')[1];
  }

  // If no token, return an error
  if (!token) {
    return res.status(401).json({ message: 'You are not logged in! Please log in to get access.' });
  }

  try {
    // Verify the token
    const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);

    // Attach the user to the request object
    req.user = decoded;

    next();
  } catch (error) {
    return res.status(401).json({ message: 'Invalid token. Please log in again.' });
  }
};