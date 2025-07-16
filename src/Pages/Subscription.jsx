import React from 'react';

const SubscriptionSection = () => {
    return (
        <section className="subscription-section">
            <div className="subscription-container">
                <h2>Subscribe to our Foodie Newsletter 🍽️</h2>
                <p>Get weekly recipe updates, food tips, and more right to your inbox.</p>
                <form className="subscription-form">
                    <input type="email" placeholder="Enter your email" required />
                    <button type="submit">Subscribe</button>
                </form>
            </div>
        </section>
    );
};

export default SubscriptionSection;
