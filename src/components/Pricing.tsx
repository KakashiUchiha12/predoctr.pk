
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

interface PricingPlan {
  name: string;
  price: { monthly: string; annual: string };
  description: string;
  features: string[];
  highlighted?: boolean;
  buttonText: string;
}

import { pricingPlans } from '@/data/pricingData'; // Adjust the import path as necessary


const Pricing = () => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('monthly');
  const { theme } = useTheme();

  return (
    <section id="pricing" className={`py-24 transition-all duration-500 ${
      theme === 'dark'
        ? 'bg-[#12141C]'
        : 'bg-slate-50'
    }`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 text-gradient ${theme === 'light' ? 'text-slate-900' : ''}`}>
            Simple, Transparent Pricing
          </h2>
          <p className={`text-gray-400 max-w-2xl mx-auto mb-8 ${theme === 'light' ? 'text-slate-600' : ''}`}>
            Choose the plan that best fits your trading needs. All plans include our core platform features.
          </p>

          <div className={`inline-flex p-1 backdrop-blur-sm border rounded-full ${
            theme === 'dark'
              ? 'bg-white/5 border-white/10'
              : 'bg-white/80 border-gray-300'
          }`}>
            <button
              className={`px-4 py-2 rounded-full transition-colors ${
                billingCycle === 'monthly'
                  ? 'bg-crypto-purple text-white'
                  : theme === 'dark'
                    ? 'text-gray-400'
                    : 'text-slate-600'
              }`}
              onClick={() => setBillingCycle('monthly')}
            >
              Monthly
            </button>
            <button
              className={`px-4 py-2 rounded-full transition-colors ${
                billingCycle === 'annual'
                  ? 'bg-crypto-purple text-white'
                  : theme === 'dark'
                    ? 'text-gray-400'
                    : 'text-slate-600'
              }`}
              onClick={() => setBillingCycle('annual')}
            >
              Annual <span className="text-xs font-medium">Save 20%</span>
            </button>
          </div>
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
                  Most Popular
                </div>
              )}
              <div className={`p-8 ${
                theme === 'dark'
                  ? 'bg-white/5'
                  : 'bg-white'
              }`}>
                <h3 className={`text-xl font-semibold mb-2 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
                  {plan.name}
                </h3>
                <div className="mb-4">
                  <span className={`text-3xl md:text-4xl font-bold ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
                    {billingCycle === 'monthly' ? plan.price.monthly : plan.price.annual}
                  </span>
                  <span className={`ml-1 ${theme === 'dark' ? 'text-gray-400' : 'text-slate-600'}`}>
                    {plan.price.monthly !== "$0" ? "/month" : ""}
                  </span>
                </div>
                <p className={`mb-6 ${theme === 'dark' ? 'text-gray-400' : 'text-slate-600'}`}>
                  {plan.description}
                </p>

                <Button
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
