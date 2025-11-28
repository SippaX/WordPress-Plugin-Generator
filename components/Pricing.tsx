import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { Button } from './ui/Button';

export const Pricing = () => {
  return (
    <section id="pricing" className="py-32 relative overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[400px] bg-gradient-to-t from-indigo-900/20 to-transparent pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Simple, Transparent Pricing</h2>
        <p className="text-neutral-400 text-lg mb-12">Pay once, generate forever. No recurring fees.</p>

        {/* Pricing Card Container */}
        <div className="relative inline-block max-w-lg w-full group">
            
            {/* The Gradient Border - Top Middle Start fading out to sides */}
            <div className="absolute inset-0 rounded-[32px] p-[1px] bg-gradient-to-b from-indigo-500 via-white/10 to-white/5 opacity-80 mask-border" style={{
                maskImage: 'linear-gradient(to bottom, black, black)',
                WebkitMaskImage: 'linear-gradient(to bottom, black, black)'
            }}></div>
            
            {/* Top Glow Line */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-indigo-500 to-transparent shadow-[0_0_15px_rgba(99,102,241,0.5)] z-20"></div>

            <div className="relative glass rounded-[32px] overflow-hidden bg-neutral-900 shadow-[0_0_50px_rgba(79,70,229,0.15)]">
                <div className="bg-[#0f0f0f]/90 rounded-[28px] p-8 md:p-12 relative overflow-hidden">
                    
                    {/* Subtle Spotlight Background in Card */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1/2 bg-indigo-500/5 blur-[60px] pointer-events-none" />

                    <div className="relative z-10">
                        <div className="flex justify-center items-baseline gap-1 mb-2">
                            <span className="text-5xl font-bold text-white">$29.99</span>
                            <span className="text-neutral-500">/ lifetime</span>
                        </div>
                        <p className="text-neutral-400 mb-8 text-sm">Launch discount (Regular $59.99)</p>
                        
                        {/* Pricing Button: Opens in New Tab (Simple Link) */}
                        <div className="mb-8 flex justify-center">
                            <Button 
                                href="https://sippa.gumroad.com/l/wp-plugin-generator"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="min-w-[240px] text-base py-4"
                                size="lg"
                                icon
                            >
                                Buy on Gumroad
                            </Button>
                        </div>

                        <div className="space-y-4 text-left">
                            {[
                                "No Licensing Restrictions",
                                "Unlimited Plugin Generation",
                                "No Monthly Fees",
                                "Offline Capability",
                                "Full Source Code Ownership"
                            ].map((feature, i) => (
                                <div key={i} className="flex items-center gap-3">
                                    <CheckCircle2 className="text-indigo-500 flex-shrink-0" size={20} />
                                    <span className="text-neutral-300">{feature}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <p className="mt-8 text-neutral-500 text-sm max-w-lg mx-auto leading-relaxed">
            Instant digital download with a secure link, including full tool files and instructions. Get started in seconds.
        </p>
      </div>
    </section>
  );
};