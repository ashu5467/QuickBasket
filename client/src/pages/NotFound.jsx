import { Link } from "react-router-dom"
import { Helmet } from "react-helmet-async"

const NotFound = () => {
  return (
    <>
      <Helmet>
        <title>Page Not Found - Amazon.in</title>
        <meta name="description" content="The page you're looking for doesn't exist." />
      </Helmet>

      <div className="not-found-container">
        <div className="not-found-content">
          <h1>404</h1>
          <h2>Page Not Found</h2>
          <p>The page you're looking for doesn't exist.</p>
          <Link to="/" className="btn btn-primary">
            Go Home
          </Link>
        </div>
      </div>
    </>
  )
}

export default NotFound
