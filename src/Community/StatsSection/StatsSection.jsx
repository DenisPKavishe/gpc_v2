// components/StatsSection.jsx
import React from 'react';

const StatsSection = () => {
  const statsLeft = [
    { label: 'Family Members', value: '12,450', trend: '+12%' },
    { label: 'Countries Reached', value: '42', highlight: true, subtext: 'Global Family' }
  ];

  const statsRight = [
    { label: 'Lives Impacted', value: '1.2M', trend: '+18%' },
    { label: 'Events Held', value: '850+', subtext: 'Everywhere' }
  ];

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20 px-4">
      <div className="space-y-6">
        <h2 className="text-slate-900 dark:text-white text-3xl font-bold leading-tight">
          Join Our Family
        </h2>
        <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
          Our community is built on collective impact and shared values. Every member brings a unique 
          strength that helps our family grow and support those in need. We don't just see donors; 
          we see brothers, sisters, and partners in change.
        </p>
        
        <div className="flex flex-col gap-4">
          <div className="flex items-start gap-4">
            <div className="mt-1 size-6 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
              <span className="material-symbols-outlined text-sm">check</span>
            </div>
            <p className="text-slate-700 dark:text-slate-300 font-medium">Inclusive community for everyone</p>
          </div>
          <div className="flex items-start gap-4">
            <div className="mt-1 size-6 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
              <span className="material-symbols-outlined text-sm">check</span>
            </div>
            <p className="text-slate-700 dark:text-slate-300 font-medium">Transparent impact reporting</p>
          </div>
          <div className="flex items-start gap-4">
            <div className="mt-1 size-6 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
              <span className="material-symbols-outlined text-sm">check</span>
            </div>
            <p className="text-slate-700 dark:text-slate-300 font-medium">Direct connection to the cause</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-4 pt-8">
          {statsLeft.map((stat, index) => (
            <div
              key={index}
              className={stat.highlight 
                ? "bg-primary p-6 rounded-xl text-white shadow-lg shadow-primary/20"
                : "bg-white dark:bg-slate-800 p-6 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm"
              }
            >
              <p className={`text-sm font-medium ${stat.highlight ? 'text-white/70' : 'text-slate-500 dark:text-slate-400'}`}>
                {stat.label}
              </p>
              <p className={`text-3xl font-bold mt-1 ${stat.highlight ? 'text-white' : 'text-slate-900 dark:text-white'}`}>
                {stat.value}
              </p>
              {stat.trend && (
                <span className="text-emerald-500 text-sm font-bold flex items-center gap-1 mt-2">
                  <span className="material-symbols-outlined text-xs">trending_up</span>
                  {stat.trend}
                </span>
              )}
              {stat.subtext && (
                <span className={`text-sm font-medium mt-2 block ${stat.highlight ? 'text-white/90' : 'text-primary'}`}>
                  {stat.subtext}
                </span>
              )}
            </div>
          ))}
        </div>

        <div className="space-y-4">
          {statsRight.map((stat, index) => (
            <div
              key={index}
              className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm"
            >
              <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">{stat.label}</p>
              <p className="text-slate-900 dark:text-white text-3xl font-bold mt-1">{stat.value}</p>
              {stat.trend && (
                <span className="text-emerald-500 text-sm font-bold flex items-center gap-1 mt-2">
                  <span className="material-symbols-outlined text-xs">trending_up</span>
                  {stat.trend}
                </span>
              )}
              {stat.subtext && (
                <span className="text-primary text-sm font-bold mt-2 block">{stat.subtext}</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;