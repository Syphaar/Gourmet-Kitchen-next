'use client';
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { name: 'Home', path: '/' },
  { name: 'Menu', path: '/menu' },
  { name: 'About', path: '/about' },
  { name: 'Locations', path: '/locations' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isOpen && menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  return (
    <nav className="fixed top-0 w-full bg-white border-b border-gray-200 shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        {/* Logo as Link */}
        <Link href="/" className="text-2xl font-bold text-[#C9A227]">
          Gourmet Kitchen
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-6">
          {links.map(link => (
            <Link key={link.name} href={link.path}
              className={`hover:text-[#C9A227] font-semibold transition-colors duration-300 ${
                pathname === link.path ? 'text-[#C9A227] font-semibold' : 'text-black/90'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
            <svg className="h-6 w-6 text-black/90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Overlay to capture outside clicks */}
            <motion.div className="fixed inset-0 z-40" onClick={() => setIsOpen(false)} initial={{ opacity: 0 }} animate={{ opacity: 0.01 }}
              exit={{ opacity: 0 }} transition={{ duration: 0.3 }}
            />
            <motion.div ref={menuRef} initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }}
              className="md:hidden bg-white shadow-md overflow-hidden z-50 relative"
            >
              <div className="flex flex-col px-4 py-2 space-y-1">
                {links.map(link => (
                  <Link key={link.name} href={link.path} onClick={() => setIsOpen(false)}
                    className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300 hover:bg-orange-100 ${
                      pathname === link.path ? 'bg-orange-100 text-[#C9A227] font-semibold' : 'text-black/90'
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}