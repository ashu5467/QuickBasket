const express = require("express")
const { protect } = require("../middleware/auth")

const router = express.Router()

// Mock orders storage
const userOrders = {}

// @desc    Get user orders
// @route   GET /api/orders
// @access  Private
router.get("/", protect, (req, res) => {
  try {
    const userId = req.user.id
    const orders = userOrders[userId] || []

    res.status(200).json({
      success: true,
      orders,
    })
  } catch (error) {
    console.error("Get orders error:", error)
    res.status(500).json({
      success: false,
      message: "Server error",
    })
  }
})

// @desc    Create new order
// @route   POST /api/orders
// @access  Private
router.post("/", protect, (req, res) => {
  try {
    const userId = req.user.id
    const orderData = req.body

    const order = {
      id: Date.now().toString(),
      userId,
      ...orderData,
      status: "pending",
      createdAt: new Date(),
      updatedAt: new Date(),
    }

    if (!userOrders[userId]) {
      userOrders[userId] = []
    }

    userOrders[userId].push(order)

    res.status(201).json({
      success: true,
      order,
    })
  } catch (error) {
    console.error("Create order error:", error)
    res.status(500).json({
      success: false,
      message: "Server error",
    })
  }
})

module.exports = router
