import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";

const Footer = ({ scrolto }) => {
  return (
    <footer
      id={scrolto}
      className="bg-[#0B2538] w-screen py-16 px-8 sm:lg:px-12 lg:px-24 xl:px-40 tracking-wider leading-relaxed flex flex-col sm:flex-row gap-4 items-start mt-10 justify-center text-sm"
    >
      <div className="w-full sm:w-1/5 flex flex-col gap-6 h-full text-center sm:text-start items-center sm:items-start">
        <Image alt="img" src="/logo.svg" width="36" height="42" />
        <p className="pl-4 ">
          ریف پرشیا، شریکی مورد اعتماد برای تحقق اهداف شماست.
        </p>
      </div>
      <span className="sm:hidden block h-0.5 opacity-30  w-full bg-white" />
      <div className="w-full sm:w-3/5 sm:px-4 flex flex-col sm:flex-row justify-around gap-2">
        <div className="flex  justify-between my-6 sm:my-0">
          <div className="flex flex-col-reverse gap-4 items-start">
            <div className="flex gap-4 items-start">
              <div>
                <FaMapMarkerAlt />
              </div>
              <p>تهران، بلوار اندرزگو</p>
            </div>
            <div className="flex gap-4 items-start mt-2">
              <div>
                <FaPhone />
              </div>
              <p dir="ltr">+۹۸ ۹۲۲ ۷۱۲ ۷۰۷۷</p>
            </div>
            <div className="flex gap-4 items-start mt-2">
              <div>
                <FaEnvelope />
              </div>
              <p>Info@rifpersia.com</p>
            </div>
          </div>
          <div className="sm:hidden flex flex-col justify-center gap-2">
            <div className="w-8 h-8 rounded-full bg-pink-500 flex items-center justify-center">
              <FaInstagram className="text-white scale-125 " />
            </div>
            <div className="w-8 h-8 rounded-full bg-pink-500 flex items-center justify-center">
              <FaWhatsapp className="text-white scale-125" />
            </div>
          </div>
        </div>
        <span className="sm:hidden block h-0.5 opacity-30  w-full bg-white" />
        <div className="flex mt-6 sm:mt-0 justify-between sm:justify-evenly w-full">
          <div className="flex flex-col gap-4">
            <h3 className="text-pink-500 text-md font-semibold ">
              {" "}
              دسترسی سریع
            </h3>
            <Link
              href="/"
              className={`hover:text-pink-400 hover:scale-110 duration-200 `}
            >
              ریف پرشیا
            </Link>

            <Link
              href="/about"
              className={`hover:text-pink-400 hover:scale-110 duration-200 `}
            >
              {" "}
              درباره‌ی ما{" "}
            </Link>

            <Link
              href="/bog"
              className={`hover:text-pink-400 hover:scale-110 duration-200 `}
            >
              بلاگ
            </Link>
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="text-pink-500 text-md font-semibold "> خدمات ما </h3>
            <Link
              href="/services/residency"
              className={`hover:text-pink-400 hover:scale-110 duration-200 `}
            >
              {" "}
              اقامت{" "}
            </Link>
            <Link
              href="/services/citizenship"
              className={`hover:text-pink-400 hover:scale-110 duration-200 `}
            >
              {" "}
              شهروندی
            </Link>
            <Link
              href="/services/other"
              className={`hover:text-pink-400 hover:scale-110 duration-200 `}
            >
              {" "}
              سایر خدمات
            </Link>
          </div>
        </div>
      </div>
      <span className="sm:hidden block h-0.5 opacity-30  w-full bg-white" />
      <div className="w-full sm:w-1/5 flex flex-col gap-6 mt-3 sm:mt-0 items-center sm:items-start">
        <div className="hidden sm:flex gap-2">
          <div className="w-8 h-8 rounded-full bg-pink-500 flex items-center justify-center">
            <a href="https://instagram.com/rif_persia">
              <FaInstagram className="text-white scale-125 " />
            </a>
          </div>
          <div className="w-8 h-8 rounded-full bg-pink-500 flex items-center justify-center">
            <a href="https://wa.me/+0989227127077">
              <FaWhatsapp className="text-white scale-125" />
            </a>
          </div>
        </div>
        <p className="text-center sm:text-start ">
          جهت دریافت مشاوره‌ امور اقامت و شهروندی با ما در ارتباط باشید
        </p>
      </div>
    </footer>
  );
};

export default Footer;
