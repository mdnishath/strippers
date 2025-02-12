// import Card from "@/components/males/Card";
import client from "@/lib/apollo-client";
import { GET_MALES } from "@/lib/queries/getPosts";
// import { MaleProfile } from "@/types";
import FeaturedStrippersClient from "./FeaturedStrippersClient"; // Client Component

const FeaturedStrippers = async () => {
  // Fetch only the first 9 profiles
  const { data } = await client.query({
    query: GET_MALES,
    fetchPolicy: "no-cache",
  });

  // Pass the first 9 profiles and the full list length to the client component
  return (
    <>
      <h2 className="text-4xl font-extrabold text-center my-10">
        Featured Strippers in Los Angeles
      </h2>

      <FeaturedStrippersClient
        initialProfiles={data.males.nodes.slice(0, 9)}
        allProfiles={data.males.nodes}
      />
    </>
  );
};

export default FeaturedStrippers;
