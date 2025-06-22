const express = require("express")
const { protect } = require("../middleware/auth")

const router = express.Router()

// Mock cart storage (in production, use database)
const userCarts = {}

// @desc    Get user cart
// @route   GET /api/cart
// @access  Private
router.get("/", protect, (req, res) => {
  try {
    const userId = req.user.id
    const cart = userCarts[userId] || []

    res.status(200).json({
      success: true,
      cart,
    })
  } catch (error) {
    console.error("Get cart error:", error)
    res.status(500).json({
      success: false,
      message: "Server error",
    })
  }
})

// @desc    Add item to cart
// @route   POST /api/cart
// @access  Private
router.post("/", protect, (req, res) => {
  try {
    const userId = req.user.id
    const { productId, name, price, image, quantity, stock } = req.body

    if (!userCarts[userId]) {
      userCarts[userId] = []
    }

    const cart = userCarts[userId]
    const existingItemIndex = cart.findIndex((item) => item.productId === productId)

    if (existingItemIndex >= 0) {
      // Update quantity
      cart[existingItemIndex].quantity += quantity
    } else {
      // Add new item
      cart.push({
        productId,
        name,
        price,
        image,
        quantity,
        stock,
      })
    }

    res.status(200).json({
      success: true,
      cart,
    })
  } catch (error) {
    console.error("Add to cart error:", error)
    res.status(500).json({
      success: false,
      message: "Server error",
    })
  }
})

// @desc    Update cart item quantity
// @route   PUT /api/cart
// @access  Private
router.put("/", protect, (req, res) => {
  try {
    const userId = req.user.id
    const { productId, quantity } = req.body

    if (!userCarts[userId]) {
      userCarts[userId] = []
    }

    const cart = userCarts[userId]
    const itemIndex = cart.findIndex((item) => item.productId === productId)

    if (itemIndex >= 0) {
      cart[itemIndex].quantity = quantity
    }

    res.status(200).json({
      success: true,
      cart,
    })
  } catch (error) {
    console.error("Update cart error:", error)
    res.status(500).json({
      success: false,
      message: "Server error",
    })
  }
})

// @desc    Remove item from cart
// @route   DELETE /api/cart
// @access  Private
router.delete("/", protect, (req, res) => {
  try {
    const userId = req.user.id
    const { productId, clearAll } = req.body

    if (!userCarts[userId]) {
      userCarts[userId] = []
    }

    let cart = userCarts[userId]

    if (clearAll) {
      cart = []
    } else {
      cart = cart.filter((item) => item.productId !== productId)
    }

    userCarts[userId] = cart

    res.status(200).json({
      success: true,
      cart,
    })
  } catch (error) {
    console.error("Remove from cart error:", error)
    res.status(500).json({
      success: false,
      message: "Server error",
    })
  }
})

module.exports = router
