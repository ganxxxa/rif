import React from "react";

const Form = ({ scrolto }) => {
  return (
    <div
      id={scrolto}
      className="flex flex-col-reverse md:flex-row-reverse bg-white"
    >
      {/* Right half with image */}
      <div
        className="w-full md:w-1/2 h-96 md:h-auto bg-cover bg-center"
        style={{ backgroundImage: "url('/form.jpg')" }}
      ></div>

      {/* Left half with form */}
      <div className="w-full md:w-1/2 px-8 py-16 md:p-6 xl:p-16">
        <h3 className="text-[#0B2538] text-2md md:text-3md font-semibold">
          درخواست مشاوره
        </h3>
        <p className="text-gray-500 py-4 mb-8 md:mb-12">
          با تکمیل این فرم مشاوران ما در کمتر از 24 ساعت با شما تماس می‌گیرند.
        </p>
        <form className="w-full flex flex-col gap-3">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="mb-6 md:w-1/2">
              <label
                htmlFor="name"
                className="block text-gray-700 font-semibold mb-2"
              >
                نام و نام خانوادگی
              </label>
              <input
                placeholder="نام و نام خانوادگی خود را وارد کنید"
                type="text"
                id="name"
                name="name"
                className="border bg-gray-200 text-md rounded w-full py-2 px-3 text-gray-600 border-gray-300"
              />
            </div>
            <div className="mb-4 md:w-1/2">
              <label
                htmlFor="phone"
                className="block text-gray-700 font-semibold mb-2"
              >
                تلفن همراه
              </label>
              <input
                placeholder="شماره همراه خود را وارد کنید"
                type="text"
                id="phone"
                name="phone"
                className="border bg-gray-200 text-md rounded w-full py-2 px-3 text-gray-600 border-gray-300"
              />
            </div>
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 font-semibold mb-2"
            >
              آدرس ایمیل
            </label>
            <input
              placeholder="آدرس ایمیل خود را وارد کنید"
              type="email"
              id="email"
              name="email"
              className="border bg-gray-200 text-md rounded w-full py-2 px-3 text-gray-600 border-gray-300"
            />
          </div>
          <div className="mb-4 ">
            <label
              htmlFor="option"
              className="block text-gray-700 font-semibold mb-2"
            >
              خدمات مورد نیاز
            </label>
            <div className="flex flex-col md:flex-row text-gray-400 justify-start  gap-4 md:gap-12 xl:gap-24 text-md xl:tracking-widest my-2">
              <label>
                <input
                  type="radio"
                  name="option"
                  value="option1"
                  className="mr-2"
                />{" "}
                اقامت
              </label>
              <label>
                <input
                  type="radio"
                  name="option"
                  value="option2"
                  className="mr-2"
                />{" "}
                شهروندی
              </label>
              <label>
                <input
                  type="radio"
                  name="option"
                  value="option3"
                  className="mr-2"
                />
                سایر خدمات
              </label>
            </div>
          </div>
          <div className="mb-4">
            <label
              htmlFor="message"
              className="block text-gray-700 font-semibold mb-2"
            >
              توضیحات (اختیاری)
            </label>
            <textarea
              placeholder="توضیحات لازم را وارد کنید"
              id="message"
              name="message"
              rows="4"
              className="border bg-gray-200 text-md rounded w-full py-2 px-3 text-gray-600 border-gray-300"
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
