'use client';

const testimonials = [
  {
    name: "Sophia Williams",
    text: "Absolutely the best dining experience I've had in years. The ambience and food are both exceptional.",
  },
  {
    name: "Daniel Johnson",
    text: "Every dish is beautifully presented and tastes incredible. Highly recommend the steak!",
  },
  {
    name: "Olivia Smith",
    text: "Perfect place for special occasions. The service is top-tier and the atmosphere is luxurious.",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-white py-12 px-5 sm:px-7 lg:px-9 xl:px-12 md:py-14 xl:py-16">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl xl:text-5xl font-extrabold font-serif text-[#1A1A1A] mb-6 ">
          What Our
          <span className="text-[#C9A227]"> Guests Say </span>
        </h2>

        <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-8">
          {testimonials.map((review, index) => (
            <div key={index} className="border border-gray-200 p-8 rounded-xl shadow-sm">
              <p className="italic mb-3">
                {review.text}
              </p>
              <h4 className="font-semibold text-[#C9A227]">
                {review.name}
              </h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}