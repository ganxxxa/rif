"use client";
import BlogSection from "@/components/Blog";
import ConsultationComponent from "@/components/Consultation";
import Form from "@/components/Form";
import SliderComponent from "@/components/Slider";
import Increament from "@/components/increament";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <section className="relative w-screen h-screen overflow-hidden">
        <div className="relative w-screen h-screen">
          <div className="text-white absolute h-full w-full  flex sm:items-start items-center text-center sm:text-start justify-center flex-col gap-10  px-8 md:px-24 xl:px-40">
            <h2 className="font-semibold z-10 text-5xl sm:text-6xl">
              تردد در دنیایی بدون مرز!
            </h2>
            <p className="text-md z-10 sm:w-1/2">
              تنها با ارائه برنامه‌ای بی‌نقص اقامت شما به کشور دیگری در کمترین
              زمان به شما داده می‌شود. تیم مشاوران رامش یاور فرزام فارسی
              تهران”ر.ی.ف پرشیا” قدم به قدم در برنامه مهاجرتتان کنار شماست.
            </p>
            <Link className="z-10" href="/">
              <button
                type="button"
                className="border-2  text-md py-2 px-7 rounded-lg"
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
