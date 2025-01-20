export default async function MenuMenu(query) {
    const url = "https://mohammeds128.sg-host.com/graphql";
    const headers = { "Content-Type": "application/json" };
    const res = await fetch(url, {
      headers,
      method: "POST",
      body: JSON.stringify(query),
    });
    const resJson = await res.json();
    // console.log(resJson);
  
    const jsondata = resJson.data.menuItems.nodes;
    return jsondata;
  }