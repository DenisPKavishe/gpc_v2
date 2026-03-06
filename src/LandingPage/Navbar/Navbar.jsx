// components/Navbar.jsx
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Navigation links - only the specified ones
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Events', path: '/events' },
    { name: 'Causes', path: '/causes' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Impact', path: '/impact' },
    { name: 'Support', path: '/support' }
  ];

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <>
      <header className="w-full bg-white dark:bg-background-dark border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link
              to="/"
              className="flex items-center gap-2 group"
              onClick={() => setIsOpen(false)}
            >
              <div className="relative">
                <div className="flex items-center justify-center size-10 rounded-lg bg-primary text-white shadow-lg shadow-primary/20 group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-2xl">volunteer_activism</span>
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-black tracking-tight text-slate-900 dark:text-white">
                  KindHeart
                </span>
                <span className="text-[10px] font-medium text-primary -mt-1">Charity Foundation</span>
              </div>
            </Link>

            {/* Desktop Navigation - Only Links */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                    isActive(link.path)
                      ? 'text-primary bg-primary/10'
                      : 'text-slate-700 dark:text-slate-300 hover:text-primary hover:bg-primary/5'
                  }`}
                >
                  {link.name}
                  {isActive(link.path) && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-primary rounded-full"></span>
                  )}
                </Link>
              ))}
            </nav>

            {/* Right side - Only Donate Button */}
            <div className="flex items-center gap-3">
              <Link
                to="/donate"
                className="hidden lg:inline-flex items-center justify-center px-5 py-2.5 rounded-xl bg-primary text-white text-sm font-bold hover:bg-primary/90 transition-all hover:scale-105 hover:shadow-lg hover:shadow-primary/20"
              >
                <span className="material-symbols-outlined text-lg mr-1">favorite</span>
                Donate
              </Link>

              {/* Mobile menu button */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="lg:hidden inline-flex items-center justify-center p-2 rounded-lg text-slate-700 dark:text-slate-300 hover:bg-primary/10 hover:text-primary transition-colors"
                aria-label="Toggle menu"
              >
                <span className="material-symbols-outlined text-2xl">
                  {isOpen ? 'close' : 'menu'}
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden fixed inset-0 top-[113px] bg-white dark:bg-background-dark z-50 overflow-y-auto">
            <div className="px-4 py-6">
              {/* Mobile Navigation Links */}
              <nav className="space-y-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.path}
                    className={`flex items-center gap-3 py-3 px-4 rounded-lg transition-all ${
                      isActive(link.path)
                        ? 'bg-primary/10 text-primary font-medium'
                        : 'text-slate-700 dark:text-slate-300 hover:bg-primary/5 hover:text-primary'
                    }`}
                  >
                    {link.name}
                    {isActive(link.path) && (
                      <span className="ml-auto material-symbols-outlined text-sm">check_circle</span>
                    )}
                  </Link>
                ))}
                
                {/* Mobile Donate Button */}
                <Link
                  to="/donate"
                  className="flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl bg-primary text-white font-bold hover:bg-primary/90 transition-colors mt-6"
                >
                  <span className="material-symbols-outlined">favorite</span>
                  Donate Now
                </Link>
              </nav>
            </div>
          </div>
        )}
      </header>

      {/* Overlay for mobile menu */}
      {isOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/50 z-40"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </>
  );
};

export default Navbar;