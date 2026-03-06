// components/HistorySection.jsx
import React from 'react';

const HistorySection = () => {
  return (
    <section className="py-20 bg-slate-100 dark:bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-16 items-center">
        <div className="order-2 md:order-1">
          <h2 className="text-3xl font-bold mb-6">How We Started</h2>
          <div className="space-y-4 text-slate-600 dark:text-slate-400 leading-relaxed">
            <p>
              KindHeart began in a small community center in 2010. What started as a group of ten 
              volunteers providing meals to local families in need has grown into a global organization 
              impacting thousands of lives across three continents.
            </p>
            <p>
              Our founder, Sarah Jenkins, witnessed first-hand the disparities in access to clean water 
              and education during her travels. She returned home with a singular focus: to create a 
              platform that connects those who can give with those who need it most, ensuring transparency 
              and direct impact.
            </p>
            <p>
              Today, we maintain that same grassroots spirit while leveraging modern technology to scale 
              our reach and effectiveness.
            </p>
          </div>
        </div>

        <div className="order-1 md:order-2 rounded-2xl overflow-hidden shadow-2xl">
          <img
            alt="Black and white photo of the first team of KindHeart volunteers in 2010"
            className="w-full h-full object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCEG8izrjlB6VPPqbzyFBZg2w9P-MdRN79DJ2NHnGt_4rEZYuAW_SIaJniZGHsQoZc_l8-2mR9Zu1ORPCw-6B1ocpIG8nx94WNUCf1c0wKnJ7r3TdafwLhmfHkuQnti5NhBAIUj-KzMA8oTbPZKcXtSRDjc1VgaowFxP_vzSjl8abyU_J3C2aT6tqOvQceKA2cMoI9bMyH6pv5MVXptbnIpVjYrQMlsbOjzkM_FyTL5FYj5uvIc--snaLQUZV8e7L1AZ1AKk-dFGGI"
          />
        </div>
      </div>
    </section>
  );
};

export default HistorySection;