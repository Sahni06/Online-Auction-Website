import { useState } from 'react';
import './PostAuction.css';

export default function PostAuction() {
    const [formData, setFormData] = useState({
        // Item Details
        title: '',
        category: '',
        description: '',
        condition: 'new',
        
        // Auction Details
        startingPrice: '',
        reservePrice: '',
        startDate: '',
        startTime: '',
        endDate: '',
        endTime: '',
        
        // Shipping Details
        shippingMethod: 'standard',
        shippingCost: '',
        location: '',
        
        // Payment Details
        acceptedPayments: [],
        
        // Images
        images: []
    });

    const [preview, setPreview] = useState([]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleImageUpload = (e) => {
        const files = Array.from(e.target.files);
        setFormData(prev => ({
            ...prev,
            images: [...prev.images, ...files]
        }));

        // Create preview URLs
        const newPreviews = files.map(file => URL.createObjectURL(file));
        setPreview(prev => [...prev, ...newPreviews]);
    };

    const handlePaymentMethod = (e) => {
        const { value, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            acceptedPayments: checked 
                ? [...prev.acceptedPayments, value]
                : prev.acceptedPayments.filter(method => method !== value)
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        // Create FormData object for file upload
        const auctionFormData = new FormData();
        
        // Append all form data
        Object.keys(formData).forEach(key => {
            if (key === 'images') {
                formData.images.forEach(image => {
                    auctionFormData.append('images', image);
                });
            } else {
                auctionFormData.append(key, formData[key]);
            }
        });

        try {
            // Replace with your API endpoint
            const response = await fetch('/api/auctions', {
                method: 'POST',
                body: auctionFormData
            });

            if (response.ok) {
                alert('Auction posted successfully!');
                // Reset form or redirect
            } else {
                throw new Error('Failed to post auction');
            }
        } catch (error) {
            alert('Error posting auction: ' + error.message);
        }
    };

    return (
        <div className="post-auction-container">
            <h1>Post New Auction</h1>
            
            <form onSubmit={handleSubmit} className="auction-form">
                {/* Item Details Section */}
                <section className="form-section">
                    <h2>Item Details</h2>
                    
                    <div className="form-group">
                        <label htmlFor="title">Item Title*</label>
                        <input
                            type="text"
                            id="title"
                            name="title"
                            value={formData.title}
                            onChange={handleInputChange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="category">Category*</label>
                        <select
                            id="category"
                            name="category"
                            value={formData.category}
                            onChange={handleInputChange}
                            required
                        >
                            <option value="">Select Category</option>
                            <option value="electronics">Electronics</option>
                            <option value="collectibles">Collectibles</option>
                            <option value="fashion">Fashion</option>
                            <option value="art">Art</option>
                            <option value="other">Other</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <label htmlFor="description">Description*</label>
                        <textarea
                            id="description"
                            name="description"
                            value={formData.description}
                            onChange={handleInputChange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="condition">Condition*</label>
                        <select
                            id="condition"
                            name="condition"
                            value={formData.condition}
                            onChange={handleInputChange}
                            required
                        >
                            <option value="new">New</option>
                            <option value="like-new">Like New</option>
                            <option value="good">Good</option>
                            <option value="fair">Fair</option>
                            <option value="poor">Poor</option>
                        </select>
                    </div>
                </section>

                {/* Images Section */}
                <section className="form-section">
                    <h2>Images</h2>
                    <div className="form-group">
                        <label htmlFor="images">Upload Images* (Max 5)</label>
                        <input
                            type="file"
                            id="images"
                            name="images"
                            accept="image/*"
                            multiple
                            onChange={handleImageUpload}
                            required
                        />
                        <div className="image-preview">
                            {preview.map((url, index) => (
                                <img key={index} src={url} alt={`Preview ${index + 1}`} />
                            ))}
                        </div>
                    </div>
                </section>

                {/* Auction Details Section */}
                <section className="form-section">
                    <h2>Auction Details</h2>
                    
                    <div className="form-group">
                        <label htmlFor="startingPrice">Starting Price ($)*</label>
                        <input
                            type="number"
                            id="startingPrice"
                            name="startingPrice"
                            value={formData.startingPrice}
                            onChange={handleInputChange}
                            min="0"
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="reservePrice">Reserve Price ($)</label>
                        <input
                            type="number"
                            id="reservePrice"
                            name="reservePrice"
                            value={formData.reservePrice}
                            onChange={handleInputChange}
                            min="0"
                        />
                    </div>

                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="startDate">Start Date*</label>
                            <input
                                type="date"
                                id="startDate"
                                name="startDate"
                                value={formData.startDate}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="startTime">Start Time*</label>
                            <input
                                type="time"
                                id="startTime"
                                name="startTime"
                                value={formData.startTime}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="endDate">End Date*</label>
                            <input
                                type="date"
                                id="endDate"
                                name="endDate"
                                value={formData.endDate}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="endTime">End Time*</label>
                            <input
                                type="time"
                                id="endTime"
                                name="endTime"
                                value={formData.endTime}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                    </div>
                </section>

                {/* Shipping Details Section */}
                <section className="form-section">
                    <h2>Shipping Details</h2>
                    
                    <div className="form-group">
                        <label htmlFor="shippingMethod">Shipping Method*</label>
                        <select
                            id="shippingMethod"
                            name="shippingMethod"
                            value={formData.shippingMethod}
                            onChange={handleInputChange}
                            required
                        >
                            <option value="standard">Standard Shipping</option>
                            <option value="express">Express Shipping</option>
                            <option value="pickup">Local Pickup Only</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <label htmlFor="shippingCost">Shipping Cost ($)*</label>
                        <input
                            type="number"
                            id="shippingCost"
                            name="shippingCost"
                            value={formData.shippingCost}
                            onChange={handleInputChange}
                            min="0"
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="location">Item Location*</label>
                        <input
                            type="text"
                            id="location"
                            name="location"
                            value={formData.location}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                </section>

                {/* Payment Details Section */}
                <section className="form-section">
                    <h2>Payment Details</h2>
                    
                    <div className="form-group">
                        <label>Accepted Payment Methods*</label>
                        <div className="checkbox-group">
                            <label>
                                <input
                                    type="checkbox"
                                    name="acceptedPayments"
                                    value="creditCard"
                                    onChange={handlePaymentMethod}
                                />
                                Credit Card
                            </label>
                            <label>
                                <input
                                    type="checkbox"
                                    name="acceptedPayments"
                                    value="paypal"
                                    onChange={handlePaymentMethod}
                                />
                                PayPal
                            </label>
                            <label>
                                <input
                                    type="checkbox"
                                    name="acceptedPayments"
                                    value="bankTransfer"
                                    onChange={handlePaymentMethod}
                                />
                                Bank Transfer
                            </label>
                        </div>
                    </div>
                </section>

                <button type="submit" className="submit-button">Post Auction</button>
            </form>
        </div>
    );
}