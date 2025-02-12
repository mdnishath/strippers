import React from "react";
import Link from "next/link";

const FinalCTA = () => {
  return (
    <section className="bg-[#282c33] text-[#ededed] py-16 px-6 text-center">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold text-[#ff0000] mb-4">
          Ready for an Unforgettable Night?
        </h2>
        <p className="opacity-90 mb-6 text-lg">
          Book now to secure your favorite performer! Don’t wait—spots fill up
          fast in Los Angeles.
        </p>

        {/* CTA Buttons */}
        <div className="flex justify-center gap-4">
          <Link href="/book-now">
            <button className="bg-[#ff0000] hover:bg-[#ff0000] text-white font-bold py-3 px-6 rounded-xl text-lg shadow-md transition">
              Book Now
            </button>
          </Link>
          <Link href="/contact">
            <button className="bg-gray-700 hover:bg-gray-800 text-white font-bold py-3 px-6 rounded-xl text-lg shadow-md transition">
              Contact Us
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
