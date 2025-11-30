import React from 'react';
import { SectionHeading } from './ui/SectionHeading';
import { Check, X } from 'lucide-react';

export const Comparison = () => {
  return (
    <section id="comparison" className="py-24 bg-[#050505] relative overflow-hidden">
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading 
            badge="Versus"
            title="The Ultimate Scaffolding Tool"
            subtitle="Most generators just give you empty files. We give you a production-ready foundation."
        />

        {/* Comparison Grid: items-stretch ensures equal height */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16 items-stretch">
            
            {/* Competitors (WPPB) - "Recessed/Muted" Look */}
            <div className="h-full rounded-[30px] border border-white/5 bg-[#080808] flex flex-col relative overflow-hidden group hover:border-white/10 transition-colors duration-500">
                <div className="p-8 pb-6 border-b border-white/5 relative z-10 bg-white/[0.01]">
                    <h3 className="text-xl font-bold text-neutral-500">Basic Generators</h3>
                    <p className="text-sm text-neutral-600 mt-1 font-medium">(e.g., wppb.me)</p>
                </div>
                
                <div className="p-8 pt-6 flex-1 bg-white/[0.005]">
                    <ul className="space-y-6">
                        {[
                            { title: "Just a Skeleton", desc: "Only generates folder structure & empty files." },
                            { title: "Manual Setup Required", desc: "You must type out all hooks, menus, and functions yourself." },
                            { title: "Blind Configuration", desc: "No UI to preview how menus or settings will look." },
                            { title: "Online Only", desc: "Requires internet connection to generate." },
                            { title: "Outdated Practices", desc: "Often uses older procedural patterns or generic naming." },
                            { title: "Empty Logic", desc: "Files are completely blank inside." }
                        ].map((item, idx) => (
                             <li key={idx} className="flex items-start gap-4 opacity-60 hover:opacity-100 transition-opacity duration-300">
                                <div className="p-1 rounded-full bg-red-500/10 text-red-500/80 mt-0.5 shrink-0"><X size={14} strokeWidth={3} /></div>
                                <div>
                                    <span className="block text-neutral-300 font-medium text-base">{item.title}</span>
                                    <span className="text-sm text-neutral-600 leading-snug">{item.desc}</span>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* Our Tool - "Elevated/Premium" Look */}
            <div className="h-full p-[1px] rounded-[30px] bg-gradient-to-b from-indigo-500 via-indigo-500/20 to-transparent relative shadow-[0_20px_60px_-15px_rgba(79,70,229,0.15)] flex flex-col">
                <div className="h-full bg-[#0c0c0c] rounded-[29px] flex flex-col relative overflow-hidden">
                    
                    {/* Top Shine */}
                    <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-indigo-500/10 to-transparent pointer-events-none"></div>

                    {/* Badge - Positioned to not overlap text on mobile */}
                    <div className="absolute top-4 right-4 md:top-6 md:right-6 z-20">
                         <span className="bg-indigo-600 text-white text-[10px] md:text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-[0_0_15px_rgba(79,70,229,0.4)] border border-indigo-400/50">
                             Superior Choice
                         </span>
                    </div>

                    {/* Header - Added extra padding-right on mobile to clear badge */}
                    <div className="p-8 pb-6 border-b border-white/10 relative z-10 bg-indigo-500/[0.03]">
                        <h3 className="text-2xl font-bold text-white pr-20 md:pr-0">WP Plugin Generator</h3>
                        <p className="text-sm text-indigo-400 mt-1 font-medium">Professional Plugin Architecture</p>
                    </div>

                    <div className="p-8 pt-6 flex-1">
                        <ul className="space-y-6 relative z-10">
                             {[
                                { title: "Production-Ready Scaffold", desc: "Generates code that is structured, commented, and ready to extend." },
                                { title: "Visual Boilerplate Config", desc: "Visually setup menus & constants before generating code." },
                                { title: "100% Offline", desc: "Download once, use forever without internet." },
                                { title: "Modern Architecture", desc: "Object-oriented structure using strict types and namespaces." },
                                { title: "Smart Conflict Prevention", desc: "Automatically namespaces everything to avoid errors." },
                                { title: "Pre-Filled Examples", desc: "Files include working example code so you know where to start." }
                            ].map((item, idx) => (
                                 <li key={idx} className="flex items-start gap-4 group/item">
                                    <div className="p-1 rounded-full bg-green-500/20 text-green-400 mt-0.5 shrink-0 shadow-[0_0_10px_rgba(74,222,128,0.2)] group-hover/item:scale-110 transition-transform">
                                        <Check size={14} strokeWidth={4} />
                                    </div>
                                    <div>
                                        <span className="block text-white font-bold text-base">{item.title}</span>
                                        <span className="text-sm text-neutral-400 leading-snug group-hover/item:text-neutral-300 transition-colors">{item.desc}</span>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

        </div>
      </div>
    </section>
  );
};