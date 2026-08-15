import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import HeroBanner from "../../components/HeroBanner/HeroBanner";
import ProductGrid from "../../components/ProductGrid/ProductGrid";
import ServicesSection from "../../components/ServicesSection/ServicesSection";
import FeaturedPosts from "../../components/FeaturedPosts/FeaturedPosts";
import Testimonials from "../../components/Testimonials/Testimonials";
import CTABanner from "../../components/CTABanner/CTABanner";
import "./Home.css";

export default function Home() {

    const location = useLocation();

    useEffect(() => {
    if (location.hash) {
      const target = document.querySelector(location.hash);
      target?.scrollIntoView({ behavior: "smooth" });
    } else {
      window.scrollTo({ top: 0 });
    }
  }, [location]);

  return (
    <div className="home">
      <HeroBanner />

      <section className="bestsellers container">
        <p className="bestsellers__eyebrow">Featured Products</p>
        <h2 className="bestsellers__title">Bestseller Products</h2>
        <p className="bestsellers__subtitle">Problems trying to resolve the conflict between</p>
        <ProductGrid limit={10} showLoadMore />
      </section>

      <ServicesSection />
      <FeaturedPosts />
      <Testimonials />
      <CTABanner />
    </div>
  );
}
