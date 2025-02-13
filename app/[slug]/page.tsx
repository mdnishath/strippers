import client from "@/lib/apollo-client";
import { GET_MALE_BY_SLUG } from "@/lib/queries/getSingleMale";

import { Card, CardContent } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import Image from "next/image";
import { MaleProfile } from "@/types";
import { IoLocationOutline } from "react-icons/io5";
import { Accordion } from "@/components/ui/Accordion";
import Container from "@/components/shared/Container";

export default async function ProfilePage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = await Promise.resolve(params);

  const { data } = await client.query({
    query: GET_MALE_BY_SLUG,
    variables: { slug },
  });

  if (!data?.maleBy) {
    return <h1 className="text-center text-2xl mt-10">Profile Not Found</h1>;
  }

  const profile = data.maleBy as MaleProfile;
  const { profileImage, fullName, profileState, profileOutfits } =
    profile.profile;
  const { state, city } = profile.identity;
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
