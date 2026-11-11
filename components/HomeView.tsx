"use client";

import { Product } from "@/lib/types";
import HeroSection from "@/components/HeroSection";
import ProductsFeature from "@/components/ProductsFeature";
import PhilosophySection from "@/components/PhilosophySection";
import JourneySection from "@/components/JourneySection";
import BakerySection from "@/components/BakerySection";
import B2BSection from "@/components/B2BSection";
import StorySection from "@/components/StorySection";
import QualitySection from "@/components/QualitySection";
import NewsletterSection from "@/components/NewsletterSection";
import Footer from "@/components/Footer";
import StickyOrderBar from "@/components/StickyOrderBar";

const PHONE = "+976 9911 2233";

export default function HomeView({ products }: { products: Product[] }) {
  return (
    <main>
      <HeroSection />
      <ProductsFeature products={products} />
      <PhilosophySection />
      <JourneySection />
      <BakerySection />
      <B2BSection />
      <StorySection />
      <QualitySection />
      <NewsletterSection />
      <Footer />
      <StickyOrderBar phone={PHONE} />
    </main>
  );
}
