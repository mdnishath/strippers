import client from "@/lib/apollo-client";
import { GET_MALES } from "@/lib/queries/getPosts";
import FeaturedStrippersClient from "../(home)/FeaturedStrippers/FeaturedStrippersClient";

const StrippersPage = async () => {
  try {
    // Fetch the initial 9 stripper profiles
    const { data } = await client.query({
      query: GET_MALES,
      fetchPolicy: "no-cache",
    });
    if (!data) {
      throw new Error("No data received");
    }
    return (
      <section className="bg-[#282c33] text-[#ededed] py-16 px-6">
        <h2 className="text-4xl font-extrabold text-center mt-10">
          Featured Strippers in Los Angeles
        </h2>
        <p className="text-center text-lg mt-4">
          Discover the best strippers in California.
        </p>
        <FeaturedStrippersClient
          initialProfiles={data.males.nodes.slice(0, 9)}
          allProfiles={data.males.nodes}
        />
      </section>
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
};

export default StrippersPage;
