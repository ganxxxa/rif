// ParagraphComponent.jsx
import React from "react";

const ParagraphComponent = ({ title, paragraph }) => {
  return (
    <div className="flex flex-col  justify-center items-center bg-[#F5F8FC] py-8">
      <h3 className="font-semibold flex-wrap flex flex-col items-center text-center md:text-start pt-10 px-8 md:px-36 text-2xl">
        {title.split("\n").map((line, index) => (
          <span key={index}>{line}</span>
        ))}
      </h3>

      <div className="w-full gap-6 flex  flex-wrap justify-center bg-[#F5F8FC] py-10">
        {paragraph.split("\n").map((line, index) => (
          <div
            className="flex w-2/3 md:w-2/5 xl:w-1/3 bg-white p-4 rounded-lg"
            key={index}
          >
            <div className="p-1 px-2">&bull;</div>
            <p className="leading-relaxed">{line}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ParagraphComponent;
