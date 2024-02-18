// FirstSectionComponent.jsx
import React from "react";

const FirstSectionComponent = ({ title, paragraph }) => {
  return (
    <div className="flex flex-col w-screen bg-[#F5F8FC] text-[#0B2538] gap-8 justify-center items-center text-center py-8 px-4 sm:px-12 lg:px-40">
      <h2 className="text-3xl mb-2">{title}</h2>
      <p>{paragraph}</p>
    </div>
  );
};

export default FirstSectionComponent;
