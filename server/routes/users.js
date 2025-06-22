const express = require("express")
const { protect, authorize } = require("../middleware/auth")

const router = express.Router()

// @desc    Get all users
// @route   GET /api/users
// @access  Private/Admin
router.get("/", protect, authorize("admin"), (req, res) => {
  res.status(200).json({
    success: true,
    message: "Get all users - Admin only",
  })
})

module.exports = router
