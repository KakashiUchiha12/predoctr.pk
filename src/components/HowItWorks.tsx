
import { Button } from "@/components/ui/button";
import { steps } from "../data/howItWorks";
import { useTheme } from '../contexts/ThemeContext';


const HowItWorks = () => {
  const { theme } = useTheme();

  return (
    <section id="how-it-works" className={`py-24 transition-all duration-500 ${
      theme === 'dark'
        ? 'bg-gradient-to-b from-[#12141C] to-crypto-blue'
        : 'bg-gradient-howitworks-light'
    }`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 text-gradient ${theme === 'light' ? 'text-slate-900' : ''}`}>
            Your MDCAT Journey
          </h2>
          <p className={`text-gray-400 max-w-2xl mx-auto ${theme === 'light' ? 'text-slate-600' : ''}`}>
            Getting ready for MDCAT 2026 is simple with our proven, personalized approach that sets you up for success.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`relative backdrop-blur-sm border rounded-xl p-8 animate-on-scroll ${
                theme === 'dark'
                  ? 'bg-white/5 border-white/10'
                  : 'bg-white border-gray-200'
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <span className={`absolute -top-4 -left-4 border rounded-md border-crypto-purple/30 text-crypto-purple font-bold text-xl px-3 py-1 ${
                theme === 'dark' ? 'bg-crypto-blue' : 'bg-slate-200'
              }`}>
                {step.number}
              </span>
              <div className="bg-crypto-purple/20 rounded-xl w-12 h-12 flex items-center justify-center mb-6 text-crypto-purple">
                {step.icon}
              </div>
              <img
                src={step.image}
                alt={step.title}
                className="w-full h-32 object-cover rounded-lg mb-4"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&h=200';
                }}
              />
              <h3 className={`text-xl font-semibold mb-4 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>{step.title}</h3>
              <p className={`${theme === 'dark' ? 'text-gray-400' : 'text-slate-600'}`}>{step.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <Button size="lg" className="bg-crypto-purple hover:bg-crypto-dark-purple text-white px-8">
            Try Free Today
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
