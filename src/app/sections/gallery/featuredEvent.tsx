'use client';
import Image from "next/image";

// ✅ CLOUDINARY IMAGE
const eventImg = "https://res.cloudinary.com/dlcoacdkb/image/upload/v1774005206/meal_uych6h.jpg";

export default function FeaturedEvent() {
  return (
    <section className="relative py-32 bg-black/80 text-white overflow-hidden">
      <Image src={eventImg} alt="Exclusive private event"
        fill className="object-cover object-center opacity-30"
      />
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center space-y-4">
        <h2 className="text-3xl md:text-4xl xl:text-5xl font-serif font-extrabold">
          Signature 
          <span className="text-[#C9A227]"> Events </span>
        </h2>
        <p className="text-lg leading-relaxed">
          Our gallery highlights the dishes we prepare and the moments guests enjoy while dining with us.
        </p>
      </div>
    </section>
  );
}