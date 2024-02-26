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

export default function UniquePage() {
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
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز
          </p>
          <ServicesButton path="residency" services={residency} />
        </div>
      </section>
      <Accordion />
      <Form />
    </>
  );
}
