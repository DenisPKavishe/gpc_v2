import Footer from "../LandingPage/Footer/Footer";
import GalleryHero from "./GalleryHero/GalleryHero";
import GalleryMasonry from "./GallerySection/GalleryMasonry";

const Gallery = () => {
  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-slate-100">
      <div className="relative flex min-h-screen flex-col">
        
        <main className="flex-grow">
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <GalleryHero />
            <GalleryMasonry />
          </section>
        </main>
        
      </div>
      <Footer />
    </div>
  );
};

export default Gallery;