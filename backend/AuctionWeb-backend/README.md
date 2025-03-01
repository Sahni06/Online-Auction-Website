# AuctionWeb Backend

This is the backend for the AuctionWeb project, a web application that allows users to participate in auctions.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Environment Variables](#environment-variables)
- [License](#license)

## Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```
   cd AuctionWeb-backend
   ```

3. Install the dependencies:
   ```
   npm install
   ```

4. Create a `.env` file in the root directory and add your environment variables.

## Usage

To start the server, run:
```
npm start
```

The server will start on the specified port (default is 5000).

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Login an existing user

### Auctions
- `GET /api/auctions` - Retrieve all auctions
- `POST /api/auctions` - Create a new auction
- `PUT /api/auctions/:id` - Update an auction
- `DELETE /api/auctions/:id` - Delete an auction

### Users
- `GET /api/users/:id` - Get user profile
- `PUT /api/users/:id` - Update user information

## Environment Variables

- `PORT` - The port on which the server will run (default is 5000)
- `MONGODB_URI` - The MongoDB connection string
- `JWT_SECRET` - Secret key for JWT authentication

## License

This project is licensed under the MIT License.