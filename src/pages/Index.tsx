
import React from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import FeaturesSection from '@/components/FeaturesSection';
import BenefitsSection from '@/components/BenefitsSection';
import CtaSection from '@/components/CtaSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <FeaturesSection />
        <BenefitsSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
