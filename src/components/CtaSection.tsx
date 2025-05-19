
import React from 'react';
import { Button } from "@/components/ui/button";

const CtaSection = () => {
  return (
    <section id="contact" className="bg-primary section-padding">
      <div className="container-readable text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
          Ready to Revolutionize Your Claim Auditing?
        </h2>
        <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
          Discover how ClaimAudit AI can deliver substantial savings and enhance payment integrity for your organization.
        </p>
        <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-gray-100">
          Request a Personalized Demo
        </Button>
      </div>
    </section>
  );
};

export default CtaSection;
