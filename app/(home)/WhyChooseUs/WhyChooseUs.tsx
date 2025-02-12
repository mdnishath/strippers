const WhyChooseUs = () => {
  return (
    <section className="bg-[#1f2329] text-[#ededed] py-16 px-6">
      <div className="max-w-7xl mx-auto text-center">
        {/* Section Title */}
        <h2 className="text-4xl font-extrabold text-[#ff3b3b] mb-6">
          Why Choose Us?
        </h2>
        <p className="text-lg opacity-90 max-w-3xl mx-auto">
          Experience <strong>Los Angeles' most elite strippers</strong> for your
          private events. We provide <strong>top-rated</strong>,{" "}
          <strong>professional</strong>, and{" "}
          <strong>discreet entertainment</strong> for any occasion.
        </p>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
          {/* Single Benefit */}
          <div className="p-6 bg-[#282c33] rounded-xl shadow-lg hover:scale-105 transition">
            <h3 className="text-2xl font-bold text-[#ff3b3b]">
              Elite Performers
            </h3>
            <p className="opacity-80 mt-2">
              Only the <strong>top-rated, best-reviewed</strong> strippers in
              LA.
            </p>
          </div>

          <div className="p-6 bg-[#282c33] rounded-xl shadow-lg hover:scale-105 transition">
            <h3 className="text-2xl font-bold text-[#ff3b3b]">
              Discreet & Professional
            </h3>
            <p className="opacity-80 mt-2">
              Private, secure, and <strong>100% confidential</strong> services.
            </p>
          </div>

          <div className="p-6 bg-[#282c33] rounded-xl shadow-lg hover:scale-105 transition">
            <h3 className="text-2xl font-bold text-[#ff3b3b]">
              Custom Experiences
            </h3>
            <p className="opacity-80 mt-2">
              Personalize your event with <strong>themed performances</strong>.
            </p>
          </div>

          <div className="p-6 bg-[#282c33] rounded-xl shadow-lg hover:scale-105 transition">
            <h3 className="text-2xl font-bold text-[#ff3b3b]">
              Verified Reviews
            </h3>
            <p className="opacity-80 mt-2">
              See why customers <strong>love our services</strong> with real
              testimonials.
            </p>
          </div>

          <div className="p-6 bg-[#282c33] rounded-xl shadow-lg hover:scale-105 transition">
            <h3 className="text-2xl font-bold text-[#ff3b3b]">24/7 Booking</h3>
            <p className="opacity-80 mt-2">
              Book anytime, <strong>even last-minute</strong>, with instant
              confirmation.
            </p>
          </div>

          <div className="p-6 bg-[#282c33] rounded-xl shadow-lg hover:scale-105 transition">
            <h3 className="text-2xl font-bold text-[#ff3b3b]">
              Best Rates in LA
            </h3>
            <p className="opacity-80 mt-2">
              Get <strong>premium</strong> entertainment at{" "}
              <strong>affordable prices</strong>.
            </p>
          </div>
        </div>

        {/* CTA Button */}
        <div className="mt-10">
          <a
            href="/book-now"
            className="bg-[#ff0000] hover:bg-[#ff0000] text-white text-lg font-semibold px-8 py-4 rounded-lg shadow-lg transition"
          >
            Book Your Stripper Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
