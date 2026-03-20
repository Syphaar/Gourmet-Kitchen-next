'use client';
import { FaUtensils, FaWineGlassAlt, FaMusic } from 'react-icons/fa';

const experiences = [
  {
    icon: <FaUtensils size={36} className="text-[#C9A227]" />,
    title: "Exquisite Cuisine",
    description: "Artfully crafted dishes using premium ingredients for an unforgettable taste experience."
  },
  {
    icon: <FaWineGlassAlt size={36} className="text-[#C9A227]" />,
    title: "Fine Wines",
    description: "A curated selection of rare and vintage wines to perfectly complement every meal."
  },
  {
    icon: <FaMusic size={36} className="text-[#C9A227]" />,
    title: "Ambient Elegance",
    description: "Live music and a luxurious atmosphere for a dining experience like no other."
  }
];

export default function SignatureExperience() {
  return (
    <section className="py-12 bg-white md:py-14 xl:py-16">
      <div className="max-w-7xl mx-auto px-5 text-center sm:px-7 lg:px-9">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-extrabold mb-6">
          Our Signature
          <span className="text-[#C9A227]"> Experiences </span>
        </h2>
        <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-8">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-white p-10 rounded-lg hover:shadow-lg transition-shadow duration-300">
              <div className="mb-4 flex justify-center">{exp.icon}</div>
              <h3 className="text-2xl font-semibold mb-2">{exp.title}</h3>
              <p className="">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
