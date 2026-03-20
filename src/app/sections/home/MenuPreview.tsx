'use client';

import Image from "next/image";
import Link from "next/link";

// CLOUDINARY IMAGES
const img4 = "https://res.cloudinary.com/dlcoacdkb/image/upload/v1774005204/jollof_rice_oodehb.jpg";
const img5 = "https://res.cloudinary.com/dlcoacdkb/image/upload/v1774005203/coconut_rice_r1znsr.jpg";
const img6 = "https://res.cloudinary.com/dlcoacdkb/image/upload/v1774005205/fried_rice_wncrfv.jpg";

const dishes = [
  {
    name: "Jollof Rice",
    description: "Our jollof rice is cooked in a rich tomato sauce with just the right spices, giving it that familiar taste everyone enjoys.",
    image: img4,
  },
  {
    name: "Coconut Rice",
    description: "This coconut rice is made with fresh coconut milk, giving it a smooth texture and a light flavor that’s easy to enjoy.",
    image: img5,
  },
  {
    name: "Fried Rice",
    description: "Our fried rice is prepared with vegetables and simple seasoning, bringing out a balanced taste that goes well with any side.",
    image: img6,
  },
];

export default function MenuPreview() {
  return (
    <section className="bg-[#F1F3F5] py-12 px-5 sm:px-7 lg:px-9 xl:px-12 md:py-14 xl:py-16 ">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl xl:text-5xl font-extrabold font-serif text-[#1A1A1A] mb-6">
          Signature
          <span className="text-[#C9A227]"> Dishes </span>
        </h2>
        
        <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-8">
          {dishes.map((dish) => (
            <div key={dish.name} className="bg-white rounded-xl overflow-hidden hover:scale-105 shadow-xl transition-transform duration-300">
              <div className="relative h-60 w-full">
                <Image src={dish.image} alt={dish.name} fill className="object-cover" />
              </div>
              <div className="py-5 px-7">
                <h3 className="text-xl font-semibold text-[#1A1A1A]">
                  {dish.name}
                </h3>
                <p className="mt-1 max-w-2xl mx-auto">
                    {dish.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <Link href="/menu"
          className="inline-block mt-7 w-full sm:w-auto font-semibold capitalize bg-[#C9A227] border-2 border-[#C9A227] text-white px-8 py-3 md:px-10 md:py-4 text-lg shadow-lg rounded-full hover:bg-[#b8931d] hover:border-[#b8931d] transition-all duration-300"
        >
          View Full Menu
        </Link>
      </div>
    </section>
  );
}