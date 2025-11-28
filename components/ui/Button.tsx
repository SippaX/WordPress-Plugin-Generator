import React, { useRef, useState } from 'react';
import { ArrowRight } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  icon?: boolean;
  href?: string;
  target?: string;
}

export const Button: React.FC<ButtonProps & React.AnchorHTMLAttributes<HTMLAnchorElement>> = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  icon = false,
  className = '',
  href,
  ...props 
}) => {
  const buttonRef = useRef<HTMLElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (!buttonRef.current) return;
    const rect = buttonRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    setPosition({ x, y });
    setOpacity(1);

    // Magnetic Effect: Pull button slightly towards cursor
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const maxOffset = 4; // pixels
    
    // Calculate normalized distance (-1 to 1)
    const normX = (x - centerX) / centerX;
    const normY = (y - centerY) / centerY;

    setOffset({
        x: normX * maxOffset,
        y: normY * maxOffset
    });
  };

  const handleMouseLeave = () => {
    setOpacity(0);
    setOffset({ x: 0, y: 0 });
  };

  // Base styles with smooth transition for magnetic effect
  const baseStyles = "relative inline-flex items-center justify-center rounded-full font-medium transition-all duration-300 ease-out active:scale-95 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden group";
  
  // Variants
  const variants = {
    primary: "bg-white text-black border border-transparent shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:shadow-[0_0_35px_rgba(255,255,255,0.5)]", 
    secondary: "bg-neutral-800 text-white border border-neutral-700 hover:bg-neutral-700 hover:border-neutral-500 hover:shadow-[0_0_20px_rgba(255,255,255,0.1)]",
    outline: "bg-transparent text-neutral-300 border border-neutral-700 hover:border-white hover:text-white hover:bg-white/5"
  };

  const sizes = {
    sm: "text-xs px-5 py-2",
    md: "text-sm px-7 py-3",
    lg: "text-base px-9 py-4"
  };

  const content = (
    <>
      {/* Spotlight Effect Layer */}
      <div 
        className="pointer-events-none absolute -inset-px transition-opacity duration-300"
        style={{ 
          opacity, 
          background: variant === 'primary' 
            ? `radial-gradient(160px circle at ${position.x}px ${position.y}px, rgba(0,0,0,0.1), transparent 100%)` 
            : `radial-gradient(160px circle at ${position.x}px ${position.y}px, rgba(255,255,255,0.15), transparent 100%)`
        }}
      />
      
      <span className="relative z-20 flex items-center">
        {children}
        {icon && (
          <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        )}
      </span>
    </>
  );

  const style = {
      transform: `translate(${offset.x}px, ${offset.y}px)`,
  };

  if (href) {
    return (
      <a 
        ref={buttonRef as React.RefObject<HTMLAnchorElement>}
        href={href}
        onMouseMove={handleMouseMove as any}
        onMouseLeave={handleMouseLeave}
        className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
        style={style}
        {...props as React.AnchorHTMLAttributes<HTMLAnchorElement>}
      >
        {content}
      </a>
    );
  }

  return (
    <button 
      ref={buttonRef as React.RefObject<HTMLButtonElement>}
      onMouseMove={handleMouseMove as any}
      onMouseLeave={handleMouseLeave}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`} 
      style={style}
      {...props}
    >
      {content}
    </button>
  );
};