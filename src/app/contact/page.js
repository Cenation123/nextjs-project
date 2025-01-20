"use client";
import { useEffect, useState } from "react";
import { heroSectionData } from "../../../lib/grapghql";

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
      const data = await heroSectionData(query);
      console.log(data);
      
      setSeo(data);
    };
    fetchSeoData();
  }, []);
  console.log(seo);

  return <>hello</>;
};
export default SeoData;