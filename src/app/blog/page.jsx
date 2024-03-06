// import { unstable_noStore as noStore } from "next/cache";
// import { BlogCard } from "@/components/Blog";
// import Image from "next/image";
// import Sidebar from "@/components/Sidebar";

// async function fetchPosts() {
//   noStore();
//   const res = await fetch(
//     "https://rifpersia.com/blog/wp-json/wp/v2/posts?_embed&orderby=date"
//   );

//   const posts = await res.json();
//   return posts.map((post) => ({
//     id: post.id,
//     title: post.title.rendered,
//     date: post.date.split("T")[0], // Format as needed
//     content:
//       post.excerpt.rendered.length > 60
//         ? post.excerpt.rendered.substring(0, 60) + "..."
//         : post.excerpt.rendered,

//     imageUrl: post._embedded?.["wp:featuredmedia"]?.[0]?.source_url || "",
//     postId: post.id,
//   }));
// }

// const page = async () => {
//   const posts = await fetchPosts();
//   return (
//     <div className="flex  items-center gap-8  bg-[#F5F8FC] font-bold justify-center w-full pt-36 h-full px-4 sm:px-8 lg:px-16">
//       <div className="grid grid-cols-1 text-justify md:grid-cols-2 lg:grid-cols-3 gap-4 text-[#0B2538]">
//         {posts.map((post) => (
//           <BlogCard
//             key={post.id}
//             title={post.title}
//             date={post.date}
//             postId={post.postId}
//             content={post.content}
//             imageUrl={post.imageUrl}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default page;
