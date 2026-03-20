'use client';
import Image from "next/image";

// CLOUDINARY IMAGE
const storyImg = "https://res.cloudinary.com/dlcoacdkb/image/upload/v1774005206/meal_uych6h.jpg";

export default function ForQuestions() {
  return (
    <section className="relative py-32 bg-black/80 text-white overflow-hidden">
      <Image src={storyImg} alt="Chef preparing gourmet dishes"
        fill className="object-cover object-center opacity-30"
      />
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center space-y-6">
        <h2 className="text-4xl md:text-5xl font-serif font-extrabold">
          Contact Us
        </h2>
        <p className="text-lg md:text-xl leading-relaxed">
          We would love to hear from you. Whether it&apos;s a reservation,
          private event, or special request.
        </p>
      </div>
    </section>
  );
}
