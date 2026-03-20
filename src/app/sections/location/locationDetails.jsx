'use client';

export default function LocationDetails() {
  const locations = [
    {
      city: "Lagos — Victoria Island",
      description:
        "Our flagship restaurant sits in the heart of Victoria Island, offering an elegant dining experience surrounded by the energy of Lagos' most vibrant district. The space blends contemporary architecture with warm lighting and refined textures.",
      address: "24 Admiralty Way, Victoria Island, Lagos",
      hours: "Mon - Sat: 9am - 10pm | Sun: 12pm - 10pm",
      phone: "+234 800 000 0000",
      email: "lagos@gourmet.com",
    },
    {
      city: "Abuja — Central District",
      description:
        "Located in Abuja's central district, this restaurant offers a tranquil yet sophisticated setting ideal for business dinners and intimate evenings. Guests enjoy a curated menu with international and local influences.",
      address: "12 Diplomatic Drive, Abuja",
      hours: "Mon - sat: 9am - 11pm Daily | Sun: 4pm - 9pm",
      phone: "+234 800 111 0000",
      email: "abuja@gourmet.com",
    },
    {
      city: "Port Harcourt — GRA",
      description:
        "Our Port Harcourt location is designed to bring fine dining to the Garden City. With its elegant interior and curated tasting menu, the restaurant has become a destination for culinary enthusiasts.",
      address: "7 Aba Road, GRA Phase II",
      hours: "Mon - sat: 9am - 10:00pm | Sun: 4pm - 9pm",
      phone: "+234 800 222 0000",
      email: "portharcourt@gourmet.com",
    },
    {
      city: "London — Mayfair",
      description:
        "Our London location brings the restaurant's signature elegance to the prestigious Mayfair district. The dining room reflects a modern European aesthetic with subtle African influences, creating a distinctive global experience.",
      address: "18 Berkeley Street, Mayfair, London",
      hours: "Mon - Fri: 12pm - 11pm | Sat - Sun: 1pm - 12am",
      phone: "+44 20 0000 0000",
      email: "london@gourmet.com",
    },
  ];

  return (
    <main className="bg-white text-black pt-12 pb-2 md:pt-14 lg:pt-16">
      {/* HERO */}
      <section className=" ">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-3xl sm:text-4xl xl:text-5xl font-serif font-semibold mb-2">
            Our 
            <span className="text-[#C9A227]"> Locations </span>
          </h1>
          <p className="max-w-2xl mx-auto text">
            Each of our restaurants is thoughtfully designed to reflect the
            culture, elegance, and culinary excellence.
          </p>
        </div>
      </section>

      {/* LOCATIONS */}
      {locations.map((location, index) => (
        <section key={index}
          className={`pt-6 pb-6 mb-9 sm:mb-10 ${index < locations.length - 1 ? "border-b border-gray-200" : ""}`}
        >
          <div className="max-w-6xl mx-auto px-6 sm:px-7 lg:px-9">
            <div className="grid md:grid-cols-2 gap-8 md:gap-10">
              <div>
                <h2 className="text-2xl font-semibold mb-2">{location.city}</h2>
                <p className=" leading-relaxed">{location.description}</p>
              </div>
              <div className="space-y-6 text-sm">
                <div className="border-b border-gray-200 sm:pb-4">
                  <p className="font-semibold text-xl">Address</p>
                  <p className="">{location.address}</p>
                </div>
                <div className="border-b border-gray-200 sm:pb-4">
                  <p className="font-semibold text-xl">Opening Hours</p>
                  <p className="">{location.hours}</p>
                </div>
                <div className="border-b border-gray-200 sm:pb-4">
                  <p className="font-semibold text-xl">Phone</p>
                  <p className="">{location.phone}</p>
                </div>
                <div>
                  <p className="font-semibold text-xl">Email</p>
                  <p className="">{location.email}</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}
    </main>
  );
}