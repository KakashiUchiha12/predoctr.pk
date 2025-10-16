
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import { useNavigate } from 'react-router-dom';

const CTA = () => {
  const { theme } = useTheme();
  const navigate = useNavigate();

  return (
    <section className={`py-24 relative overflow-hidden transition-all duration-500 ${
      theme === 'dark'
        ? 'bg-gradient-to-b from-[#2A3A5C] to-[#111827]'
        : 'bg-gradient-cta-light'
    }`}>
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-crypto-purple/10 rounded-full filter blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-crypto-light-purple/10 rounded-full filter blur-3xl animate-pulse-slow" style={{ animationDelay: '1.5s' }}></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className={`max-w-4xl mx-auto backdrop-blur-lg border rounded-2xl p-8 md:p-12 text-center ${
          theme === 'dark'
            ? 'bg-white/5 border-white/10'
            : 'bg-white border-gray-200'
        }`}>
          <h2 className={`text-3xl md:text-4xl font-bold mb-6 animate-fade-in ${
            theme === 'dark' ? 'text-white' : 'text-slate-900'
          }`}>
            Ready to ace your <span className="text-gradient">MDCAT 2026</span>?
          </h2>
          <p className={`text-lg mb-8 max-w-2xl mx-auto animate-fade-in ${
            theme === 'dark' ? 'text-gray-300' : 'text-slate-600'
          }`} style={{ animationDelay: '0.2s' }}>
            Join thousands of successful medical students who have achieved their dreams with preDoctr.pk. Start your journey today with zero risk.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <Button
              size="lg"
              className="bg-crypto-purple hover:bg-crypto-dark-purple text-white px-8 py-6"
              onClick={() => navigate('/cryptoflow/registration')}
            >
              Start Free Trial
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className={`py-6 ${
                theme === 'dark'
                  ? 'border-white/20 text-white hover:bg-white/5'
                  : 'border-gray-300 text-slate-700 hover:bg-gray-50'
              }`}
              onClick={() => {
                const pricingSection = document.getElementById('pricing');
                if (pricingSection) {
                  pricingSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              View Our Packages
            </Button>
          </div>
          <p className={`mt-6 text-sm animate-fade-in ${
            theme === 'dark' ? 'text-gray-400' : 'text-slate-500'
          }`} style={{ animationDelay: '0.6s' }}>
            No credit card required. Explore our resources freely.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTA;
