
import React from 'react';
import { Button } from "@/components/ui/button";
import { Zap } from 'lucide-react'; // Icon for "Intelligent"

const HeroSection = () => {
  return (
    <section className="bg-card section-padding">
      <div className="container-readable text-center">
        <Zap className="mx-auto h-12 w-12 text-primary mb-4" />
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground mb-6">
          ClaimAudit AI
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
          Intelligent claim verification for sustainable healthcare costs.
        </p>
        <p className="text-lg text-foreground mb-10 max-w-2xl mx-auto">
          Leverage advanced machine learning to detect inappropriate billing, upcoding, and duplicate services, saving an average of 7-9% on claim payments.
        </p>
        <div className="space-x-4">
          <Button size="lg">Request a Demo</Button>
          <Button size="lg" variant="outline">Learn More</Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
