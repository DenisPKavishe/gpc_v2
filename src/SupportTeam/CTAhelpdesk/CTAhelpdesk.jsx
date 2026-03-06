// components/HelpDesk.jsx
import React from 'react';

const CTAHelpDesk = () => {
  const handleEmailSupport = () => {
    // Handle email support click
    console.log('Email support clicked');
    // window.location.href = 'mailto:support@charityplus.org';
  };

  const handleHelpCenter = () => {
    // Handle help center click
    console.log('Help center clicked');
    // Navigate to help center page
  };

  return (
    <div className="mt-20 py-16 px-8 rounded-xl bg-primary/5 dark:bg-primary/10 text-center border border-primary/10 dark:border-primary/20">
      <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-4">
        Still have questions?
      </h2>
      <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mb-8">
        If you're not sure who to talk to, or if your inquiry is more general, feel free to reach out 
        to our primary help desk. We usually respond within 2 hours.
      </p>
      
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <button
          onClick={handleEmailSupport}
          className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-lg font-bold transition-all flex items-center justify-center gap-2"
        >
          <span className="material-symbols-outlined">mail</span>
          Email Support
        </button>
        
        <button
          onClick={handleHelpCenter}
          className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 px-8 py-3 rounded-lg font-bold hover:bg-slate-50 dark:hover:bg-slate-700 transition-all flex items-center justify-center gap-2"
        >
          <span className="material-symbols-outlined">help_center</span>
          Visit Help Center
        </button>
      </div>
    </div>
  );
};

export default CTAHelpDesk;