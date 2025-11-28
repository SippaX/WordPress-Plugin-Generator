import React from 'react';
import { Button } from './ui/Button';
import { WifiOff, Zap, Download } from 'lucide-react';

export const Hero = () => {
  return (
    <div className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Abstract Background Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-purple-900/20 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-20 right-0 w-[300px] h-[300px] bg-blue-900/10 blur-[100px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-300 text-xs font-bold tracking-wide uppercase mb-8 backdrop-blur-sm animate-fade-in-up">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
          </span>
          Lifetime Deal Active
        </div>

        {/* Headlines */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-neutral-500 mb-6">
          Skip the Setup.<br />
          <span className="text-white">Start Developing.</span>
        </h1>
        
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-neutral-400 mb-10 leading-relaxed">
          The Ultimate Offline Scaffolding Tool. Generate a Professional, Object-Oriented WordPress Plugin Foundation in Seconds.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
          {/* Hero Button: Opens in New Tab */}
          <Button 
            size="lg" 
            icon 
            href="https://sippa.gumroad.com/l/wp-plugin-generator"
            target="_blank"
          >
            Buy Once - $29.99
          </Button>
          <Button size="lg" variant="secondary" onClick={() => document.getElementById('how-it-works')?.scrollIntoView({behavior: 'smooth'})}>
            See How It Works
          </Button>
        </div>

        {/* Feature Pills */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-8 text-sm font-medium text-neutral-500">
          <div className="flex items-center gap-2">
            <WifiOff size={16} />
            <span>100% Offline</span>
          </div>
          <div className="flex items-center gap-2">
            <Zap size={16} />
            <span>Instant Export</span>
          </div>
          <div className="flex items-center gap-2">
            <Download size={16} />
            <span>No Dependencies</span>
          </div>
        </div>
      </div>
    </div>
  );
};