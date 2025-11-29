import React from 'react';
import { CheckCircle2 } from 'lucide-react';
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
        <div className="relative inline-block max-w-lg w-full group perspective-1000 mt-12">
            
            {/* The Gradient Border - Top Middle Start fading out to sides */}
            <div className="absolute inset-0 rounded-[32px] p-[1px] bg-gradient-to-b from-indigo-500 via-indigo-500/10 to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-500" style={{
                maskImage: 'linear-gradient(to bottom, black, black)',
                WebkitMaskImage: 'linear-gradient(to bottom, black, black)'
            }}></div>
            
            {/* Top Glow Line - Brighter */}
            <div className="absolute -top-px left-1/2 -translate-x-1/2 w-1/2 h-[2px] bg-gradient-to-r from-transparent via-indigo-400 to-transparent shadow-[0_0_20px_rgba(99,102,241,0.8)] z-20"></div>

            <div className="relative rounded-[32px] overflow-hidden bg-[#080808] shadow-[0_20px_50px_-12px_rgba(0,0,0,1)]">
                <div className="rounded-[30px] p-10 md:p-12 relative overflow-hidden">
                    
                    {/* Subtle Spotlight Background in Card */}
                    <div className="absolute top-[-100px] left-1/2 -translate-x-1/2 w-[300px] h-[300px] bg-indigo-500/10 blur-[80px] pointer-events-none" />

                    <div className="relative z-10">
                        <div className="flex justify-center items-baseline gap-1 mb-2">
                            <span className="text-6xl font-bold text-white tracking-tighter">$29.99</span>
                            <span className="text-neutral-500 font-medium">/ lifetime</span>
                        </div>
                        <p className="text-neutral-400 mb-10 text-sm font-medium">Launch discount (Regular $59.99)</p>
                        
                        {/* Pricing Button: Opens in New Tab (Simple Link) */}
                        <div className="mb-10 flex justify-center">
                            <Button 
                                href="https://sippa.gumroad.com/l/wp-plugin-generator"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="min-w-[260px] text-base py-4 font-semibold tracking-wide"
                                size="lg"
                                icon
                            >
                                Buy on Gumroad
                            </Button>
                        </div>

                        <div className="space-y-4 text-left border-t border-white/5 pt-8">
                            {[
                                "No Licensing Restrictions",
                                "Unlimited Plugin Generation",
                                "No Monthly Fees",
                                "Offline Capability",
                                "Full Source Code Ownership"
                            ].map((feature, i) => (
                                <div key={i} className="flex items-center gap-3 group/item">
                                    <div className="text-indigo-500 group-hover/item:text-indigo-400 transition-colors">
                                        <CheckCircle2 size={20} />
                                    </div>
                                    <span className="text-neutral-300 font-medium">{feature}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <p className="mt-10 text-neutral-500 text-xs md:text-sm max-w-lg mx-auto leading-relaxed">
            Instant digital download with a secure link, including full tool files and instructions. Get started in seconds.
        </p>
      </div>
    </section>
  );
};