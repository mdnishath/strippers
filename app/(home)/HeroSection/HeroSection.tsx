import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="relative w-full h-screen flex items-center justify-center bg-[#282c33] text-[#ededed]">
      {/* Background Image */}
      <div className="absolute inset-0 opacity-20">
        <Image
          src="/hero.webp" // Replace with your actual image
          alt="Los Angeles Strippers"
          layout="fill"
          objectFit="cover"
          quality={90}
          className="blur-none"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 md:px-12">
        <h1 className="text-4xl md:text-6xl font-extrabold">
          Los Angeles’ Hottest Male Strippers
        </h1>
        <p className="text-lg md:text-2xl mt-4 max-w-2xl mx-auto">
          Hire professional & experienced entertainers for your parties, events,
          and special nights.
        </p>

        {/* CTA Buttons */}
        <div className="mt-6 flex flex-col md:flex-row gap-4 justify-center">
          <Link
            href="/book-now"
            className="bg-[#ff0000] hover:bg-[#ff0000] text-white px-6 py-3 rounded-lg text-lg font-semibold transition"
          >
            Book Now
          </Link>
          <Link
            href="/contact"
            className="border border-[#ff0000] text-[#ff0000] hover:bg-[#ff0000] hover:text-white px-6 py-3 rounded-lg text-lg font-semibold transition"
          >
            Get a Quote
          </Link>
        </div>

        {/* Service Area Info */}
        <p className="mt-6 text-sm md:text-base font-light">
          Serving <strong>Hollywood, Beverly Hills, Downtown LA & more!</strong>
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
