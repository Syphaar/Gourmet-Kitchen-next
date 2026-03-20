'use client'
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowUp } from "react-icons/fa";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <AnimatePresence>
      {visible && (
        <motion.button initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }} onClick={scrollToTop}
          className="fixed bottom-8 z-10 right-8 p-3 rounded-full border border-black bg-[#C9A227] text-white shadow-lg hover:bg-orange-600 transition-all"
        >
          <FaArrowUp />
        </motion.button>
      )}
    </AnimatePresence>
  );
}