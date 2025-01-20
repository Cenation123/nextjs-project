export default async function fetchMenuData() {
  const MoblieMenuData = {
    query: `query NewQuery {
          menuItems(where: {location: MOBILE_MENU, parentId: "0"}) {
            nodes {
              label
              path
              childItems {
                nodes {
                  label
                  path
                }
              }
            }
          }
        }`,
  };

  const response = await MenuData(MoblieMenuData);
  console.log(response);
}
