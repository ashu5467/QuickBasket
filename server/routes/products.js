const express = require("express")
const { protect, authorize } = require("../middleware/auth")

const router = express.Router()

// Mock products data
const mockProducts = [
  {
    id: "1",
    name: "iPhone 15 Pro",
    description: "The iPhone 15 Pro features a titanium design, A17 Pro chip, and advanced camera system.",
    price: 134900,
    originalPrice: 149900,
    category: "Electronics",
    brand: "Apple",
    images: [{ url: "/placeholder.svg?height=400&width=400" }],
    rating: 4.8,
    reviews: [],
    stock: 50,
    features: ["6.1-inch display", "A17 Pro chip", "48MP camera"],
    createdAt: new Date(),
  },
  {
    id: "2",
    name: "MacBook Air M3",
    description: "Supercharged by the M3 chip, MacBook Air is up to 60% faster than the previous generation.",
    price: 114900,
    originalPrice: 124900,
    category: "Electronics",
    brand: "Apple",
    images: [{ url: "/placeholder.svg?height=400&width=400" }],
    rating: 4.9,
    reviews: [],
    stock: 25,
    features: ["M3 chip", "13.6-inch display", "18-hour battery"],
    createdAt: new Date(),
  },
]

// @desc    Get all products
// @route   GET /api/products
// @access  Public
router.get("/", (req, res) => {
  try {
    const { category, search } = req.query
    let products = [...mockProducts]

    if (category) {
      products = products.filter((p) => p.category.toLowerCase() === category.toLowerCase())
    }

    if (search) {
      const searchLower = search.toLowerCase()
      products = products.filter(
        (p) => p.name.toLowerCase().includes(searchLower) || p.description.toLowerCase().includes(searchLower),
      )
    }

    res.status(200).json({
      success: true,
      products,
    })
  } catch (error) {
    console.error("Get products error:", error)
    res.status(500).json({
      success: false,
      message: "Server error",
    })
  }
})

// @desc    Get single product
// @route   GET /api/products/:id
// @access  Public
router.get("/:id", (req, res) => {
  try {
    const product = mockProducts.find((p) => p.id === req.params.id)

    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      })
    }

    res.status(200).json({
      success: true,
      product,
    })
  } catch (error) {
    console.error("Get product error:", error)
    res.status(500).json({
      success: false,
      message: "Server error",
    })
  }
})

// @desc    Create product
// @route   POST /api/products
// @access  Private/Admin
router.post("/", protect, authorize("admin"), (req, res) => {
  try {
    const product = {
      id: Date.now().toString(),
      ...req.body,
      createdAt: new Date(),
    }

    mockProducts.push(product)

    res.status(201).json({
      success: true,
      product,
    })
  } catch (error) {
    console.error("Create product error:", error)
    res.status(500).json({
      success: false,
      message: "Server error",
    })
  }
})

module.exports = router
