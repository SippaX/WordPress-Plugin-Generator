import React, { useState, useEffect } from 'react';
import { Box, Menu, X } from 'lucide-react';
import { Button } from './ui/Button';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass-high py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3 cursor-pointer group" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            {/* Stable Logo - Slightly Larger */}
            <div className="bg-white text-black p-1.5 rounded-lg shadow-[0_0_15px_rgba(255,255,255,0.3)]">
              <Box size={20} strokeWidth={3} />
            </div>
            <span className="text-xl font-bold tracking-tight text-white transition-colors">WPGen.</span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('how-it-works')} className="text-sm font-medium text-neutral-400 hover:text-white transition-colors">How it Works</button>
            <button onClick={() => scrollToSection('features')} className="text-sm font-medium text-neutral-400 hover:text-white transition-colors">Features</button>
            <button onClick={() => scrollToSection('comparison')} className="text-sm font-medium text-neutral-400 hover:text-white transition-colors">Comparison</button>
          </div>

          <div className="hidden md:flex items-center gap-4">
             <span className="text-neutral-400 text-sm font-medium">$29.99 Lifetime</span>
            <Button size="sm" variant="primary" onClick={() => scrollToSection('pricing')}>
              Get Started
            </Button>
          </div>

          <div className="md:hidden">
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-white">
              {mobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden glass absolute top-full left-0 right-0 p-4 border-b border-neutral-800">
           <div className="flex flex-col space-y-4">
            <button onClick={() => scrollToSection('how-it-works')} className="text-left text-neutral-300">How It Works</button>
            <button onClick={() => scrollToSection('features')} className="text-left text-neutral-300">Features</button>
            <button onClick={() => scrollToSection('comparison')} className="text-left text-neutral-300">Comparison</button>
            <button onClick={() => scrollToSection('pricing')} className="text-left text-neutral-300">Pricing</button>
            <Button variant="primary" className="w-full" onClick={() => scrollToSection('pricing')}>Get Started - $29.99</Button>
           </div>
        </div>
      )}
    </nav>
  );
};