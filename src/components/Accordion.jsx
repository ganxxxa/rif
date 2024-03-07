"use client";
import React, { useState } from "react";

const Accordion = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const accordionItems = [
    {
      title: "ریف پرشیا چه نوع خدمات مهاجرتی را ارائه می دهد؟",
      content:
        "ریف پرشیا طیف خدمات گسترده‌ای را ارائه می‌دهد. از جمله این خدمات می‌توان به اخذ شهروندی، اخذ اقامت دائم، ویزاهای استارتاپی، ویزای طلایی و سرمایه‌گذاری، ویزای دانشجویی و... اشاره کرد. برای اطلاع از سایر خدمات و ویزاها با کارشناسان ما تماس بگیرید.",
    },
    {
      title:
        "آیا ریف پرشیا می‌تواند به خدمات اسکان پس از مهاجرت، مانند یافتن مسکن یا کار کمک کند؟",
      content:
        "بله، درصورت نیاز به مسکن برای اقامت موقت پس از رسیدن به مقصد ریف پرشیا این خدمات را به شما ارائه می‌دهد.",
    },
    {
      title: "چگونه ریف پرشیا می‌تواند به من در فرآیند مهاجرت کمک کند؟",
      content:
        "در ریف پرشیا، ما طیف وسیعی از خدمات را به افراد و خانواده‌ها با توجه به نیازهای مهاجرتیشان ارائه می دهیم. متخصصان با تجربه ما با ساده سازی فرایند مهاجرت از طریق انجام کلیه امور اداری، ارسال درخواست‌ها و ارتباط با مقامات مربوطه  بی‌نظیرترین راه را پیش روی شما قرار می‌دهند.",
    },
    {
      title: "پروسه مهاجرت معمولا چقدر طول می کشد؟",
      content:
        "مدت زمان اخذ ویزا و مهاجرت باتوجه به شرایط هر فرد و ویزای انتخابی متفاوت است. این زمان برای هر برنامه‌ متغییربوده و ممکن است بین 3 هفته تا 2 ماه باشد. توجه داشته باشید اعداد ذکر شده برای هربرنامه متفاوت است، حتی در شرایط یکسان برای دو فرد مجزا.",
    },
    {
      title: "هزینه استفاده از خدمات ریف پرشیا چقدر است؟ ",
      content:
        "با توجه به برنامه انتخابی و نوع خدمات ارائه شده هزینه‌ها متفاوت است. برای دریافت ازاطلاعات دقیقتر با مشاوران ما در ریف پرشیا تماس بگیرید.",
    },
    {
      title: "شرایط واجد شرایط بودن برای برنامه های مختلف مهاجرت چیست؟",
      content:
        "برای برنامه‌های سرمایه گذاری اولین و مهمترین شرط داشتن سرمایه به مقدار سقف تعیین شده از طرف کشور مقصد است. در سایر برنامه‌ها نیز شرایط باتوجه به اینکه همراه با خانواده قصد شرکت در آن را دارید و یا تکنفره بسیار متفاوت است. برای کشورهای مختلف شرایط در صفحه مربوط به آن ذکر شده است.",
    },
  ];

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-[#F5F8FC] flex flex-col items-center justify-around text-center w-full h-full sm:py-20 py-12 px-8 md:px-24 xl:px-40">
      <h3 className="text-4xl  text-gray-700">سوالات متداول</h3>
      <p className="my-12 pb-4 sm:w-2/3 xl:w-1/2  text-gray-600">
        در اینجا می‌توانید جواب سوال‌های پر تکرار خودتان را در مورد ریف پرشیا و
        انواع اقامت و شهروندی پیدا کنید.{" "}
      </p>
      {accordionItems.map((item, index) => (
        <div key={index} className="w-full bg-white p-4 px-8 rounded-lg mb-4">
          <div
            className="flex justify-between items-center  border-gray-300 px-4 py-2 cursor-pointer"
            onClick={() => toggleAccordion(index)}
          >
            <h1 className="text-lg font-semibold text-gray-700">
              {item.title}
            </h1>
            <div className="bg-pink-500 rounded-full p-1 scale-75">
              <svg
                className={`w-6 h-6  transition-transform duration-300 transform ${
                  openIndex === index ? "rotate-180" : ""
                }`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
          </div>
          <div
            className={`overflow-hidden transition-all duration-300 ${
              openIndex === index ? "max-h-96" : "max-h-0"
            }`}
          >
            <div className="mx-10 h-px bg-gray-300 my-4" />
            <div className="p-4">
              <p className="text-gray-700 text-start">{item.content}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
