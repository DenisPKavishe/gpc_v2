
import React, { useState } from 'react';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    participation: 'attend'
  });

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'radio' ? value : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    //  API
  };

  return (
    <div className="bg-white dark:bg-slate-900 rounded-xl shadow-xl border border-slate-200 dark:border-slate-800 p-6 md:p-10">
      <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6">Join the Event</h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="text-sm font-semibold text-slate-700 dark:text-slate-300">
              Full Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              placeholder="John Doe"
              required
              className="w-full rounded-lg border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 focus:ring-primary focus:border-primary"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="phone" className="text-sm font-semibold text-slate-700 dark:text-slate-300">
              Phone Number
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+1 (555) 000-0000"
              required
              className="w-full rounded-lg border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 focus:ring-primary focus:border-primary"
            />
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">
            How would you like to participate?
          </span>
          <div className="flex flex-wrap gap-6">
            <label className="flex items-center gap-3 cursor-pointer group">
              <input
                type="radio"
                name="participation"
                value="attend"
                checked={formData.participation === 'attend'}
                onChange={handleChange}
                className="w-5 h-5 text-primary focus:ring-primary border-slate-300 dark:border-slate-700 dark:bg-slate-800"
              />
              <span className="text-slate-700 dark:text-slate-300 font-medium group-hover:text-primary">
                I will Attend
              </span>
            </label>
            <label className="flex items-center gap-3 cursor-pointer group">
              <input
                type="radio"
                name="participation"
                value="donate"
                checked={formData.participation === 'donate'}
                onChange={handleChange}
                className="w-5 h-5 text-primary focus:ring-primary border-slate-300 dark:border-slate-700 dark:bg-slate-800"
              />
              <span className="text-slate-700 dark:text-slate-300 font-medium group-hover:text-primary">
                I will Donate
              </span>
            </label>
          </div>
        </div>

        <div className="pt-4">
          <button
            type="submit"
            className="w-full md:w-auto min-w-[200px] py-4 px-8 bg-primary text-white font-bold rounded-lg shadow-lg shadow-primary/20 hover:bg-primary/90 transition-all focus:outline-none focus:ring-4 focus:ring-primary/40"
          >
            Confirm Registration
          </button>
          <p className="mt-4 text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1">
            <span className="material-symbols-outlined text-sm">info</span>
            You will receive an SMS confirmation at the number provided.
          </p>
        </div>
      </form>
    </div>
  );
};

export default RegistrationForm;