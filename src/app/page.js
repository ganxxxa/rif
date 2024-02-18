import BlogSection from "@/components/Blog";
import ConsultationComponent from "@/components/Consultation";
import Form from "@/components/Form";
import SliderComponent from "@/components/Slider";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <section className="relative w-screen h-screen px-8 md:px-24 xl:px-40">
        <div className="h-full w-full flex sm:items-start items-center text-center sm:text-start justify-center flex-col gap-10">
          <h2 className="font-semibold text-5xl sm:text-6xl">
            تردد در دنیایی بدون مرز!
          </h2>
          <p className="text-md sm:w-1/2">
            تنها با ارائه برنامه‌ای بی‌نقص اقامت شما به کشور دیگری در کمترین
            زمان به شما داده می‌شود. تیم مشاوران رامش یاور فرزام فارسی
            تهران”ر.ی.ف پرشیا” قدم به قدم در برنامه مهاجرتتان کنار شماست.
          </p>
          <Link href="/">
            <button
              type="button"
              className="border-2 text-md py-2 px-7 rounded-lg"
            >
              اطلاعات بیشتر
            </button>
          </Link>
        </div>
        <Image
          alt="img"
          fill
          src="/bg.jpg"
          className="absolute opacity-50 -z-10"
        />
      </section>
      <SliderComponent />
      {/* <ConsultationComponent /> */}
      <BlogSection />
    </main>
  );
}
