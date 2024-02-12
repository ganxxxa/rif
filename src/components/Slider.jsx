"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";

const SliderComponent = () => {
  const [bgIndex, setBgIndex] = useState(0);
  const [textIndex, setTextIndex] = useState(0);
  const [fadeIn, setFadeIn] = useState(false);

  const backgrounds = ["slide.jpg", "bg.jpg", "slide2.jpg"];

  const texts = [
    {
      title: "آینده‌ای روشن",
      description:
        "تیم ریف پرشیا با ارایه راه حل‌های پویا و عملی، شما را در رسیدن به آرزوها و آرمان‌هایتان همراهی می‌کند. این تیم، با برخورداری از دانش و تخصص به‌روز، پلی بدون محدودیت برای تحقق رویاهایتان راه اندازی می‌کند و شما را به جایی فراتر از انتظارتان می‌رساند.",
    },
    {
      title: "آینده‌ای روشن",
      description:
        "تیم ریف پرشیا با ارایه راه حل‌های پویا و عملی، شما را در رسیدن به آرزوها و آرمان‌هایتان همراهی می‌کند. این تیم، با برخورداری از دانش و تخصص به‌روز، پلی بدون محدودیت برای تحقق رویاهایتان راه اندازی می‌کند و شما را به جایی فراتر از انتظارتان می‌رساند.",
    },
    {
      title: "آینده‌ای روشن",
      description:
        "تیم ریف پرشیا با ارایه راه حل‌های پویا و عملی، شما را در رسیدن به آرزوها و آرمان‌هایتان همراهی می‌کند. این تیم، با برخورداری از دانش و تخصص به‌روز، پلی بدون محدودیت برای تحقق رویاهایتان راه اندازی می‌کند و شما را به جایی فراتر از انتظارتان می‌رساند.",
    },
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setFadeIn(true);
      setTimeout(() => {
        setBgIndex((prevIndex) => (prevIndex + 1) % backgrounds.length);
        setTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
        setFadeIn(false);
      }, 300); // Delay to allow fade-out transition to complete
    }, 8000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="flex flex-col-reverse sm:flex-row-reverse gap-4 h-full sm:h-96 2xl:h-[640px]  bg-white">
      <div
        className={`sm:w-5/12 w-full h-96 sm:h-full bg-cover bg-center transition-opacity duration-300 `}
        style={{ backgroundImage: `url(${backgrounds[bgIndex]})` }}
      ></div>

      <div
        className={`sm:w-7/12 w-full p-10 sm:p-0 h-full bg-white text-black flex items-center justify-center transition-opacity duration-300 ${
          fadeIn ? "opacity-0" : "opacity-100"
        }`}
      >
        <div className="px-4 sm:px-16 lg:px-40 flex flex-col gap-6 sm:items-start items-center justify-center">
          <h1 className="text-4xl font-bold mb-4">{texts[textIndex].title}</h1>
          <p className="text-md md:text-lg text-justify ">
            {texts[textIndex].description}
          </p>
          <button
            type="button"
            className="border-2 text-md border-red-600 text-red-600 py-2 px-7 rounded-lg"
          >
            اطلاعات بیشتر
          </button>
        </div>
      </div>
    </div>
  );
};

export default SliderComponent;
