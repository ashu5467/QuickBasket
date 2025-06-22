const express = require("express")
const { body } = require("express-validator")
const {
  register,
  login,
  logout,
  getMe,
  updateProfile,
  changePassword,
  forgotPassword,
  resetPassword,
} = require("../controllers/authController")
const { protect } = require("../middleware/auth")

const router = express.Router()

// Validation rules
const registerValidation = [
  body("name").trim().isLength({ min: 2, max: 50 }).withMessage("Name must be between 2-50 characters"),
  body("email").isEmail().normalizeEmail().withMessage("Please provide a valid email"),
  body("password").isLength({ min: 6 }).withMessage("Password must be at least 6 characters"),
]

const loginValidation = [
  body("email").isEmail().normalizeEmail().withMessage("Please provide a valid email"),
  body("password").notEmpty().withMessage("Password is required"),
]

// Routes
router.post("/register", registerValidation, register)
router.post("/login", loginValidation, login)
router.post("/logout", logout)
router.get("/me", protect, getMe)
router.put("/profile", protect, updateProfile)
router.put("/password", protect, changePassword)
router.post("/forgot-password", forgotPassword)
router.put("/reset-password/:token", resetPassword)

module.exports = router
