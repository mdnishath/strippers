// app/about/page.tsx
import Image from "next/image";

const AboutPage = () => {
  return (
    <section className="bg-[#282c33] text-[#ededed] py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Page Title */}
        <h1 className="text-4xl font-extrabold text-center mb-10">About Us</h1>

        {/* Hero Section */}
        <div className="flex flex-col md:flex-row items-center gap-10">
          <div className="md:w-1/2">
            <Image
              src="/Bane-1.webp" // Replace with actual image
              alt="About Us"
              width={500}
              height={400}
              className="rounded-lg"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-3xl font-semibold mb-4">
              The #1 Strippers Agency in Los Angeles
            </h2>
            <p className="text-gray-300">
              Welcome to the{" "}
              <strong>premier stripper agency in Los Angeles</strong>, offering
              the most talented and professional entertainers for all types of
              events. Whether you're planning a
              <strong>bachelor party, private event, or a fun night out</strong>
              , we bring the best experience to you.
            </p>
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-semibold text-center mb-8">
            Why Choose Us?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-[#1f2329] p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-red-500">
                🔥 Top Performers
              </h3>
              <p className="text-gray-300 mt-2">
                Our entertainers are handpicked for their talent,
                professionalism, and ability to bring the best energy to your
                party.
              </p>
            </div>

            <div className="bg-[#1f2329] p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-red-500">
                ✅ 100% Discreet
              </h3>
              <p className="text-gray-300 mt-2">
                Your privacy is our priority. We ensure a professional and
                secure booking process.
              </p>
            </div>

            <div className="bg-[#1f2329] p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-red-500">
                🎉 Unforgettable Experience
              </h3>
              <p className="text-gray-300 mt-2">
                We guarantee an experience that is fun, exciting, and
                unforgettable for you and your guests.
              </p>
            </div>
          </div>
        </div>

        {/* Our Mission Section */}
        <div className="mt-16 text-center">
          <h2 className="text-3xl font-semibold mb-6">Our Mission</h2>
          <p className="text-gray-300 max-w-3xl mx-auto">
            We aim to provide{" "}
            <strong>the best entertainment services in Los Angeles</strong>
            with a focus on{" "}
            <strong>quality, professionalism, and customer satisfaction</strong>
            . Our goal is to ensure that every event we are a part of is an
            unforgettable experience.
          </p>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <h2 className="text-3xl font-semibold mb-6">
            Book the Best Strippers Today!
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-6">
            Ready to make your event <strong>unforgettable</strong>? Book now
            and get the best strippers in Los Angeles for your party.
          </p>
          <a
            href="/contact"
            className="bg-red-600 text-white py-3 px-6 rounded-lg text-lg hover:bg-red-700"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
