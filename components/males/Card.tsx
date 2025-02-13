import Image from "next/image";
import { MaleProfile } from "@/types";
import React from "react";
import { IoLocationOutline } from "react-icons/io5";
import Link from "next/link";
type CardProps = {
  profile: MaleProfile;
};

const Card: React.FC<CardProps> = ({ profile }) => {
  const { slug } = profile;
  const { fullName, profileImage } = profile.profile;
  const { city, state } = profile.identity;

  return (
    <div className="bg-[#1f2329] rounded-xl shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300">
      {/* Profile Image */}
      <Link href={`/${slug}`} className="block">
        <Image
          src={profileImage.node.mediaItemUrl}
          alt={profileImage.node.altText as string}
          width={400}
          height={500}
          className="w-full h-[400px] object-cover"
        />
      </Link>

      {/* Profile Info */}
      <div className="p-6 text-center">
        <h3 className="text-2xl font-bold">{fullName}</h3>
        <div className="flex items-center gap-2  justify-center">
          <IoLocationOutline className="text-xl text-[#ff3b3b]" />
          <p className="text-lg opacity-80 mt-1">
            {city}, {state}
          </p>
        </div>

        {/* CTA Button */}
        <Link
          href={`/${slug}`}
          className="mt-4 inline-block bg-[#ff3b3b] hover:bg-[#e62929] text-white px-6 py-3 rounded-lg font-semibold transition"
        >
          View Profile
        </Link>
      </div>
    </div>
  );
};

export default Card;

{
  /* <div
        className="text-gray-600"
        dangerouslySetInnerHTML={{ __html: bio }}
      ></div> */
}
