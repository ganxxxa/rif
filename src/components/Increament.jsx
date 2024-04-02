"use client";

import React, { useState, useEffect, useRef } from "react";

const convertToPersianNum = (num) => {
  const persianNumbers = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
  const numStr = num.toString();
  const persianNumStr = numStr
    .split("")
    .map((digit) => persianNumbers[parseInt(digit, 10)] || digit)
    .join("");
  return persianNumStr;
};
const Increament = () => {
  const [counter1, setCounter1] = useState(699);
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
                if (prevCounter >= 999) {
                  clearInterval(interval1);
                  return 999;
                }
                return prevCounter + 1;
              });
            }, 1); // Adjust the interval as needed

            const interval2 = setInterval(() => {
              setCounter2((prevCounter) => {
                if (prevCounter >= 10) {
                  clearInterval(interval2);
                  return 10;
                }
                return prevCounter + 1;
              });
            }, 90); // Adjust the interval as needed

            const interval3 = setInterval(() => {
              setCounter3((prevCounter) => {
                if (prevCounter >= 15) {
                  clearInterval(interval3);
                  return 15;
                }
                return prevCounter + 1;
              });
            }, 60); // Adjust the interval as needed
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
    <div
      ref={componentRef}
      className="bg-[#0B2538] h-full flex flex-wrap justify-center object-fill gap-6 px-8 p-4 sm:p-16"
      style={{ backgroundImage: `url(/in.jpg)` }}
    >
      <div className="flex flex-col justify-between gap-2 items-center border-gray-500 border my-4  px-4 py-3 rounded-xl w-32">
        <p className="text-md text-gray-100   "> پرونده موفق </p>
        <p className="text-2xl text-gray-100 ">
          {convertToPersianNum(counter1 >= 999 ? 999 : counter1)} +
        </p>
        <p className="text-lg  text-pink-500"> مورد </p>
      </div>
      <div className="flex flex-col justify-between gap-2 items-center border-gray-500 border my-4 px-4 py-3 rounded-xl w-32">
        <p className="text-md text-gray-100  ">سابقه فعالیت </p>
        <p className="text-2xl text-gray-100  ">
          {convertToPersianNum(counter2 >= 10 ? 10 : counter2)} +
        </p>
        <p className="text-lg text-pink-500">سال </p>
      </div>
      <div className="flex flex-col justify-between gap-2 items-center border-gray-500 border my-4  px-4 py-3 rounded-xl w-32">
        <p className="text-md text-gray-100 ">خدمات در </p>
        <p className="text-2xl text-gray-100  ">
          {convertToPersianNum(counter3 >= 15 ? 15 : counter3)} +
        </p>
        <p className="text-lg text-pink-500">کشور </p>
      </div>
    </div>
  );
};

export default Increament;
