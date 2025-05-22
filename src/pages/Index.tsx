import { Hero } from "@/components/home/Hero";
import { ProductCarousel } from "@/components/home/ProductCarousel";
import { ProductGrid } from "@/components/home/ProductGrid";
import { Testimonials } from "@/components/home/Testimonials";
import { Features } from "@/components/home/Features";
import FAQSection from "@/components/home/FAQSection";
import { SocialMedia } from "@/components/home/SocialMedia";
import { ArticlesPreview } from "@/components/home/ArticlesPreview";
import DuckyDifference from "@/components/home/DuckyDifference";
import FeaturedProduct from "@/components/home/FeaturedProduct";
import { TestimonialScroller } from "@/components/home/TestimonialScroller";
import { ComingSoon } from "@/components/home/ComingSoon";
import StoreCTA from "@/components/home/StoreCTA";
import HowToEnjoy from "@/components/home/HowToEnjoy";
import SuggestLocation from "@/components/home/SuggestLocation";
import QuackOneOpen from "@/components/home/QuackOneOpen";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <DuckyDifference />
      <HowToEnjoy />
      {/* <FeaturedProduct /> */}
      {/* <ProductCarousel /> */}
      {/* <ProductGrid /> */}
      {/* <TestimonialScroller /> */}
      {/* <ComingSoon /> */}
      <Features />
      <QuackOneOpen />
      <SuggestLocation />
      <ArticlesPreview />
      <FAQSection />
      {/* <Testimonials /> */}
      <StoreCTA />
    </main>
  );
};

export default Index;
