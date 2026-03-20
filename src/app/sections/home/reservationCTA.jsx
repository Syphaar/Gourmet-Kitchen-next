"use client";

import Link from "next/link";

export default function ReservationCTA() {
  return (
    <section className="relative py-12 md:py-14 xl:py-16 bg-white overflow-hidden">
      {/* Decorative circular background */}
      <div className="absolute top-0 right-1/4 w-200 h-200 bg-linear-to-tr from-[#C9A227]/20 to-transparent rounded-full -z-10"></div>
      <div className="absolute bottom-0 left-1/4 w-150 h-150 bg-linear-to-bl from-[#C9A227]/10 to-transparent rounded-full -z-10"></div>

      <div className="max-w-4xl mx-auto text-center px-6">
        <h3 className="text-3xl sm:text-4xl xl:text-5xl font-serif font-extrabold text-gray-900 mb-4 tracking-tight">
          Book Your 
          <span className="text-[#C9A227]"> Table Today </span>
        </h3>
        <p className="text-lg mb-8 leading-relaxed">
          Enjoy exceptional flavors and a welcoming setting anytime you dine with us.  
          Reserve your table now and let us craft a memorable experience for you.
        </p>

        <Link
          href="/contact"
          className="inline-block w-full sm:w-auto px-10 py-3 border-2 border-[#C9A227] text-[#C9A227] rounded-full font-semibold text-lg shadow-lg hover:bg-[#C9A227] hover:text-white transition-all duration-300"
        >
          Reserve Now
        </Link>
      </div>
    </section>
  );
}