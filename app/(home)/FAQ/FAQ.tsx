"use client";
import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const faqs = [
  {
    question: "How do I book a stripper in Los Angeles?",
    answer:
      "Booking is simple! Just browse our strippers, choose your favorite, and fill out our quick online booking form. We’ll confirm your reservation instantly!",
  },
  {
    question: "What locations do you serve in LA?",
    answer:
      "We provide entertainment services across Los Angeles, including Hollywood, Beverly Hills, Santa Monica, Downtown LA, and surrounding areas.",
  },
  {
    question: "Can I request a specific costume or theme?",
    answer:
      "Absolutely! Our performers offer a range of outfits, from firefighters to businessmen. Let us know your preference while booking.",
  },
  {
    question: "Are the performances private and discreet?",
    answer:
      "Yes, all performances are 100% private and confidential. We prioritize professionalism and discretion for all our clients.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept major credit cards, PayPal, and cash payments upon arrival. Secure online transactions ensure your booking is safe and hassle-free.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-[#282c33] text-[#ededed] py-16 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-[#ff0000] mb-4">
          Frequently Asked Questions
        </h2>
        <p className="opacity-90 mb-8">
          Got questions? We have answers! Here are the most common queries we
          receive.
        </p>

        {/* FAQ Accordion */}
        <div className="space-y-4 text-left">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-[#3a3f47] p-4 rounded-lg cursor-pointer"
              onClick={() => toggleFAQ(index)}
            >
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold">{faq.question}</h3>
                <FaChevronDown
                  className={`transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </div>
              {openIndex === index && (
                <p className="mt-2 opacity-80">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
