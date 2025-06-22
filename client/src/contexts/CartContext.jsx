"use client"

import { createContext, useContext, useReducer, useEffect } from "react"
import axios from "axios"
import toast from "react-hot-toast"
import { useAuth } from "./AuthContext"

const CartContext = createContext()

// Initial state
const initialState = {
  cartItems: [],
  loading: false,
  error: null,
  totalItems: 0,
  totalPrice: 0,
}

// Cart reducer
const cartReducer = (state, action) => {
  switch (action.type) {
    case "CART_LOADING":
      return {
        ...state,
        loading: true,
        error: null,
      }
    case "CART_SUCCESS":
      return {
        ...state,
        cartItems: action.payload,
        loading: false,
        error: null,
        totalItems: action.payload.reduce((total, item) => total + item.quantity, 0),
        totalPrice: action.payload.reduce((total, item) => total + item.price * item.quantity, 0),
      }
    case "CART_ERROR":
      return {
        ...state,
        loading: false,
        error: action.payload,
      }
    case "CLEAR_CART":
      return {
        ...initialState,
      }
    default:
      return state
  }
}

// Cart Provider
export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState)
  const { isAuthenticated } = useAuth()

  // Load cart on authentication change
  useEffect(() => {
    if (isAuthenticated) {
      loadCart()
    } else {
      dispatch({ type: "CLEAR_CART" })
    }
  }, [isAuthenticated])

  // Load cart from server or localStorage
  const loadCart = async () => {
    try {
      dispatch({ type: "CART_LOADING" })

      if (isAuthenticated) {
        // Load from server for authenticated users
        const response = await axios.get("/cart")
        if (response.data.success) {
          dispatch({ type: "CART_SUCCESS", payload: response.data.cart || [] })
        }
      } else {
        // Load from localStorage for guest users
        const localCart = JSON.parse(localStorage.getItem("cart") || "[]")
        dispatch({ type: "CART_SUCCESS", payload: localCart })
      }
    } catch (error) {
      console.error("Load cart error:", error)
      dispatch({ type: "CART_ERROR", payload: "Failed to load cart" })
    }
  }

  // Add item to cart
  const addToCart = async (product, quantity = 1) => {
    try {
      dispatch({ type: "CART_LOADING" })

      const cartItem = {
        productId: product.id || product._id,
        name: product.name,
        price: product.price,
        image: product.images?.[0]?.url || product.image || "/placeholder.jpg",
        quantity,
        stock: product.stock,
      }

      if (isAuthenticated) {
        // Add to server cart
        const response = await axios.post("/cart", cartItem)
        if (response.data.success) {
          dispatch({ type: "CART_SUCCESS", payload: response.data.cart })
          toast.success("Item added to cart")
        }
      } else {
        // Add to localStorage cart
        const localCart = JSON.parse(localStorage.getItem("cart") || "[]")
        const existingItemIndex = localCart.findIndex((item) => item.productId === cartItem.productId)

        if (existingItemIndex >= 0) {
          localCart[existingItemIndex].quantity += quantity
        } else {
          localCart.push(cartItem)
        }

        localStorage.setItem("cart", JSON.stringify(localCart))
        dispatch({ type: "CART_SUCCESS", payload: localCart })
        toast.success("Item added to cart")
      }
    } catch (error) {
      console.error("Add to cart error:", error)
      dispatch({ type: "CART_ERROR", payload: "Failed to add item to cart" })
      toast.error("Failed to add item to cart")
    }
  }

  // Update item quantity
  const updateQuantity = async (productId, quantity) => {
    try {
      if (quantity <= 0) {
        await removeFromCart(productId)
        return
      }

      dispatch({ type: "CART_LOADING" })

      if (isAuthenticated) {
        // Update server cart
        const response = await axios.put("/cart", { productId, quantity })
        if (response.data.success) {
          dispatch({ type: "CART_SUCCESS", payload: response.data.cart })
        }
      } else {
        // Update localStorage cart
        const localCart = JSON.parse(localStorage.getItem("cart") || "[]")
        const itemIndex = localCart.findIndex((item) => item.productId === productId)

        if (itemIndex >= 0) {
          localCart[itemIndex].quantity = quantity
          localStorage.setItem("cart", JSON.stringify(localCart))
          dispatch({ type: "CART_SUCCESS", payload: localCart })
        }
      }
    } catch (error) {
      console.error("Update quantity error:", error)
      dispatch({ type: "CART_ERROR", payload: "Failed to update quantity" })
      toast.error("Failed to update quantity")
    }
  }

  // Remove item from cart
  const removeFromCart = async (productId) => {
    try {
      dispatch({ type: "CART_LOADING" })

      if (isAuthenticated) {
        // Remove from server cart
        const response = await axios.delete("/cart", { data: { productId } })
        if (response.data.success) {
          dispatch({ type: "CART_SUCCESS", payload: response.data.cart })
          toast.success("Item removed from cart")
        }
      } else {
        // Remove from localStorage cart
        const localCart = JSON.parse(localStorage.getItem("cart") || "[]")
        const updatedCart = localCart.filter((item) => item.productId !== productId)
        localStorage.setItem("cart", JSON.stringify(updatedCart))
        dispatch({ type: "CART_SUCCESS", payload: updatedCart })
        toast.success("Item removed from cart")
      }
    } catch (error) {
      console.error("Remove from cart error:", error)
      dispatch({ type: "CART_ERROR", payload: "Failed to remove item" })
      toast.error("Failed to remove item")
    }
  }

  // Clear entire cart
  const clearCart = async () => {
    try {
      dispatch({ type: "CART_LOADING" })

      if (isAuthenticated) {
        // Clear server cart
        const response = await axios.delete("/cart", { data: { clearAll: true } })
        if (response.data.success) {
          dispatch({ type: "CART_SUCCESS", payload: [] })
        }
      } else {
        // Clear localStorage cart
        localStorage.removeItem("cart")
        dispatch({ type: "CART_SUCCESS", payload: [] })
      }

      toast.success("Cart cleared")
    } catch (error) {
      console.error("Clear cart error:", error)
      dispatch({ type: "CART_ERROR", payload: "Failed to clear cart" })
      toast.error("Failed to clear cart")
    }
  }

  const value = {
    ...state,
    addToCart,
    updateQuantity,
    removeFromCart,
    clearCart,
    loadCart,
  }

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

// Custom hook to use cart context
export const useCart = () => {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error("useCart must be used within a CartProvider")
  }
  return context
}

export default CartContext
