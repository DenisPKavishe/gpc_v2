// components/Breadcrumbs.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Breadcrumbs = () => {
  return (
    <nav className="flex items-center gap-2 mb-8">
      <Link to="/" className="text-slate-500 dark:text-slate-400 text-sm font-medium hover:text-primary">
        Home
      </Link>
      <span className="material-symbols-outlined text-sm text-slate-400">chevron_right</span>
      <span className="text-slate-900 dark:text-white text-sm font-medium">Terms & Conditions</span>
    </nav>
  );
};

export default Breadcrumbs;