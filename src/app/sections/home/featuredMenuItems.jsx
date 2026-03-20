'use client';
import Image from 'next/image';
import Link from 'next/link';

// CLOUDINARY IMAGES
const img5 = "https://res.cloudinary.com/dlcoacdkb/image/upload/v1774005232/smoothies_tmtskx.jpg";
const img6 = "https://res.cloudinary.com/dlcoacdkb/image/upload/v1774005202/goatmeat_pepper_soup_b86ijs.jpg";
const img7 = "https://res.cloudinary.com/dlcoacdkb/image/upload/v1774005205/fried_fish_bhffqt.jpg";
const img8 = "https://res.cloudinary.com/dlcoacdkb/image/upload/v1774005206/melonsoup_shsqfo.jpg";

export default function FeaturedMenuCTA() {
const featuredMenuItems = [
  {
    name: 'Smoothies',
    description: 'Our smoothies are freshly blended with real fruits, giving you a cool and refreshing drink every time.',
    image: img5,
  },
  {
    name: 'Goatmeat Peppered Soup',
    description: 'We make our goatmeat pepper soup with well-seasoned meat and spices, served hot and full of flavour.',
    image: img6,
  },
  {
    name: 'Fried Fish',
    description: 'Our fried fish is well spiced and crispy, served hot with a taste that keeps you coming back.',
    image: img7,
  },
  {
    name: 'Melon Soup',
    description: 'We prepare our melon soup with fresh ingredients, giving it a rich taste that goes well with any swallow.',
    image: img8,
  },
];
  return (
    <section className="">
        <div className='bg-[#F1F3F5] py-12 md:py-14 xl:py-16'>
            <div className="max-w-7xl mx-auto px-5 sm:px-7 lg:px-9">
                {/* Section Header */}
                <div className="text-center mb-6">
                    <h2 className="text-3xl sm:text-4xl xl:text-5xl font-serif font-extrabold ">
                        Featured
                        <span className="text-[#C9A227]"> Menu </span>
                    </h2>
                    <p className="mt-2 text-lg max-w-2xl mx-auto sm:max-w-lg">
                          Enjoy our chef selected dishes, prepared to make every meal feel special.
                    </p>
                </div>

                {/* Menu Items */}
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8">
                {featuredMenuItems.map((item, index) => (
                    <div key={index} className="bg-white shadow-lg rounded-xl overflow-hidden hover:scale-105 transition-transform duration-300">
                        <div className="relative h-56 w-full">
                            <Image src={item.image} alt={item.name} fill className="object-cover" priority />
                            <div className="absolute inset-0 bg-black/30"></div>
                        </div>
                        <div className="p-6 text-center">
                            <h3 className="text-xl font-semibold text-gray-900">{item.name}</h3>
                            <p className="mt-2">{item.description}</p>
                        </div>
                    </div>
                ))}
                </div>
                <div className="flex sm:justify-center">
                    <Link href="/menu" className="inline-block mt-7 w-full sm:w-auto text-center bg-[#C9A227] text-white border-2 border-[#C9A227] px-10 py-3 font-semibold text-lg shadow-lg rounded-full hover:bg-[#b8931d] hover:border-[#b8931d] transition-all duration-300">
                        View Full Menu
                    </Link>
                </div>
            </div>
        </div>
    </section>
  );
}