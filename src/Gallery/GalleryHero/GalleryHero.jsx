// components/GalleryHero.jsx
import React, { useState } from 'react';

const GalleryHero = () => {
  const [activeFilter, setActiveFilter] = useState('All Stories');
  
  const filters = [
    'All Stories',
    'Education',
    'Health',
    'Community',
    'Environment'
  ];

  return (
    <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
      <div className="max-w-2xl">
        <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-4">
          Our Impact Gallery
        </h1>
        <p className="text-lg text-slate-600 dark:text-slate-400">
          Witness the transformation and hope we build together across the globe through your generous support.
        </p>
      </div>
      
      <div className="flex flex-wrap gap-2">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${
              activeFilter === filter
                ? 'bg-primary text-white shadow-sm shadow-primary/20'
                : 'bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:border-primary hover:text-primary'
            }`}
          >
            {filter}
          </button>
        ))}
      </div>
    </div>
  );
};

export default GalleryHero;