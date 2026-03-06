// components/PageHeader.jsx
import React from 'react';

const PageHeader = () => {
  return (
    <div className="mb-12">
      <h2 className="text-slate-900 dark:text-white text-4xl md:text-5xl font-black tracking-tight mb-4">
        Terms & Conditions
      </h2>
      <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400">
        <span className="material-symbols-outlined text-sm">calendar_month</span>
        <p className="text-sm font-medium">Last updated: October 24, 2023</p>
      </div>
    </div>
  );
};

export default PageHeader;