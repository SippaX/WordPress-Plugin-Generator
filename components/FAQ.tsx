import React, { useState } from 'react';
import { SectionHeading } from './ui/SectionHeading';
import { Plus, Minus } from 'lucide-react';

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer, isOpen, onClick }) => {
  return (
    <div 
      className={`
        border-b border-white/5 last:border-0 transition-all duration-500 relative overflow-hidden group
        ${isOpen ? 'bg-white/[0.03]' : 'hover:bg-white/[0.01]'}
      `}
    >
        {/* Active Indicator Line */}
        <div className={`absolute left-0 top-0 bottom-0 w-[2px] bg-indigo-500 transition-all duration-500 ${isOpen ? 'opacity-100' : 'opacity-0'}`}></div>

      <button 
        onClick={onClick}
        className="w-full py-6 px-6 sm:px-8 flex items-center justify-between text-left focus:outline-none relative z-10"
      >
        <span className={`text-lg font-medium transition-colors duration-300 pr-8 ${isOpen ? 'text-indigo-400' : 'text-neutral-300 group-hover:text-white'}`}>
          {question}
        </span>
        <div className={`
          shrink-0 p-2 rounded-full border transition-all duration-500 
          ${isOpen 
            ? 'bg-indigo-500 text-white border-indigo-500 rotate-180 shadow-[0_0_15px_rgba(99,102,241,0.5)]' 
            : 'text-neutral-500 border-white/10 group-hover:text-white group-hover:border-white/30 bg-white/5'
          }
        `}>
          {isOpen ? <Minus size={14} strokeWidth={3} /> : <Plus size={14} strokeWidth={3} />}
        </div>
      </button>
      <div 
        className={`overflow-hidden transition-all duration-500 ease-in-out px-6 sm:px-8 ${isOpen ? 'max-h-64 opacity-100 pb-8' : 'max-h-0 opacity-0 pb-0'}`}
      >
        <p className="text-neutral-400 leading-relaxed text-base max-w-3xl">
          {answer}
        </p>
      </div>
    </div>
  );
};

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Do I need coding knowledge to use this?",
      answer: "The tool generates 100% of the plugin structure, admin menus, and hooks automatically. You don't need to write setup code. However, if you want to add specific custom business logic (like a complex calculator or API integration), you will write that PHP logic inside the clean functions the tool creates for you."
    },
    {
      question: "Is this really a one-time payment?",
      answer: "Yes. Unlike most developer tools that charge monthly, WP Plugin Generator is a single lifetime purchase. You download the tool, and it's yours forever. No hidden fees, no API limits, and no recurring subscriptions."
    },
    {
      question: "Can I use the generated plugins for client work?",
      answer: "Absolutely. You have full ownership of the code you generate. There are no licensing restrictions on the output. You can build plugins for as many clients as you want, or even sell the plugins you create on marketplaces."
    },
    {
      question: "Does it work offline without internet?",
      answer: "Yes. Security and privacy are our top priorities. The tool is a standalone HTML/JS application that runs entirely in your browser. Once downloaded, you can disconnect from the internet and it will work perfectly. No data is ever sent to our servers."
    },
    {
      question: "What PHP version is the code compatible with?",
      answer: "We generate modern, object-oriented PHP code that is fully compatible with PHP 7.4, 8.0, 8.1, and 8.2+. The code follows official WordPress Coding Standards (WPCS) and uses namespaces to prevent conflicts with other plugins."
    }
  ];

  return (
    <section id="faq" className="py-32 bg-[#050505] relative overflow-hidden">
       {/* Background Glow */}
       <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-indigo-900/05 blur-[120px] rounded-full pointer-events-none -translate-y-1/2" />
       <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-900/05 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading 
          badge="FAQs" 
          title="Common Questions" 
          subtitle="Everything you need to know about the generator."
        />

        {/* Premium Container with Gradient Border */}
        <div className="mt-16 rounded-[32px] p-[1px] bg-gradient-to-b from-white/10 via-white/5 to-transparent relative group">
          
          {/* Top Edge Glow */}
          <div className="absolute -top-px left-1/2 -translate-x-1/2 w-1/3 h-[1px] bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent blur-[1px]"></div>
          
          <div className="bg-[#0a0a0a] rounded-[31px] relative overflow-hidden shadow-2xl">
            {/* Inner subtle noise or texture */}
            <div className="absolute inset-0 opacity-[0.2] pointer-events-none bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-900/10 via-transparent to-transparent"></div>
            
            <div className="relative z-10">
                {faqs.map((faq, index) => (
                    <FAQItem 
                    key={index}
                    question={faq.question}
                    answer={faq.answer}
                    isOpen={openIndex === index}
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    />
                ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};