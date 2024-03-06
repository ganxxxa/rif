import React from "react";
import { citizen } from "@/app/data";
import { notFound } from "next/navigation";
import Link from "next/link";
import ServicesButton from "@/components/ServicesButton";
import Accordion from "@/components/Accordion";
import QA from "@/components/QA";
import Image from "next/image";
import ServicesInfo from "@/components/ServicesInfo";
import Form from "@/components/Form";

export default function UniquePage({ params: { uniquepage } }) {
  return (
    <>
      <section className="h-full">
        <div
          style={{ backgroundImage: `url(/in.jpg)` }}
          className="flex flex-col justify-center items-center py-20 gap-8 text-center w-full h-full  px-4 sm:px-12 lg:px-40"
        >
          <h1 className="text-4xl font-semibold pt-16">
            برنامه های شهروندی ریف پرشیا
          </h1>
          <p className="px-4 sm:px-16 py-8 text-xl font-light">
            بدون نیاز به خروج از منزل، پاسپورت دوم خود را دریافت کنید. سفر بدون
            ویزا، توسعه کسب و کار، افتتاح حساب آسان تر و انجام نقل و انتقالات
            مالی و بانکی راحت تر، اخذ اقامت آسان، پذیرش بی دغدغه از مدارس و
            دانشکاه های با رنکینگ بالای آموزشی و اخذ ویزای دانشجویی سریع تر در
            مرفه ترین کشورهای جهان را بدست آورید.
          </p>
          <ServicesButton path="citizenship" services={citizen} />
        </div>
      </section>
      <Accordion />
      <Form />
    </>
  );
}
