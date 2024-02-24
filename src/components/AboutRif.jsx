import Image from "next/image";
import React from "react";
import Increament from "./increament";
const AboutRif = () => {
  return (
    <section>
      <div className="h-full sm:h-screen w-screen">
        <div
          className="bg-[#0B2538] h-48 sm:h-1/2 flex justify-center text-3xl sm:text-4xl relative lg:text-5xl bg-cover items-center"
          style={{ backgroundImage: `url(/about.jpg)` }}
        >
          <div className="absolute w-full h-full bg-black opacity-30"></div>
          <h1 className="z-10 mt-10 sm:mt-20"> درباره ریف پرشیا</h1>
        </div>
        <div className="h-full sm:h-1/2 bg-white flex flex-col sm:flex-row-reverse">
          <div className="w-full  h-full py-6 px-5 md:px-10 text-[#0B2538] flex justify-center items-center">
            <p className="text-sm sm:text-md  lg:text-lg font-light leading-relaxed pl-5 sm:pl-8 xl:pl-20">
              امروزه با افزایش عرضه و تقاضا برای اخذ اقامت و شهروندی، یافتن
              مشاورین با تجربه، دلسوز و مورد اعتماد، از چالش‌هایی است که
              متقاضیان با آن روبرو هستند. تیم کارشناسان مجرب و متخصص ریف پرشیا،
              با تمرکز بر خواسته‌ها و نیاز مشتریان، این اطمینان را به شما
              می‌دهند که فرآیند دریافت اقامت و شهروندی، با آرامش خاطر و به دور
              از هرگونه نگرانی طی شود. ارائه‌ٰی راه کار‌ی طراحی شده و شفاف مطابق
              با شرایط هر فرد و خانواده برای رسیدن هرچه سریعتر به نتیجه
              موفقیت‌آمیز، مهمترین دغدغه تیم ر.ی.ف پرشیا است. ارتباط موثر، مداوم
              و مستقیم با دولت‌ها برای بروزرسانی برنامه‌های ارائه شده به مشتریان
              از مهمترین عوامل موفقیت تیم ریف پرشیا در این عرصه بوده است. اجازه
              دهید دست شما را بگیریم و راهنمای شما در این سفر مهم به سوی
              آینده‌ای بهتر باشیم. امروز با ما تماس بگیرید تا یک قدم به دستیابی
              به اهداف مهاجرتی خود نزدیک شوید.
            </p>
          </div>
          {/* <div className="w-full sm:w-2/5 relative h-64 sm:h-full">
            <Image
              alt="img"
              fill
              src="/abt.jpg"
              className="object-cover h-full"
            />
          </div> */}
        </div>
      </div>

      <div className="w-screen h-full  py-16 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 bg-[#F5F8FC] text-[#0B2538] grid grid-cols-1 sm:grid-cols-2 gap-5">
        {/* First grid */}
        <div className="bg-[#F5F8FC] p-4 flex flex-col items-start justify-around">
          <h2 className="font-bold text-4xl sm:text-5xl lg:text-6xl mb-2">
            مزایای همکاری باما
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-500">
            راهنمایی تخصصی، ساده سازی، نرخ موفقیت بالا
          </p>
          <span>
            <a href="#" className="text-pink-500 hover:underline">
              تماس با ما
            </a>
            <div className="bg-pink-500 h-1 mt-2 w-36"></div>
          </span>
        </div>

        {/* Second grid */}
        <div className="bg-white p-8 flex flex-col justify-between gap-4">
          <div>
            <p className="mt-1 text-lg sm:text-xl lg:text-2xl text-gray-500">
              01
            </p>
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mt-1">
              راهنمایی تخصصی
            </h3>
          </div>
          <p className="text-base sm:text-lg lg:text-xl text-gray-700 mb-6">
            ریف پرشیا یا داشتن مشاوران متخصص و با‌تجربه، راهنمایی‌های تخصصی در
            مورد قوانین و رویه‌های پیچیده اقامت و شهروندی ارائه به شما ارائه
            می‌دهند و با اطمینان تصمیمات آگاهانه و دقیقی برای شما در طول فرآیند
            اتخاذ می‌کنند.
          </p>
        </div>

        {/* Third grid */}
        <div className="bg-white p-8 flex flex-col justify-between gap-4">
          <div>
            <p className="mt-1 text-lg sm:text-xl lg:text-2xl text-gray-500">
              02
            </p>
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mt-1">
              نرخ موفقیت بالا
            </h3>
          </div>
          <p className="text-base sm:text-lg lg:text-xl text-gray-700 mb-6">
            ریف پرشیا با تخصص و منابع خود می‌تواند، چالش‌های بالقوه در مراحل
            اولیه را شناسایی و با چیدن استراتژی‌های متناسب با توسعه و با به
            حداکثر رساندن شانس قبولی ویزا، احتمال یک نتیجه موفق را برایتان رقم
            زند.
          </p>
        </div>

        {/* Fourth grid */}
        <div className="bg-white p-8 flex flex-col justify-between gap-4">
          <div>
            <p className="mt-1 text-lg sm:text-xl lg:text-2xl text-gray-500">
              03
            </p>
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mt-1">
              ساده سازی
            </h3>
          </div>
          <p className="text-base sm:text-lg lg:text-xl text-gray-700 mb-6">
            ریف پرشیا با رسیدگی به مدارک، ارسال درخواست‌ها و برقراری ارتباط با
            مقامات مربوطه، در کوتاه ترین زمان، فرآیند را ساده می‌کند و تجربه‌ای
            بی‌نظیر برای شما رقم می‌زند.
          </p>
        </div>
      </div>
      <Increament />
    </section>
  );
};

export default AboutRif;
