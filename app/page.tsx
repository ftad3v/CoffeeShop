"use client";
import BannerOffer from "./components/Banners/BannerOffer";
import BannerService from "./components/Banners/BannerService";
import Footer from "./components/Footer/Footer";
import Contact from "./components/Contact/Contact";
import Header from "./components/Header/Header";
import MidPageBanner from "./components/Banners/MidPageBanner";
import OnlineStore from "./components/Store/OnlineStore";
import PricingSection from "./components/Pricing/PricingSection";
import ServiceSection from "./components/Service/ServiceSection";

export default function Home() {
  return (
    <main className="w-full h-full font-Montserrat">
      <Header />
      <PricingSection />
      <MidPageBanner />
      <ServiceSection />
      <BannerService />
      <OnlineStore />
      <BannerOffer />
      <Contact />
      <Footer />
    </main>
  );
}
