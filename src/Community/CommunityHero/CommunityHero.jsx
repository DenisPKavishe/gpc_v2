import React from 'react';

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden rounded-xl mb-12">
      <div
        className="flex min-h-[520px] flex-col gap-6 bg-cover bg-center bg-no-repeat items-center justify-center p-8 text-center"
        style={{
          backgroundImage: `linear-gradient(rgba(15, 73, 189, 0.7) 0%, rgba(10, 30, 80, 0.9) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuB8Yw3L9Y7fG7oJsxfXuKj2sWDW3VcaB29Jh_x6DxZBFiDjyAavFn3wJeam89ki9kz_QVKmi0FHSn8Ykp6xjidauMGEOeX7AS3QIKJLjcLTbpi3um1gEPilQwNawBgdCu6n_rDjtp8LV_96X_48hznHJhuZx3Rw7NTOFXckdQHFeWeDy4YFCpAVQBr3amRQdwfqMmrqZdhuxy0dpZhdaATyVSCJ8FXjSerZ-uMW-rPgrfwHl3NWmCg-faE5bPEdVmmDHgdzDP0pSCc")`
        }}
      >
        <div className="max-w-3xl flex flex-col gap-4">
          <span className="text-primary-200 bg-white/10 self-center px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest text-white">
            Our Community
          </span>
          <h1 className="text-white text-4xl md:text-6xl font-black leading-tight tracking-tight">
            Become Part of Our Family
          </h1>
          <p className="text-white/90 text-lg md:text-xl font-medium leading-relaxed max-w-2xl mx-auto">
            We believe in joining together and contributing as one family from all walks of life. 
            Your presence makes us whole.
          </p>
        </div>

        <div className="flex flex-wrap gap-4 justify-center mt-4">
          <button className="flex min-w-[160px] cursor-pointer items-center justify-center rounded-xl h-12 px-8 bg-white text-primary text-base font-bold hover:bg-slate-100 transition-colors shadow-lg shadow-primary/20">
            Join Our Mission
          </button>
          <button className="flex min-w-[160px] cursor-pointer items-center justify-center rounded-xl h-12 px-8 bg-primary text-white text-base font-bold border border-white/20 hover:bg-primary/90 transition-colors">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;