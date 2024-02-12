"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <nav className="z-10 absolute top-0 left-0 flex flex-col gap-4 sm:gap-8 w-screen  sm:py-8 sm:px-12 lg:px-32 ">
      <div className="h-full flex flex-row   sm:px-8   justify-between items-center">
        <div className="flex justify-between py-4 mx-8 w-full sm:hidden relative">
          <button className="z-20" onClick={toggleMenu}>
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
          <Link href="/">
            <div className="z-20">
              <Image src="/logo.svg" width="96" height="42" />
            </div>
          </Link>
        </div>
        <ul
          className={` absolute top-0 sm:hidden flex flex-col w-full justify-center items-center gap-4 sm:gap-9 bg-gradient-to-b pt-8 from-[#00000071] from-30% to-transparent transition-transform duration-300 ease-in-out ${
            !isMenuOpen ? "-translate-y-full" : "translate-y-0"
          }`}
        >
          <Link href="/">بلاگ</Link>
          <Link href="/">تماس با ما</Link>
          <Link href="/about">درباره ما</Link>
          <Link href="/">خدمات</Link>
          <span className="h-0.5 opacity-30  w-full bg-white" />
        </ul>
        <div className="hidden sm:flex w-full flex-row justify-between items-center">
          <ul className=" flex flex-col sm:flex-row-reverse gap-4 sm:gap-9">
            <Link href="/">بلاگ</Link>
            <Link href="/">تماس با ما</Link>
            <Link href="/about">درباره ما</Link>
            <Link href="/">خدمات</Link>
          </ul>
          <Link href="/">
            <Image src="/logo.svg" width="96" height="42" />
          </Link>
        </div>
      </div>
      <span className="hidden sm:block h-0.5 opacity-30  w-full bg-white" />
    </nav>
  );
};

export default Navbar;
