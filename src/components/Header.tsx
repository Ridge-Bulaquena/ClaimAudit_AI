
import React from 'react';
import { Button } from "@/components/ui/button"; // Assuming this is a shadcn/ui button
import { Target } from 'lucide-react'; // Icon for ClaimAudit AI

const Header = () => {
  return (
    <header className="bg-card shadow-sm sticky top-0 z-50">
      <div className="container-readable h-20 flex items-center justify-between">
        <a href="/" className="flex items-center space-x-2">
          <Target className="h-8 w-8 text-primary" />
          <span className="text-2xl font-bold text-foreground">ClaimAudit AI</span>
        </a>
        <nav className="flex items-center space-x-4">
          {/* <a href="#features" className="text-foreground hover:text-primary transition-colors">Features</a>
          <a href="#benefits" className="text-foreground hover:text-primary transition-colors">Benefits</a>
          <a href="#contact" className="text-foreground hover:text-primary transition-colors">Contact</a> */}
          <Button>Request a Demo</Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
