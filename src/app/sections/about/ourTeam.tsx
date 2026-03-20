'use client';
import Image from "next/image";

const chefImg1 = "https://res.cloudinary.com/dlcoacdkb/image/upload/v1774005202/chef-one_pgl2ul.jpg";
const chefImg2 = "https://res.cloudinary.com/dlcoacdkb/image/upload/v1774005203/chef-two_lxkccf.jpg";
const chefImg3 = "https://res.cloudinary.com/dlcoacdkb/image/upload/v1774005202/chef-three_xs5ita.jpg";

const teamMembers = [
  {
    name: "Chef Chukwudi",
    role: "Head Chef",
    description: "With over 18 years of experience, Chef Chukwudi leads our kitchen, blending traditional Nigerian flavors with modern techniques to craft unforgettable dishes.",
    image: chefImg1,
  },
  {
    name: "Chef Precious",
    role: "Pastry Chef",
    description: "Chef Aisha brings 12 years of expertise in creating desserts that are as beautiful as they are delicious, delighting our guests every day.",
    image: chefImg2,
  },
  {
    name: "Chef Emeka",
    role: "Sommelier & Culinary Advisor",
    description: "With 15 years of experience, Chef Emeka ensures every meal is perfectly paired with wines and beverages, enhancing the dining experience.",
    image: chefImg3,
  },
];

export default function OurTeam() {
  return (
    <section className="py-12 bg-[#F1F3F5] md:py-14 xl:py-16">
      <div className="max-w-7xl mx-auto px-5 text-center sm:px-7 lg:px-9">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-extrabold mb-6">
          Meet Our 
          <span className="text-[#C9A227]"> Culinary Team </span>
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div  key={index} 
              className="relative rounded-3xl overflow-hidden shadow-lg hover:shadow-3xl transition-shadow duration-500 bg-white"
            >
              <div className="relative h-72 sm:h-56 xl:h-72">
                <Image src={member.image} alt={member.name} fill className="object-cover object-center"/>
                <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent"></div>
              </div>
              <div className="p-6 text-left">
                <h3 className="text-2xl font-semibold text-[#1A1A1A]">{member.name}</h3>
                <p className="text-sm text-[#C9A227] font-medium mb-2">{member.role}</p>
                <p className="text-gray-700">{member.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}