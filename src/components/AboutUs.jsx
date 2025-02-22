import { useState } from 'react';
import './AboutUs.css';

export default function AboutUs() {
    const [teamMembers] = useState([
        {
            name: "Sahni Chaudhary",
            role: "CEO & Founder",
            image: "/team/john.jpg",
            description: "With 15 years of experience in online auctions and e-commerce."
        },
        {
            name: "Sarah Johnson",
            role: "Head of Operations",
            image: "/team/sarah.jpg",
            description: "Expert in auction management and customer relations."
        },
        {
            name: "Mike Chen",
            role: "Technical Director",
            image: "/team/mike.jpg",
            description: "Leading our platform development and innovation."
        }
    ]);

    const [stats] = useState([
        { number: "10K+", label: "Active Users" },
        { number: "50K+", label: "Successful Auctions" },
        { number: "95%", label: "Satisfaction Rate" },
        { number: "24/7", label: "Customer Support" }
    ]);

    return (
        <div className="about-container">
            {/* Hero Section */}
            <section className="about-hero">
                <h1>About BidSwift</h1>
                <p className="subtitle">Your Trusted Online Auction Platform</p>
            </section>

            {/* Mission Statement */}
            <section className="mission-section">
                <div className="mission-content">
                    <h2>Our Mission</h2>
                    <p>
                        At BidSwift, we're dedicated to creating a secure and dynamic 
                        marketplace where buyers and sellers can connect, trade unique 
                        items, and build lasting relationships. Our platform combines 
                        cutting-edge technology with user-friendly features to make 
                        online auctions accessible to everyone.
                    </p>
                </div>
            </section>

            {/* Stats Section */}
            <section className="stats-section">
                <div className="stats-grid">
                    {stats.map((stat, index) => (
                        <div key={index} className="stat-item">
                            <h3>{stat.number}</h3>
                            <p>{stat.label}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="features-section">
                <h2>Why Choose BidSwift?</h2>
                <div className="features-grid">
                    <div className="feature-card">
                        <div className="feature-icon">🔒</div>
                        <h3>Secure Transactions</h3>
                        <p>Advanced security measures to protect your payments and personal information.</p>
                    </div>
                    <div className="feature-card">
                        <div className="feature-icon">⚡</div>
                        <h3>Real-time Bidding</h3>
                        <p>Lightning-fast bidding system with instant updates and notifications.</p>
                    </div>
                    <div className="feature-card">
                        <div className="feature-icon">👥</div>
                        <h3>Verified Users</h3>
                        <p>Thorough verification process to ensure trusted buyers and sellers.</p>
                    </div>
                    <div className="feature-card">
                        <div className="feature-icon">💎</div>
                        <h3>Quality Guarantee</h3>
                        <p>Strict quality control and authenticity verification for listed items.</p>
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="team-section">
                <h2>Meet Our Team</h2>
                <div className="team-grid">
                    {teamMembers.map((member, index) => (
                        <div key={index} className="team-card">
                            <div className="member-image">
                                <img src="/public/women" alt="random" />
                            </div>
                            <div className="member-info">
                                <h3>{member.name}</h3>
                                <h4>{member.role}</h4>
                                <p>{member.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Contact Section */}
            <section className="contact-section">
                <h2>Get in Touch</h2>
                <div className="contact-grid">
                    <div className="contact-info">
                        <div className="contact-item">
                            <h3>📍 India</h3>
                            <p>123 Auction Street<br />Bombay</p>
                        </div>
                        <div className="contact-item">
                            <h3>📞 Phone</h3>
                            <p>***********</p>
                        </div>
                        <div className="contact-item">
                            <h3>✉️ Email</h3>
                            <p>*************</p>
                        </div>
                    </div>
                    <div className="contact-form">
                        <form>
                            <input type="text" placeholder="Your Name" required />
                            <input type="email" placeholder="Your Email" required />
                            <textarea placeholder="Your Message" required></textarea>
                            <button type="submit">Send Message</button>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
}