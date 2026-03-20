'use client';
import Image from "next/image";

const gallery1 = "https://res.cloudinary.com/dlcoacdkb/image/upload/v1774005232/smoothie-grid_knwxtf.jpg";
const gallery2 = "https://res.cloudinary.com/dlcoacdkb/image/upload/v1774005208/plantainchips-grid_pcxwg9.jpg";
const gallery3 = "https://res.cloudinary.com/dlcoacdkb/image/upload/v1774005205/fish-grid_dgzn3j.jpg";
const gallery4 = "https://res.cloudinary.com/dlcoacdkb/image/upload/v1774005207/menu-bg_obeyb8.jpg";
const gallery5 = "https://res.cloudinary.com/dlcoacdkb/image/upload/v1774005207/meat-bg_oahwf0.jpg";
const gallery6 = "https://res.cloudinary.com/dlcoacdkb/image/upload/v1774005203/chicken-grid_m1b054.jpg";

const galleryImages = [
  { src: gallery1, alt: "Fresh fruit smoothie served in a glass" },
  { src: gallery2, alt: "Crispy plantain chips served as a snack", span: "" },
  { src: gallery3, alt: "Grilled fish dish served with garnish", height: "h-[340px]", span: "lg:col-span-2" },
  { src: gallery4, alt: "Restaurant menu background with elegant design", height: "h-[340px]", span: "" },
  { src: gallery5, alt: "Grilled meat dish with rich flavors", height: "h-[340px]", span: "lg:col-span-2" },
  { src: gallery6, alt: "Roasted chicken dish plated beautifully", height: "h-[340px]", span: "" },
];

export default function GalleryGridAlt() {
  return (
    <section className="py-12 md:py-14 xl:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-7 lg:px-9">
        <h2 className="text-3xl sm:text-4xl xl:text-5xl font-serif font-extrabold text-[#1A1A1A] text-center sm:mb-4 md:mb-6">
          Moments From 
          <span className="text-[#C9A227]"> Our Restaurant </span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className={`relative w-full ${image.height} ${image.span} rounded-xl lg:rounded-3xl overflow-hidden shadow-lg`}
            >
              <Image src={image.src} alt={image.alt}
                fill className="object-cover transition-transform duration-500 hover:scale-105"
              />

              <div className="absolute inset-0 bg-black/20"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
