
import React, { useState } from 'react';

const EventPosters = () => {
  const [posters] = useState([
    { id: 1, src: 'https://placeholder.pics/svg/300', alt: 'Charity Gala Poster 1' },
    { id: 2, src: 'https://placeholder.pics/svg/300', alt: 'Charity Gala Poster 2' },
    { id: 3, src: 'https://placeholder.pics/svg/300', alt: 'Charity Gala Poster 3' }
  ]);

  const handleDownload = (posterId) => {
    // Implement download logic here
    console.log(`Downloading poster ${posterId}`);
  };

  const handleExpand = (posterId) => {
    // Implement expand/view full size logic here
    console.log(`Expanding poster ${posterId}`);
  };

  return (
    <div className="mb-10">
      <div className="flex flex-col gap-2 mb-6">
        <h3 className="text-slate-900 dark:text-slate-100 text-2xl font-bold">Event Posters</h3>
        <p className="text-slate-600 dark:text-slate-400">
          Spread the word! Download and share these posters to help us reach more people.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {posters.map((poster) => (
          <div
            key={poster.id}
            className="group relative flex flex-col overflow-hidden rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 transition-all hover:shadow-lg"
          >
            <div className="aspect-[3/4] w-full bg-slate-100 dark:bg-slate-800 overflow-hidden">
              <img
                alt={poster.alt}
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                src={poster.src}
              />
            </div>
            <div className="p-4 flex flex-col gap-3">
              <div className="flex gap-2">
                <button
                  onClick={() => handleDownload(poster.id)}
                  className="flex-1 flex items-center justify-center gap-2 rounded-lg bg-primary py-2 px-3 text-xs font-bold text-white hover:bg-primary/90 transition-colors"
                >
                  <span className="material-symbols-outlined text-sm">download</span>
                  Download
                </button>
                <button
                  onClick={() => handleExpand(poster.id)}
                  className="flex items-center justify-center rounded-lg border border-slate-200 dark:border-slate-700 p-2 text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
                >
                  <span className="material-symbols-outlined text-sm">open_in_full</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventPosters;