// export default async function graphqlRequest(query) {
//   const url = "https://rifpersia.com/wp/";
//   //   const headers = { "Content-Type": "application/json" };

//   //   if (process.env.WORDPRESS_AUTH_REFRESH_TOKEN) {
//   //     headers[
//   //       "Authorization"
//   //     ] = `Bearer ${process.env.WORDPRESS_AUTH_REFRESH_TOKEN}`;
//   //   }

//   const res = await fetch(url, {
//     method: "POST",
//     body: JSON.stringify(query),
//   });

//   const resJson = await res.json();
//   return resJson;
// }
