import React from 'react';
import { SectionHeading } from './ui/SectionHeading';
import { Check, X } from 'lucide-react';

export const Comparison = () => {
  return (
    <section id="comparison" className="py-24 bg-neutral-900/20 border-y border-white/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
            badge="Versus"
            title="The Ultimate Scaffolding Tool"
            subtitle="Most generators just give you empty files. We give you a production-ready foundation."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            
            {/* Competitors (WPPB) */}
            <div className="p-8 rounded-2xl border border-white/5 bg-neutral-900/30 opacity-80 flex flex-col">
                <div className="mb-8 border-b border-white/5 pb-6">
                    <h3 className="text-xl font-bold text-neutral-400">Basic Generators</h3>
                    <p className="text-sm text-neutral-500 mt-1">(e.g., wppb.me)</p>
                </div>
                
                <ul className="space-y-6 flex-1">
                    <li className="flex items-start gap-4">
                        <div className="p-1 rounded-full bg-red-900/30 text-red-500 mt-0.5"><X size={16} /></div>
                        <div>
                            <span className="block text-white font-medium">Just a Skeleton</span>
                            <span className="text-sm text-neutral-500">Only generates folder structure & empty files.</span>
                        </div>
                    </li>
                    <li className="flex items-start gap-4">
                        <div className="p-1 rounded-full bg-red-900/30 text-red-500 mt-0.5"><X size={16} /></div>
                        <div>
                            <span className="block text-white font-medium">Manual Setup Required</span>
                            <span className="text-sm text-neutral-500">You must type out all hooks, menus, and functions yourself.</span>
                        </div>
                    </li>
                    <li className="flex items-start gap-4">
                        <div className="p-1 rounded-full bg-red-900/30 text-red-500 mt-0.5"><X size={16} /></div>
                        <div>
                            <span className="block text-white font-medium">Blind Configuration</span>
                            <span className="text-sm text-neutral-500">No UI to preview how menus or settings will look.</span>
                        </div>
                    </li>
                    <li className="flex items-start gap-4">
                        <div className="p-1 rounded-full bg-red-900/30 text-red-500 mt-0.5"><X size={16} /></div>
                        <div>
                            <span className="block text-white font-medium">Online Only</span>
                            <span className="text-sm text-neutral-500">Requires internet connection to generate.</span>
                        </div>
                    </li>
                    <li className="flex items-start gap-4">
                        <div className="p-1 rounded-full bg-red-900/30 text-red-500 mt-0.5"><X size={16} /></div>
                        <div>
                            <span className="block text-white font-medium">Outdated Practices</span>
                            <span className="text-sm text-neutral-500">Often uses older procedural patterns or generic naming.</span>
                        </div>
                    </li>
                    <li className="flex items-start gap-4">
                        <div className="p-1 rounded-full bg-red-900/30 text-red-500 mt-0.5"><X size={16} /></div>
                        <div>
                            <span className="block text-white font-medium">Empty Logic</span>
                            <span className="text-sm text-neutral-500">Files are completely blank inside.</span>
                        </div>
                    </li>
                </ul>
            </div>

            {/* Our Tool */}
            <div className="p-8 rounded-2xl border border-indigo-500/30 bg-neutral-900 relative shadow-[0_0_60px_rgba(79,70,229,0.1)] flex flex-col">
                <div className="absolute top-0 right-0 p-3">
                     <span className="bg-indigo-600 text-white text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider">Superior Choice</span>
                </div>
                <div className="mb-8 border-b border-white/5 pb-6">
                    <h3 className="text-2xl font-bold text-white">WP Plugin Generator</h3>
                    <p className="text-sm text-indigo-400 mt-1">Professional Plugin Architecture</p>
                </div>

                <ul className="space-y-6 flex-1">
                    <li className="flex items-start gap-4">
                        <div className="p-1 rounded-full bg-green-900/30 text-green-400 mt-0.5"><Check size={16} strokeWidth={3} /></div>
                        <div>
                            <span className="block text-white font-bold">Production-Ready Scaffold</span>
                            <span className="text-sm text-neutral-400">Generates code that is structured, commented, and ready to extend.</span>
                        </div>
                    </li>
                    <li className="flex items-start gap-4">
                        <div className="p-1 rounded-full bg-green-900/30 text-green-400 mt-0.5"><Check size={16} strokeWidth={3} /></div>
                        <div>
                            <span className="block text-white font-bold">Visual Boilerplate Config</span>
                            <span className="text-sm text-neutral-400">Visually setup menus & constants before generating code.</span>
                        </div>
                    </li>
                    <li className="flex items-start gap-4">
                        <div className="p-1 rounded-full bg-green-900/30 text-green-400 mt-0.5"><Check size={16} strokeWidth={3} /></div>
                        <div>
                            <span className="block text-white font-bold">100% Offline</span>
                            <span className="text-sm text-neutral-400">Download once, use forever without internet.</span>
                        </div>
                    </li>
                    <li className="flex items-start gap-4">
                        <div className="p-1 rounded-full bg-green-900/30 text-green-400 mt-0.5"><Check size={16} strokeWidth={3} /></div>
                        <div>
                            <span className="block text-white font-bold">Modern Architecture</span>
                            <span className="text-sm text-neutral-400">Object-oriented structure using strict types and namespaces.</span>
                        </div>
                    </li>
                    <li className="flex items-start gap-4">
                        <div className="p-1 rounded-full bg-green-900/30 text-green-400 mt-0.5"><Check size={16} strokeWidth={3} /></div>
                        <div>
                            <span className="block text-white font-bold">Smart Conflict Prevention</span>
                            <span className="text-sm text-neutral-400">Automatically namespaces everything to avoid errors.</span>
                        </div>
                    </li>
                    <li className="flex items-start gap-4">
                        <div className="p-1 rounded-full bg-green-900/30 text-green-400 mt-0.5"><Check size={16} strokeWidth={3} /></div>
                        <div>
                            <span className="block text-white font-bold">Pre-Filled Examples</span>
                            <span className="text-sm text-neutral-400">Files include working example code so you know where to start.</span>
                        </div>
                    </li>
                </ul>
            </div>

        </div>
      </div>
    </section>
  );
};