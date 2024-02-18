"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { usePathname } from "next/navigation";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";

const Navbar = ({ scrolto }) => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  useEffect(() => {
    console.log(usePathname);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <nav className="z-10 absolute top-0 left-0 flex flex-col gap-4 sm:gap-5 w-screen  sm:py-5 sm:px-12 lg:px-32 ">
      <div className="h-full flex flex-row   sm:px-8   justify-between items-center">
        <div className="flex justify-between py-4 mx-8 w-full sm:hidden relative">
          <button className="z-20" onClick={toggleMenu}>
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
          <Link href="/">
            <div className="z-20">
              <Image alt="img" src="/logo.svg" width="96" height="42" />
            </div>
          </Link>
        </div>
        <ul
          className={` absolute top-0 sm:hidden flex flex-col w-full justify-center items-center gap-4 sm:gap-9 bg-gradient-to-b pt-8 from-[#000000] from-30% to-[#00000099] transition-transform duration-300 ease-in-out ${
            !isMenuOpen ? "-translate-y-full" : "translate-y-0"
          }`}
          onClick={toggleMenu}
        >
          <Link href="/">بلاگ</Link>
          <Link href={scrolto}>تماس با ما</Link>
          <Link href="/about">درباره ما</Link>
          <div className="relative">
            <button
              className={`self-start flex items-center gap-1`}
              onClick={toggleDropdown}
              href="/about"
            >
              خدمات{" "}
              <FaChevronUp
                className={`${isOpen ? "rotate-180" : ""} duration-200`}
              />
            </button>
            {isOpen && (
              <div className="absolute w-28 p-3 py-6 rounded-md text-sm translate-y-2 flex flex-col gap-3 items-start text-gray-600 bg-white">
                <Link
                  className={`hover:text-pink-400  hover:scale-110 duration-200 ${
                    pathname === "/services"
                      ? "text-pink-500"
                      : " text-gray-600"
                  }`}
                  onClick={toggleDropdown}
                  href="/services/residency/spain"
                >
                  اقامت
                </Link>
                <Link
                  className={`hover:text-pink-400 hover:scale-110 duration-200 ${
                    pathname === "/services"
                      ? "text-pink-500"
                      : " text-gray-600"
                  }`}
                  href="/services/citizenship/turkey"
                  onClick={toggleDropdown}
                >
                  شهروندی
                </Link>
                <Link
                  className={`hover:text-pink-400 hover:scale-110 duration-200 ${
                    pathname === "/services"
                      ? "text-pink-500"
                      : " text-gray-600"
                  }`}
                  href="/services/other"
                  onClick={toggleDropdown}
                >
                  سایر خدمات
                </Link>
              </div>
            )}
          </div>
          <span className="h-0.5 opacity-30  w-full bg-white" />
        </ul>
        <div className="hidden sm:flex w-full flex-row justify-between items-center">
          <ul className=" flex flex-col sm:flex-row-reverse gap-6 sm:gap-9">
            <Link
              className={`hover:text-pink-400 hover:scale-110 duration-200 ${
                pathname === "/blog" ? "text-pink-500" : "text-white"
              }`}
              href="/blog"
            >
              بلاگ
            </Link>
            <Link
              className={`hover:text-pink-400 hover:scale-110 duration-200 `}
              href={scrolto}
            >
              تماس با ما
            </Link>
            <Link
              className={`hover:text-pink-400 hover:scale-110 duration-200 ${
                pathname === "/about" ? "text-pink-500" : "text-white"
              }`}
              href="/about"
            >
              درباره ما
            </Link>
            <div className="relative">
              <button
                className={`hover:text-pink-400  self-start hover:scale-110 flex gap-1 items-center duration-200 ${
                  isOpen ? "text-pink-500" : "text-white"
                } `}
                onClick={toggleDropdown}
                href="/about"
              >
                خدمات{" "}
                <FaChevronUp
                  className={`${isOpen ? "rotate-180" : ""} duration-200`}
                />
              </button>
              {isOpen && (
                <div className="absolute w-28 p-3 py-6 rounded-md text-sm translate-y-2 flex flex-col gap-3 items-start text-gray-600 bg-white">
                  <Link
                    className={`hover:text-pink-400  hover:scale-110 duration-200 ${
                      pathname === "/services"
                        ? "text-pink-500"
                        : " text-gray-600"
                    }`}
                    onClick={toggleDropdown}
                    href="/services/residency/spain"
                  >
                    اقامت
                  </Link>
                  <Link
                    className={`hover:text-pink-400 hover:scale-110 duration-200 ${
                      pathname === "/services"
                        ? "text-pink-500"
                        : " text-gray-600"
                    }`}
                    href="/services/citizenship/turkey"
                    onClick={toggleDropdown}
                  >
                    شهروندی
                  </Link>
                  <Link
                    className={`hover:text-pink-400 hover:scale-110 duration-200 ${
                      pathname === "/services"
                        ? "text-pink-500"
                        : " text-gray-600"
                    }`}
                    href="/services/other/1"
                    onClick={toggleDropdown}
                  >
                    سایر خدمات
                  </Link>
                </div>
              )}
            </div>
          </ul>
          <Link href="/">
            <Image alt="img" src="/logo.svg" width="96" height="42" />
          </Link>
        </div>
      </div>
      <span className="hidden sm:block h-0.5 opacity-30  w-full bg-white" />
    </nav>
  );
};

export default Navbar;
