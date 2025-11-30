import React from 'react';
import { Check, CheckCircle2 } from 'lucide-react';
import { Button } from './ui/Button';
import { SectionHeading } from './ui/SectionHeading';

export const Pricing = () => {
  return (
    <section id="pricing" className="py-32 relative overflow-hidden bg-[#030303]">
        {/* Background Atmosphere */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[500px] bg-gradient-to-t from-indigo-900/10 via-indigo-950/5 to-transparent pointer-events-none blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-indigo-500/5 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        <SectionHeading 
          badge="Pricing"
          title="Simple, Transparent Pricing"
          subtitle="Pay once, generate forever. No recurring fees."
        />

        {/* Pricing Card Container */}
        <div className="relative inline-block max-w-[500px] w-full group perspective-1000 mt-12">
            
            {/* The Gradient Border - Animated & Premium */}
            <div className="absolute inset-0 rounded-[32px] p-[1px] bg-gradient-to-b from-indigo-500 via-indigo-500/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500" style={{
                maskImage: 'linear-gradient(to bottom, black, black)',
                WebkitMaskImage: 'linear-gradient(to bottom, black, black)'
            }}></div>
            
            {/* Top Glow Beam - Breathing */}
            <div className="absolute -top-[1px] left-1/2 -translate-x-1/2 w-3/4 h-[2px] bg-gradient-to-r from-transparent via-indigo-400 to-transparent shadow-[0_0_25px_rgba(99,102,241,1)] z-20 animate-pulse-slow"></div>

            <div className="relative rounded-[32px] overflow-hidden bg-[#050505] shadow-[0_30px_60px_-15px_rgba(0,0,0,1)] ring-1 ring-white/5">
                
                {/* Internal Glossy Reflection */}
                <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-50"></div>
                
                <div className="rounded-[30px] p-8 sm:p-10 md:p-12 relative overflow-hidden flex flex-col items-center">
                    
                    {/* Subtle Spotlight Background in Card */}
                    <div className="absolute -top-[150px] left-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-indigo-500/10 blur-[90px] pointer-events-none mix-blend-screen" />

                    <div className="relative z-10 w-full">
                        
                        {/* Price Tag */}
                        <div className="flex flex-col items-center justify-center mb-4">
                             <div className="flex items-baseline gap-1 relative">
                                <span className="absolute -inset-4 bg-indigo-500/20 blur-2xl rounded-full"></span>
                                <span className="text-6xl sm:text-7xl font-bold text-white tracking-tighter relative z-10 drop-shadow-[0_2px_10px_rgba(255,255,255,0.2)]">$29.99</span>
                                <span className="text-neutral-500 font-medium text-lg relative z-10">/ lifetime</span>
                             </div>
                        </div>
                        
                        <div className="inline-flex items-center justify-center px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-semibold mb-10">
                            Launch Discount • Regular $59.99
                        </div>
                        
                        {/* Pricing Button */}
                        <div className="mb-10 w-full flex justify-center">
                            <Button 
                                href="https://sippa.gumroad.com/l/wp-plugin-generator"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full sm:w-auto min-w-[280px] text-base py-4 font-bold tracking-wide shadow-[0_0_30px_-5px_rgba(99,102,241,0.3)] hover:shadow-[0_0_40px_-5px_rgba(99,102,241,0.5)]"
                                size="lg"
                                icon
                            >
                                Buy on Gumroad
                            </Button>
                        </div>

                        {/* Divider */}
                        <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8"></div>

                        {/* Features List */}
                        <div className="space-y-5 text-left w-full px-2 sm:px-6">
                            {[
                                "No Licensing Restrictions",
                                "Unlimited Plugin Generation",
                                "No Monthly Fees",
                                "Offline Capability",
                                "Full Source Code Ownership"
                            ].map((feature, i) => (
                                <div key={i} className="flex items-center gap-4 group/item">
                                    <div className="shrink-0 w-6 h-6 rounded-full bg-indigo-500/10 flex items-center justify-center border border-indigo-500/30 text-indigo-400 shadow-[0_0_10px_rgba(99,102,241,0.1)] group-hover/item:bg-indigo-500 group-hover/item:text-white group-hover/item:shadow-[0_0_15px_rgba(99,102,241,0.5)] transition-all duration-300">
                                        <Check size={14} strokeWidth={3} />
                                    </div>
                                    <span className="text-neutral-300 font-medium text-sm sm:text-base group-hover/item:text-white transition-colors">{feature}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <p className="mt-12 text-neutral-500 text-xs md:text-sm max-w-lg mx-auto leading-relaxed">
            Instant digital download with a secure link, including full tool files and instructions. Get started in seconds.
        </p>
      </div>
    </section>
  );
};