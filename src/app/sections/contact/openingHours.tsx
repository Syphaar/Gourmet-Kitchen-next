'use client';

export default function OpeningHours() {

  const locations = [
    {
      city: "Lagos — Victoria Island",
      address: "24 Admiralty Way, Victoria Island, Lagos",
      hours: [
        { day: "Mon - Sat", time: "9am - 10pm" },
        { day: "Sun", time: "12pm - 10pm" },
      ]
    },
    {
      city: "Abuja — Central District",
      address: "12 Diplomatic Drive, Abuja",
      hours: [
        { day: "Mon - Sat", time: "9am - 11pm" },
        { day: "Sunday", time: "4pm - 9pm" },
      ]
    },
    {
      city: "Port Harcourt — GRA",
      address: "7 Aba Road, GRA Phase II, Port Harcourt",
      hours: [
        { day: "Mon - Sat", time: "9am - 10pm" },
        { day: "Sunday", time: "4pm - 9pm" },
      ]
    },
    {
      city: "London — Mayfair",
      address: "18 Berkeley Street, Mayfair, London",
      hours: [
        { day: "Mon - Fri", time: "12pm - 11pm" },
        { day: "Sat - Sun", time: "1pm - 12am" },
      ]
    },
  ];

  return (
    <section className="px-5 sm:px-7 lg:px-9">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl xl:text-5xl font-serif font-extrabold mb-2">
            Opening
            <span className="text-[#C9A227]"> Hours </span>
          </h2>
          <p className="max-w-xl mx-auto">
            Visit any of our locations and enjoy a welcoming dining experience.
          </p>
        </div>

        {/* Locations Grid */}
        <div className="grid md:grid-cols-2 gap-14">
          {locations.map((location, index) => (
            <div key={index}>
              <h3 className="text-xl font-semibold mb-1"> {location.city} </h3>
              <p className="text-gray-600 mb-6"> {location.address} </p>
              <div className="space-y-4">
                {location.hours.map((item, index) => (
                  <div key={index} className="flex justify-between border-b border-gray-300 pb-3">
                    <span>{item.day}</span>
                    <span>{item.time}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}