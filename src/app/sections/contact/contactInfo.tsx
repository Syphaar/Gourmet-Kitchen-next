'use client';
import { HiOutlinePhone, HiOutlineMail, HiOutlineLocationMarker } from "react-icons/hi";

const contactDetails = [
  {
    icon: <HiOutlinePhone size={36} className="text-[#C9A227] mx-auto" />,
    title: "Phone",
    description: (
      <>
        Lagos: +234 800 000 0000 <br />
        Abuja: +234 800 111 0000 <br />
        Port Harcourt: +234 800 222 0000 <br />
        London: +44 20 0000 0000
      </>
    )
  },
  {
    icon: <HiOutlineMail size={36} className="text-[#C9A227] mx-auto" />,
    title: "Email",
    description: (
      <>
        Lagos: lagos@gourmet.com <br />
        Abuja: abuja@gourmet.com <br />
        Port Harcourt: portharcourt@gourmet.com <br />
        London: london@gourmet.com
      </>
    )
  },
  {
    icon: <HiOutlineLocationMarker size={36} className="text-[#C9A227] mx-auto" />,
    title: "Location",
    description: (
      <>
        24 Admiralty Way, Victoria Island, Lagos <br />
        12 Diplomatic Drive, Abuja <br />
        7 Aba Road, GRA Phase II, Port Harcourt <br />
        18 Berkeley Street, Mayfair, London
      </>
    )
  }
];

export default function ContactInfo() {
  return (
    <section className="py-12 md:py14 xl:py-16">
      <div className="max-w-7xl mx-auto px-5 text-center sm:px-7 lg:px-9">
        <h2 className="text-3xl md:text-4xl xl:text-5xl font-serif font-extrabold mb-6">
          Contact 
          <span className="text-[#C9A227]"> Information </span>
        </h2>

        <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-8">

          {contactDetails.map((item, index) => (
            <div key={index}
              className="bg-white p-4 rounded-lg hover:shadow-lg transition-shadow duration-300"
            >
              <div className="mb-2 flex justify-center"> {item.icon} </div>
              <h3 className="text-2xl font-semibold mb-3"> {item.title} </h3>
              <p className=""> {item.description} </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}