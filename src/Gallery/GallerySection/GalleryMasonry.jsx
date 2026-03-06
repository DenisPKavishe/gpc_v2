// components/GalleryMasonry.jsx
import React, { useState } from 'react';
import GalleryCard from './GalleryCard';

const GalleryMasonry = () => {
  const [visibleCount, setVisibleCount] = useState(8);
  
  const galleryItems = [
    {
      id: 1,
      category: 'Education',
      title: 'Bright Futures Ahead',
      description: 'Providing essential school supplies to over 500 children in rural communities.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBo_SzHrZB2hiB4B2m0-XfW4nbgG--8CPGXgTfF3b5E3jCBb1XVXMujkjZMYVkAIK6IzSLep4cP7NWZ2xTsxlh2AogphIMfDWHKMcOyW5hmfNZAIvNLkaDsb2zdV_LOAC5LO4UqugrLXS5gBvexJHhUaSikYduh6iyMchEouIOMTDnx9GJ167crpJ_oCwd0auVx8EvESVymkPClK7qYByNgShMeVwrtRaB7sZ-Rz1H8bmlR7aN1ZQG-2FUu_fz5zYeDBdgPXr1oDGY',
      minHeight: 320
    },
    {
      id: 2,
      category: 'Community',
      title: 'Hunger Relief Program',
      description: 'Our amazing volunteers serving over 1,000 warm meals weekly.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAS3n-W1g8B_sfKjcEZojeUOymP_bvYcj9axX3B7k_Hkr6WFoOoxQ6fH_g2bwaKWq6HxtupIbiZ-c9_fzjnUqvDuvr6nrjzdInhuJy_HmUv1kdllT3AzdxpIywHxM7rpjbSNISsCiKIl4TOUfdQuQLzzgNX2ihi1WiE5dZ0pz2qRWAuq4lehHOmR4wz3lX3oXesA69nIlbCS99lz7piyuAl43aO5OcW84v1kEf1lTvNI9fX4P5kmDu2crEAbAOk9DwNZ7RHqy89jS0',
      minHeight: 480
    },
    {
      id: 3,
      category: 'Health',
      title: 'Mobile Clinics',
      description: 'Bringing healthcare expertise to remote villages across the region.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDFvs2Zgx_Us9SD1t5czsIqjracRB2ozvtiBEHT_nBOy_jkA0OJL0IX9aWbjWeSOtycfDZ9xsN4fOCev9xj4lzimLl89lY9HdMeZPqJ_mnAPyuhASnx-4M8FvrsJO0GE4X5vMqPf5z9gOCCXR-s3UQbUEavMgkirEO00zBLJd3qqaPt-yzYG-E3Jfrf8JqgDakp81HVnUuAiJ4tGXwH5L6Q0vmLDNx4W8R1xagZ0e1WqTzdDyiOiARrjalfF2w30G153Exfp5vwGbY',
      minHeight: 280
    },
    {
      id: 4,
      category: 'Sustainability',
      title: 'Green Roots Garden',
      description: 'Empowering families to grow their own sustainable food sources.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAjUTnwRYtDt1zLcyFJJusBnvh1Lxjx9RglgfbmEjfHzTRHc885kzzElumQAVJRhr9RXULLdngsGLYhLJjUXmPn0dBeHBUmlkXv6ITPNKdUA6cBYP1uvP-MJ4F-UxFK_l-UEp1Zx1flnJlRWRvIVv_keDw-kV3baadBPKxj-D0c3qSp-N_5d7nWE8naptSJV3fI8J89w490qHca8LYOtK5tRZX0lofjvLojQ7-7v7a-HeqlgRXYFW_tu8RpmxRQByYetfuOnuNnWI4',
      minHeight: 400
    },
    {
      id: 5,
      category: 'Joy',
      title: 'Pure Smiles',
      description: 'Capturing moments of pure joy from our summer youth program.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB0kQnFyAHJJP6pXCJF3bSHc2kauufCDrpdTAnVNMcSbJ_7jgebmX9CaWIPJ0kXD67PGo2YdK3r-gd4pWJInbTNuj82z-SDfh1qLSsIhGkMn4wfMZDGN1Jcgqx8_7qk19CmcAxFHEYjzHFJ9Aks1otRr698f1PIIfNPlRO4SNzUMojM464RPvOrAxMhxsLLhnLrmYSppnoYUN3x8DnIGc_MxpdJ7hRAZpl5Az3CQmgOv1UO9gwl__LLS0bXlu86YP_F-waTOUfDnR4',
      minHeight: 450
    },
    {
      id: 6,
      category: 'Health',
      title: 'Clean Water Access',
      description: 'Installing sustainable water filtration systems for healthy communities.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuANTQmh5evMB1M9W_4iS0rHStVtxYLBDEsxXm5lGzSThfCNweIL8Ve-zrfGgIUefcVj7Bmio-ghfBUCGzRSpkaHqAQde9bgVg7fz4Huv9ZVy3l9k9IhT0rK3fuA5Xyitki8Liv8y6TD7U_0CySUQMkARzSzabiNIrxR4yFssBWucI1cDLfXL5lL4v1_gP1ag0_K0KJtERI2oRfzqlxAmHgE2wATm29bmyK_i2-4E0Ss3F5XovVlE2D2cO7eRtPPNO14xA1hJGhPGkI',
      minHeight: 300
    },
    {
      id: 7,
      category: 'Community',
      title: 'Reforestation Project',
      description: 'Our team planted over 2,000 trees this Earth Day to restore local habitats.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCRwMrswdF1hSTqlV-2wcc5rgI5mqqEjCqvI3H3qTj9Bi-0e_gfvCBV45xHJh9-ztmy50Hl0m16TWFUlEUkd4EEA1LCZqatOyZKuemTIWWxIGQl4lj-1CFzvmoT9N2O-RyauhmBBOob9cmepjTHfgcvIWRGJvy9FxfsWFbfgEBzxzur5Dk2d66fbC0eZIDuStyhhIMQF0054Ovr9KGTUPJ6PgCgmiqyQD9vaCMcrx-8xjALPuRGD1R5qQI_fzX-CdIhKjFiVPW_q60',
      minHeight: 380
    },
    {
      id: 8,
      category: 'Community',
      title: 'Golden Years Program',
      description: 'Supporting our elders through social engagement and creative workshops.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB3fuvfhUygbVWE0XV6kyo9NguQ_ZKJArEsLH-g2lxUdvhZp0oxTIiJ349gRaEsFOtB2BN0iOpQ0yaQ_Y9cmgajyYJ3CMTQxFImynWXdj89Zwsd4p8A_BTRHpj-0ZkqDvmGfL8tfyzDpFNKADR5HGBgGT9keZp87NfoTurwZsRRTiiWn-z_qjMV-H9FCWX4Z1YXh3z0nZXGB2RNmu3PFfmqLPdlWvo7urKsSbRWVttghEMCaWkA3zndENfqaS0pr8ieQWE91Ic5DH0',
      minHeight: 340
    }
  ];

  const handleLoadMore = () => {
    setVisibleCount(prev => prev + 4);
  };

  return (
    <>
      <style jsx>{`
        .masonry-grid {
          column-count: 1;
          column-gap: 1.5rem;
        }
        
        @media (min-width: 640px) {
          .masonry-grid {
            column-count: 2;
          }
        }
        
        @media (min-width: 1024px) {
          .masonry-grid {
            column-count: 3;
          }
        }
        
        @media (min-width: 1280px) {
          .masonry-grid {
            column-count: 4;
          }
        }
        
        .masonry-item {
          break-inside: avoid;
          margin-bottom: 1.5rem;
        }
      `}</style>

      <div className="masonry-grid">
        {galleryItems.slice(0, visibleCount).map((item) => (
          <GalleryCard key={item.id} item={item} />
        ))}
      </div>

      {visibleCount < galleryItems.length && (
        <div className="mt-16 flex justify-center">
          <button
            onClick={handleLoadMore}
            className="flex items-center gap-2 px-8 py-3 rounded-xl bg-white dark:bg-slate-800 border-2 border-primary/20 text-primary font-bold hover:bg-primary hover:text-white transition-all"
          >
            <span>Load More Impact Stories</span>
            <span className="material-symbols-outlined">expand_more</span>
          </button>
        </div>
      )}
    </>
  );
};

export default GalleryMasonry;