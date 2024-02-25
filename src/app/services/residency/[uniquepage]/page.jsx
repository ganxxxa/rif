import React from "react";
import { residency } from "@/app/data";
import { notFound } from "next/navigation";
import Link from "next/link";
import ServicesButton from "@/components/ServicesButton";
import Accordion from "@/components/Accordion";
import QA from "@/components/QA";
import Image from "next/image";
import ServicesInfo from "@/components/Residency";
import Form from "@/components/Form";

export async function generateStaticParams() {
  return residency.map((p) => ({
    uniquepage: p.flag.toString(),
  }));
}

export default function UniquePage({ params: { uniquepage } }) {
  const service = residency.find((p) => p.flag.toString() === uniquepage);
  if (!service) {
    notFound();
  }

  return (
    <>
      <section className="h-full">
        <div
          style={{ backgroundImage: `url(/in.jpg)` }}
          className="flex flex-col justify-center items-center py-20 gap-8 text-center w-full h-full  px-4 sm:px-12 lg:px-40"
        >
          <h1 className="text-4xl font-semibold pt-16">
            خدمات اقامتی ریف پرشیا
          </h1>
          <p className="px-4 sm:px-16 py-8 text-xl font-light">
            حق زندگی، کار و همچنین تحصیل در مرفه ترین کشورهای جهان را بدست
            آورید. برنامه های اقامت ما به سرمایه گذاران حق سفر بدون ویزا، دسترسی
            به سیستم آموزش عالی و همچنین مزایای برخورداری از سیستم بهداشت و
            درمان را می دهد.{" "}
          </p>
          <ServicesButton path="residency" services={residency} />
        </div>
      </section>
      <ServicesInfo service={service} />
      <Accordion />
      <Form />
    </>
  );
}
