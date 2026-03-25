'use client';
import Image from "next/image";
import Link from "next/link";

const img3 = "https://res.cloudinary.com/dlcoacdkb/image/upload/v1774005240/steak-bg_fpfww7.jpg";

export default function AboutPreviewLuxury() {
  return (
    <section className="relative py-12 bg-[#202020] overflow-hidden md:py-14 xl:py-16">
      {/* Decorative pattern behind the content */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 transform -translate-x-1/4 w-300 h-300 bg-linear-to-tr from-[#fff7e6] to-transparent rounded-full opacity-40"></div>
      </div>

      <div className="max-w-7xl mx-auto px-5 flex flex-col-reverse md:flex-row items-center gap-8 sm:px-7 lg:px-9 xl:px-9">
        
        {/* Image Column */}
        <div className="relative md:w-1/2 w-full h-96 md:h-100 lg:h-110 rounded-xl md:rounded-3xl overflow-hidden shadow-2xl">
          <Image src={img3} alt="Restaurant interior"
            fill className="object-cover object-center"
          />
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/40 rounded-xl md:rounded-3xl"></div>
        </div>

        {/* Text Column */}
        <div className="md:w-1/2 w-full relative z-10 space-y-2">
          <h2 className="text-3xl sm:text-4xl xl:text-5xl font-serif font-extrabold text-center md:text-start text-white leading-tight tracking-tight">
            Dining Like<span className="text-[#C9A227]"> No Other</span>
          </h2>

          <p className="text-white text-lg leading-relaxed">
            Welcome to Gourmet Restaurant, a place where
            each dish is prepared thoughtfully, served beautifully, and designed to delight every guest. 
            Enjoy every bite, laugh, share moments, and let this be a place you&apos;ll want to return to.
          </p>

          <div className="w-full flex justify-center md:justify-start">
            <Link href="/about"
              className="inline-block mt-4 bg-[#C9A227] border-2 border-[#C9A227] text-white px-10 py-3 rounded-full font-semibold hover:bg-[#b8931f] hover:border-[#b8931f] hover:scale-105 hover:text-white transition-all duration-300 shadow-lg"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}