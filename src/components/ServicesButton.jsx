"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const ServicesButton = ({ services, path }) => {
  const pathname = usePathname();
  return (
    <div className="flex h-full gap-4 flex-grow w-full flex-wrap items-center justify-center">
      {services.map((e, i) => (
        <Link
          key={i}
          className={`border-gray-500 flex flex-row-reverse justify-end items-center border rounded-lg w-1/4 gap-4 min-w-48 text-center hover:bg-pink-950 hover:border-gray-600 hover:bg-opacity-20 text-white font-semibold h-full py-1 px-4 ${
            pathname === `/services/${path}/${e.flag}`
              ? "border-pink-700 bg-pink-950 bg-opacity-40"
              : " border-gray-100  bg-[#0B2538]"
          }`}
          href={`/services/${path}/${e.flag}`}
        >
          {e.name}
          <Image
            width={42}
            height={42}
            className="p-px rounded-full"
            src={`/flags/${e.flag}.jpg`}
          />
        </Link>
      ))}
    </div>
  );
};

export default ServicesButton;
