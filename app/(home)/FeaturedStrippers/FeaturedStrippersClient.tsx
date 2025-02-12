"use client";

import { useState } from "react";
import { MaleProfile } from "@/types";
import Card from "@/components/males/Card";

interface Props {
  initialProfiles: MaleProfile[];
  allProfiles: MaleProfile[];
}

const FeaturedStrippersClient: React.FC<Props> = ({
  initialProfiles,
  allProfiles,
}) => {
  const [visibleProfiles, setVisibleProfiles] =
    useState<MaleProfile[]>(initialProfiles);
  const [isLoading, setIsLoading] = useState(false);

  const loadMoreProfiles = () => {
    if (isLoading) return;
    setIsLoading(true);

    setTimeout(() => {
      setVisibleProfiles((prev) => [
        ...prev,
        ...allProfiles.slice(prev.length, prev.length + 9),
      ]);
      setIsLoading(false);
    }, 500);
  };

  return (
    <section className="bg-[#282c33] text-[#ededed] py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}

        {/* Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {visibleProfiles.map((stripper: MaleProfile) => (
            <Card key={stripper.id} profile={stripper} />
          ))}
        </div>

        {/* Load More Button */}
        {visibleProfiles.length < allProfiles.length && (
          <div className="flex justify-center mt-8">
            <button
              onClick={loadMoreProfiles}
              className={`py-2 px-6 rounded-full bg-[#ff0000] text-white font-semibold transition-all duration-300 hover:bg-red-600 ${
                isLoading ? "cursor-not-allowed opacity-50" : ""
              }`}
              disabled={isLoading}
            >
              {isLoading ? "Loading..." : "Load More"}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default FeaturedStrippersClient;
