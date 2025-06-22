import { Helmet } from "react-helmet-async"
import HeroSection from "../components/Home/HeroSection"
import Categories from "../components/Home/Categories"
import FeaturedProducts from "../components/Home/FeaturedProducts"
import DealsSection from "../components/Home/DealsSection"
import "./Home.css"

const Home = () => {
  return (
    <>
      <Helmet>
        <title>
          Amazon.in - Online Shopping India - Buy mobiles, laptops, cameras, books, watches, apparel, shoes and e-Gift
          Cards. Free Shipping & Cash on Delivery Available.
        </title>
        <meta
          name="description"
          content="Amazon.in: Online Shopping India - Buy mobiles, laptops, cameras, books, watches, apparel, shoes and e-Gift Cards. Free Shipping & Cash on Delivery Available."
        />
      </Helmet>

      <div className="home">
        <HeroSection />
        <Categories />
        <FeaturedProducts />
        <DealsSection />
      </div>
    </>
  )
}

export default Home
