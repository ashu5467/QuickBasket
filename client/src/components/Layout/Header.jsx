"use client"

import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { FaSearch, FaShoppingCart, FaUser, FaBars, FaMapMarkerAlt } from "react-icons/fa"
import { useAuth } from "../../contexts/AuthContext"
import { useCart } from "../../contexts/CartContext"
import "./Header.css"

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("")
  const [showUserMenu, setShowUserMenu] = useState(false)
  const { user, isAuthenticated, logout } = useAuth()
  const { totalItems } = useCart()
  const navigate = useNavigate()

  const handleSearch = (e) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`)
      setSearchQuery("")
    }
  }

  const handleLogout = () => {
    logout()
    setShowUserMenu(false)
    navigate("/")
  }

  return (
    <header className="header">
      {/* Top Bar */}
      <div className="header-top">
        <div className="container">
          <div className="header-top-content">
            <div className="location">
              <FaMapMarkerAlt />
              <span>Deliver to Mumbai 400001</span>
            </div>
            <div className="header-links">
              {isAuthenticated ? (
                <div className="user-menu" onMouseLeave={() => setShowUserMenu(false)}>
                  <button className="user-button" onMouseEnter={() => setShowUserMenu(true)}>
                    <FaUser />
                    Hello, {user?.name}
                  </button>
                  {showUserMenu && (
                    <div className="user-dropdown">
                      <Link to="/profile" onClick={() => setShowUserMenu(false)}>
                        Your Account
                      </Link>
                      <Link to="/orders" onClick={() => setShowUserMenu(false)}>
                        Your Orders
                      </Link>
                      <button onClick={handleLogout}>Sign Out</button>
                    </div>
                  )}
                </div>
              ) : (
                <Link to="/login" className="auth-link">
                  Hello, Sign in
                </Link>
              )}
              <Link to="/orders">Returns & Orders</Link>
              <Link to="/prime">Prime</Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="header-main">
        <div className="container">
          <div className="header-main-content">
            {/* Logo */}
            <Link to="/" className="logo">
              <span>amazon.in</span>
            </Link>

            {/* Search Bar */}
            <form className="search-form" onSubmit={handleSearch}>
              <select className="search-category">
                <option value="all">All</option>
                <option value="electronics">Electronics</option>
                <option value="books">Books</option>
                <option value="clothing">Clothing</option>
                <option value="home">Home & Kitchen</option>
              </select>
              <input
                type="text"
                placeholder="Search Amazon.in"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="search-input"
              />
              <button type="submit" className="search-button">
                <FaSearch />
              </button>
            </form>

            {/* Right Side */}
            <div className="header-right">
              {/* Account */}
              <div className="account-section">
                {isAuthenticated ? (
                  <Link to="/profile" className="account-link">
                    <span className="account-greeting">Hello, {user?.name}</span>
                    <span className="account-text">Account & Lists</span>
                  </Link>
                ) : (
                  <Link to="/login" className="account-link">
                    <span className="account-greeting">Hello, Sign in</span>
                    <span className="account-text">Account & Lists</span>
                  </Link>
                )}
              </div>

              {/* Orders */}
              <Link to="/orders" className="orders-link">
                <span className="orders-text-1">Returns</span>
                <span className="orders-text-2">& Orders</span>
              </Link>

              {/* Cart */}
              <Link to="/cart" className="cart-link">
                <div className="cart-icon-container">
                  <FaShoppingCart className="cart-icon" />
                  {totalItems > 0 && <span className="cart-count">{totalItems}</span>}
                </div>
                <span className="cart-text">Cart</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Bar */}
      <div className="header-nav">
        <div className="container">
          <div className="nav-content">
            <button className="nav-all">
              <FaBars />
              All
            </button>
            <nav className="nav-links">
              <Link to="/deals">Today's Deals</Link>
              <Link to="/customer-service">Customer Service</Link>
              <Link to="/category/mobiles">Mobiles</Link>
              <Link to="/category/fashion">Fashion</Link>
              <Link to="/category/electronics">Electronics</Link>
              <Link to="/category/home-kitchen">Home & Kitchen</Link>
            </nav>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
