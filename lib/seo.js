"use client"
import { useEffect, useState } from "react";
import { heroSectionData } from "./grapghql";  // Assuming this is a custom GraphQL data-fetching function

const SeoData = () => {
  const [seo, setSeo] = useState(null);

  useEffect(() => {
    const fetchSeoData = async () => {
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
        const data = await heroSectionData(query);
        console.log("Fetched Data:", data);
        setSeo(data);
      } catch (error) {
        console.error("Error fetching SEO data:", error);
      }
    };

    fetchSeoData();
  }, []);  // Empty dependency array means this runs only once when the component mounts

  return <>{seo && console.log(seo)}</>;  // Log data once fetched, or return some JSX to display the data
};

export default SeoData;
