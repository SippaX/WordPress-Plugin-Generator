import React from 'react';
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
  
  // Base styles
  const baseStyles = "relative inline-flex items-center justify-center rounded-full font-medium transition-all duration-300 ease-out active:scale-95 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden group";
  
  // Variants
  const variants = {
    primary: "bg-white text-black border border-transparent shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:shadow-[0_0_35px_rgba(255,255,255,0.5)] hover:scale-105", 
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
      <span className="relative z-10 flex items-center">
        {children}
        {icon && (
          <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        )}
      </span>
    </>
  );

  if (href) {
    return (
      <a 
        href={href}
        className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
        {...props as React.AnchorHTMLAttributes<HTMLAnchorElement>}
      >
        {content}
      </a>
    );
  }

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`} 
      {...props}
    >
      {content}
    </button>
  );
};