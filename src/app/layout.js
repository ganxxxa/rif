import Image from "next/image";
import "./globals.css";
import { Noto_Sans_Arabic } from "next/font/google";
import Link from "next/link";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const arabic = Noto_Sans_Arabic({
  subsets: ["arabic"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={arabic.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
