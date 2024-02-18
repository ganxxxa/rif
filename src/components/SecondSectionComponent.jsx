// SecondSectionComponent.jsx
import Image from "next/image";
import React from "react";

const SecondSectionComponent = ({ title, paragraph, imageUrl }) => {
  return (
    <div className="flex flex-col sm:flex-row-reverse w-screen h-96 sm:h-72">
      <div className="w-full h-full flex flex-col gap-6 justify-center px-4 sm:px-10">
        <h3 className="text-xl">{title}</h3>
        <p>{paragraph}</p>
      </div>
      <div className="relative h-full w-full">
        <Image fill className=" object-cover" src={imageUrl} />{" "}
      </div>
    </div>
  );
};

export default SecondSectionComponent;
