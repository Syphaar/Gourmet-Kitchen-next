'use client';

export default function LocationMapSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Header */}
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">
            Find Us
          </h2>

          <p className="text-gray-600 max-w-2xl mx-auto">
            Located in the heart of Lagos, our restaurant offers a refined
            dining experience in an elegant setting. Easily accessible by car
            or ride services.
          </p>
        </div>

        {/* Map Container */}
        <div className="rounded-3xl overflow-hidden border border-gray-200 shadow-lg">
          <iframe src="https://www.google.com/maps?q=Lagos,Nigeria&output=embed" width="100%"
            height="450" loading="lazy" className="w-full h-112.5"
          ></iframe>
        </div>
      </div>
    </section>
  );
}