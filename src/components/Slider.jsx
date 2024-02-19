"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { FaPause, FaPlay } from "react-icons/fa";

const SliderComponent = () => {
  const [bgIndex, setBgIndex] = useState(0);
  const [textIndex, setTextIndex] = useState(0);
  const [fadeIn, setFadeIn] = useState(false);
  const [intervalId, setIntervalId] = useState(null);
  const [isPaused, setIsPaused] = useState(false);
  const [progress, setProgress] = useState(0);
  const backgrounds = ["slide.jpg", "bg.jpg", "slide2.jpg"];

  const texts = [
    {
      title: "آینده‌ای روشن",
      description:
        "تیم ریف پرشیا با ارایه راه حل‌های پویا و عملی، شما را در رسیدن به آرزوها و آرمان‌هایتان همراهی می‌کند. این تیم، با برخورداری از دانش و تخصص به‌روز، پلی بدون محدودیت برای تحقق رویاهایتان راه اندازی می‌کند و شما را به جایی فراتر از انتظارتان می‌رساند.",
    },
    {
      title: "شروع یک زندگی جدید همراه با خانواده",
      description:
        "اگر به دنبال راهی مطمئن و امن برای شروع یک زندگی جدید هستید، ریف پرشیا با ارائه خدمات گسترده و مطمئن شما را در راه رسیدن به شهروندی و اقامت در کشوری جدید کمک می‌کند.",
    },
    {
      title: "تحصیل و اقامت",
      description:
        "ویزای تحصیلی نتنها برای درس خواندن نیست، بلکه این امکان را به افراد می‌دهد تا به کشور دیگری سفر کنند و علاوه بر درس خواندن با فرهنگ و زندگی در آن  آشنا شوند. گرفتن مدرک تحصیلی و خلق تجربه‌های جدید می‌تواند به پیشرفت و توسعه شخصی و حرفه‌ای هر فرد  کمک کرده و دید جدیدی برای انتخاب کشور محل زندگی‌اش می‌دهد .",
    },
  ];
  useEffect(() => {
    const progressInterval = setInterval(() => {
      if (!isPaused) {
        setTimeout(() => {
          setProgress((prevProgress) => {
            // Reset progress to 0 if it reaches 100
            if (prevProgress >= 100) {
              return 0;
            } else {
              // Increment progress by 1
              return prevProgress + 1;
            }
          });
        }, 100);
      } else {
        setProgress(0);
      }
    }, 43); //   (adjust as needed)

    const transitionInterval = setInterval(() => {
      if (!isPaused) {
        setFadeIn(true);
        setTimeout(() => {
          setBgIndex((prevIndex) => (prevIndex + 1) % backgrounds.length);
          setTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
          setFadeIn(false);
        }, 100); // Delay to allow fade-out transition to complete
      }
    }, 4343);

    setIntervalId(transitionInterval);

    return () => {
      clearInterval(progressInterval);
      clearInterval(transitionInterval);
    };
  }, [isPaused]);

  useEffect(() => {
    if (isPaused) {
      clearInterval(intervalId);
    }
  }, [isPaused, intervalId]);

  const toggleInterval = () => {
    setIsPaused(!isPaused);
  };

  return (
    <div className="flex flex-col-reverse sm:flex-row-reverse gap-4 h-full sm:h-[520px]  bg-white">
      <div
        className={`sm:w-5/12 w-full h-96 sm:h-full bg-cover bg-center transition-opacity duration-300 `}
        style={{ backgroundImage: `url(${backgrounds[bgIndex]})` }}
      ></div>

      <div
        className={`sm:w-7/12 w-full p-10 sm:p-0 h-full bg-white text-[#0B2538] flex items-center justify-center transition-opacity duration-300 ${
          fadeIn ? "opacity-0" : "opacity-100"
        }`}
      >
        <div className="px-4 sm:px-16 lg:px-40 flex flex-col gap-6 sm:items-start items-center justify-center">
          <h1 className="text-xl md:text-2xl lg:text-3xl   font-bold mb-4">
            {texts[textIndex].title}
          </h1>
          <p className="text-md md:text-lg text-justify ">
            {texts[textIndex].description}
          </p>
          <button
            type="button"
            className="border-2 text-md border-red-600 text-red-600 py-2 px-7 rounded-lg"
          >
            اطلاعات بیشتر
          </button>
          <div className="flex items-center pt-4">
            <button
              type="button"
              className="text-mdpy-2 px-7 rounded-lg"
              onClick={toggleInterval}
            >
              {isPaused ? <FaPlay /> : <FaPause />}
            </button>
            <div className="bg-gray-300 h-1 w-72 rounded-md overflow-hidden">
              <div
                className="bg-gray-500 h-full transition-width duration-0 "
                style={{ width: `${progress}%` }}
              ></div>
            </div>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SliderComponent;
