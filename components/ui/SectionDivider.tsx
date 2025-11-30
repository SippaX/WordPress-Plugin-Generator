import React from 'react';

export const SectionDivider = () => {
  return (
    <div className="relative w-full h-px bg-neutral-950/50">
      {/* Base darker line */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-50"></div>
      
      {/* Central "Energy" Beam */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/2 md:w-1/4 h-[1px] bg-gradient-to-r from-transparent via-indigo-500 to-transparent shadow-[0_0_20px_2px_rgba(99,102,241,0.3)] opacity-70"></div>
      
      {/* Center Dot */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1 h-1 rounded-full bg-indigo-400 shadow-[0_0_10px_2px_rgba(99,102,241,0.8)]"></div>
    </div>
  );
};