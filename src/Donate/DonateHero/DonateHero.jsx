// components/HeroSection.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="max-w-xl">
            <h1 className="text-4xl font-black leading-tight tracking-tight text-slate-900 dark:text-white sm:text-6xl">
              Small acts, <span className="text-primary">big impact.</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-400">
              Every donation brings us closer to a world where everyone has access to clean water, 
              education, and healthcare. Join our mission today.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                to="https://wa.me/#"
                className="flex items-center gap-2 rounded-xl bg-[#25D366] px-6 py-3 text-white font-bold transition-transform hover:scale-105"
              >
                <span className="material-symbols-outlined">chat</span>
                Join us on WhatsApp
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-3xl bg-primary/10 overflow-hidden shadow-2xl">
              <img
                alt="Group of diverse children smiling in a classroom setting"
                className="h-full w-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuA1oEEkQlzw0O0Qtnts6BPJHujy7oWAbmSAzLwPIgyrCJ1V7vtH43e8IlVAWslQ9vLQkW1WCpMQH3BaZQAmffZX0WDFDo7gkUDaHxuqvW1RGke_TgdrLsozJrlGnxX8jgJW-kGkimKuPv0zMwygYKo_OjdoQ2OYRDn4aupvTcT7um45BMI-jeTPKjPXViFfYX3EORUBN33Te_gTFPaKvz8s6qnZeHK4aatwKf-y8WmfC_mFlb4LgtmVE1rmZFwnrT4m-L3Tmh22fuc"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 rounded-2xl bg-white dark:bg-slate-800 p-6 shadow-xl border border-slate-100 dark:border-slate-700">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/20 text-primary">
                  <span className="material-symbols-outlined">favorite</span>
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-900 dark:text-white">12k+ Supporters</p>
                  <p className="text-xs text-slate-500">Global community</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;