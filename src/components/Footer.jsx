import Image from "next/image";
import React from "react";
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#0B2538] w-screen py-16 px-8 sm:lg:px-12 lg:px-24 xl:px-40 tracking-wider leading-relaxed flex flex-col sm:flex-row gap-4 items-start mt-10 justify-center text-sm">
      <div className="w-full sm:w-1/5 flex flex-col gap-6 h-full text-center sm:text-start items-center sm:items-start">
        <Image alt="img" src="/logo.svg" width="96" height="42" />
        <p className="pl-4 ">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
        </p>
      </div>
      <span className="sm:hidden block h-0.5 opacity-30  w-full bg-white" />
      <div className="w-full sm:w-3/5 sm:px-4 flex flex-col sm:flex-row justify-around gap-2">
        <div className="flex  justify-between my-6 sm:my-0">
          <div className="flex flex-col gap-4 items-start">
            <h3 className="text-pink-500 text-md font-semibold ">تماس با ما</h3>
            <div className="flex gap-4 items-start">
              <div>
                <FaMapMarkerAlt />
              </div>
              <p>آدرس</p>
            </div>
            <div className="flex gap-4 items-start mt-2">
              <div>
                <FaPhone />
              </div>
              <p>تلفن</p>
            </div>
            <div className="flex gap-4 items-start mt-2">
              <div>
                <FaEnvelope />
              </div>
              <p>ایمیل</p>
            </div>
          </div>
          <div className="sm:hidden flex flex-col justify-center gap-2">
            <div className="w-7 h-7 rounded-full bg-pink-500 "></div>
            <div className="w-7 h-7 rounded-full bg-pink-500 "></div>
            <div className="w-7 h-7 rounded-full bg-pink-500 "></div>
          </div>
        </div>
        <span className="sm:hidden block h-0.5 opacity-30  w-full bg-white" />
        <div className="flex mt-6 sm:mt-0 justify-between sm:justify-evenly w-full">
          <div className="flex flex-col gap-4">
            <h3 className="text-pink-500 text-md font-semibold ">
              {" "}
              دسترسی سریع
            </h3>
            <p>ریف پرشیا</p>
            <p>خدمات</p>
            <p> درباره‌ی ما </p>
            <p> تماس با ما</p>
            <p>بلاگ</p>
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="text-pink-500 text-md font-semibold "> خدمات ما </h3>
            <p> اقامت </p>
            <p> شهروندی</p>
            <p> سایر خدمات</p>
          </div>
        </div>
      </div>
      <span className="sm:hidden block h-0.5 opacity-30  w-full bg-white" />
      <div className="w-full sm:w-1/5 flex flex-col gap-6 mt-3 sm:mt-0 items-center sm:items-start">
        <div className="hidden sm:flex gap-2">
          <div className="w-7 h-7 rounded-full bg-pink-500 "></div>
          <div className="w-7 h-7 rounded-full bg-pink-500 "></div>
          <div className="w-7 h-7 rounded-full bg-pink-500 "></div>
        </div>
        <p className="text-center sm:text-start ">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
        </p>
        <button type="button" className="border-2 text-md py-2 px-7 rounded-lg">
          اطلاعات بیشتر
        </button>
      </div>
    </footer>
  );
};

export default Footer;
