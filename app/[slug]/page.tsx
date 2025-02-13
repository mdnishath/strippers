import { notFound } from "next/navigation";
import client from "@/lib/apollo-client";
import { GET_MALE_BY_SLUG } from "@/lib/queries/getSingleMale";
import { MaleProfile } from "@/types";
import Image from "next/image";
import { IoLocationOutline } from "react-icons/io5";
import { Accordion } from "@/components/ui/Accordion";
import Container from "@/components/shared/Container";

interface PageProps {
  params: { slug: string };
}

export default async function ProfilePage({ params }: PageProps) {
  // Extract slug from params
  const { slug } = params;

  // Check if slug is present
  if (!slug) {
    return notFound();
  }

  let profileData;
  try {
    // Fetch the data using GraphQL query
    const { data } = await client.query({
      query: GET_MALE_BY_SLUG,
      variables: { slug },
    });

    // Check if data exists
    if (!data?.maleBy) {
      return <h1 className="text-center text-2xl mt-10">Profile Not Found</h1>;
    }

    profileData = data.maleBy;
  } catch (error) {
    // Handle any errors that occur during the data fetch
    console.error("Error fetching profile data:", error);
    return <h1 className="text-center text-2xl mt-10">Error fetching data</h1>;
  }

  // Destructure the profile data
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
