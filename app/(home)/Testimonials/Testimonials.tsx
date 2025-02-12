"use client";
import React from "react";
import { FaStar } from "react-icons/fa";

const testimonials = [
  {
    name: "Jessica R.",
    location: "Los Angeles, CA",
    review:
      "Absolutely incredible! The dancer was professional, fun, and made our bachelorette party unforgettable. Highly recommended!",
    rating: 5,
  },
  {
    name: "Mark T.",
    location: "Hollywood, CA",
    review:
      "Booked for a birthday party, and it was the best decision ever. High-energy performance and very respectful. 10/10!",
    rating: 5,
  },
  {
    name: "Vanessa L.",
    location: "Beverly Hills, CA",
    review:
      "Perfect experience from booking to performance. The strippers were classy, fun, and exactly what we were looking for!",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="bg-[#282c33] text-[#ededed] py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-[#ff0000] mb-4">
          What Our Customers Say
        </h2>
        <p className="opacity-90 mb-8 max-w-3xl mx-auto">
          See why people in Los Angeles trust us for the <strong>best</strong>
          private party entertainment.
        </p>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-[#3a3f47] p-6 rounded-xl shadow-md text-left"
            >
              {/* Star Rating */}
              <div className="flex mb-2">
                {Array.from({ length: testimonial.rating }, (_, i) => (
                  <FaStar key={i} className="text-yellow-400" />
                ))}
              </div>

              <p className="text-lg italic">{testimonial.review}</p>

              <div className="mt-4 text-sm opacity-80">
                — <span className="font-semibold">{testimonial.name}</span>,{" "}
                {testimonial.location}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
