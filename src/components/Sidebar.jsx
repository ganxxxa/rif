import React from "react";
import Link from "next/link";
import { unstable_noStore } from "next/cache";

async function fetchPosts() {
  unstable_noStore();
  const res = await fetch(
    "https://rifpersia.com/wpadmin/wp-json/wp/v2/posts?_embed&per_page=4&order=desc&orderby=date"
  );
  const posts = await res.json();
  return posts.map((post) => ({
    id: post.id,
    title: post.title.rendered,
    date: post.date.split("T")[0], // Format as needed
    content:
      post.excerpt.rendered.length > 43
        ? post.excerpt.rendered.substring(0, 70) + "..."
        : post.excerpt.rendered,

    imageUrl: post._embedded?.["wp:featuredmedia"]?.[0]?.source_url || "",
    postId: post.id,
  }));
}

const Sidebar = async () => {
  const posts = await fetchPosts();
  return (
    <div className="w-full min-w-40  rounded-lg  flex flex-col text-center items-start justify-center gap-2 p-4">
      <h2 className="text-md w-full text-gray-100 bg-slate-700 text-center font-semibold rounded-lg py-4">
        مقاله‌هایی که به تازگی منتشر شدند
      </h2>
      <div className="list-none text-center py-4 w-full ">
        {posts.map((post) => (
          <div
            key={post.id}
            className="my-2 w-64 overflow-hidden rounded-sm text-gray-100 hover:text-gray-300  hover:bg-slate-600 bg-slate-700 "
          >
            <Link
              className="flex w-full text-start justify-center items-center"
              href={`/categories/${post.slug}`}
            >
              <img
                alt={post.title}
                src={post.imageUrl}
                className="w-28 h-28 object-cover "
              />
              <p className=" px-3 text-sm cursor-pointer">{post.title}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
