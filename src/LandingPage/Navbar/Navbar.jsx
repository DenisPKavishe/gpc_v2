
import React, { useState } from 'react';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = ['Home', 'About', 'Events', 'Needs','Volunteers', 'Gallery', 'Contact'];

  return (
    <header className="sticky top-0 z-50 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
      <nav className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="bg-primary p-1.5 rounded-lg text-white">
            <span className="material-symbols-outlined text-2xl">volunteer_activism</span>
          </div>
          <h2 className="text-xl font-black tracking-tight">KindHeart</h2>
        </div>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link}
              href="#"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              {link}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <button className="bg-primary text-white text-sm font-bold px-6 py-2.5 rounded-xl hover:shadow-lg hover:shadow-primary/20 transition-all">
            Donate Now
          </button>
          <button
            className="md:hidden text-slate-900 dark:text-slate-100"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <span className="material-symbols-outlined">menu</span>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-20 left-0 right-0 bg-background-light dark:bg-background-dark border-b border-slate-200 dark:border-slate-800 p-4">
          {navLinks.map((link) => (
            <a
              key={link}
              href="#"
              className="block py-2 text-sm font-medium hover:text-primary transition-colors"
            >
              {link}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};

export default Navbar;