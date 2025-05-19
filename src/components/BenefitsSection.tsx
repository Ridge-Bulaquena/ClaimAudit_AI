
import React from 'react';
import { DollarSign, Activity, Users } from 'lucide-react';

const benefits = [
  {
    icon: <DollarSign className="h-8 w-8 text-primary" />,
    title: "Significant Cost Savings",
    description: "Reportedly save an average of 7-9% on claim payments by preventing inappropriate payouts.",
  },
  {
    icon: <Activity className="h-8 w-8 text-primary" />,
    title: "Enhanced Payment Integrity",
    description: "Ensure payments are accurate, appropriate, and adhere to policies and regulations.",
  },
  {
    icon: <Users className="h-8 w-8 text-primary" />,
    title: "Improved Operational Efficiency",
    description: "Automate detection and streamline review processes, reducing manual workload.",
  },
];

const BenefitsSection = () => {
  return (
    <section id="benefits" className="bg-card section-padding">
      <div className="container-readable">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">The ClaimAudit AI Advantage</h2>
          <p className="text-lg text-muted-foreground mt-2 max-w-2xl mx-auto">
            Transform your claim processing with tangible benefits for your organization.
          </p>
        </div>
        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-start space-x-4 p-6 rounded-lg ">
              <div className="flex-shrink-0 bg-primary/10 p-3 rounded-full">
                {benefit.icon}
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-1">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
