// import Card from "@/components/males/Card";
import client from "@/lib/apollo-client";
import { GET_MALES } from "@/lib/queries/getPosts";
// import { MaleProfile } from "@/types";
import FeaturedStrippersClient from "./FeaturedStrippersClient"; // Client Component

const FeaturedStrippers = async () => {
  try {
    // Fetch only the first 9 profiles
    const { data } = await client.query({
      query: GET_MALES,
      fetchPolicy: "no-cache",
    });

    if (!data) {
      throw new Error("No data received");
    }
    return (
      <>
        <h2 className="text-4xl font-extrabold text-center my-10 text-white">
          Featured Strippers in Los Angeles
        </h2>

        <FeaturedStrippersClient
          initialProfiles={data.males.nodes.slice(0, 9)}
          allProfiles={data.males.nodes}
        />
      </>
    );
  } catch (error: any) {
    return (
      <section className="bg-[#282c33] text-[#ededed] py-16 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-extrabold mb-10">
            Featured Strippers in Los Angeles
          </h2>
          <p className="text-lg text-red-500">
            Failed to load data. Please try again later.
          </p>
        </div>
      </section>
    );
  }

  // Pass the first 9 profiles and the full list length to the client component
};

export default FeaturedStrippers;
