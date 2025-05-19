
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, TrendingUp, ShieldAlert } from 'lucide-react';

const features = [
  {
    icon: <ShieldAlert className="h-10 w-10 text-primary mb-4" />,
    title: "Advanced Fraud Detection",
    description: "Our ML models identify complex fraud patterns, upcoding, and duplicate services with high accuracy.",
  },
  {
    icon: <CheckCircle className="h-10 w-10 text-primary mb-4" />,
    title: "Real-Time Claim Verification",
    description: "Automatically flag suspicious claims for review *before* payment, minimizing losses and recovery efforts.",
  },
  {
    icon: <TrendingUp className="h-10 w-10 text-primary mb-4" />,
    title: "Predictive Analytics",
    description: "Identify providers with outlier billing patterns and proactively manage risk across your network.",
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="bg-background section-padding">
      <div className="container-readable">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Uncover Savings, Ensure Integrity</h2>
          <p className="text-lg text-muted-foreground mt-2 max-w-2xl mx-auto">
            ClaimAudit AI empowers you with cutting-edge tools to protect your bottom line.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <div className="flex justify-center">{feature.icon}</div>
                <CardTitle className="text-2xl font-semibold text-foreground">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
