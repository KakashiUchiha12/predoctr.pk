import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  Home,
  BookOpen,
  Target,
  ChevronRight,
  Moon,
  Sun
} from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '@/contexts/ThemeContext';

const LMSNavigation = () => {
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();
  const [isHovered, setIsHovered] = useState(false);

  // Define navigation items
  const navItems = [
    {
      name: 'Dashboard',
      href: '/cryptoflow/dashboard',
      icon: Home,
      current: location.pathname === '/cryptoflow/dashboard'
    },
    {
      name: 'Subjects',
      href: '/cryptoflow/subjects',
      icon: BookOpen,
      current: location.pathname === '/cryptoflow/subjects'
    },
    {
      name: 'Biology Topics',
      href: '/cryptoflow/subjects/biology',
      icon: Target,
      current: location.pathname === '/cryptoflow/subjects/biology'
    }
  ];

  // Create breadcrumb from current path
  const getBreadcrumb = () => {
    const path = location.pathname;

    if (path === '/cryptoflow/dashboard') {
      return [{ name: 'LMS Dashboard', current: true }];
    }

    if (path === '/cryptoflow/subjects') {
      return [
        { name: 'Dashboard', href: '/cryptoflow/dashboard' },
        { name: 'Subject Selection', current: true }
      ];
    }

    if (path === '/cryptoflow/subjects/biology') {
      return [
        { name: 'Dashboard', href: '/cryptoflow/dashboard' },
        { name: 'Subjects', href: '/cryptoflow/subjects' },
        { name: 'Biology Topics', current: true }
      ];
    }

    if (path.includes('/subjects/biology/')) {
      const parts = path.split('/');
      const testId = parts[parts.length - 1];
      const topicId = parts[parts.length - 2];

      return [
        { name: 'Dashboard', href: '/cryptoflow/dashboard' },
        { name: 'Subjects', href: '/cryptoflow/subjects' },
        { name: 'Biology', href: '/cryptoflow/subjects/biology' },
        { name: `${topicId} Test ${testId}`, current: true }
      ];
    }

    if (path === '/cryptoflow/testresults') {
      return [
        { name: 'Dashboard', href: '/cryptoflow/dashboard' },
        { name: 'Test Results', current: true }
      ];
    }

    return [];
  };

  const breadcrumb = getBreadcrumb();

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        theme === 'dark'
          ? 'bg-black/60 backdrop-blur-md py-4 shadow-2xl border-b border-gray-800'
          : 'bg-white/90 backdrop-blur-md py-4 shadow-xl border-b border-gray-200'
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          {/* Brand */}
          <div className="flex items-center">
            <Link to="/cryptoflow/" className="flex items-center group">
              <img
                src="favicon/cropped-Blue-Stethoscope-Medical-Logo-3-1-1.png"
                alt="preDoctr.pk"
                className="h-10 w-auto animate-float transition-transform duration-300 group-hover:scale-110"
              />
              <h1 className="text-2xl font-bold">
                <span className={`${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>pre</span><span className="text-crypto-purple">Doctr.pk</span>
                <span className="text-lg ml-2 opacity-75 text-crypto-purple">LMS</span>
              </h1>
            </Link>
          </div>

          {/* Main Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => {
              const IconComponent = item.icon;
              return (
                <Link key={item.name} to={item.href}>
                  <Button
                    variant={item.current ? "default" : "ghost"}
                    size="sm"
                    className={`text-sm font-medium transition-all duration-300 ease-in-out ${
                      item.current
                        ? 'bg-crypto-purple text-white hover:bg-crypto-dark-purple'
                        : theme === 'dark'
                        ? 'text-gray-300 hover:text-white hover:bg-white/10 hover:backdrop-blur-sm hover:border hover:border-white/20'
                        : 'text-slate-600 hover:text-slate-900 hover:bg-black/5 hover:backdrop-blur-sm hover:border hover:border-black/10'
                    }`}
                  >
                    <IconComponent className="w-4 h-4 mr-2" />
                    {item.name}
                  </Button>
                </Link>
              );
            })}
          </div>

          {/* Right side - Theme toggle */}
          <div className="flex items-center space-x-4">
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
          </div>
        </div>

        {/* Breadcrumb - Hidden on desktop, visible on hover */}
        {(isHovered || breadcrumb.length === 0) && breadcrumb.length > 0 && (
          <div className={`border-t transition-all duration-300 ${
            theme === 'dark' ? 'border-gray-800' : 'border-gray-200'
          } ${
            isHovered ? 'opacity-100 max-h-16' : 'opacity-0 max-h-0 md:opacity-100 md:max-h-16'
          } overflow-hidden`}>
            <div className="flex items-center py-3">
              {breadcrumb.map((crumb, index) => (
                <React.Fragment key={index}>
                  {index > 0 && (
                    <ChevronRight className={`w-4 h-4 mx-2 transition-colors duration-200 ${
                      theme === 'dark' ? 'text-gray-500' : 'text-gray-400'
                    }`} />
                  )}
                  {crumb.current ? (
                    <span className={`text-sm font-medium transition-colors duration-200 ${
                      theme === 'dark' ? 'text-white' : 'text-gray-900'
                    }`}>
                      {crumb.name}
                    </span>
                  ) : (
                    <Link
                      to={crumb.href}
                      className={`text-sm transition-all duration-200 ${
                        theme === 'dark'
                          ? 'text-gray-400 hover:text-white'
                          : 'text-gray-600 hover:text-gray-900'
                      }`}
                    >
                      {crumb.name}
                    </Link>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Mobile Navigation */}
      <div className={`md:hidden border-t transition-colors duration-200 ${
        theme === 'dark' ? 'border-gray-800' : 'border-gray-200'
      }`}>
        <div className="px-4 py-2">
          <div className="flex space-x-2 overflow-x-auto">
            {navItems.map((item) => {
              const IconComponent = item.icon;
              return (
                <Link key={item.name} to={item.href} className="flex-shrink-0">
                  <Button
                    variant={item.current ? "default" : "ghost"}
                    size="sm"
                    className={`text-xs font-medium transition-all duration-200 ${
                      item.current
                        ? 'bg-crypto-purple text-white'
                        : ''
                    }`}
                  >
                    <IconComponent className="w-3 h-3 mr-1" />
                    {item.name}
                  </Button>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default LMSNavigation;
