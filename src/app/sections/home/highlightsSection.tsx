'use client';
import { FaLeaf, FaUtensils, FaAward } from "react-icons/fa";

export default function HighlightsSection() {
  const items = [
    {
      icon: <FaLeaf className="text-[#C9A227] text-3xl" />,
      title: "Fresh Ingredients",
      text: "We use only the freshest ingredients sourced daily from trusted local farms."
    },
    {
      icon: <FaUtensils className="text-[#C9A227] text-3xl" />,
      title: "Expert Chefs",
      text: "Our chefs craft every dish with precision, creativity, and passion."
    },
    {
      icon: <FaAward className="text-[#C9A227] text-3xl" />,
      title: "Premium Quality",
      text: "Experience world-class cuisine and exceptional service in every visit."
    }
  ];

  return (
    <section className="py-12 bg-white md:py-14 xl:py-16">
      <div className="max-w-7xl mx-auto px-5 sm:px-7 lg:px-9">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {items.map((item, index) => (
            <div key={index} className="flex items-start gap-4 p-6 rounded-lg hover:shadow-lg transition duration-300">
              {/* Icon */}
              <div className="shrink-0"> {item.icon} </div>

              {/* Text */}
              <div>
                <h3 className="text-2xl font-semibold"> {item.title} </h3>
                <p className="mt-2 leading-relaxed"> {item.text} </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
