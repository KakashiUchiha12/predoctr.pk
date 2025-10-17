
import { Facebook, Twitter, Instagram, Linkedin, Github } from 'lucide-react';
import { Link } from 'react-router-dom';
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
            <div className="flex items-center mb-4">
              <Link to="/" className="flex items-center">
                <img
                  src="favicon/cropped-Blue-Stethoscope-Medical-Logo-3-1-1.png"
                  alt="preDoctr.pk"
                  className="h-10 w-auto mr-2 animate-float"
                />
                <h2 className={`text-2xl font-bold ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
                  pre<span className="text-crypto-purple">Doctr.pk</span>
                </h2>
              </Link>
            </div>
            <p className={`text-gray-400 mb-6 max-w-xs ${theme === 'light' ? 'text-slate-600' : ''}`}>
              The most trusted MDCAT preparation platform, empowering medical students with comprehensive resources and expert guidance.
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
            <h3 className={`font-medium mb-4 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>resources</h3>
            <ul className="space-y-2">
              <li><a href="#features" className={`hover:text-crypto-purple transition-colors ${theme === 'dark' ? 'text-gray-400' : 'text-slate-500'}`}>MCQs Practice</a></li>
              <li><a href="#features" className={`hover:text-crypto-purple transition-colors ${theme === 'dark' ? 'text-gray-400' : 'text-slate-500'}`}>Video Lectures</a></li>
              <li><a href="#features" className={`hover:text-crypto-purple transition-colors ${theme === 'dark' ? 'text-gray-400' : 'text-slate-500'}`}>Mock Tests</a></li>
              <li><a href="#features" className={`hover:text-crypto-purple transition-colors ${theme === 'dark' ? 'text-gray-400' : 'text-slate-500'}`}>Past Papers</a></li>
              <li><a href="#features" className={`hover:text-crypto-purple transition-colors ${theme === 'dark' ? 'text-gray-400' : 'text-slate-500'}`}>Study Materials</a></li>
            </ul>
          </div>

          <div>
            <h3 className={`font-medium mb-4 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>Blog & Support</h3>
            <ul className="space-y-2">
              <li><a href="https://freemdcat.com" target="_blank" rel="noopener noreferrer" className={`hover:text-crypto-purple transition-colors ${theme === 'dark' ? 'text-gray-400' : 'text-slate-500'}`}>Free MDCAT</a></li>
              <li><a href="#features" className={`hover:text-crypto-purple transition-colors ${theme === 'dark' ? 'text-gray-400' : 'text-slate-500'}`}>Study Guides</a></li>
              <li><a href="#features" className={`hover:text-crypto-purple transition-colors ${theme === 'dark' ? 'text-gray-400' : 'text-slate-500'}`}>Past Papers</a></li>
              <li><a href="#features" className={`hover:text-crypto-purple transition-colors ${theme === 'dark' ? 'text-gray-400' : 'text-slate-500'}`}>Support</a></li>
              <li><a href="#features" className={`hover:text-crypto-purple transition-colors ${theme === 'dark' ? 'text-gray-400' : 'text-slate-500'}`}>Contact Us</a></li>
            </ul>
          </div>

          <div>
            <h3 className={`font-medium mb-4 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>Company</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className={`hover:text-crypto-purple transition-colors ${theme === 'dark' ? 'text-gray-400' : 'text-slate-500'}`}>About</Link></li>
              <li><Link to="/careers" className={`hover:text-crypto-purple transition-colors ${theme === 'dark' ? 'text-gray-400' : 'text-slate-500'}`}>Careers</Link></li>
              <li><Link to="/press" className={`hover:text-crypto-purple transition-colors ${theme === 'dark' ? 'text-gray-400' : 'text-slate-500'}`}>Press</Link></li>
              <li><Link to="/legal" className={`hover:text-crypto-purple transition-colors ${theme === 'dark' ? 'text-gray-400' : 'text-slate-500'}`}>Legal & Privacy</Link></li>
              <li><Link to="/contact" className={`hover:text-crypto-purple transition-colors ${theme === 'dark' ? 'text-gray-400' : 'text-slate-500'}`}>Contact Us</Link></li>
            </ul>
          </div>
        </div>

        <div className={`border-t border-white/10 pt-8 ${theme === 'light' ? 'border-gray-300' : ''}`}>
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className={`text-sm mb-4 md:mb-0 ${theme === 'dark' ? 'text-gray-400' : 'text-slate-600'}`}>
              &copy; {currentYear} preDoctr.pk. All rights reserved.
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
