"use client";
import Image from "next/image";
import "./globals.css";
import { Noto_Sans_Arabic } from "next/font/google";
import Link from "next/link";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Form from "@/components/Form";
import { useRef } from "react";
import { GoogleAnalytics } from "@next/third-parties/google";

const arabic = Noto_Sans_Arabic({
  subsets: ["arabic"],
});

export default function RootLayout({ children }) {
  const ref = useRef(null);
  const scrollToHome = () => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <html lang="en">
      <body className={` ${arabic.className}`}>
        <Navbar scrollToHome={scrollToHome} />
        {children}
        <div ref={ref}>
          <Footer />
        </div>
      </body>
      <GoogleAnalytics gaId="G-10J6DPPGEF" />
    </html>
  );
}
