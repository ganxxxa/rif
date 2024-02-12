import React from "react";

const ConsultationComponent = () => {
  return (
    <div
      className="relative bg-cover bg-center h-[640px] flex items-center justify-center"
      style={{ backgroundImage: `url(/earth.jpg)` }}
    >
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-20"></div>
      <div className="h-full relative flex flex-col items-center justify-start py-16 gap-2 z-10 text-center text-white">
        <h1 className="md:text-4xl sm:text-3xl px-8 text-2xl font-bold mb-4">
          برای راهنمایی و مشاوره با ما در ارتباط باشید
        </h1>
        <button type="button" className="border-2 text-md py-2 px-7 rounded-lg">
          اطلاعات بیشتر
        </button>
      </div>
    </div>
  );
};

export default ConsultationComponent;
