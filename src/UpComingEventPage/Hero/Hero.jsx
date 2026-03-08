
import React from 'react';

const UpcomingHero = () => {
  return (
    <div className="mb-6">
      <div className=" py-3">
        <div
          className="bg-cover rounded-xl bg-center flex flex-col justify-end overflow-hidden bg-slate-200 min-h-[400px] relative"
          style={{
            backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0)), url("./s4.jpeg")`
          }}
        >
          <div className="flex flex-col p-6 md:p-10 gap-2">
            <div className="flex items-center gap-2 text-white text-sm font-medium">
              <span className="material-symbols-outlined text-sm">calendar_today</span>
              Saturday, April 25th • 08:00 AM
            </div>
            <h1 className="text-white tracking-light text-4xl md:text-5xl font-bold leading-tight">
              Rejoice Home Kid Center
            </h1>
            <div className="flex items-center gap-2 text-white text-lg">
              <span className="material-symbols-outlined">location_on</span>
              Namanga Arusha, Tanzania
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpcomingHero;