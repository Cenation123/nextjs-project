
const url = "https://mohammeds128.sg-host.com/graphql";
const headers = { "Content-Type": "application/json" };

// Helper function to fetch data from GraphQL endpoint
async function fetchData(query) {
  const res = await fetch(url, {
    headers,
    method: "POST",
    body: JSON.stringify(query),
  });

  const resJson = await res.json();
// console.log(resJson);

  return resJson.data;
}

// Function to fetch all posts


// Function to fetch header menu
export async function MenuData(query) {
  const data = await fetchData(query);
  // console.log(data);
  
  return data.menuItems.nodes; // Assuming the query returns menuItems with nodes
}

// Fetching hero section and accordion data
export async function heroSectionData(query) {
  const data = await fetchData(query);
  return data.page; // Assuming the query returns a single page (for hero section)
}

// Fetching data from the option page
export async function optionPage(clientSpeak) {
  const data = await fetchData(clientSpeak);
  // console.log(data);
  
  return data.option; // Assuming the query returns option data
}
