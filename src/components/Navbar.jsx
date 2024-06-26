"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { usePathname } from "next/navigation";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";

const Navbar = ({ scrollToHome }) => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const toggleButtonRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        toggleButtonRef.current &&
        !toggleButtonRef.current.contains(event.target)
      ) {
        setIsOpen(false); // Close the dropdown if click is outside toggle button
      }
    };

    // Add click event listener to the document
    document.addEventListener("mousedown", handleClickOutside);

    // Cleanup the event listener on component unmount
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="z-20 absolute top-0 left-0 flex flex-col text-black gap-4 sm:gap-5 w-screen bg-[#d6d6d6] sm:py-5 sm:px-12 lg:px-32 ">
      <div className="h-full flex flex-row  text-black sm:px-8   justify-between items-center">
        {/* mobile */}
        <div className="z-40 flex justify-between py-4 mx-8 w-full sm:hidden relative">
          <button className="z-40" onClick={toggleMenu}>
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
          <Link href="/">
            <div className="z-40">
              <Image alt="img" src="/logo.svg" width="36" height="42" />
            </div>
          </Link>
        </div>
        <ul
          className={`z-30 absolute top-0 text-lg font-semibold sm:hidden flex flex-col text-black h-screen w-full justify-center items-center gap-6   pt-8 bg-[#d6d6d6]  transition-transform duration-300 ease-in-out ${
            !isMenuOpen ? "-translate-y-full" : "translate-y-0"
          }`}
          onClick={toggleMenu}
        >
          <Link href="/about">درباره ما</Link>
          <Link href="/services/residency">خدمات اقامت</Link>
          <Link href="/services/citizenship">خدمات شهروندی</Link>
          <Link href="/services/other">سایر خدمات</Link>
          <Link href="/blog">بلاگ</Link>
        </ul>
        {/* desktop */}
        <div className="hidden sm:flex w-full flex-row justify-between items-center">
          <ul className=" flex flex-col sm:flex-row-reverse gap-6 sm:gap-9">
            <Link
              className={`hover:text-pink-400 hover:scale-110 duration-200 ${
                pathname === "/blog" ? "text-pink-500" : "text-black"
              }`}
              href="https://rifpersia.com/blog"
            >
              بلاگ
            </Link>
            <button
              className={`hover:text-pink-400 hover:scale-110 duration-200 `}
              onClick={scrollToHome}
            >
              تماس با ما
            </button>
            <Link
              className={`hover:text-pink-400 hover:scale-110 duration-200 ${
                pathname === "/about" ? "text-pink-500" : "text-black"
              }`}
              href="/about"
            >
              درباره ما
            </Link>
            <div ref={toggleButtonRef} className="relative">
              <button
                className={`hover:text-pink-400  self-start hover:scale-110 flex gap-1 items-center duration-200 ${
                  isOpen ? "text-pink-500" : "text-black"
                } `}
                onClick={toggleDropdown}
                href="/about"
              >
                خدمات{" "}
                <FaChevronDown
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
                    href="/services/residency"
                  >
                    اقامت
                  </Link>
                  <Link
                    className={`hover:text-pink-400 hover:scale-110 duration-200 ${
                      pathname === "/services"
                        ? "text-pink-500"
                        : " text-gray-600"
                    }`}
                    href="/services/citizenship"
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
          </ul>
          <Link href="/">
            <Image alt="img" src="/logo.svg" width="36" height="42" />
          </Link>
        </div>
      </div>
      {/* <span className="hidden sm:block h-0.5 opacity-30  w-full bg-white" /> */}
    </nav>
  );
};

export default Navbar;
