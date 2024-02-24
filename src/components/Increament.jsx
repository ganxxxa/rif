"use client";

import React, { useState, useEffect, useRef } from "react";

const Increament = () => {
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
    <div
      ref={componentRef}
      className="bg-[#0B2538] h-full flex flex-wrap justify-center object-fill gap-6 px-8 p-4 sm:p-16"
      style={{ backgroundImage: `url(/in.jpg)` }}
    >
      <div className="flex flex-col justify-between gap-2 items-center border-gray-500 border my-4 px-4 py-3 rounded-xl w-auto">
        <p className="text-md text-gray-100   "> بیش از</p>
        <p className="text-2xl text-gray-100 ">
          {counter1 >= 1000 ? "50" : counter1}+
        </p>
        <p className="text-sm  text-pink-500">پرونده موفق </p>
      </div>
      <div className="flex flex-col justify-between gap-2 items-center border-gray-500 border my-4 px-4 py-3 rounded-xl w-auto">
        <p className="text-md text-gray-100  "> بیش از</p>
        <p className="text-2xl text-gray-100  ">
          {counter2 >= 10 ? "30" : counter2}+
        </p>
        <p className="text-sm text-pink-500"> سابقه فعالیت</p>
      </div>
      <div className="flex flex-col justify-between gap-2 items-center border-gray-500 border my-4 px-4 py-3 rounded-xl w-auto">
        <p className="text-md text-gray-100 ">بیش از</p>
        <p className="text-2xl text-gray-100  ">
          {counter3 >= 15 ? "20" : counter3}+
        </p>
        <p className="text-sm text-pink-500">کشور تحت پوشش خدماتی </p>
      </div>
    </div>
  );
};

export default Increament;
