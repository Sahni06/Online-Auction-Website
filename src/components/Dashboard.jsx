import { useState, useEffect } from 'react';
import { FaGavel, FaTrophy, FaBookmark, FaClock } from 'react-icons/fa';
import './Dashboard.css';

export default function Dashboard() {
    const [stats, setStats] = useState({
        activeBids: 0,
        wonItems: 0,
        savedItems: 0,
        totalSpent: 0
    });

    const [auctions, setAuctions] = useState({
        active: [],
        upcoming: [],
        past: []
    });

    useEffect(() => {
        // Fetch data when component mounts
        fetchDashboardData();
    }, []);

    const fetchDashboardData = () => {
        // Simulate API call with dummy data
        setStats({
            activeBids: 5,
            wonItems: 12,
            savedItems: 8,
            totalSpent: 2500
        });

        setAuctions({
            active: [
                { id: 1, title: "Vintage Camera", currentBid: 350, endTime: "2h 30m", imageUrl: "/camera.jpeg", bids: 8 },
                { id: 2, title: "Antique Watch", currentBid: 750, endTime: "5h 45m", imageUrl: "/rolex.jpeg", bids: 12 }
            ],
            upcoming: [
                { id: 3, title: "Art Piece", startingBid: 1000, startTime: "Tomorrow, 10:00 AM", imageUrl: "art.jpeg" },
                { id: 4, title: "Rare Coins", startingBid: 500, startTime: "2 days", imageUrl: "/coins.jpeg" }
            ],
            past: [
                { id: 5, title: "Classic Book", finalBid: 200, winner: "You", imageUrl: "/book.jpeg" },
                { id: 6, title: "Vintage Record", finalBid: 150, winner: "John Doe", imageUrl: "/record.jpeg" }
            ]
        });
    };

    return (
        <div className="dashboard-container">
            {/* Stats Section */}
            <div className="stats-section">
                <div className="stat-card">
                    <FaGavel className="stat-icon" />
                    <div className="stat-info">
                        <h3>Active Bids</h3>
                        <p>{stats.activeBids}</p>
                    </div>
                </div>
                <div className="stat-card">
                    <FaTrophy className="stat-icon" />
                    <div className="stat-info">
                        <h3>Won Items</h3>
                        <p>{stats.wonItems}</p>
                    </div>
                </div>
                <div className="stat-card">
                    <FaBookmark className="stat-icon" />
                    <div className="stat-info">
                        <h3>Saved Items</h3>
                        <p>{stats.savedItems}</p>
                    </div>
                </div>
                <div className="stat-card">
                    <div className="stat-info">
                        <h3>Total Spent</h3>
                        <p>${stats.totalSpent}</p>
                    </div>
                </div>
            </div>

            {/* Active Auctions */}
            <section className="auctions-section">
                <h2>Active Auctions</h2>
                <div className="auction-cards">
                    {auctions.active.map(auction => (
                        <div key={auction.id} className="auction-card active">
                            <img src={auction.imageUrl} alt={auction.title} />
                            <div className="auction-info">
                                <h3>{auction.title}</h3>
                                <div className="bid-details">
                                    <p>Current Bid: ${auction.currentBid}</p>
                                    <p><FaClock /> {auction.endTime} left</p>
                                </div>
                                <p>{auction.bids} bids placed</p>
                                <button className="bid-button">Place Bid</button>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Upcoming Auctions */}
            <section className="auctions-section">
                <h2>Upcoming Auctions</h2>
                <div className="auction-cards">
                    {auctions.upcoming.map(auction => (
                        <div key={auction.id} className="auction-card upcoming">
                            <img src={auction.imageUrl} alt={auction.title} />
                            <div className="auction-info">
                                <h3>{auction.title}</h3>
                                <div className="bid-details">
                                    <p>Starting Bid: ${auction.startingBid}</p>
                                    <p>Starts: {auction.startTime}</p>
                                </div>
                                <button className="remind-button">Set Reminder</button>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Past Auctions */}
            <section className="auctions-section">
                <h2>Past Auctions</h2>
                <div className="auction-cards">
                    {auctions.past.map(auction => (
                        <div key={auction.id} className="auction-card past">
                            <img src={auction.imageUrl} alt={auction.title} />
                            <div className="auction-info">
                                <h3>{auction.title}</h3>
                                <div className="bid-details">
                                    <p>Final Price: ${auction.finalBid}</p>
                                    <p>Winner: {auction.winner}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}