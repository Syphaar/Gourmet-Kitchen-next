'use client';
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaTwitter, FaWhatsapp, FaYoutube, FaTiktok } from 'react-icons/fa';
import { HiOutlineLocationMarker, HiOutlinePhone, HiOutlineClock } from 'react-icons/hi';
import Image from 'next/image';

// CLOUDINARY IMAGES
const galleryImages = [
  "https://res.cloudinary.com/dlcoacdkb/image/upload/v1774005204/jollof_rice_oodehb.jpg",
  "https://res.cloudinary.com/dlcoacdkb/image/upload/v1774005203/coconut_rice_r1znsr.jpg",
  "https://res.cloudinary.com/dlcoacdkb/image/upload/v1774005205/fried_fish_bhffqt.jpg",
  "https://res.cloudinary.com/dlcoacdkb/image/upload/v1774005202/beef_cbept1.jpg",
];

const links = [
  { name: 'Home', path: '/' },
  { name: 'Menu', path: '/menu' },
  { name: 'About', path: '/about' },
  { name: 'Locations', path: '/locations' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'Contact', path: '/contact' },
];

export default function Footer() {
  return (
    <footer className="bg-black/90 text-white">
      <div className="px-5 pt-12 grid grid-cols-1 xl:grid-cols-4 gap-8 sm:px-7 lg:px-9 xl:px-12 md:pt-14 xl:pt-16 2xl:max-w-7xl 2xl:mx-auto">
        <div className="">
            <div className="flex flex-col items-center md:items-start space-y-4">
                <h2 className="text-2xl font-bold text-[#C9A227]">Gourmet kitchen</h2>
                <p className="text-sm text-gray-300 text-center md:text-left">
                    Gourmet Kitchen brings exceptional dining experiences with fresh flavors, a welcoming atmosphere, attentive service, and a touch of refined luxury you’ll remember long after your visit.
                </p>
            </div>
        </div>

        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3 xl:col-span-3">
            <div className="flex flex-col items-center md:items-start space-y-2">
            <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
            <ul className="flex flex-col space-y-2 text-gray-300">
                {links.map(link => (
                    <li key={link.name}>
                        <Link href={link.path} className="hover:text-[#C9A227] transition-colors duration-300">
                            {link.name}
                        </Link>
                    </li>
                ))}
            </ul>
            </div>

            <div className="flex flex-col items-center md:items-start space-y-2">
                <h3 className="text-lg font-semibold mb-2">Popular Dishes</h3>
                <div className="grid grid-cols-2 gap-2">
                    {galleryImages.map((src, index) => (
                    <div key={index}
                        className="w-20 h-20 rounded-md overflow-hidden hover:scale-105 transition-transform duration-300"
                    >
                        <Image src={src} alt={`Dish ${index + 1}`} width={80} height={80} className="object-cover w-full h-full" />
                    </div>
                    ))}
                </div>
            </div>

            <div className="flex flex-col items-center space-y-7 md:items-start">
                <div className="flex flex-col space-y-2 text-sm">
                    <h3 className="text-lg font-semibold text-center md:text-start">Contact & Info</h3>
                    <p className="flex items-center space-x-2">
                        <HiOutlineClock size={18} className="text-[#C9A227]" />
                    <span className="text-gray-300">Mon - Sun: 8am - 10pm</span>
                    </p>
                    <p className="flex items-center space-x-2">
                        <HiOutlineLocationMarker size={18} className="text-[#C9A227]" />
                    <span className="text-gray-300">123 Gourmet St, Food City</span>
                    </p>
                    <p className="flex items-center space-x-2">
                        <HiOutlinePhone size={18} className="text-[#C9A227]" />
                    <span className="text-gray-300">+234 805 456 7890</span>
                    </p>
                </div>

                <div className="flex flex-col items-center md:items-start space-y-2">
                    <h3 className="text-lg font-semibold text-center md:text-start">Follow Us</h3>
                    <div className="flex space-x-4 text-gray-300">
                    <a href="#" className="hover:text-[#C9A227] transition-colors duration-300">
                        <FaFacebookF size={20} />
                    </a>
                    <a href="#" className="hover:text-[#C9A227] transition-colors duration-300">
                        <FaInstagram size={20} />
                    </a>
                    <a href="#" className="hover:text-[#C9A227] transition-colors duration-300">
                        <FaTwitter size={20} />
                    </a>
                    <a href="#" className="hover:text-[#C9A227] transition-colors duration-300">
                        <FaWhatsapp size={20} />
                    </a>
                    <a href="#" className="hover:text-[#C9A227] transition-colors duration-300">
                        <FaTiktok size={20} />
                    </a>
                    <a href="#" className="hover:text-[#C9A227] transition-colors duration-300">
                        <FaYoutube size={20} />
                    </a>
                    </div>
                </div>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 py-4 mt-8">
        <p className="text-center text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} Gourmet Restaurant. All rights reserved.
        </p>
      </div>
    </footer>
  );
}