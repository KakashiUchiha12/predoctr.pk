
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import { useNavigate } from 'react-router-dom';

interface PricingPlan {
  name: string;
  subtitle?: string;
  price: { monthly: string; annual: string };
  description: string;
  features: string[];
  highlighted?: boolean;
  badge?: string;
  badgeExtra?: string;
  buttonText: string;
}

import { pricingPlans } from '@/data/pricingData'; // Adjust the import path as necessary


const Pricing = () => {
  const { theme } = useTheme();
  const navigate = useNavigate();

  return (
    <section id="pricing" className={`py-24 transition-all duration-500 ${
      theme === 'dark'
        ? 'bg-[#12141C]'
        : 'bg-slate-50'
    }`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 text-gradient ${theme === 'light' ? 'text-slate-900' : ''}`}>
            Choose Your MDCAT Package
          </h2>
          <p className={`text-gray-400 max-w-2xl mx-auto ${theme === 'light' ? 'text-slate-600' : ''}`}>
            Select the perfect package to ace your MDCAT 2026 preparation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className={`backdrop-blur-sm border rounded-xl overflow-hidden animate-on-scroll ${
                plan.highlighted
                  ? 'border-crypto-purple relative shadow-xl shadow-crypto-purple/10'
                  : theme === 'dark'
                    ? 'border-white/10'
                    : 'border-gray-200'
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {plan.highlighted && (
                <div className="bg-crypto-purple text-white text-center py-1 text-sm font-medium">
                  {plan.badgeExtra || "Most Popular"}
                </div>
              )}
              <div className={`p-8 ${
                theme === 'dark'
                  ? 'bg-white/5'
                  : 'bg-white'
              }`}>
                <div className={`text-center mb-4 ${plan.badge ? '' : 'invisible'}`}>
                  <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
                    theme === 'dark' ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30' : 'bg-blue-100 text-blue-800 border border-blue-200'
                  }`}>
                    {plan.badge}
                  </span>
                </div>
                <h3 className={`text-xl font-semibold mb-2 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
                  {plan.name}
                </h3>
                {plan.subtitle && (
                  <p className={`text-sm mb-2 ${theme === 'dark' ? 'text-gray-400' : 'text-slate-600'}`}>
                    {plan.subtitle}
                  </p>
                )}
                <div className="mb-4">
                  <span className={`text-3xl md:text-4xl font-bold ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
                    {plan.price.monthly}
                  </span>
                  {plan.name !== "Free" && (
                    <span className={`ml-1 ${theme === 'dark' ? 'text-gray-400' : 'text-slate-600'} text-sm`}>
                      PKR
                    </span>
                  )}
                </div>
                <p className={`mb-6 ${theme === 'dark' ? 'text-gray-400' : 'text-slate-600'}`}>
                  {plan.description}
                </p>

                <Button
                  onClick={() => navigate('/registration')}
                  className={`w-full mb-6 ${
                    plan.highlighted
                      ? 'bg-crypto-purple hover:bg-crypto-dark-purple'
                      : theme === 'dark'
                        ? 'bg-white/10 hover:bg-white/20 text-white'
                        : 'bg-slate-100 hover:bg-slate-200 text-slate-900'
                  }`}
                >
                  {plan.buttonText}
                </Button>

                <div>
                  <p className={`text-sm font-medium mb-4 ${theme === 'dark' ? 'text-gray-300' : 'text-slate-700'}`}>
                    What's included:
                  </p>
                  <ul className="space-y-3">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <Check className="h-5 w-5 text-crypto-purple mr-3 shrink-0" />
                        <span className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-slate-600'}`}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
