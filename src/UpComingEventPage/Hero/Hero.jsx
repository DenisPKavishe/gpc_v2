
import React from 'react';

const UpcomingHero = () => {
  return (
    <div className="@container mb-6">
      <div className="@[480px]:py-3">
        <div
          className="bg-cover bg-center flex flex-col justify-end overflow-hidden bg-slate-200 dark:bg-slate-800 rounded-xl min-h-[400px] relative"
          style={{
            backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0) 50%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuCRmbLUqeWJZl80IQmPTG188otY23XmkeiNpDZAulUPLCbJfa9EpgG1fxYx4ML6gOAZ02M3lckkX2MGucxVBio4RlIbgkB9gHp9pMg6uf_0iBxPXM4pxT_GrXtxjC2AClcBSL3gYs4Or-l6nDTKWJBte1hj2gVp_xBS1d3DBoEW-J-a6JIQ8I9gJgx4G1tFF7DKdDv9pIc5AqCnEh_e1jZcj_Rc06zKoxeR5YLlQJ2MfCzzZDpBTbJCaWB1ikKPIgTtOMm_b-AkQCY")`
          }}
        >
          <div className="flex flex-col p-6 md:p-10 gap-2">
            <div className="flex items-center gap-2 text-white/90 text-sm font-medium">
              <span className="material-symbols-outlined text-sm">calendar_today</span>
              Saturday, May 20th • 10:00 AM
            </div>
            <h1 className="text-white tracking-light text-4xl md:text-5xl font-bold leading-tight">
              Annual Spring Charity Gala
            </h1>
            <div className="flex items-center gap-2 text-white/90 text-lg">
              <span className="material-symbols-outlined">location_on</span>
              Sunshine Community Center, downtown area
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpcomingHero;