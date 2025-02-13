// app/[slug]/page.tsx
import client from "@/lib/apollo-client";
import { GET_MALE_BY_SLUG } from "@/lib/queries/getSingleMale";
import { MaleProfile } from "@/types";
import Image from "next/image";
import { IoLocationOutline } from "react-icons/io5";
import { Accordion } from "@/components/ui/Accordion";
import Container from "@/components/shared/Container";
import { notFound } from "next/navigation";

interface PageProps {
  params: { slug: string };
}

export default async function ProfilePage({ params }: PageProps) {
  // Ensure 'slug' is available in params and await its value
  const { slug } = await params;

  if (!slug) {
    return notFound(); // Return a 404 if the slug is not found
  }

  let profileData;

  try {
    // Fetch data based on slug
    const { data } = await client.query({
      query: GET_MALE_BY_SLUG,
      variables: { slug }, // Directly use the awaited slug
    });

    // Check if the data is present
    if (!data?.maleBy) {
      return <h1 className="text-center text-2xl mt-10">Profile Not Found</h1>;
    }

    // Assign data to profileData
    profileData = data.maleBy;
  } catch (error) {
    // Handle any errors during data fetching
    console.error("Error fetching profile data:", error);
    return <h1 className="text-center text-2xl mt-10">Error fetching data</h1>;
  }

  // Extract profile details
  const { profileImage, fullName, profileState, profileOutfits } =
    profileData.profile;
  const { state, city } = profileData.identity;

  return (
    <div>
      <div className="max-w-screen-xl mx-auto">
        <Image
          src={profileImage.node.mediaItemUrl}
          alt={profileImage.node.altText as string}
          width={250}
          height={250}
          className="w-[250px] h-[250px] rounded-full mx-auto border border-accent"
        />
        <h3 className="text-center mt-4 text-2xl font-semibold">{fullName}</h3>
        <div className="flex items-center gap-4 justify-center mt-4">
          <IoLocationOutline className="text-2xl" />
          <p className="text-lg">
            {city}, {state}
          </p>
        </div>
      </div>
      <div className="mt-16">
        <Container>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Accordion title="My State">
                <div
                  className="text-gray-700"
                  dangerouslySetInnerHTML={{ __html: profileState }}
                />
              </Accordion>
            </div>
            <div>
              <Accordion title="My Outfits">
                <div
                  className="text-gray-700"
                  dangerouslySetInnerHTML={{ __html: profileOutfits }}
                />
              </Accordion>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}
