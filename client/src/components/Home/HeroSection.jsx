import { Link } from "react-router-dom"
import "./HeroSection.css"

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-background">
        <div className="hero-overlay"></div>
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <h1>Shop Everything You Need</h1>
              <p>Millions of products, fast delivery, and great prices</p>
              <Link to="/category/electronics" className="hero-button">
                Shop Now
              </Link>
            </div>
            <div className="hero-stats">
              <div className="stat-card">
                <div className="stat-number">50M+</div>
                <div className="stat-label">Products</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">Fast</div>
                <div className="stat-label">Delivery</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">24/7</div>
                <div className="stat-label">Support</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">Secure</div>
                <div className="stat-label">Payment</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
