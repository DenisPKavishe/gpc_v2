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
      image: './gallery/6.jpg',
      minHeight: 320
    },
    {
      id: 2,
      category: 'Community',
      title: 'Hunger Relief Program',
      description: 'Our amazing volunteers serving over 1,000 warm meals weekly.',
      image: './gallery/7.jpg',
      minHeight: 480
    },
    {
      id: 3,
      category: 'Health',
      title: 'Mobile Clinics',
      description: 'Bringing healthcare expertise to remote villages across the region.',
      image: './gallery/8.jpg',
      minHeight: 280
    },
    {
      id: 4,
      category: 'Sustainability',
      title: 'Green Roots Garden',
      description: 'Empowering families to grow their own sustainable food sources.',
      image: './gallery/9.jpg',
      minHeight: 400
    },
    {
      id: 5,
      category: 'Joy',
      title: 'Pure Smiles',
      description: 'Capturing moments of pure joy from our summer youth program.',
      image: './gallery/10.jpg',
      minHeight: 450
    },
    {
      id: 6,
      category: 'Health',
      title: 'Clean Water Access',
      description: 'Installing sustainable water filtration systems for healthy communities.',
      image: './gallery/11.jpg',
      minHeight: 300
    },
    {
      id: 7,
      category: 'Community',
      title: 'Reforestation Project',
      description: 'Our team planted over 2,000 trees this Earth Day to restore local habitats.',
      image: './gallery/12.jpg',
      minHeight: 380
    },
    {
      id: 8,
      category: 'Community',
      title: 'Golden Years Program',
      description: 'Supporting our elders through social engagement and creative workshops.',
      image: './gallery/13.jpg',
      minHeight: 340
    },
    {
      id: 9,
      category: 'Community',
      title: 'Golden Years Program',
      description: 'Supporting our elders through social engagement and creative workshops.',
      image: './gallery/14.jpg',
      minHeight: 340
    },
    {
      id: 10,
      category: 'Community',
      title: 'Golden Years Program',
      description: 'Supporting our elders through social engagement and creative workshops.',
      image: './gallery/15.jpg',
      minHeight: 340
    },
    {
      id: 11,
      category: 'Community',
      title: 'Golden Years Program',
      description: 'Supporting our elders through social engagement and creative workshops.',
      image: './gallery/16.jpg',
      minHeight: 340
    },
    {
      id: 12,
      category: 'Community',
      title: 'Golden Years Program',
      description: 'Supporting our elders through social engagement and creative workshops.',
      image: './gallery/17.jpg',
      minHeight: 340
    },
    {
      id: 13,
      category: 'Community',
      title: 'Golden Years Program',
      description: 'Supporting our elders through social engagement and creative workshops.',
      image: './gallery/18.jpg',
      minHeight: 340
    },
    {
      id: 14,
      category: 'Community',
      title: 'Golden Years Program',
      description: 'Supporting our elders through social engagement and creative workshops.',
      image: './gallery/1.jpg',
      minHeight: 340
    },
    {
      id: 15,
      category: 'Community',
      title: 'Golden Years Program',
      description: 'Supporting our elders through social engagement and creative workshops.',
      image: './gallery/2.jpg',
      minHeight: 340
    },
    {
      id: 16,
      category: 'Community',
      title: 'Golden Years Program',
      description: 'Supporting our elders through social engagement and creative workshops.',
      image: './gallery/3.jpg',
      minHeight: 340
    },
    {
      id: 17,
      category: 'Community',
      title: 'Golden Years Program',
      description: 'Supporting our elders through social engagement and creative workshops.',
      image: './gallery/4.jpg',
      minHeight: 340
    },
    {
      id: 18,
      category: 'Community',
      title: 'Golden Years Program',
      description: 'Supporting our elders through social engagement and creative workshops.',
      image: './gallery/5.jpg',
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
            className="flex items-center gap-2 px-8 py-3 rounded-xl bg-white border-2 border-blue-200 text-blue-800 font-bold hover:bg-blue-800 hover:text-white transition-all"
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