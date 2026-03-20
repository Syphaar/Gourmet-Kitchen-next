'use client';

export default function ContactMap() {
  return (
    <section className="py-12 md:py-14 xl:py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6 sm:px-7 lg:px-9">
        <h2 className="text-4xl font-serif font-extrabold text-center mb-6">
          Find 
          <span className="text-[#C9A227]"> Us </span>
        </h2>

        <div className="rounded-3xl overflow-hidden shadow-xl h-112.5">
          <iframe
            src="https://www.google.com/maps?q=lagos&output=embed"
            className="w-full h-full border-0"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}