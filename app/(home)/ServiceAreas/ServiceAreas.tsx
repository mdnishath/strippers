import React from "react";

const serviceAreas = [
  "Downtown LA",
  "Hollywood",
  "Beverly Hills",
  "Santa Monica",
  "West Hollywood",
  "Pasadena",
  "Long Beach",
  "Malibu",
  "Venice Beach",
  "Burbank",
  "Glendale",
  "Inglewood",
];

const ServiceAreas = () => {
  return (
    <section className="bg-[#282c33] text-[#ededed] py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-[#ff0000] mb-4">
          Los Angeles Service Areas
        </h2>
        <p className="opacity-90 mb-8 max-w-3xl mx-auto">
          Our elite strippers are available throughout{" "}
          <strong>Los Angeles</strong> and the surrounding areas. No matter
          where your event is, we bring the party to you!
        </p>

        {/* Service Areas Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {serviceAreas.map((area, index) => (
            <div
              key={index}
              className="bg-[#3a3f47] hover:bg-[#ff0000] transition-all duration-300 p-4 rounded-xl text-center font-semibold text-lg cursor-pointer"
            >
              {area}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceAreas;
