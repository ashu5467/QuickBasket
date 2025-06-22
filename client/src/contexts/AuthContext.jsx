"use client"

import { createContext, useContext, useReducer, useEffect } from "react"
import axios from "axios"
import toast from "react-hot-toast"

const AuthContext = createContext()

// Initial state
const initialState = {
  user: null,
  isAuthenticated: false,
  loading: true,
  error: null,
}

// Auth reducer
const authReducer = (state, action) => {
  switch (action.type) {
    case "AUTH_START":
      return {
        ...state,
        loading: true,
        error: null,
      }
    case "AUTH_SUCCESS":
      return {
        ...state,
        user: action.payload,
        isAuthenticated: true,
        loading: false,
        error: null,
      }
    case "AUTH_FAIL":
      return {
        ...state,
        user: null,
        isAuthenticated: false,
        loading: false,
        error: action.payload,
      }
    case "LOGOUT":
      return {
        ...state,
        user: null,
        isAuthenticated: false,
        loading: false,
        error: null,
      }
    case "CLEAR_ERROR":
      return {
        ...state,
        error: null,
      }
    default:
      return state
  }
}

// Auth Provider
export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState)

  // Configure axios defaults
  useEffect(() => {
    axios.defaults.baseURL = import.meta.env.VITE_API_URL || "/api"
    axios.defaults.withCredentials = true
  }, [])

  // Check if user is logged in on app start
  useEffect(() => {
    checkAuth()
  }, [])

  // Check authentication status
  const checkAuth = async () => {
    try {
      const response = await axios.get("/auth/me")
      if (response.data.success) {
        dispatch({
          type: "AUTH_SUCCESS",
          payload: response.data.user,
        })
      }
    } catch (error) {
      dispatch({ type: "AUTH_FAIL", payload: null })
    }
  }

  // Login function
  const login = async (email, password) => {
    try {
      dispatch({ type: "AUTH_START" })

      const response = await axios.post("/auth/login", {
        email,
        password,
      })

      if (response.data.success) {
        dispatch({
          type: "AUTH_SUCCESS",
          payload: response.data.user,
        })
        toast.success("Login successful!")
        return { success: true }
      }
    } catch (error) {
      const message = error.response?.data?.message || "Login failed"
      dispatch({
        type: "AUTH_FAIL",
        payload: message,
      })
      toast.error(message)
      return { success: false, error: message }
    }
  }

  // Register function
  const register = async (name, email, password) => {
    try {
      dispatch({ type: "AUTH_START" })

      const response = await axios.post("/auth/register", {
        name,
        email,
        password,
      })

      if (response.data.success) {
        dispatch({
          type: "AUTH_SUCCESS",
          payload: response.data.user,
        })
        toast.success("Registration successful!")
        return { success: true }
      }
    } catch (error) {
      const message = error.response?.data?.message || "Registration failed"
      dispatch({
        type: "AUTH_FAIL",
        payload: message,
      })
      toast.error(message)
      return { success: false, error: message }
    }
  }

  // Logout function
  const logout = async () => {
    try {
      await axios.post("/auth/logout")
      dispatch({ type: "LOGOUT" })
      toast.success("Logged out successfully")
    } catch (error) {
      console.error("Logout error:", error)
      dispatch({ type: "LOGOUT" })
    }
  }

  // Update profile
  const updateProfile = async (userData) => {
    try {
      const response = await axios.put("/auth/profile", userData)

      if (response.data.success) {
        dispatch({
          type: "AUTH_SUCCESS",
          payload: response.data.user,
        })
        toast.success("Profile updated successfully")
        return { success: true }
      }
    } catch (error) {
      const message = error.response?.data?.message || "Update failed"
      toast.error(message)
      return { success: false, error: message }
    }
  }

  // Clear error
  const clearError = () => {
    dispatch({ type: "CLEAR_ERROR" })
  }

  const value = {
    ...state,
    login,
    register,
    logout,
    updateProfile,
    clearError,
    checkAuth,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

// Custom hook to use auth context
export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}

export default AuthContext
