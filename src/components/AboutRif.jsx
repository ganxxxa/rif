"use client";

import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";
const AboutRif = () => {
  const [counter1, setCounter1] = useState(0);
  const [counter2, setCounter2] = useState(0);
  const [counter3, setCounter3] = useState(0);
  const componentRef = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Increment the counters until they reach their respective targets
            const interval1 = setInterval(() => {
              setCounter1((prevCounter) => {
                if (prevCounter >= 50) {
                  clearInterval(interval1);
                  return 50;
                }
                return prevCounter + 1;
              });
            }, 30); // Adjust the interval as needed

            const interval2 = setInterval(() => {
              setCounter2((prevCounter) => {
                if (prevCounter >= 30) {
                  clearInterval(interval2);
                  return 30;
                }
                return prevCounter + 1;
              });
            }, 50); // Adjust the interval as needed

            const interval3 = setInterval(() => {
              setCounter3((prevCounter) => {
                if (prevCounter >= 20) {
                  clearInterval(interval3);
                  return 20;
                }
                return prevCounter + 1;
              });
            }, 40); // Adjust the interval as needed
          }
        });
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.5, // Adjust the threshold as needed
      }
    );

    if (componentRef.current) {
      observer.observe(componentRef.current);
    }

    return () => {
      if (componentRef.current) {
        observer.unobserve(componentRef.current);
      }
    };
  }, []);
  return (
    <section>
      <div className="h-full sm:h-screen w-screen">
        <div className="bg-black h-48 sm:h-1/2 flex justify-center text-3xl sm:text-4xl lg:text-5xl items-center">
          <h1 className="mt-10 sm:mt-20"> درباره ریف پرشیا</h1>
        </div>
        <div className="h-full sm:h-1/2 bg-white flex flex-col sm:flex-row-reverse">
          <div className="w-full sm:w-3/5 h-full py-6 px-5 md:px-10 text-black flex justify-center items-center">
            <p className="text-sm sm:text-md  lg:text-lg font-light leading-relaxed pl-5 sm:pl-8 xl:pl-20">
              در دنیای پیچیده مهاجرت ریف پرشیا شریکی مورد اعتماد برای دست‌یابی
              به موفقیت برای شماست. ما تمرکز بر تخصص و حرفه‌ای بودن کارشناسان
              سفر مهاجرتی شما را تا حد امکان بدون استرس و به نرمی پیش می‌برد.
              شخصی سازی پرونده‌های مهاجرتی باتوجه به شرایط هر فرد از ویژه‌های
              منحصر به فرد تیم ریف پرشیاست تا بهترین و سریعترین نتیجه را برای
              شما به ارمفان بیاورد. با به‌روزرسانی‌های به‌موقع و راهنمایی‌های
              شفاف، رضایت شما را در هر مرحله در اولویت قرار می‌دهیم. اجازه دهید
              دست شما را بگیریم و راهنمای شما در این سفر مهم به سوی آینده‌ای
              بهتر باشیم. امروز با ما تماس بگیرید تا یک قدم به دستیابی به اهداف
              مهاجرتی خود نزدیک شوید.
            </p>
          </div>
          <div className="w-full sm:w-2/5 relative h-64 sm:h-full">
            <Image fill src="/abt.jpg" className="object-cover h-full" />
          </div>
        </div>
      </div>

      <div className="w-screen h-full sm:h-screen py-16 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 bg-[#F8F7F5] text-black grid grid-cols-1 sm:grid-cols-2 gap-5">
        {/* First grid */}
        <div className="bg-[#F8F7F5] p-4 flex flex-col items-start justify-around">
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
            مورد قوانین و رویه‌های پیچیده مهاجرت ارائه به شما ارائه می‌دهند و با
            اطمینان تصمیمات آگاهانه و دقیقی برای شما در طول فرآیند مهاجرت اتخاذ
            می‌کنند.
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
            حداکثر رساندن شانس تایید ویزا، احتمال یک نتیجه مهاجرت موفق را
            برایتان رقم زند.
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
            مقامات مربوطه، در کوتاه ترین زمان، فرآیند مهاجرت را ساده می‌کند و
            تجربه‌ای بی‌نظیر برای شما رقم می‌زند.
          </p>
        </div>
      </div>

      <div
        ref={componentRef}
        className="bg-white h-full flex flex-wrap justify-center gap-6 px-8 p-4 sm:p-16"
      >
        <div className="flex flex-col justify-between items-center border-gray-500 border my-4 px-4 py-3 rounded-xl w-auto">
          <p className="text-md text-gray-700">لورم ایپسوم</p>
          <p className="text-2xl text-black">
            {counter1 >= 50 ? "50" : counter1}+
          </p>
          <p className="text-sm text-pink-500">لورم ایپسوم</p>
        </div>
        <div className="flex flex-col justify-between items-center border-gray-500 border my-4 px-4 py-3 rounded-xl w-auto">
          <p className="text-md text-gray-700">لورم ایپسوم</p>
          <p className="text-2xl text-black">
            {counter2 >= 30 ? "30" : counter2}+
          </p>
          <p className="text-sm text-pink-500">لورم ایپسوم</p>
        </div>
        <div className="flex flex-col justify-between items-center border-gray-500 border my-4 px-4 py-3 rounded-xl w-auto">
          <p className="text-md text-gray-700">لورم ایپسوم</p>
          <p className="text-2xl text-black">
            {counter3 >= 20 ? "20" : counter3}+
          </p>
          <p className="text-sm text-pink-500">لورم ایپسوم</p>
        </div>
      </div>
    </section>
  );
};

export default AboutRif;
