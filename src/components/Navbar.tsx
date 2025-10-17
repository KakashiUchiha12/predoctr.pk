import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '@/contexts/ThemeContext';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();

  // Determine if we're on LMS pages
  const isLMSPage = location.pathname.startsWith('/dashboard') ||
                   location.pathname.startsWith('/subjects') ||
                   location.pathname.startsWith('/results') ||
                   location.pathname.startsWith('/topic');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled
        ? theme === 'dark'
          ? 'bg-black/40 backdrop-blur-md py-3 shadow-lg'
          : 'bg-white/70 backdrop-blur-md py-3 shadow-lg'
        : 'py-6'
    }`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/cryptoflow/" className="flex items-center">
            <img
              src="favicon/cropped-Blue-Stethoscope-Medical-Logo-3-1-1.png"
              alt="preDoctr.pk"
              className="h-10 w-auto mr-2 animate-float"
            />
            <h1 className="text-2xl font-bold">
              <span className={`${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>pre</span><span className="text-crypto-purple">Doctr.pk</span>
              {isLMSPage && <span className="text-lg ml-2 opacity-75">LMS</span>}
            </h1>
          </Link>
        </div>

        {/* Desktop menu */}
        <ul className="hidden lg:flex items-center space-x-8">
          <li>
            <button
              onClick={() => {
                const featuresSection = document.getElementById('features');
                if (featuresSection) {
                  featuresSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className={`relative px-4 py-2 transition-all duration-300 ease-in-out ${
                theme === 'dark'
                  ? 'text-gray-300 hover:text-white hover:bg-white/10 hover:backdrop-blur-sm hover:border hover:border-white/20'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-black/5 hover:backdrop-blur-sm hover:border hover:border-black/10'
              }`}
            >
              Features
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                const howItWorksSection = document.getElementById('how-it-works');
                if (howItWorksSection) {
                  howItWorksSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className={`relative px-4 py-2 transition-all duration-300 ease-in-out ${
                theme === 'dark'
                  ? 'text-gray-300 hover:text-white hover:bg-white/10 hover:backdrop-blur-sm hover:border hover:border-white/20'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-black/5 hover:backdrop-blur-sm hover:border hover:border-black/10'
              }`}
            >
              How it works
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                const testimonialsSection = document.getElementById('testimonials');
                if (testimonialsSection) {
                  testimonialsSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className={`relative px-4 py-2 transition-all duration-300 ease-in-out ${
                theme === 'dark'
                  ? 'text-gray-300 hover:text-white hover:bg-white/10 hover:backdrop-blur-sm hover:border hover:border-white/20'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-black/5 hover:backdrop-blur-sm hover:border hover:border-black/10'
              }`}
            >
              Testimonials
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                const pricingSection = document.getElementById('pricing');
                if (pricingSection) {
                  pricingSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className={`relative px-4 py-2 transition-all duration-300 ease-in-out ${
                theme === 'dark'
                  ? 'text-gray-300 hover:text-white hover:bg-white/10 hover:backdrop-blur-sm hover:border hover:border-white/20'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-black/5 hover:backdrop-blur-sm hover:border hover:border-black/10'
              }`}
            >
              Pricing
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                const faqSection = document.getElementById('faq');
                if (faqSection) {
                  faqSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className={`relative px-4 py-2 transition-all duration-300 ease-in-out ${
                theme === 'dark'
                  ? 'text-gray-300 hover:text-white hover:bg-white/10 hover:backdrop-blur-sm hover:border hover:border-white/20'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-black/5 hover:backdrop-blur-sm hover:border hover:border-black/10'
              }`}
            >
              FAQ
            </button>
          </li>
        </ul>

        <div className="hidden lg:flex items-center space-x-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            className={`px-3 py-2 rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105 hover:text-crypto-purple ${
              theme === 'dark'
                ? 'text-gray-300 hover:text-white hover:bg-gray-700/60'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/70 hover:shadow-sm'
            }`}
            title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </Button>
          <Button variant="ghost" className={`px-4 py-2 rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105 ${
            theme === 'dark'
              ? 'text-gray-300 hover:text-white hover:bg-gray-700/60'
              : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/70 hover:shadow-sm'
          }`}>
            Login
          </Button>
          <Link to="/cryptoflow/registration">
            <Button className="bg-crypto-purple hover:bg-crypto-dark-purple text-white w-full">Join Now</Button>
          </Link>
        </div>

        {/* Mobile menu button */}
        <button className={`lg:hidden transition-colors duration-300 ${
          theme === 'dark' ? 'text-white' : 'text-slate-700 hover:text-slate-900'
        }`} onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className={`lg:hidden backdrop-blur-lg absolute top-full left-0 w-full py-4 shadow-lg ${
          theme === 'dark' ? 'bg-black/60' : 'bg-white/90'
        }`}>
          <div className="container mx-auto px-4">
            <ul className="flex flex-col space-y-4">
              <li>
                <button
                  className={`transition-colors block py-2 text-left ${theme === 'dark' ? 'text-gray-300 hover:text-white' : 'text-slate-700 hover:text-slate-900'}`}
                  onClick={() => {
                    const featuresSection = document.getElementById('features');
                    if (featuresSection) {
                      featuresSection.scrollIntoView({ behavior: 'smooth' });
                    }
                    setIsMobileMenuOpen(false);
                  }}
                >
                  Features
                </button>
              </li>
              <li>
                <button
                  className={`transition-colors block py-2 text-left ${theme === 'dark' ? 'text-gray-300 hover:text-white' : 'text-slate-700 hover:text-slate-900'}`}
                  onClick={() => {
                    const howItWorksSection = document.getElementById('how-it-works');
                    if (howItWorksSection) {
                      howItWorksSection.scrollIntoView({ behavior: 'smooth' });
                    }
                    setIsMobileMenuOpen(false);
                  }}
                >
                  How it works
                </button>
              </li>
              <li>
                <button
                  className={`transition-colors block py-2 text-left ${theme === 'dark' ? 'text-gray-300 hover:text-white' : 'text-slate-700 hover:text-slate-900'}`}
                  onClick={() => {
                    const testimonialsSection = document.getElementById('testimonials');
                    if (testimonialsSection) {
                      testimonialsSection.scrollIntoView({ behavior: 'smooth' });
                    }
                    setIsMobileMenuOpen(false);
                  }}
                >
                  Testimonials
                </button>
              </li>
              <li>
                <button
                  className={`transition-colors block py-2 text-left ${theme === 'dark' ? 'text-gray-300 hover:text-white' : 'text-slate-700 hover:text-slate-900'}`}
                  onClick={() => {
                    const pricingSection = document.getElementById('pricing');
                    if (pricingSection) {
                      pricingSection.scrollIntoView({ behavior: 'smooth' });
                    }
                    setIsMobileMenuOpen(false);
                  }}
                >
                  Pricing
                </button>
              </li>
              <li>
                <button
                  className={`transition-colors block py-2 text-left ${theme === 'dark' ? 'text-gray-300 hover:text-white' : 'text-slate-700 hover:text-slate-900'}`}
                  onClick={() => {
                    const faqSection = document.getElementById('faq');
                    if (faqSection) {
                      faqSection.scrollIntoView({ behavior: 'smooth' });
                    }
                    setIsMobileMenuOpen(false);
                  }}
                >
                  FAQ
                </button>
              </li>
              <li className="pt-4 flex flex-col space-y-3">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={toggleTheme}
                  className={`w-full justify-start mb-2 ${theme === 'dark' ? 'text-gray-300 hover:text-white' : 'text-slate-700 hover:text-slate-900'}`}
                  title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
                >
                  <div className="flex items-center space-x-3">
                    {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
                    <span>Toggle Theme</span>
                  </div>
                </Button>
                <Button variant="ghost" className={`w-full justify-start ${theme === 'dark' ? 'text-gray-300 hover:text-white' : 'text-slate-700 hover:text-slate-900'}`}>
                  Login
                </Button>
                <Link to="/cryptoflow/registration">
                  <Button className="bg-crypto-purple hover:bg-crypto-dark-purple text-white w-full">Join Now</Button>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
