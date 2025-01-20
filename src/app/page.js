import { heroSectionData } from "../../lib/grapghql"; 
import HomePage from "./_homePage/page";


export const metadata = async () => {
 
  const query = {
    query: `query NewQuery {
      page(id: "26", idType: DATABASE_ID) {
        seo {
          title
          fullHead
          metaDesc
          schema {
            raw
          }
        }
      }
    }`,
  };

  try {
    const response = await heroSectionData(query);
    console.log(response);

    const seo = response?.seo || {};

    return {
      title: seo.title || "Default Title", 
      description: seo.metaDesc || "Default Description",
      fullHead: seo.fullHead || "",
    };
  } catch (error) {
    console.error("Error fetching SEO data:", error);
    return {
      title: "Default Title",
      description: "Default Description",
    };
  }
};

export default async function Home() {
  return (
    <>
      <HomePage />
    </>
  );
}
