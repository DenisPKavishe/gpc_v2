// components/CommunityJoin.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const CommunityJoin = () => {
  const socialLinks = [
    { icon: 'camera_outdoor', link: '#' },
    { icon: 'public', link: '#' },
    { icon: 'movie', link: '#' }
  ];

  return (
    <section className="mb-12">
      <div className="bg-slate-900 dark:bg-slate-950 rounded-3xl overflow-hidden relative">
        <div className="absolute inset-0 bg-primary/20 mix-blend-multiply"></div>
        
        <div className="relative z-10 p-8 md:p-16 flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="max-w-xl text-center md:text-left">
            <h2 className="text-white text-3xl md:text-4xl font-bold mb-4">Join the Community</h2>
            <p className="text-slate-300 text-lg">
              Stay connected with our family every day. Get real-time updates and engage with other members.
            </p>
            
            <div className="flex flex-wrap gap-4 mt-8 justify-center md:justify-start">
              <Link
                to="#"
                className="flex items-center gap-2 bg-[#25D366] text-white px-6 py-3 rounded-xl font-bold hover:scale-105 transition-transform"
              >
                <span className="material-symbols-outlined">chat</span> WhatsApp Group
              </Link>
              <Link
                to="#"
                className="flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-xl font-bold hover:scale-105 transition-transform"
              >
                <span className="material-symbols-outlined">mail</span> Newsletter
              </Link>
            </div>
          </div>

          <div className="flex flex-col gap-4 w-full max-w-sm">
            <p className="text-white font-bold text-center md:text-left mb-2">Follow our journey</p>
            <div className="grid grid-cols-3 gap-4">
              {socialLinks.map((social, index) => (
                <Link
                  key={index}
                  to={social.link}
                  className="bg-white/10 hover:bg-white/20 h-16 rounded-xl flex items-center justify-center transition-colors"
                >
                  <span className="material-symbols-outlined text-white text-2xl">{social.icon}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunityJoin;