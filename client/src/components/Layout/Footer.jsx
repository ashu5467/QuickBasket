"use client"

import { Link } from "react-router-dom"
import "./Footer.css"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-back-to-top">
        <div className="container">
          <button className="back-to-top-btn" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
            Back to top
          </button>
        </div>
      </div>

      <div className="footer-main">
        <div className="container">
          <div className="footer-content">
            <div className="footer-column">
              <h3>Get to Know Us</h3>
              <ul>
                <li>
                  <Link to="/careers">Careers</Link>
                </li>
                <li>
                  <Link to="/about">About Amazon</Link>
                </li>
                <li>
                  <Link to="/investor-relations">Investor Relations</Link>
                </li>
                <li>
                  <Link to="/press-releases">Amazon Cares</Link>
                </li>
                <li>
                  <Link to="/gift-cards">Gift Cards</Link>
                </li>
              </ul>
            </div>

            <div className="footer-column">
              <h3>Make Money with Us</h3>
              <ul>
                <li>
                  <Link to="/sell">Sell on Amazon</Link>
                </li>
                <li>
                  <Link to="/business">Sell under Amazon Accelerator</Link>
                </li>
                <li>
                  <Link to="/amazon-global-selling">Amazon Global Selling</Link>
                </li>
                <li>
                  <Link to="/affiliate">Become an Affiliate</Link>
                </li>
                <li>
                  <Link to="/fulfillment">Fulfilment by Amazon</Link>
                </li>
                <li>
                  <Link to="/advertise">Advertise Your Products</Link>
                </li>
                <li>
                  <Link to="/pay">Amazon Pay on Merchants</Link>
                </li>
              </ul>
            </div>

            <div className="footer-column">
              <h3>Amazon Payment Products</h3>
              <ul>
                <li>
                  <Link to="/amazon-pay">Amazon Pay</Link>
                </li>
                <li>
                  <Link to="/send-money">Send Money</Link>
                </li>
                <li>
                  <Link to="/amazon-pay-upi">Amazon Pay UPI</Link>
                </li>
                <li>
                  <Link to="/amazon-pay-later">Amazon Pay Later</Link>
                </li>
              </ul>
            </div>

            <div className="footer-column">
              <h3>Let Us Help You</h3>
              <ul>
                <li>
                  <Link to="/covid">Amazon and COVID-19</Link>
                </li>
                <li>
                  <Link to="/account">Your Account</Link>
                </li>
                <li>
                  <Link to="/orders">Your Orders</Link>
                </li>
                <li>
                  <Link to="/shipping">Shipping Rates & Policies</Link>
                </li>
                <li>
                  <Link to="/returns">Returns & Replacements</Link>
                </li>
                <li>
                  <Link to="/content">Manage Your Content and Devices</Link>
                </li>
                <li>
                  <Link to="/customer-service">Customer Service</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <div className="footer-bottom-content">
            <div className="footer-logo">
              <Link to="/">amazon.in</Link>
            </div>
            <div className="footer-selectors">
              <select className="footer-select">
                <option>🌐 English</option>
                <option>🇮🇳 हिन्दी</option>
                <option>🇮🇳 தமிழ்</option>
                <option>🇮🇳 తెలుగు</option>
                <option>🇮🇳 ಕನ್ನಡ</option>
                <option>🇮🇳 മലയാളം</option>
                <option>🇮🇳 বাংলা</option>
                <option>🇮🇳 मराठी</option>
              </select>
              <select className="footer-select">
                <option>₹ INR - Indian Rupee</option>
              </select>
              <select className="footer-select">
                <option>🇮🇳 India</option>
              </select>
            </div>
          </div>

          <div className="footer-services">
            <div className="service-item">
              <h4>AbeBooks</h4>
              <p>Books, art & collectibles</p>
            </div>
            <div className="service-item">
              <h4>Amazon Web Services</h4>
              <p>Scalable Cloud Computing Services</p>
            </div>
            <div className="service-item">
              <h4>Audible</h4>
              <p>Download Audio Books</p>
            </div>
            <div className="service-item">
              <h4>DPReview</h4>
              <p>Digital Photography</p>
            </div>
            <div className="service-item">
              <h4>IMDb</h4>
              <p>Movies, TV & Celebrities</p>
            </div>
            <div className="service-item">
              <h4>Shopbop</h4>
              <p>Designer Fashion Brands</p>
            </div>
            <div className="service-item">
              <h4>Amazon Business</h4>
              <p>Everything For Your Business</p>
            </div>
          </div>

          <div className="footer-legal">
            <p>© 1996-2024, Amazon.com, Inc. or its affiliates</p>
            <div className="legal-links">
              <Link to="/conditions">Conditions of Use & Sale</Link>
              <Link to="/privacy">Privacy Notice</Link>
              <Link to="/interest-ads">Interest-Based Ads</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
