import { useState } from 'react';
import { Facebook, Instagram, Github, Smartphone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext';
import { triggerPWAInstall } from '../utils/pwaInstall';
import IOSInstallModal from './IOSInstallModal';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { theme } = useTheme();
  const [showIOSModal, setShowIOSModal] = useState(false);
  const [androidMsg, setAndroidMsg] = useState<string | null>(null);

  const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
  const isAndroid = /Android/.test(navigator.userAgent);

  const handleAndroidInstall = async () => {
    const result = await triggerPWAInstall();
    if (result === 'unavailable') {
      // Prompt not available — app may already be installed, or Chrome hasn't offered it yet
      setAndroidMsg('Open this page in Chrome and try again, or the app may already be installed.');
      setTimeout(() => setAndroidMsg(null), 5000);
    }
    // 'accepted' or 'dismissed' — no action needed, Chrome handles the UI
  };

  // Android button: compact, left-aligned, inline (not full-width)
  const androidBtnStyle = `inline-flex items-center gap-2 px-3 py-2 rounded-lg font-medium text-sm transition-all duration-200 hover:scale-105 active:scale-95 ${theme === 'dark'
    ? 'bg-white/10 hover:bg-white/20 text-white border border-white/20'
    : 'bg-slate-200 hover:bg-slate-300 text-slate-800 border border-slate-300'
    }`;

  return (
    <>
      {showIOSModal && <IOSInstallModal onClose={() => setShowIOSModal(false)} />}

      <footer className={`transition-all duration-500 pt-16 pb-8 ${theme === 'dark'
        ? 'bg-[#12141C]'
        : 'bg-slate-100'
        }`}>
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 pb-8">
            <div className="lg:col-span-2">
              <div className="flex items-center mb-4">
                <Link to="/" className="flex items-center">
                  <img
                    src={`${import.meta.env.BASE_URL}favicon/cropped-Blue-Stethoscope-Medical-Logo-3-1-1.png?v=2`}
                    alt="preDoctr.pk logo"
                    className="h-10 w-auto mr-2 animate-float"
                    width="40"
                    height="40"
                  />
                  <h2 className={`text-2xl font-bold ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
                    pre<span className="text-[#4096EE]">Doctr.pk</span>
                  </h2>
                </Link>
              </div>
              <p className={`text-gray-400 mb-6 max-w-xs ${theme === 'light' ? 'text-slate-600' : ''}`}>
                The most trusted MDCAT preparation platform, empowering medical students with comprehensive resources and expert guidance.
              </p>
              <div className="flex space-x-4">
                <a href="https://www.facebook.com/predoctrpk/" target="_blank" rel="noopener noreferrer" className={`hover:text-crypto-blue transition-colors ${theme === 'dark' ? 'text-gray-400' : 'text-slate-500'}`}>
                  <Facebook className="h-5 w-5" />
                  <span className="sr-only">Facebook</span>
                </a>
                <a href="https://www.instagram.com/predoctr.pk_/" target="_blank" rel="noopener noreferrer" className={`hover:text-crypto-blue transition-colors ${theme === 'dark' ? 'text-gray-400' : 'text-slate-500'}`}>
                  <Instagram className="h-5 w-5" />
                  <span className="sr-only">Instagram</span>
                </a>
                <a href="https://github.com/KakashiUchiha12" target="_blank" rel="noopener noreferrer" className={`hover:text-crypto-blue transition-colors ${theme === 'dark' ? 'text-gray-400' : 'text-slate-500'}`}>
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </a>
              </div>
            </div>

            {/* Mobile App install section — only rendered on iOS or Android, never on desktop */}
            {(isIOS || isAndroid) && (
              <div>
                <h3 className={`font-medium mb-2 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
                  Get the App
                </h3>
                <p className={`text-sm mb-3 leading-relaxed ${theme === 'dark' ? 'text-gray-400' : 'text-slate-600'}`}>
                  Install preDoctr.pk for offline access &amp; push notifications
                </p>
                <div className="flex flex-col gap-2">
                  {isAndroid && (
                    <div>
                      <button
                        className={androidBtnStyle}
                        title="Install preDoctr.pk on Android"
                        onClick={handleAndroidInstall}
                      >
                        <Smartphone className="w-4 h-4 flex-shrink-0" />
                        Install for Android
                      </button>
                      {androidMsg && (
                        <p className="mt-1.5 text-xs text-amber-500 leading-snug">{androidMsg}</p>
                      )}
                    </div>
                  )}
                  {isIOS && (
                    <button
                      className={androidBtnStyle}
                      title="Install preDoctr.pk on iPhone"
                      onClick={() => setShowIOSModal(true)}
                    >
                      <Smartphone className="w-4 h-4 flex-shrink-0" />
                      Install for iPhone
                    </button>
                  )}
                </div>
              </div>
            )}

            <div>
              <h3 className={`font-medium mb-4 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>resources</h3>
              <ul className="space-y-2">
                <li><a href="#features" className={`hover:text-crypto-blue transition-colors ${theme === 'dark' ? 'text-gray-400' : 'text-slate-500'}`}>MCQs Practice</a></li>
                <li><a href="#features" className={`hover:text-crypto-blue transition-colors ${theme === 'dark' ? 'text-gray-400' : 'text-slate-500'}`}>Video Lectures</a></li>
                <li><a href="#features" className={`hover:text-crypto-blue transition-colors ${theme === 'dark' ? 'text-gray-400' : 'text-slate-500'}`}>Mock Tests</a></li>
                <li><a href="#features" className={`hover:text-crypto-blue transition-colors ${theme === 'dark' ? 'text-gray-400' : 'text-slate-500'}`}>Past Papers</a></li>
                <li><a href="#features" className={`hover:text-crypto-blue transition-colors ${theme === 'dark' ? 'text-gray-400' : 'text-slate-500'}`}>Study Materials</a></li>
              </ul>
            </div>

            <div>
              <h3 className={`font-medium mb-4 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>Blog &amp; Support</h3>
              <ul className="space-y-2">
                <li><a href="https://freemdcat.com" target="_blank" rel="noopener noreferrer" className={`hover:text-crypto-blue transition-colors ${theme === 'dark' ? 'text-gray-400' : 'text-slate-500'}`}>Free MDCAT</a></li>
                <li><a href="#features" className={`hover:text-crypto-blue transition-colors ${theme === 'dark' ? 'text-gray-400' : 'text-slate-500'}`}>Study Guides</a></li>
                <li><a href="#features" className={`hover:text-crypto-blue transition-colors ${theme === 'dark' ? 'text-gray-400' : 'text-slate-500'}`}>Past Papers</a></li>
                <li><a href="#features" className={`hover:text-crypto-blue transition-colors ${theme === 'dark' ? 'text-gray-400' : 'text-slate-500'}`}>Support</a></li>
                <li><a href="#features" className={`hover:text-crypto-blue transition-colors ${theme === 'dark' ? 'text-gray-400' : 'text-slate-500'}`}>Contact Us</a></li>
              </ul>
            </div>

            <div>
              <h3 className={`font-medium mb-4 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>Company</h3>
              <ul className="space-y-2">
                <li><Link to="/about" className={`hover:text-crypto-blue transition-colors ${theme === 'dark' ? 'text-gray-400' : 'text-slate-500'}`}>About</Link></li>
                <li><Link to="/careers" className={`hover:text-crypto-blue transition-colors ${theme === 'dark' ? 'text-gray-400' : 'text-slate-500'}`}>Careers</Link></li>
                <li><Link to="/press" className={`hover:text-crypto-blue transition-colors ${theme === 'dark' ? 'text-gray-400' : 'text-slate-500'}`}>Press</Link></li>
                <li><Link to="/legal" className={`hover:text-crypto-blue transition-colors ${theme === 'dark' ? 'text-gray-400' : 'text-slate-500'}`}>Legal &amp; Privacy</Link></li>
                <li><a href="#contact" className={`hover:text-crypto-blue transition-colors ${theme === 'dark' ? 'text-gray-400' : 'text-slate-500'}`}>Contact Us</a></li>
              </ul>
            </div>
          </div>

          <div className={`border-t border-white/10 pt-8 ${theme === 'light' ? 'border-gray-300' : ''}`}>
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className={`text-sm mb-4 md:mb-0 ${theme === 'dark' ? 'text-gray-400' : 'text-slate-600'}`}>
                &copy; {currentYear} preDoctr.pk. All rights reserved.
              </p>
              <div className="flex space-x-6">
                <Link to="/legal" className={`text-sm hover:text-crypto-blue transition-colors ${theme === 'dark' ? 'text-gray-400' : 'text-slate-500'}`}>Terms of Service</Link>
                <Link to="/legal" className={`text-sm hover:text-crypto-blue transition-colors ${theme === 'dark' ? 'text-gray-400' : 'text-slate-500'}`}>Privacy Policy</Link>
                <Link to="/legal" className={`text-sm hover:text-crypto-blue transition-colors ${theme === 'dark' ? 'text-gray-400' : 'text-slate-500'}`}>Cookie Policy</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
