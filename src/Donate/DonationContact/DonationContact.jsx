// components/ContactSection.jsx
import React from 'react';

const ContactSection = () => {
  const handleContactLeader = () => {
    // Handle contact leader action
    console.log('Contact leader clicked');
  };

  const handleEmailSupport = () => {
    // Handle email support action
    window.location.href = 'mailto:support@community.org';
  };

  return (
    <div className="px-4 md:px-10 pb-12">
      <h3 className="text-slate-900 dark:text-slate-100 text-xl font-bold leading-tight tracking-tight pb-6 pt-4 border-t border-primary/10">
        Contact Information
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Contact Leader Card */}
        <div
          onClick={handleContactLeader}
          className="flex items-center gap-4 bg-primary/5 dark:bg-primary/10 rounded-xl p-4 hover:bg-primary/10 dark:hover:bg-primary/20 transition-all cursor-pointer group"
        >
          <div className="text-primary flex items-center justify-center rounded-lg bg-white dark:bg-slate-800 shrink-0 size-12 shadow-sm">
            <span className="material-symbols-outlined">person</span>
          </div>
          <div className="flex flex-col justify-center grow">
            <p className="text-slate-900 dark:text-slate-100 text-base font-bold leading-normal">
              Contact our Leader
            </p>
            <p className="text-slate-500 dark:text-slate-400 text-sm font-normal">
              For direct donation inquiries
            </p>
          </div>
          <div className="text-primary opacity-0 group-hover:opacity-100 transition-opacity">
            <span className="material-symbols-outlined">call</span>
          </div>
        </div>

        {/* Support Email Card */}
        <div
          onClick={handleEmailSupport}
          className="flex items-center gap-4 bg-primary/5 dark:bg-primary/10 rounded-xl p-4 hover:bg-primary/10 dark:hover:bg-primary/20 transition-all cursor-pointer group"
        >
          <div className="text-primary flex items-center justify-center rounded-lg bg-white dark:bg-slate-800 shrink-0 size-12 shadow-sm">
            <span className="material-symbols-outlined">mail</span>
          </div>
          <div className="flex flex-col justify-center grow">
            <p className="text-slate-900 dark:text-slate-100 text-base font-bold leading-normal">
              Support Email
            </p>
            <p className="text-slate-500 dark:text-slate-400 text-sm font-normal">
              support@community.org
            </p>
          </div>
          <div className="text-primary opacity-0 group-hover:opacity-100 transition-opacity">
            <span className="material-symbols-outlined">arrow_forward</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;