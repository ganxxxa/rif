"use client";
import React, { useState, useEffect } from "react";
import { unstable_noStore as noStore } from "next/cache";
import Image from "next/image";
import Link from "next/link";
import jalaali from "jalaali-js";

async function fetchPosts() {
  noStore();
  const res = await fetch(
    "https://rifpersia.com/blog/wp-json/wp/v2/posts?_embed&per_page=3&order=desc&orderby=date"
  );
  const posts = await res.json();

  return posts.map((post) => ({
    id: post.id,
    title: post.title.rendered,
    date: post.date.split("T")[0],

    content:
      post.excerpt.rendered.length > 43
        ? post.excerpt.rendered.substring(0, 70) + "..."
        : post.excerpt.rendered,

    imageUrl: post._embedded?.["wp:featuredmedia"]?.[0]?.source_url || "",
    postId: post.link,
  }));
}

export const BlogCard = ({ title, date, imageUrl, postId }) => {
  function convertToPersianNum(num) {
    // Define the mapping from Arabic to Persian numerals
    const persianNumbers = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];

    // Convert the input number to a string (to handle large numbers safely)
    const numStr = num.toString();

    // Replace each digit with its Persian equivalent
    const persianNumStr = numStr
      .split("")
      .map((digit) => persianNumbers[parseInt(digit, 10)] || digit)
      .join("");

    return persianNumStr;
  }
  const convertToPersianDate = (gregorianDate) => {
    // Assuming gregorianDate is in the format "YYYY-MM-DD"
    const [year, month, day] = gregorianDate.split("-").map(Number);

    // Convert Gregorian date to Jalali
    const { jy, jm, jd } = jalaali.toJalaali(year, month, day);

    // Format the Jalali date as a string, you might want to adjust formatting based on your needs
    // For instance, adding leading zeros to day and month if they are less than 10
    const formattedJalaliDate = `${jy}-${jm < 10 ? `0${jm}` : jm}-${
      jd < 10 ? `0${jd}` : jd
    }`;

    return formattedJalaliDate;
  };
  const persianDate = convertToPersianDate(date.split("T")[0]);
  const persianDateNum = convertToPersianNum(persianDate);
  return (
    <div className="my-2 py-8 rounded-lg mb-4">
      {imageUrl && (
        <a href={`${postId}`}>
          <div className="relative  w-full mb-4 h-48">
            <Image
              src={imageUrl}
              alt={title}
              className="rounded-md object-cover"
              fill
            />
          </div>
        </a>
      )}
      <p className="text-gray-600 mb-2">{persianDateNum}</p>
      <div className="h-28 py-2 flex justify-between flex-col">
        <div
          className="text-gray-800 font-bold text-lg pl-4 mb-4"
          dangerouslySetInnerHTML={{ __html: title }}
        />
        <a href={`${postId}`} className="text-gray-800 font-semibold text-sm">
          اطلاعات بیشتر
        </a>
      </div>
    </div>
  );
};

function BlogSection() {
  const [blogPosts, setBlogPosts] = useState([]);

  useEffect(() => {
    fetchPosts().then(setBlogPosts);
  }, []);
  return (
    <section className="flex flex-col items-center bg-[#F5F8FC] justify-center pb-16 px-4 sm:px-12 lg:px-24">
      <div className="uppercase font-semibold w-screen text-[#0B2538] text-center py-24 text-4xl">
        آخرین مطالب بلاگ
      </div>
      <div className="flex justify-center gap-2 items-center h-full px-2">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {blogPosts.map((post) => (
            <BlogCard
              key={post.id}
              title={post.title}
              date={post.date}
              postId={post.postId}
              content={post.content}
              imageUrl={post.imageUrl}
            />
          ))}
        </div>
      </div>
      <a href="https://rifpersia.com/blog">
        <button className="bg-slate-800 hover:bg-slate-700 text-white font-medium py-3 my-10 px-4 rounded">
          مشاهده همه‌ی مطالب
        </button>
      </a>
    </section>
  );
}

export default BlogSection;
