"use client";
import React, { useState } from "react";
import emailjs from "emailjs-com";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    service: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Your EmailJS template parameters
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      from_phone: formData.phone,
      message: formData.message,
      service: formData.service,
    };

    // Replace these with your EmailJS configuration
    const serviceID = "service_0776pd7";
    const templateID = "template_qinadtc";
    const userID = "9ZWBA7BUYVUUvq-az";

    emailjs
      .send(serviceID, templateID, templateParams, userID)
      .then((response) => {
        console.log("Email sent!", response);
        alert("پیام شما ارسال شد");

        setFormData({
          name: "",
          email: "",
          message: "",
          phone: "",
          service: "",
        });
      })
      .catch((error) => {
        console.error("Email error:", error);
      });
  };
  return (
    <div
      className="flex justify-center items-center object-cover bg-cover bg-white"
      style={{ backgroundImage: "url('/form.jpg')" }}
    >
      <div className="w-full md:w-1/2 scale-90 rounded-md bg-white px-8 py-12 md:px-12 xl:p-16">
        <h3 className="text-[#0B2538] text-lg md:text-xl font-semibold">
          درخواست مشاوره
        </h3>
        <p className="text-gray-500 text-sm py-4 mb-8 md:mb-12">
          با تکمیل این فرم مشاوران ما در کمتر از 24 ساعت با شما تماس می‌گیرند.
        </p>
        <form className="w-full flex flex-col gap-1" onSubmit={handleSubmit}>
          <div className="flex flex-col md:flex-row gap-4">
            <div className="mb-4 md:w-1/2">
              <label
                htmlFor="name"
                className="block text-gray-700 text-sm font-semibold mb-2"
              >
                نام و نام خانوادگی
              </label>
              <input
                placeholder="نام و نام خانوادگی خود را وارد کنید"
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="border bg-gray-200 text-sm rounded w-full py-2 px-3 text-gray-600 border-gray-300"
              />
            </div>
            <div className="mb-4 md:w-1/2">
              <label
                htmlFor="phone"
                className="block text-gray-700 text-sm font-semibold mb-2"
              >
                تلفن همراه
              </label>
              <input
                placeholder="شماره همراه خود را وارد کنید"
                type="text"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="border bg-gray-200 text-sm rounded w-full py-2 px-3 text-gray-600 border-gray-300"
              />
            </div>
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 text-sm font-semibold mb-2"
            >
              آدرس ایمیل
            </label>
            <input
              placeholder="آدرس ایمیل خود را وارد کنید"
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="border bg-gray-200 text-sm rounded w-full py-2 px-3 text-gray-600 border-gray-300"
            />
          </div>
          <div className="mb-4 ">
            <label
              htmlFor="option"
              className="block text-gray-700 text-sm font-semibold mb-2"
            >
              خدمات مورد نیاز
            </label>
            <div className="flex flex-col md:flex-row text-sm text-gray-400 justify-start  gap-4 md:gap-12 xl:gap-24 text-md xl:tracking-widest my-2">
              <label>
                <input
                  type="radio"
                  name="service"
                  value="اقامت"
                  className="mr-2"
                  onChange={handleChange}
                />{" "}
                اقامت
              </label>
              <label>
                <input
                  type="radio"
                  name="service"
                  value="شهروندی"
                  className="mr-2"
                  onChange={handleChange}
                />{" "}
                شهروندی
              </label>
              <label>
                <input
                  type="radio"
                  name="service"
                  value="سایر "
                  className="mr-2"
                  onChange={handleChange}
                />{" "}
                سایر خدمات
              </label>
            </div>
          </div>
          <div className="mb-4">
            <label
              htmlFor="message"
              className="block text-gray-700 text-sm font-semibold mb-2"
            >
              توضیحات (اختیاری)
            </label>
            <textarea
              placeholder="توضیحات لازم را وارد کنید"
              id="message"
              name="message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              className="border bg-gray-200 text-md text-sm rounded w-full py-2 px-3 text-gray-600 border-gray-300"
            />
          </div>
          <div className="w-full flex justify-center">
            <button
              type="submit"
              className="bg-slate-800 hover:bg-slate-700 text-white font-medium py-2 px-4 md:px-6 rounded"
            >
              ثبت درخواست
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
