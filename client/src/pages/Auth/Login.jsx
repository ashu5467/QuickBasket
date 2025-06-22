"use client"

import { useState, useEffect } from "react"
import { Link, useNavigate, useLocation } from "react-router-dom"
import { useForm } from "react-hook-form"
import { Helmet } from "react-helmet-async"
import { useAuth } from "../../contexts/AuthContext"
import "./Auth.css"

const Login = () => {
  const [isLoading, setIsLoading] = useState(false)
  const { login, isAuthenticated } = useAuth()
  const navigate = useNavigate()
  const location = useLocation()

  const from = location.state?.from?.pathname || "/"

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  useEffect(() => {
    if (isAuthenticated) {
      navigate(from, { replace: true })
    }
  }, [isAuthenticated, navigate, from])

  const onSubmit = async (data) => {
    setIsLoading(true)
    const result = await login(data.email, data.password)
    setIsLoading(false)

    if (result.success) {
      navigate(from, { replace: true })
    }
  }

  return (
    <>
      <Helmet>
        <title>Amazon Sign In</title>
        <meta name="description" content="Sign in to your Amazon account" />
      </Helmet>

      <div className="auth-container">
        <div className="auth-card">
          <div className="auth-header">
            <Link to="/" className="auth-logo">
              amazon.in
            </Link>
            <h1>Sign in to your account</h1>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="auth-form">
            <div className="form-group">
              <label htmlFor="email">Email address</label>
              <input
                id="email"
                type="email"
                className={`form-input ${errors.email ? "error" : ""}`}
                placeholder="Enter your email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
                    message: "Please enter a valid email",
                  },
                })}
              />
              {errors.email && <span className="form-error">{errors.email.message}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                id="password"
                type="password"
                className={`form-input ${errors.password ? "error" : ""}`}
                placeholder="Enter your password"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters",
                  },
                })}
              />
              {errors.password && <span className="form-error">{errors.password.message}</span>}
            </div>

            <button type="submit" className="btn btn-primary auth-submit" disabled={isLoading}>
              {isLoading ? "Signing in..." : "Sign in"}
            </button>
          </form>

          <div className="auth-footer">
            <p>
              Don't have an account?{" "}
              <Link to="/register" className="auth-link">
                Create your Amazon account
              </Link>
            </p>
          </div>

          <div className="auth-terms">
            <p>By signing in, you agree to Amazon's</p>
            <div>
              <Link to="/conditions">Conditions of Use</Link> & <Link to="/privacy">Privacy Notice</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login
