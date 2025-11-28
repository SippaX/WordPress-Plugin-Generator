import React from 'react';
import { Box } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="border-t border-white/5 bg-black py-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Left: Brand */}
        <div className="flex items-center gap-2">
            <div className="bg-neutral-800 text-white p-1.5 rounded-lg">
              <Box size={20} />
            </div>
            <span className="text-xl font-bold text-neutral-300">WPGen.</span>
        </div>

        {/* Center: Copyright (Absolute centered on desktop for perfect balance) */}
        <div className="text-neutral-500 text-sm md:absolute md:left-1/2 md:-translate-x-1/2 order-3 md:order-2">
            © 2025 WP Plugin Generator. All rights reserved.
        </div>

        {/* Right: Developer Credit */}
        <div className="text-neutral-500 text-sm order-2 md:order-3">
            Developed by <a href="https://www.linkedin.com/in/ahmad-salar/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-indigo-400 transition-colors font-medium">Ahmad Salar</a>
        </div>
      </div>
    </footer>
  );
};