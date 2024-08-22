import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h4>Buy</h4>
          <ul>
            <li>Registration</li>
            <li>eBay Money Back Guarantee</li>
            <li>Bidding & buying help</li>
            <li>Stores</li>
            <li>eBay for Charity</li>
            <li>Charity Shop</li>
            <li>Seasonal Sales and events</li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Sell</h4>
          <ul>
            <li>Start selling</li>
            <li>How to sell</li>
            <li>Business sellers</li>
            <li>Affiliates</li>
          </ul>
          <h4>Tools & apps</h4>
          <ul>
            <li>Developers</li>
            <li>Security center</li>
            <li>Site map</li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Stay connected</h4>
          <ul>
            <li>Facebook</li>
            <li>Twitter</li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>About eBay</h4>
          <ul>
            <li>Company info</li>
            <li>News</li>
            <li>Investors</li>
            <li>Careers</li>
            <li>Diversity & Inclusion</li>
            <li>Global Impact</li>
            <li>Government relations</li>
            <li>Advertise with us</li>
            <li>Policies</li>
            <li>Verified Rights Owner (VeRO) Program</li>
            <li>eCI Licenses</li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Help & Contact</h4>
          <ul>
            <li>Seller Center</li>
            <li>Contact Us</li>
            <li>eBay Returns</li>
          </ul>
          <h4>Community</h4>
          <ul>
            <li>Announcements</li>
            <li>eBay Community</li>
            <li>eBay for Business Podcast</li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>Copyright © 1995-2023 eBay Inc. All Rights Reserved.</p>
        <p>
          Accessibility, User Agreement, Privacy, Payments Terms of Use, Cookies, Your Privacy Choices, and AdChoice.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
