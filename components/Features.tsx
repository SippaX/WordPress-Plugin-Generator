import React from 'react';
import { SectionHeading } from './ui/SectionHeading';
import { WifiOff, Code, Layout, MousePointer, CreditCard } from 'lucide-react';

const FeatureCard = ({ 
  icon: Icon, 
  title, 
  description, 
  className = "",
  large = false,
  children
}: { 
  icon: any, 
  title: string, 
  description: string, 
  className?: string,
  large?: boolean,
  children?: React.ReactNode
}) => (
  <div className={`
    relative p-8 rounded-[24px] overflow-hidden group 
    bg-[#0a0a0a] border border-white/[0.08] 
    transition-all duration-500 ease-out
    hover:border-white/[0.2] hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.8)]
    hover:scale-[1.01] hover:bg-[#0f0f0f]
    ${className}
  `}>
    
    {/* Noise Texture (Simulated via CSS) */}
    <div className="absolute inset-0 opacity-[0.04] pointer-events-none mix-blend-overlay" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.8\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")' }}></div>

    {/* Hover Spotlight Gradient */}
    <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-indigo-500/10 rounded-full blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none translate-y-4 group-hover:translate-y-0"></div>
    
    <div className="relative z-10 flex flex-col h-full">
      {/* Icon */}
      <div className="h-12 w-12 rounded-xl bg-[#151515] border border-white/10 flex items-center justify-center mb-6 group-hover:border-indigo-500/40 group-hover:bg-indigo-500/20 group-hover:text-white transition-all duration-300 shadow-inner text-neutral-400">
        <Icon size={24} strokeWidth={1.5} />
      </div>

      {/* Title & Desc */}
      <h3 className={`font-bold text-white mb-3 tracking-tight ${large ? 'text-2xl md:text-3xl' : 'text-lg'}`}>
        {title}
      </h3>
      <p className="text-neutral-400 leading-relaxed text-sm md:text-[15px] font-normal group-hover:text-neutral-300 transition-colors">
        {description}
      </p>

      {/* Children (Code Snippet) */}
      {children && <div className="mt-auto pt-8">{children}</div>}
    </div>
  </div>
);

export const Features = () => {
  return (
    <section id="features" className="py-24 relative bg-[#030303] overflow-hidden">
        {/* Ambient background light */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-indigo-900/10 blur-[150px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-indigo-950/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading 
          badge="Features"
          title="Everything you need. Nothing you don't."
          subtitle="Designed for speed, privacy, and simplicity. Pure generation without the bloat."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-6 mt-16">
          {/* Large Card 1 - Top Left */}
          <FeatureCard 
            icon={WifiOff}
            title="100% Offline Capable"
            description="No internet? No problem. The tool runs locally in your browser. Your data never leaves your device. Perfect for secure environments."
            className="md:col-span-2"
            large
          />
          
          {/* Tall Card - Right Side - With Code Graphic */}
          <FeatureCard 
            icon={Code}
            title="Clean, Native Code"
            description="Standard, documented WordPress PHP."
            className="md:row-span-2 flex flex-col"
          >
            <div className="rounded-lg bg-[#0e0e0e] border border-white/10 overflow-hidden shadow-2xl mt-2 relative group-hover:-translate-y-2 transition-transform duration-500 select-none ring-1 ring-white/5">
                
                {/* VS Code Window Header */}
                <div className="bg-[#1a1a1a] px-3 py-2.5 flex items-center justify-between border-b border-white/5">
                    <div className="flex gap-1.5">
                        <div className="w-2 h-2 rounded-full bg-[#ff5f56]" />
                        <div className="w-2 h-2 rounded-full bg-[#ffbd2e]" />
                        <div className="w-2 h-2 rounded-full bg-[#27c93f]" />
                    </div>
                    <div className="text-[9px] font-medium text-neutral-500 font-mono">
                        plugin-core.php
                    </div>
                    <div className="w-8"></div>
                </div>

                {/* Code Body */}
                <div className="p-4 font-mono text-[9px] sm:text-[10px] leading-relaxed overflow-x-hidden bg-[#0e0e0e] relative text-gray-300">
                    
                    <div className="flex opacity-80">
                        <span className="text-neutral-700 w-6 text-right pr-3 select-none">1</span>
                        <span className="pl-0"><span className="text-[#c586c0]">namespace</span> <span className="text-[#4ec9b0]">WPGen\Core</span>;</span>
                    </div>
                    <div className="flex opacity-80">
                        <span className="text-neutral-700 w-6 text-right pr-3 select-none">2</span>
                        <span className="pl-0">&nbsp;</span>
                    </div>
                    <div className="flex opacity-80">
                        <span className="text-neutral-700 w-6 text-right pr-3 select-none">3</span>
                        <span className="pl-0"><span className="text-[#569cd6]">class</span> <span className="text-[#4ec9b0]">PluginLoader</span> {'{'}</span>
                    </div>
                    <div className="flex opacity-80">
                        <span className="text-neutral-700 w-6 text-right pr-3 select-none">4</span>
                        <span className="pl-3 text-[#6a9955] italic">{'/** Initialize hooks */'}</span>
                    </div>
                    <div className="flex opacity-80">
                        <span className="text-neutral-700 w-6 text-right pr-3 select-none">5</span>
                        <span className="pl-3"><span className="text-[#569cd6]">public</span> <span className="text-[#569cd6]">function</span> <span className="text-[#dcdcaa]">run</span>() {'{'}</span>
                    </div>
                    <div className="flex opacity-80">
                        <span className="text-neutral-700 w-6 text-right pr-3 select-none">6</span>
                        <span className="pl-6"><span className="text-[#dcdcaa]">add_action</span>(</span>
                    </div>
                    <div className="flex opacity-80">
                        <span className="text-neutral-700 w-6 text-right pr-3 select-none">7</span>
                        <span className="pl-9"><span className="text-[#ce9178]">'plugins_loaded'</span>,</span>
                    </div>
                    <div className="flex opacity-80">
                        <span className="text-neutral-700 w-6 text-right pr-3 select-none">8</span>
                        <span className="pl-9">[<span className="text-[#9cdcfe]">$this</span>, <span className="text-[#ce9178]">'init'</span>]</span>
                    </div>
                    <div className="flex opacity-80">
                        <span className="text-neutral-700 w-6 text-right pr-3 select-none">9</span>
                        <span className="pl-6">);</span>
                    </div>
                    <div className="flex opacity-80">
                        <span className="text-neutral-700 w-6 text-right pr-3 select-none">10</span>
                        <span className="pl-3">{'}'}</span>
                        <span className="animate-pulse ml-1 inline-block w-1 h-3 bg-indigo-500 align-middle"></span>
                    </div>
                    <div className="flex opacity-80">
                        <span className="text-neutral-700 w-6 text-right pr-3 select-none">11</span>
                        <span className="pl-0">{'}'}</span>
                    </div>
                </div>

                {/* Status Bar */}
                <div className="bg-[#007acc] px-2 py-1 flex items-center justify-between text-[8px] text-white font-sans font-medium opacity-100">
                   <div className="flex gap-2">
                      <span className="opacity-90">PHP</span>
                   </div>
                   <div className="flex gap-2 opacity-90">
                      <span>UTF-8</span>
                   </div>
                </div>
            </div>
          </FeatureCard>

          {/* Regular Cards - Middle Row */}
          <FeatureCard 
            icon={Layout}
            title="Custom Admin Menus"
            description="Visually build top-level admin menus and sub-pages without wrestling with add_menu_page()."
          />
          
          <FeatureCard 
            icon={MousePointer}
            title="Live Interactive UI"
            description="See changes instantly. Add functions, shortcodes, and hooks through a point-and-click interface."
          />

          {/* Large Card 2 - Bottom Full Width */}
          <FeatureCard 
            icon={CreditCard}
            title="One-Time Purchase"
            description="Stop paying monthly subscriptions for simple tools. Pay once, own it forever. Use it for unlimited client projects."
            className="md:col-span-3 bg-gradient-to-br from-[#0a0a0a] via-[#0a0a0a] to-indigo-950/20"
            large
          />
        </div>
      </div>
    </section>
  );
};