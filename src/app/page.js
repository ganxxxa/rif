"use client";
import { useState, useEffect } from "react";
import BlogSection from "@/components/Blog";
import ConsultationComponent from "@/components/Consultation";
import Form from "@/components/Form";
import SliderComponent from "@/components/Slider";
import Increament from "@/components/Increament";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  // State to track if the video is loaded
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  return (
    <main>
      <section className="relative max-w-screen h-screen overflow-hidden">
        <div className="relative w-screen h-screen">
          {!isVideoLoaded && (
            <Image
              src="/lazy.jpg"
              alt="Background"
              layout="fill"
              objectFit="cover"
              className="h-full w-full object-cover" // Ensuring the image covers the whole section
            />
          )}
          <div className="text-white absolute h-full w-full flex sm:items-start items-center text-center sm:text-start justify-center flex-col gap-10 px-8 md:px-24 xl:px-40">
            <h2 className="font-semibold z-10 text-5xl sm:text-6xl">
              تردد در دنیایی بدون مرز!
            </h2>
            <p className="sm:text-xl text-lg z-10 leading-relaxed sm:w-1/2">
              <span className="text-pink-500 font-semibold"> ر.ی.ف پرشیا </span>
              با ارائه‌ي راه‌کارهای متناسب، شما را از مهاجرت دائم به کشوری دیگر
              بی‌نیاز می‌کند.{" "}
            </p>
            <Link className="z-10" href="/">
              <button
                type="button"
                className="border-2 text-md py-2 px-7 rounded-lg"
              >
                اطلاعات بیشتر
              </button>
            </Link>
          </div>
          <video
            src="/video.mp4"
            autoPlay
            muted
            loop
            className="h-full w-full object-cover"
            onLoadedData={() => setIsVideoLoaded(true)} // Set the video as loaded
          />
          <div className="absolute inset-0 bg-[#0b2538] bg-gradient-to-tl from-[#0b2538] via-[#0b2538a4] from-10% via-50% to-80% to-[#ffffff6c] opacity-55 "></div>
        </div>
      </section>
      <SliderComponent />
      <Increament />
      <Form />
      <BlogSection />
    </main>
  );
}
