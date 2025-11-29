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
      // Offset for fixed header
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
        isScrolled 
          ? 'bg-[#050505]/80 backdrop-blur-xl border-b border-white/5 py-3 shadow-[0_4px_30px_rgba(0,0,0,0.5)]' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center relative">
          
          {/* Logo Section - Matched to Footer Size */}
          <div 
            className="flex items-center gap-2.5 cursor-pointer select-none relative z-10 group" 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            {/* Icon Container */}
            <div className={`
              bg-white text-black rounded-[6px] flex items-center justify-center transition-all duration-300 shadow-[0_0_15px_rgba(255,255,255,0.15)]
              ${isScrolled ? 'w-8 h-8' : 'w-9 h-9'}
            `}>
              <Box size={isScrolled ? 18 : 20} strokeWidth={2.5} />
            </div>
            
            {/* Text Brand */}
            <span className={`font-bold tracking-tight text-white transition-all duration-300 ${isScrolled ? 'text-lg' : 'text-xl'}`}>
              WPGen<span className="text-white">.</span>
            </span>
          </div>

          {/* Centered Desktop Navigation - The Modern Pill */}
          <div className={`
            hidden md:flex items-center gap-1 absolute left-1/2 -translate-x-1/2
            transition-all duration-500 ease-out
            ${isScrolled 
              ? 'bg-white/5 border border-white/5 rounded-full p-1 backdrop-blur-md shadow-lg translate-y-0 opacity-100' 
              : 'translate-y-0 opacity-100'
            }
          `}>
            {[
              { id: 'how-it-works', label: 'How it Works' },
              { id: 'features', label: 'Features' },
              { id: 'comparison', label: 'Comparison' }
            ].map((item) => (
              <button 
                key={item.id}
                onClick={() => scrollToSection(item.id)} 
                className={`
                  px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-300
                  ${isScrolled 
                    ? 'text-neutral-400 hover:text-white hover:bg-white/10' 
                    : 'text-neutral-300 hover:text-white hover:bg-white/5'
                  }
                `}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Right Side Actions */}
          <div className="hidden md:flex items-center gap-6 relative z-10">
             <span className={`
               text-[10px] font-bold text-neutral-500 transition-all duration-500 tracking-widest uppercase
               ${isScrolled ? 'opacity-0 -translate-x-4 pointer-events-none hidden lg:block' : 'opacity-100'}
             `}>
                $29.99 Lifetime
             </span>
            <Button 
              size={isScrolled ? "sm" : "md"} 
              variant="primary" 
              onClick={() => scrollToSection('pricing')}
              className={`transition-all duration-300 ${isScrolled ? 'text-xs px-4 py-1.5' : 'text-sm px-6 py-2.5'}`}
            >
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-white p-2 hover:bg-white/10 rounded-lg transition-colors">
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div className={`
        md:hidden fixed inset-x-4 top-[70px] transition-all duration-300 origin-top z-40
        ${mobileMenuOpen ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 -translate-y-4 pointer-events-none'}
      `}>
        <div className="bg-[#0a0a0a]/95 backdrop-blur-xl border border-white/10 rounded-2xl p-2 shadow-2xl flex flex-col gap-1 ring-1 ring-black/50">
           {[
             { id: 'how-it-works', label: 'How it Works' },
             { id: 'features', label: 'Features' },
             { id: 'comparison', label: 'Comparison' },
             { id: 'pricing', label: 'Pricing' }
           ].map((item) => (
             <button 
               key={item.id}
               onClick={() => scrollToSection(item.id)} 
               className="text-left px-4 py-3 rounded-xl hover:bg-white/10 text-neutral-300 hover:text-white transition-all font-medium text-sm"
             >
               {item.label}
             </button>
           ))}
           <div className="h-px bg-white/5 my-2 mx-2"></div>
           <Button variant="primary" className="w-full justify-center text-sm" onClick={() => scrollToSection('pricing')}>
             Get Started - $29.99
           </Button>
        </div>
      </div>
    </nav>
  );
};