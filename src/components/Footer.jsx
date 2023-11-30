import React from 'react'

function Footer() {
  return (
    <div>
      <footer className="footer">
        <div className="about">
          <h4>About Us</h4>
          <p>Blog</p>
          <p>Our Story</p>
          <p>Honest Standard</p>
          <p>Our Glossary</p>
          <p>Social Responsibility</p>
          <p>Giveaways</p>
        </div>

        <div className="account">
          <h4>My Account</h4>
          <p>My Account</p>
          <p>My Subscriptions</p>
          <p>Order History</p>
        </div>

        <div className="support">
          <h4>Support</h4>
          <p>Help Center</p>
          <p>Klarna</p>
          <p>Gift Certificates</p>
          <p>Sitemap</p>
          <p>Web Accessibility</p>
        </div>
      </footer>
    </div>
  );
}

export default Footer