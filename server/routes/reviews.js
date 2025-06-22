const express = require("express")
const { protect } = require("../middleware/auth")

const router = express.Router()

// @desc    Create product review
// @route   POST /api/reviews
// @access  Private
router.post("/", protect, (req, res) => {
  try {
    const { productId, rating, comment } = req.body

    const review = {
      id: Date.now().toString(),
      userId: req.user.id,
      userName: req.user.name,
      productId,
      rating,
      comment,
      createdAt: new Date(),
    }

    res.status(201).json({
      success: true,
      review,
    })
  } catch (error) {
    console.error("Create review error:", error)
    res.status(500).json({
      success: false,
      message: "Server error",
    })
  }
})

module.exports = router
