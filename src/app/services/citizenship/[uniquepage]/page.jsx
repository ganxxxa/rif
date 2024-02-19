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

export async function generateStaticParams() {
  return citizen.map((p) => ({
    uniquepage: p.flag.toString(),
  }));
}

export default function UniquePage({ params: { uniquepage } }) {
  const service = citizen.find((p) => p.flag.toString() === uniquepage);
  if (!service) {
    notFound();
  }

  return (
    <>
      <section className="h-full">
        <div className="flex flex-col justify-center items-center py-20 gap-8 text-center w-full h-full  px-4 sm:px-12 lg:px-40">
          <h1 className="text-4xl font-semibold pt-16">
            خدمات شهروندی ریف پرشیا
          </h1>
          <p className="px-4 sm:px-16 py-8 text-xl font-light">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز
          </p>
          <ServicesButton path="citizenship" services={citizen} />
        </div>
      </section>
      <ServicesInfo service={service} />
      <Accordion />
      <Form />
    </>
  );
}
