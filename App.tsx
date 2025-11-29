
import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Comparison } from './components/Comparison';
import { Pricing } from './components/Pricing';
import { Footer } from './components/Footer';
import { FAQ } from './components/FAQ';
import { Download, Sliders, FolderOpen } from 'lucide-react';
import { SectionHeading } from './components/ui/SectionHeading';

const App = () => {
  return (
    <div className="min-h-screen bg-neutral-950 text-white selection:bg-indigo-500/30">
      <Navbar />
      
      <main>
        <Hero />
        
        {/* How It Works Section - Ultra Polished */}
        <section id="how-it-works" className="py-32 border-t border-white/5 bg-[#080808] relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-indigo-900/05 blur-[100px] rounded-full pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <SectionHeading 
              badge="Workflow" 
              title="From Zero to Plugin in Seconds" 
              subtitle="No complex installation. No command line. Just unzip and build."
            />

            <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8 mt-24">
              
              {/* Connecting Line (Desktop) - With Moving Light Beam */}
              <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-neutral-900 -translate-y-1/2 z-0">
                 <div className="absolute top-0 left-0 h-full w-1/3 bg-gradient-to-r from-transparent via-indigo-500 to-transparent animate-shimmer opacity-50"></div>
              </div>
              
              {/* Steps */}
              {[
                { 
                  step: "01", 
                  title: "Unzip & Open", 
                  desc: "Download the package and open index.html directly in your browser.",
                  icon: FolderOpen 
                },
                { 
                  step: "02", 
                  title: "Visually Configure", 
                  desc: "Use the UI to define names, menus, hooks, and shortcodes visually.",
                  icon: Sliders 
                },
                { 
                  step: "03", 
                  title: "Instant Export", 
                  desc: "Click 'Generate' to get a production-ready .zip file, ready to upload.",
                  icon: Download 
                }
              ].map((item, i) => (
                <div key={i} className="group relative z-10">
                  <div className="h-full p-8 rounded-3xl bg-[#0a0a0a] border border-white/5 hover:border-indigo-500/30 transition-all duration-500 flex flex-col items-start relative overflow-hidden shadow-2xl">
                    
                    {/* Giant Watermark Number */}
                    <div className="absolute -right-4 -bottom-10 text-[140px] font-bold text-white/5 select-none leading-none group-hover:text-white/10 transition-colors duration-500">
                        {item.step}
                    </div>

                    {/* Icon with Pulse */}
                    <div className="relative mb-8">
                        <div className="absolute inset-0 bg-indigo-500/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <div className="w-16 h-16 rounded-2xl bg-neutral-900 border border-white/10 flex items-center justify-center text-white relative z-10 group-hover:scale-105 transition-transform duration-300 shadow-inner">
                            <item.icon size={28} />
                        </div>
                    </div>

                    {/* Text */}
                    <h3 className="text-2xl font-bold text-white mb-4 relative z-10">{item.title}</h3>
                    <p className="text-neutral-400 leading-relaxed text-base relative z-10">
                      {item.desc}
                    </p>
                    
                    {/* Bottom colored line */}
                    <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-600 to-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Features />
        <Comparison />
        <FAQ />
        <Pricing />
      </main>

      <Footer />
    </div>
  );
};

export default App;
