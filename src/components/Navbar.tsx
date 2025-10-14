import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTheme } from '@/contexts/ThemeContext';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

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
          ? 'bg-crypto-blue/80 backdrop-blur-md py-3 shadow-lg'
          : 'bg-white/70 backdrop-blur-md py-3 shadow-lg'
        : 'py-6'
    }`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <h1 className="text-2xl font-bold">
            <span className={`${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>pre</span><span className="text-crypto-purple">Doctr.pk</span>
          </h1>
        </div>

        {/* Desktop menu */}
        <ul className="hidden lg:flex items-center space-x-8">
          <li>
            <a href="#features" className={`relative px-4 py-2 transition-all duration-300 ease-in-out ${
              theme === 'dark'
                ? 'text-gray-300 hover:text-white hover:bg-white/10 hover:backdrop-blur-sm hover:border hover:border-white/20'
                : 'text-slate-600 hover:text-slate-900 hover:bg-black/5 hover:backdrop-blur-sm hover:border hover:border-black/10'
            }`}>
              Features
            </a>
          </li>
          <li>
            <a href="#how-it-works" className={`relative px-4 py-2 transition-all duration-300 ease-in-out ${
              theme === 'dark'
                ? 'text-gray-300 hover:text-white hover:bg-white/10 hover:backdrop-blur-sm hover:border hover:border-white/20'
                : 'text-slate-600 hover:text-slate-900 hover:bg-black/5 hover:backdrop-blur-sm hover:border hover:border-black/10'
            }`}>
              How it works
            </a>
          </li>
          <li>
            <a href="#testimonials" className={`relative px-4 py-2 transition-all duration-300 ease-in-out ${
              theme === 'dark'
                ? 'text-gray-300 hover:text-white hover:bg-white/10 hover:backdrop-blur-sm hover:border hover:border-white/20'
                : 'text-slate-600 hover:text-slate-900 hover:bg-black/5 hover:backdrop-blur-sm hover:border hover:border-black/10'
            }`}>
              Testimonials
            </a>
          </li>
          <li>
            <a href="#pricing" className={`relative px-4 py-2 transition-all duration-300 ease-in-out ${
              theme === 'dark'
                ? 'text-gray-300 hover:text-white hover:bg-white/10 hover:backdrop-blur-sm hover:border hover:border-white/20'
                : 'text-slate-600 hover:text-slate-900 hover:bg-black/5 hover:backdrop-blur-sm hover:border hover:border-black/10'
            }`}>
              Pricing
            </a>
          </li>
          <li>
            <a href="#faq" className={`relative px-4 py-2 transition-all duration-300 ease-in-out ${
              theme === 'dark'
                ? 'text-gray-300 hover:text-white hover:bg-white/10 hover:backdrop-blur-sm hover:border hover:border-white/20'
                : 'text-slate-600 hover:text-slate-900 hover:bg-black/5 hover:backdrop-blur-sm hover:border hover:border-black/10'
            }`}>
              FAQ
            </a>
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
          <Link to="#!">
            <Button className="bg-crypto-purple hover:bg-crypto-dark-purple text-white w-full">Buy Now</Button>
          </Link>
        </div>

        {/* Mobile menu button */}
        <button className="lg:hidden text-white" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-crypto-blue/95 backdrop-blur-lg absolute top-full left-0 w-full py-4 shadow-lg">
          <div className="container mx-auto px-4">
            <ul className="flex flex-col space-y-4">
              <li>
                <a href="#features" className="text-gray-300 hover:text-white transition-colors block py-2" onClick={() => setIsMobileMenuOpen(false)}>
                  Features
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="text-gray-300 hover:text-white transition-colors block py-2" onClick={() => setIsMobileMenuOpen(false)}>
                  How it works
                </a>
              </li>
              <li>
                <a href="#testimonials" className="text-gray-300 hover:text-white transition-colors block py-2" onClick={() => setIsMobileMenuOpen(false)}>
                  Testimonials
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-gray-300 hover:text-white transition-colors block py-2" onClick={() => setIsMobileMenuOpen(false)}>
                  Pricing
                </a>
              </li>
              <li>
                <a href="#faq" className="text-gray-300 hover:text-white transition-colors block py-2" onClick={() => setIsMobileMenuOpen(false)}>
                  FAQ
                </a>
              </li>
              <li className="pt-4 flex flex-col space-y-3">
                <Button variant="ghost" className="text-gray-300 hover:text-white w-full justify-start">
                  Login
                </Button>
                <Link to="#!">
                  <Button className="bg-crypto-purple hover:bg-crypto-dark-purple text-white w-full">Buy Now</Button>
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
