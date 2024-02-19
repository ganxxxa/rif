import Image from "next/image";
import "./globals.css";
import { Noto_Sans_Arabic } from "next/font/google";
import Link from "next/link";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Form from "@/components/Form";

const arabic = Noto_Sans_Arabic({
  subsets: ["arabic"],
});

export default function RootLayout({ children }) {
  const scrollTo = () => {
    homeRef.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <html lang="en">
      <body className={`leading-relaxed  ${arabic.className}`}>
        <Navbar scrolto="#contact" />
        {children}

        <Footer scrolto="contact" />
      </body>
    </html>
  );
}
