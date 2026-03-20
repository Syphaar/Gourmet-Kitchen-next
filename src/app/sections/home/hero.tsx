'use client';
import { useState, useEffect, useRef } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

// CLOUDINARY IMAGES
const img1 = "https://res.cloudinary.com/dlcoacdkb/image/upload/v1774005205/main-bg_nhk0mj.jpg";
const img2 = "https://res.cloudinary.com/dlcoacdkb/image/upload/v1774005207/meat-bg_oahwf0.jpg";
const img3 = "https://res.cloudinary.com/dlcoacdkb/image/upload/v1774005241/weddings_mjbdpr.jpg";
const img4 = "https://res.cloudinary.com/dlcoacdkb/image/upload/v1774005207/menu-bg_obeyb8.jpg";
const img5 = "https://res.cloudinary.com/dlcoacdkb/image/upload/v1774005206/meatpie_zayyu2.jpg";
const img6 = "https://res.cloudinary.com/dlcoacdkb/image/upload/v1774005204/jollof_rice_oodehb.jpg";
const img7 = "https://res.cloudinary.com/dlcoacdkb/image/upload/v1774005205/fried_rice_wncrfv.jpg";
const img8 = "https://res.cloudinary.com/dlcoacdkb/image/upload/v1774005202/goatmeat_pepper_soup_b86ijs.jpg";

const slides = [
  {
    title: 'Gourmet Dining Experience',
    subtitle:
      "Welcome to an extraordinary dining experience where every detail, from service to atmosphere, is designed to make you feel truly special.",
    image: img1,
    smallImages: [img6, img2, img8, img4],
    smallLabel: 'Our Favorites',
  },
  {
    title: 'Fresh Ingredients, Exceptional Taste',
    subtitle:
      'Every dish is made from the freshest ingredients, cooked to perfection for a memorable experience.',
    image: img2,
    smallImages: [img5, img8, img7, img6],
    smallLabel: 'Chef Specials',
  },
  {
    title: 'Luxury Ambience & Flavors',
    subtitle:
      "Sit back, relax, and enjoy a cozy, beautiful space where great food and friendly service make every visit feel special.",
    image: img3,
    smallImages: [img2, img4, img6, img5],
    smallLabel: 'Top Picks',
  },
  {
    title: 'Culinary Perfection Every Time',
    subtitle: 'Our chefs ensure each plate served is meant to be enjoyed slowly, shared, and remembered long after your meal.',
    image: img4,
    smallImages: [img8, img4, img7, img2],
    smallLabel: 'Signature Dishes',
  },
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const startAutoSlide = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 10000);
  };

  useEffect(() => {
    startAutoSlide();
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    startAutoSlide();
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    startAutoSlide();
  };

  const slide = slides[currentSlide];

  return (
    <section className="relative w-full h-[90vh] md:h-[90vh] flex items-center overflow-hidden 2xl:max-w-7xl 2xl:mx-auto">
      <AnimatePresence initial={false}>
        <motion.div key={currentSlide} className="absolute inset-0 flex items-center w-full h-full z-0" initial={{ opacity: 0 }}
          animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 1 }}
        >
          <Image src={slide.image} alt={slide.title} fill className="object-cover object-center" priority />
          <div className="absolute inset-0 bg-black/60"></div>

          <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6 gap-10 relative z-10 md:px-8 lg:px-8 xl:px-8 2xl:px-8">
            <div className="md:w-xl text-center md:text-left space-y-6 text-white">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight transition-all duration-500">
                {slide.title}
              </h1>
              <p className="text-lg md:text-xl max-w-lg transition-all duration-500">
                {slide.subtitle}
              </p>
              <div className="flex gap-4 justify-center md:justify-start flex-wrap mt-4">
                <a href="/menu"
                  className="px-6 py-3 bg-[#C9A227] font-semibold text-white rounded-full hover:scale-110 border-2 border-[#C9A227] transition-all duration-400 shadow-lg"
                >
                  View Menu
                </a>
                <a href="/contact"
                  className="px-6 py-3 border-2 border-white text-white font-semibold rounded-full hover:bg-[#C9A227] hover:border-[#C9A227] hover:scale-110 transition-all duration-300 shadow-sm"
                >
                  Contact Us
                </a>
              </div>

              <div className="flex justify-center items-center mt-6 md:justify-start">
                <div className="flex -space-x-3">
                  {slide.smallImages.map((imgItem, index) => (
                    <div key={index} className="w-12 h-12 rounded-full border-2 border-white overflow-hidden hover:scale-110 transition-transform duration-300">
                      <Image src={imgItem} alt={`Dish ${index + 1}`} width={48} height={48} className="object-cover w-full h-full" />
                    </div>
                  ))}
                </div>
                <span className="ml-4 text-white font-semibold text-lg">
                  {slide.smallLabel}
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      <button onClick={prevSlide} className="absolute left-4 top-1/2 -translate-y-1/2 text-white z-20 bg-black/30 rounded-full w-10 h-10 flex items-center justify-center hover:bg-black/50 transition md:left-7 2xl:left-7">
        <FaArrowLeft />
      </button>
      <button onClick={nextSlide} className="absolute right-4 top-1/2 -translate-y-1/2 text-white z-20 bg-black/30 rounded-full w-10 h-10 flex items-center justify-center hover:bg-black/50 transition md:right-7 2xl:right-7">
        <FaArrowRight />
      </button>
    </section>
  );
}
