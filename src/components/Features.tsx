
import { Activity, Lock, Zap, Compass, LineChart, Shield } from 'lucide-react';
import { features } from '../data/featuresData';
import { useTheme } from '../contexts/ThemeContext';


const Features = () => {
  const { theme } = useTheme();

  return (
    <section id="features" className={`py-24 transition-all duration-500 ${
      theme === 'dark'
        ? 'bg-gradient-to-b from-crypto-blue to-[#12141C]'
        : 'bg-gradient-features-light'
    }`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 text-gradient ${theme === 'light' ? 'text-slate-900' : ''}`}>
            Powerful Features
          </h2>
          <p className={`text-gray-400 max-w-2xl mx-auto ${theme === 'light' ? 'text-slate-600' : ''}`}>
            CryptoFlow gives you the edge with advanced tools designed for both beginners and professional traders.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`backdrop-blur-sm border rounded-xl p-6 transition-all duration-300 hover:shadow-xl hover:shadow-crypto-purple/5 group animate-on-scroll ${
                theme === 'dark'
                  ? 'bg-white/5 border-white/10 hover:bg-white/10'
                  : 'bg-white border-gray-200 hover:bg-gray-50 hover:border-crypto-purple/30'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="bg-crypto-purple/20 rounded-lg w-12 h-12 flex items-center justify-center mb-5 text-crypto-purple group-hover:bg-crypto-purple/30 transition-colors duration-300">
                {feature.icon}
              </div>
              <h3 className={`text-xl font-semibold mb-3 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>{feature.title}</h3>
              <p className={`${theme === 'dark' ? 'text-gray-400' : 'text-slate-600'}`}>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
