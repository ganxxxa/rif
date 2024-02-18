import React from "react";

export default function Card({ icon, title, paragraph }) {
  return (
    <div className="flex flex-col text-center border bg-white border-gray-300 rounded-lg p-4 w-full h-64 max-w-64 py-12 ">
      <div className="flex flex-col items-center mb-4">
        <img src={icon} alt="Icon" className=" mb-3 w-6 h-6" />
        <h3 className="text-md font-semibold">{title}</h3>
      </div>
      <hr className="border-t border-gray-300 mb-4" />
      <p className="mt-4 text-sm">{paragraph}</p>
    </div>
  );
}
