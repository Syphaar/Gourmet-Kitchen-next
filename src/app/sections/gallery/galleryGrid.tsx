'use client';
import Image from "next/image";

const gallery1 = "https://res.cloudinary.com/dlcoacdkb/image/upload/v1774005240/spicy_chicken_zqaxu3.jpg";
const gallery2 = "https://res.cloudinary.com/dlcoacdkb/image/upload/v1774005240/suya_zptgue.jpg";
const gallery3 = "https://res.cloudinary.com/dlcoacdkb/image/upload/v1774005231/rasberrysmoothie-grid_dnpvcs.jpg";
const gallery4 = "https://res.cloudinary.com/dlcoacdkb/image/upload/v1774005233/spag-grid_xbtvay.jpg";
const gallery5 = "https://res.cloudinary.com/dlcoacdkb/image/upload/v1774005205/friedrice-grid_bielwi.jpg";
const gallery6 = "https://res.cloudinary.com/dlcoacdkb/image/upload/v1774005205/fish_q6nfgd.jpg";

const galleryImages = [
  { src: gallery1, alt: "Dining area with luxurious setup", span: "md:col-span-2" },
  { src: gallery2, alt: "Chef plating a gourmet dish", span: "" },
  { src: gallery3, alt: "Elegant wine display", span: "" },
  { src: gallery4, alt: "Private dining experience", span: "" },
  { src: gallery5, alt: "Live music performance", span: "md:col-span-2" },
  { src: gallery6, alt: "Dessert masterpiece", span: "" },
];

export default function GalleryGrid() {
  return (
    <section className="py-12 md:py-14 xl:py-16">
      <div className="max-w-7xl mx-auto px-5 sm:px-7 lg:px-9">
        <h2 className="text-3xl sm:text-4xl xl:text-5xl font-serif font-extrabold text-[#1A1A1A] mb-6 text-center">
          Our 
          <span className="text-[#C9A227]"> Gallery </span>
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {galleryImages.map((img, index) => (
            <div key={index}
              className={`relative rounded-xl lg:rounded-3xl overflow-hidden shadow-xl ${img.span}`}
            >
              <Image src={img.src} alt={img.alt} width={600}
                height={600}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              />

              <div className="absolute inset-0 bg-black/20"></div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}