
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/components/ui/accordion";

import { faqItems } from '../data/faqData';
import { useTheme } from '../contexts/ThemeContext';

const FAQ = () => {
  const { theme } = useTheme();

  return (
    <section id="faq" className={`py-24 transition-all duration-500 ${
      theme === 'dark'
        ? 'bg-gradient-to-b from-[#12141C] to-crypto-blue'
        : 'bg-gradient-faq-light'
    }`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 text-gradient ${theme === 'light' ? 'text-slate-900' : ''}`}>
            Frequently Asked Questions
          </h2>
          <p className={`text-gray-400 max-w-2xl mx-auto ${theme === 'light' ? 'text-slate-600' : ''}`}>
            Got questions about CryptoFlow? We've got answers. If you don't see what you're looking for, reach out to our support team.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqItems.map((item, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className={`backdrop-blur-sm border rounded-xl overflow-hidden animate-on-scroll ${
                  theme === 'dark'
                    ? 'bg-white/5 border-white/10'
                    : 'bg-white border-gray-200'
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <AccordionTrigger className={`px-6 py-4 hover:text-crypto-purple hover:no-underline ${
                  theme === 'dark' ? 'text-white' : 'text-slate-900'
                }`}>
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className={`px-6 pb-4 ${
                  theme === 'dark' ? 'text-gray-400' : 'text-slate-600'
                }`}>
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
