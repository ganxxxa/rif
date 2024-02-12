// components/BlogSection.js
import Link from "next/link";
import React from "react";

const BlogCard = ({ title, date, content, imageUrl }) => {
  return (
    <div className="bg-[#F8F7F5] m-6 rounded-lg  mb-4">
      <img
        src={imageUrl}
        alt={title}
        className=" rounded-md w-full mb-4 h-48 object-cover"
      />
      <p className="text-gray-600 mb-2">{date}</p>
      <p className="text-gray-800 font-bold text-lg mb-4">{content}</p>
      <a href="/" className="text-gray-800 text-sm  ">
        اطلاعات بیشتر
      </a>
    </div>
  );
};

const BlogSection = () => {
  // Migration and travel agency-themed blog posts with image URLs
  const blogPosts = [
    {
      id: 1,
      title: "Smooth Immigration Process: A Guide for Travelers",
      date: "April 5, 2024",
      content: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ",
      imageUrl: "/b1.jpg", // Replace with your image URL
    },
    {
      id: 2,
      title: "Top Destinations for Relocation in 2024",
      date: "May 12, 2024",
      content: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ",
      imageUrl: "/b2.jpg", // Replace with your image URL
    },
    {
      id: 3,
      title: "Navigating Cultural Changes: A Migration Success Story",
      date: "June 20, 2024",
      content: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ",
      imageUrl: "/b3.jpg", // Replace with your image URL
    },
  ];

  return (
    <section className="flex flex-col items-center bg-[#F8F7F5] justify-center pb-16 gap-10">
      <div className="uppercase font-semibold w-screen text-black text-center pt-24 text-4xl">
        آخرین مطالب بلاگ
      </div>
      <div className="flex justify-center gap-2 items-center h-full px-2">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {blogPosts.map((post) => (
            <BlogCard
              key={post.id}
              title={post.title}
              date={post.date}
              content={post.content}
              imageUrl={post.imageUrl}
            />
          ))}
        </div>
      </div>
      <button
        type="submit"
        className="bg-slate-800 hover:bg-slate-700 text-white font-medium py-3 px-4 rounded"
      >
        مشاهده همه‌ی مطالب
      </button>
    </section>
  );
};

export default BlogSection;
