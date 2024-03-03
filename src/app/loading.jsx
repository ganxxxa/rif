import React from "react";
import { FadeLoader } from "react-spinners";

const Loading = () => {
  return (
    <div className="h-screen w-screen flex items-center justify-center text-8xl">
      <FadeLoader color="#F70080" height={10} width={4} size={100} />
    </div>
  );
};

export default Loading;
