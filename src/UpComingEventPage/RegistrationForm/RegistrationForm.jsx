import React, { useState } from 'react';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    participation: 'attend'
  });

  const [errors, setErrors] = useState({
    phone: ''
  });

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    
    // Remove any non-digit characters for phone field
    if (name === 'phone') {
      const cleanedValue = value.replace(/\D/g, '');
      setFormData(prev => ({
        ...prev,
        [name]: cleanedValue
      }));
      
      // Validate phone
      validatePhone(cleanedValue);
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: type === 'radio' ? value : value
      }));
    }
  };

  const validatePhone = (phone) => {
    if (!phone) {
      setErrors(prev => ({ ...prev, phone: 'Phone number is required' }));
      return false;
    } else if (!/^255\d{9}$/.test(phone)) {
      setErrors(prev => ({ ...prev, phone: 'Phone must be 255 followed by 9 digits (e.g., 255000000000)' }));
      return false;
    } else {
      setErrors(prev => ({ ...prev, phone: '' }));
      return true;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validate phone before submission
    const isPhoneValid = validatePhone(formData.phone);
    
    if (isPhoneValid) {
      // Handle form submission here
      console.log('Form submitted:', formData);
      // API call would go here
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-xl border border-slate-200 p-6 md:p-10">
      <h2 className="text-2xl font-bold text-slate-900 mb-6">Join the Event</h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="text-sm font-semibold text-slate-700">
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
              className="w-full rounded-lg border border-slate-900 bg-white text-slate-900 focus:ring-2 focus:ring-blue-800 focus:border-blue-800 focus:outline-none px-4 py-3"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="phone" className="text-sm font-semibold text-slate-700">
              Phone Number
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              placeholder="255000000000"
              required
              className={`w-full rounded-lg border ${errors.phone ? 'border-red-500' : 'border-slate-900'} bg-white text-slate-900 focus:ring-2 focus:ring-blue-800 focus:border-blue-800 focus:outline-none px-4 py-3`}
            />
            {errors.phone && (
              <p className="text-xs text-red-500 mt-1">{errors.phone}</p>
            )}
            <p className="text-xs text-slate-500 mt-1">
              Format: 255 followed by 9 digits (e.g., 255000000000)
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <span className="text-sm font-semibold text-slate-700">
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
                className="w-5 h-5 text-blue-800 focus:ring-blue-800 border-slate-900"
              />
              <span className="text-slate-700 font-medium group-hover:text-blue-800">
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
                className="w-5 h-5 text-blue-800 focus:ring-blue-800 border-slate-900"
              />
              <span className="text-slate-700 font-medium group-hover:text-blue-800">
                I will Donate
              </span>
            </label>
          </div>
        </div>

        <div className="pt-4">
          <button
            type="submit"
            className="w-full md:w-auto min-w-[200px] py-4 px-8 bg-blue-800 text-white font-bold rounded-lg shadow-lg shadow-blue-900/20 hover:bg-blue-900 transition-all focus:outline-none focus:ring-4 focus:ring-blue-500"
          >
            Confirm Registration
          </button>
          <p className="mt-4 text-xs text-slate-500 flex items-center gap-1">
            <span className="material-symbols-outlined text-sm">info</span>
            You will receive an SMS confirmation at the number provided.
          </p>
        </div>
      </form>
    </div>
  );
};

export default RegistrationForm;