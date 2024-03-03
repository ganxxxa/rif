import { unstable_noStore as noStore } from "next/cache";
import Image from "next/image";

import parse from "html-react-parser";
import { FaClock } from "react-icons/fa";

async function fetchSinglePost(postId) {
  // noStore();
  const res = await fetch(
    `https://rifpersia.com/wpadmin/wp-json/wp/v2/posts/${postId}?_embed`
  );
  const post = await res.json();

  const processedPost = {
    id: post.id,
    title: post.title.rendered,
    content: post.content.rendered,
    date: new Date(post.date).toLocaleDateString(), // Format the date
    imageUrl: post._embedded?.["wp:featuredmedia"]?.[0]?.source_url || "", // Default image URL if needed
  };

  return processedPost;
}

const Post = async ({ postId }) => {
  const post = await fetchSinglePost(postId);

  if (!post) {
    return <div>Loading...</div>; // Show loading state
  }

  return (
    <article className="  w-full flex items-center gap-12 flex-col justify-center px-16 bg-[#F5F8FC] pt-32 text-black">
      <div className="w-full flex pt-6 my-6 items-center justify-between">
        <h1 className="text-4xl text-gray-900">{post.title}</h1>
        <div className="text-sm flex gap-2 text-gray-600">
          {post.date} <FaClock />
        </div>
      </div>
      {post.imageUrl && (
        <img src={post.imageUrl} alt={post.title} className="w-full h-auto" />
      )}

      <div className="post-content text-lg w-full flex flex-col text-start leading-relaxed tracking-wider text-gray-700 py-8 gap-3">
        {parse(post.content)}
      </div>
    </article>
  );
};

export default Post;
