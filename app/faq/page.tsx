// app/faq/page.tsx
"use client";

import { useState } from "react";

const faqs = [
  {
    question: "How do I book a stripper for my event?",
    answer:
      "Booking is easy! Just browse our selection, choose your preferred performer, and contact us to confirm the date, time, and location.",
  },
  {
    question: "What areas do you serve in Los Angeles?",
    answer:
      "We cover all of Los Angeles, including Downtown LA, Hollywood, Santa Monica, Beverly Hills, and more.",
  },
  {
    question: "Are your strippers professional and experienced?",
    answer:
      "Yes! All our performers are highly skilled, professional, and trained to provide an unforgettable experience.",
  },
  {
    question: "Can I request specific outfits or performances?",
    answer:
      "Absolutely! Our performers offer a range of outfits and themed performances. Let us know your preferences when booking.",
  },
  {
    question: "How much does it cost to hire a stripper?",
    answer:
      "Prices vary depending on the performer, event type, and duration. Contact us for a personalized quote.",
  },
  {
    question: "Is tipping required?",
    answer:
      "Tipping is not mandatory, but it is highly appreciated as it encourages performers to give their best show!",
  },
];

const FAQPage = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-[#282c33] text-[#ededed] py-16 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Page Title */}
        <h1 className="text-4xl font-extrabold text-center mb-10">
          Frequently Asked Questions
        </h1>

        {/* FAQ List */}
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-[#1f2329] p-6 rounded-lg shadow-lg cursor-pointer"
              onClick={() => toggleFAQ(index)}
            >
              <h3 className="text-xl font-semibold flex justify-between items-center">
                {faq.question}
                <span className="text-red-500">
                  {openIndex === index ? "−" : "+"}
                </span>
              </h3>
              {openIndex === index && (
                <p className="text-gray-300 mt-2">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQPage;
