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
  // Directly use params.slug without awaiting it
  const { slug } = params;

  if (!slug) {
    return notFound(); // Return 404 if no slug is present
  }

  let profileData;

  try {
    // Fetch data based on slug
    const { data } = await client.query({
      query: GET_MALE_BY_SLUG,
      variables: { slug },
    });

    // If no profile is found, return a message
    if (!data?.maleBy) {
      return <h1 className="text-center text-2xl mt-10">Profile Not Found</h1>;
    }

    // Assign fetched data to profileData
    profileData = data.maleBy;
  } catch (error) {
    // Handle any errors that may occur during data fetching
    console.error("Error fetching profile data:", error);
    return <h1 className="text-center text-2xl mt-10">Error fetching data</h1>;
  }

  // Destructure profile details
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
