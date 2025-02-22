import './landing.css'
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Landing() {
    const [featuredAuctions] = useState([
        {
            id: 1,
            title: "Vintage Watch Collection",
            image: "/images/watch.jpg",
            currentBid: 1500,
            endTime: "2h 30m"
        },
    
    ]);

    return (
        <div className="landing-container">
            {/* Hero Section */}
            <section className="hero">
                <div className="hero-content">
                    <h1>Discover Unique Treasures</h1>
                    <p>Bid, Win, and Own Exceptional Items from Around the World</p>
                    <div className="hero-buttons">
                        {/* <Link to="/register" className="btn btn-primary">Get Started</Link> */}
                        {/* <Link to="/auctions" className="btn btn-secondary">Browse Auctions</Link> */}
                    </div>
                </div>
            </section>

            {/* Featured Auctions */}
            <section className="featured-section">
                <h2>Featured Auctions</h2>
                <div className="featured-grid">
                    {featuredAuctions.map(auction => (
                        <div key={auction.id} className="featured-card">
                            <img src= "/public/rolex.jpeg" alt="rolex" />
                            <div className="card-content">
                                <h3>Rolex Watch</h3>
                                <p>Current Bid: ${auction.currentBid}</p>
                                <p>Ends in: {auction.endTime}</p>
                                <Link to={`/auction/${auction.id}`} className="btn btn-outline">
                                    View Details
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* How It Works */}
            <section className="how-it-works">
                <h2>How It Works</h2>
                <div className="steps-grid">
                    <div className="step">
                        <div className="step-icon">📝</div>
                        <h3>Register</h3>
                        <p>Create your account in minutes</p>
                    </div>
                    <div className="step">
                        <div className="step-icon">🔍</div>
                        <h3>Browse</h3>
                        <p>Find items that interest you</p>
                    </div>
                    <div className="step">
                        <div className="step-icon">🏷️</div>
                        <h3>Bid</h3>
                        <p>Place your bids on desired items</p>
                    </div>
                    <div className="step">
                        <div className="step-icon">🎉</div>
                        <h3>Win</h3>
                        <p>Win auctions and receive your items</p>
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="cta-section">
                <h2>Ready to Start Bidding?</h2>
                <p>Join thousands of collectors and enthusiasts in our community</p>
                <Link to="/SignUp" className="btn btn-primary" >Create Account</Link>
            </section>
        </div>
    );
}