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
  <div className={`glass p-8 rounded-2xl relative overflow-hidden group hover:border-neutral-700 transition-colors duration-300 ${className}`}>
    {/* Hover Spotlight Gradient */}
    <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-indigo-500/10 rounded-full blur-[80px] group-hover:bg-indigo-500/20 transition-all duration-700"></div>
    
    <div className="relative z-10 flex flex-col h-full">
      <div className="h-12 w-12 rounded-xl bg-neutral-800/50 flex items-center justify-center mb-6 border border-white/5 group-hover:border-indigo-500/30 group-hover:text-indigo-400 transition-all duration-300 shadow-[0_0_15px_rgba(0,0,0,0.5)]">
        <Icon size={22} />
      </div>
      <h3 className={`font-bold text-white mb-3 ${large ? 'text-2xl' : 'text-xl'}`}>{title}</h3>
      <p className="text-neutral-400 leading-relaxed text-sm md:text-base mb-6">{description}</p>
      {children && <div className="mt-auto">{children}</div>}
    </div>
  </div>
);

export const Features = () => {
  return (
    <section id="features" className="py-24 relative">
        <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-purple-900/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          badge="Features"
          title="Everything you need. Nothing you don't."
          subtitle="Designed for speed, privacy, and simplicity. We stripped away the bloat to give you a pure generation tool."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-8">
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
            description="We don't inject messy libraries. You get standard, documented WordPress PHP code that developers love to read. Fully compatible with WordPress coding standards."
            className="md:row-span-2"
          >
            <div className="rounded-xl bg-[#1e1e1e] border border-white/10 overflow-hidden shadow-2xl mt-4 relative group-hover:translate-y-[-5px] transition-transform duration-500">
                
                {/* VS Code Window Header - Polished */}
                <div className="bg-[#252526] px-4 py-3 flex items-center justify-between border-b border-black/20">
                    <div className="flex gap-2">
                        <div className="w-3 h-3 rounded-full bg-[#ff5f56] border border-black/10 hover:brightness-110" />
                        <div className="w-3 h-3 rounded-full bg-[#ffbd2e] border border-black/10 hover:brightness-110" />
                        <div className="w-3 h-3 rounded-full bg-[#27c93f] border border-black/10 hover:brightness-110" />
                    </div>
                    <div className="text-[10px] font-medium text-neutral-400 font-sans opacity-70">
                        plugin-core.php
                    </div>
                    <div className="w-10"></div>
                </div>

                {/* Code Body */}
                <div className="p-5 font-mono text-[11px] leading-relaxed overflow-x-hidden bg-[#1e1e1e] relative text-gray-300">
                    {/* Glass Reflection */}
                    <div className="absolute top-0 right-0 w-40 h-full bg-gradient-to-l from-white/5 to-transparent pointer-events-none"></div>

                    <div className="flex opacity-80 hover:opacity-100 transition-opacity">
                        <span className="text-[#606366] w-6 select-none text-right pr-4">1</span>
                        <span className="pl-0"><span className="text-[#c586c0]">namespace</span> <span className="text-[#4ec9b0]">WPGen\Core</span>;</span>
                    </div>
                    <div className="flex opacity-80 hover:opacity-100 transition-opacity">
                        <span className="text-[#606366] w-6 select-none text-right pr-4">2</span>
                        <span className="pl-0">&nbsp;</span>
                    </div>
                    <div className="flex opacity-80 hover:opacity-100 transition-opacity">
                        <span className="text-[#606366] w-6 select-none text-right pr-4">3</span>
                        <span className="pl-0"><span className="text-[#569cd6]">class</span> <span className="text-[#4ec9b0]">PluginLoader</span> {'{'}</span>
                    </div>
                    <div className="flex opacity-80 hover:opacity-100 transition-opacity">
                        <span className="text-[#606366] w-6 select-none text-right pr-4">4</span>
                        <span className="pl-4 text-[#6a9955] italic">{'/** Initialize the plugin hooks */'}</span>
                    </div>
                    <div className="flex opacity-80 hover:opacity-100 transition-opacity">
                        <span className="text-[#606366] w-6 select-none text-right pr-4">5</span>
                        <span className="pl-4"><span className="text-[#569cd6]">public</span> <span className="text-[#569cd6]">function</span> <span className="text-[#dcdcaa]">run</span>() {'{'}</span>
                    </div>
                    <div className="flex opacity-80 hover:opacity-100 transition-opacity">
                        <span className="text-[#606366] w-6 select-none text-right pr-4">6</span>
                        <span className="pl-8"><span className="text-[#dcdcaa]">add_action</span>(</span>
                    </div>
                    <div className="flex opacity-80 hover:opacity-100 transition-opacity">
                        <span className="text-[#606366] w-6 select-none text-right pr-4">7</span>
                        <span className="pl-12"><span className="text-[#ce9178]">'plugins_loaded'</span>,</span>
                    </div>
                    <div className="flex opacity-80 hover:opacity-100 transition-opacity">
                        <span className="text-[#606366] w-6 select-none text-right pr-4">8</span>
                        <span className="pl-12">[<span className="text-[#9cdcfe]">$this</span>, <span className="text-[#ce9178]">'init'</span>]</span>
                    </div>
                    <div className="flex opacity-80 hover:opacity-100 transition-opacity">
                        <span className="text-[#606366] w-6 select-none text-right pr-4">9</span>
                        <span className="pl-8">);</span>
                    </div>
                    <div className="flex opacity-80 hover:opacity-100 transition-opacity">
                        <span className="text-[#606366] w-6 select-none text-right pr-4">10</span>
                        <span className="pl-4">{'}'}</span>
                        <span className="animate-pulse ml-1 inline-block w-1.5 h-3 bg-indigo-400 align-middle"></span>
                    </div>
                    <div className="flex opacity-80 hover:opacity-100 transition-opacity">
                        <span className="text-[#606366] w-6 select-none text-right pr-4">11</span>
                        <span className="pl-0">{'}'}</span>
                    </div>
                </div>

                {/* Status Bar */}
                <div className="bg-[#007acc] px-3 py-1 flex items-center justify-between text-[10px] text-white font-sans font-medium">
                   <div className="flex gap-3">
                      <span>MASTER*</span>
                   </div>
                   <div className="flex gap-3">
                      <span>PHP</span>
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
            description="Stop paying monthly subscriptions for simple tools. Pay $29.99 once, own it forever. Use it for unlimited client projects with no hidden fees. No recurring payments, no server dependencies."
            className="md:col-span-3 bg-gradient-to-br from-neutral-900 via-neutral-900 to-indigo-950/30"
            large
          />
        </div>
      </div>
    </section>
  );
};