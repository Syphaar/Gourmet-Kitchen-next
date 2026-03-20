'use client';
import Image from "next/image";

const storyImg = "https://res.cloudinary.com/dlcoacdkb/image/upload/v1774005206/meal_uych6h.jpg";

export default function OurStory() {
  return (
    <section className="relative py-32 bg-black/80 text-white overflow-hidden">
      <Image src={storyImg} alt="Chef preparing gourmet dishes" fill
        className="object-cover object-center opacity-30"
      />
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center space-y-2">
        <h2 className="text-3xl sm:text-4xl xl:text-5xl font-serif font-extrabold">
          Our 
          <span className="text-[#C9A227]"> Story </span>
        </h2>
        <p className="text-lg leading-relaxed">
          Welcome to Gourmet Kitchen. We love what we do, and it shows in every dish we serve.  
          From the moment you walk in, you&apos;ll notice the little touches, the cozy corners, the thoughtful table settings, and the way the space feels just right.  
          Our goal is simple: to make you feel comfortable, enjoy your meal, and leave with a smile.  
          Everything we do here is about making your time with us easy, relaxing, and truly enjoyable.
        </p>
      </div>
    </section>
  );
}