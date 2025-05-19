
import React from 'react';
import { Target } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-card border-t border-border">
      <div className="container-readable py-8 text-center md:text-left">
        <div className="md:flex md:justify-between md:items-center">
          <div className="flex items-center justify-center md:justify-start space-x-2 mb-4 md:mb-0">
            <Target className="h-6 w-6 text-primary" />
            <span className="text-lg font-semibold text-foreground">ClaimAudit AI</span>
          </div>
          <p className="text-sm text-muted-foreground">
            &copy; {currentYear} ClaimAudit AI. All rights reserved.
          </p>
        </div>
        <div className="mt-4 text-xs text-muted-foreground/70 text-center">
          <p>Intelligent claim verification for sustainable healthcare costs.</p>
          {/* Dummy links for now */}
          {/* <nav className="mt-2 space-x-4">
            <a href="/privacy" className="hover:text-primary">Privacy Policy</a>
            <a href="/terms" className="hover:text-primary">Terms of Service</a>
          </nav> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
