
import { Facebook, Twitter, Instagram, Linkedin, Github } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { theme } = useTheme();

  return (
    <footer className={`transition-all duration-500 pt-16 pb-8 ${
      theme === 'dark'
        ? 'bg-[#12141C]'
        : 'bg-slate-100'
    }`}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 pb-8">
          <div className="lg:col-span-2">
            <h2 className={`text-2xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
              Crypto<span className="text-crypto-purple">Flow</span>
            </h2>
            <p className={`text-gray-400 mb-6 max-w-xs ${theme === 'light' ? 'text-slate-600' : ''}`}>
              The most trusted cryptocurrency platform, empowering traders with innovative tools and unparalleled security.
            </p>
            <div className="flex space-x-4">
              <a href="#!" className={`hover:text-crypto-purple transition-colors ${theme === 'dark' ? 'text-gray-400' : 'text-slate-500'}`}>
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#!" className={`hover:text-crypto-purple transition-colors ${theme === 'dark' ? 'text-gray-400' : 'text-slate-500'}`}>
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#!" className={`hover:text-crypto-purple transition-colors ${theme === 'dark' ? 'text-gray-400' : 'text-slate-500'}`}>
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="#!" className={`hover:text-crypto-purple transition-colors ${theme === 'dark' ? 'text-gray-400' : 'text-slate-500'}`}>
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a href="#!" className={`hover:text-crypto-purple transition-colors ${theme === 'dark' ? 'text-gray-400' : 'text-slate-500'}`}>
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </a>
            </div>
          </div>

          <div>
            <h3 className={`font-medium mb-4 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>Products</h3>
            <ul className="space-y-2">
              <li><a href="#!" className={`hover:text-crypto-purple transition-colors ${theme === 'dark' ? 'text-gray-400' : 'text-slate-500'}`}>Exchange</a></li>
              <li><a href="#!" className={`hover:text-crypto-purple transition-colors ${theme === 'dark' ? 'text-gray-400' : 'text-slate-500'}`}>Wallet</a></li>
              <li><a href="#!" className={`hover:text-crypto-purple transition-colors ${theme === 'dark' ? 'text-gray-400' : 'text-slate-500'}`}>API</a></li>
              <li><a href="#!" className={`hover:text-crypto-purple transition-colors ${theme === 'dark' ? 'text-gray-400' : 'text-slate-500'}`}>Institutional</a></li>
              <li><a href="#!" className={`hover:text-crypto-purple transition-colors ${theme === 'dark' ? 'text-gray-400' : 'text-slate-500'}`}>DeFi Platform</a></li>
            </ul>
          </div>

          <div>
            <h3 className={`font-medium mb-4 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>Resources</h3>
            <ul className="space-y-2">
              <li><a href="#!" className={`hover:text-crypto-purple transition-colors ${theme === 'dark' ? 'text-gray-400' : 'text-slate-500'}`}>Blog</a></li>
              <li><a href="#!" className={`hover:text-crypto-purple transition-colors ${theme === 'dark' ? 'text-gray-400' : 'text-slate-500'}`}>Tutorials</a></li>
              <li><a href="#!" className={`hover:text-crypto-purple transition-colors ${theme === 'dark' ? 'text-gray-400' : 'text-slate-500'}`}>Market Data</a></li>
              <li><a href="#!" className={`hover:text-crypto-purple transition-colors ${theme === 'dark' ? 'text-gray-400' : 'text-slate-500'}`}>Documentation</a></li>
              <li><a href="#!" className={`hover:text-crypto-purple transition-colors ${theme === 'dark' ? 'text-gray-400' : 'text-slate-500'}`}>Help Center</a></li>
            </ul>
          </div>

          <div>
            <h3 className={`font-medium mb-4 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>Company</h3>
            <ul className="space-y-2">
              <li><a href="#!" className={`hover:text-crypto-purple transition-colors ${theme === 'dark' ? 'text-gray-400' : 'text-slate-500'}`}>About</a></li>
              <li><a href="#!" className={`hover:text-crypto-purple transition-colors ${theme === 'dark' ? 'text-gray-400' : 'text-slate-500'}`}>Careers</a></li>
              <li><a href="#!" className={`hover:text-crypto-purple transition-colors ${theme === 'dark' ? 'text-gray-400' : 'text-slate-500'}`}>Press</a></li>
              <li><a href="#!" className={`hover:text-crypto-purple transition-colors ${theme === 'dark' ? 'text-gray-400' : 'text-slate-500'}`}>Legal & Privacy</a></li>
              <li><a href="#!" className={`hover:text-crypto-purple transition-colors ${theme === 'dark' ? 'text-gray-400' : 'text-slate-500'}`}>Contact Us</a></li>
            </ul>
          </div>
        </div>

        <div className={`border-t border-white/10 pt-8 ${theme === 'light' ? 'border-gray-300' : ''}`}>
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className={`text-sm mb-4 md:mb-0 ${theme === 'dark' ? 'text-gray-400' : 'text-slate-600'}`}>
              &copy; {currentYear} CryptoFlow. All rights reserved.
              ~ Distributed By <a href="https://themewagon.com/" target="_blank" className="text-crypto-purple hover:underline">ThemeWagon</a>
            </p>
            <div className="flex space-x-6">
              <a href="#!" className={`text-sm hover:text-crypto-purple transition-colors ${theme === 'dark' ? 'text-gray-400' : 'text-slate-500'}`}>Terms of Service</a>
              <a href="#!" className={`text-sm hover:text-crypto-purple transition-colors ${theme === 'dark' ? 'text-gray-400' : 'text-slate-500'}`}>Privacy Policy</a>
              <a href="#!" className={`text-sm hover:text-crypto-purple transition-colors ${theme === 'dark' ? 'text-gray-400' : 'text-slate-500'}`}>Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
