// components/MissionVision.jsx
import React from 'react';

const MissionVision = () => {
  return (
    <section className="py-20 max-w-7xl mx-auto px-4">
      <div className="grid md:grid-cols-2 gap-8">
        {/* Mission Card */}
        <div className="p-8 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm flex flex-col gap-4">
          <div className="bg-primary/10 w-fit p-3 rounded-lg text-primary">
            <span className="material-symbols-outlined text-4xl">target</span>
          </div>
          <h2 className="text-2xl font-bold">Our Mission</h2>
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
            To provide essential resources, healthcare, and education to underserved communities globally, 
            fostering an environment where no one is left behind.
          </p>
        </div>

        {/* Vision Card */}
        <div className="p-8 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm flex flex-col gap-4">
          <div className="bg-primary/10 w-fit p-3 rounded-lg text-primary">
            <span className="material-symbols-outlined text-4xl">visibility</span>
          </div>
          <h2 className="text-2xl font-bold">Our Vision</h2>
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
            A world where every individual has the opportunity to thrive with dignity, and where kindness 
            is the currency that drives global progress.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;