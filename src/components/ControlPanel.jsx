// ControlPanel.js
import React from "react";
import { FaChevronRight, FaPlay, FaPause, FaChevronLeft } from "react-icons/fa";

const ControlPanel = ({
  decreaseIndices,
  toggleInterval,
  increaseIndices,
  isPaused,
  progress,
}) => {
  return (
    <div className="flex w-screen items-center justify-center p-4 gap-1">
      <button
        type="button"
        className="text-md py-2 px-2 sm:scale-125 rounded-lg"
        onClick={decreaseIndices}
      >
        <FaChevronRight />
      </button>
      <button
        type="button"
        className="text-md py-2 px-2 rounded-lg"
        onClick={toggleInterval}
      >
        {isPaused ? <FaPlay /> : <FaPause />}
      </button>
      <button
        type="button"
        className="text-md py-2 px-2 sm:scale-125 rounded-lg"
        onClick={increaseIndices}
      >
        <FaChevronLeft />
      </button>
      <div className="bg-gray-300 h-1 w-72 mx-8 rounded-md overflow-hidden">
        <div
          className="bg-gray-500 h-full transition-width duration-0 "
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  );
};

export default ControlPanel;
