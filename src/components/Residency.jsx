"use client";
import Image from "next/image";
import React, { useState } from "react";
import Card from "./ServiceCard";
import ParagraphComponent from "./ParagraphComponent";
import FirstSectionComponent from "./FirstSectionComponent";
import SecondSectionComponent from "./SecondSectionComponent";

const ServicesInfo = ({ service }) => {
  const [selectedButton, setSelectedButton] = useState(0);
  const handleButtonClick = (index) => {
    setSelectedButton(index);
  };

  const selected = service.visa[selectedButton];

  return (
    <div className="bg-white text-[#0B2538] w-screen h-full">
      <div className="w-screen relative min-h-48 h-[35vw] md:h-80 flex items-center justify-center  text-black">
        <Image
          fill
          className="bg-cover   object-cover"
          src={`/bg/${service.flag}.jpg`}
        />
        <div className="bg-gradient-to-b from-transparent from-10% to-[#0b2538b9] absolute w-full h-full flex flex-col gap-4 md:gap-10 justify-center md:justify-end py-6 items-center">
          <h3 className=" text-4xl md:text-6xl text-white">{service.name}</h3>
          <div className="flex  flex-row w-full gap-1 justify-center items-center">
            {service.visa.map((e, i) => (
              <div
                className="text-[11px] md:text-sm p-2 h-16 md:h-20 w-48 md:w-72"
                key={i}
              >
                <button
                  onClick={() => handleButtonClick(i)}
                  className={`border-gray-400 bg-[#0000004a] flex justify-center items-center border rounded-lg w-full gap-4  hover:bg-pink-950 hover:border-pink-700 hover:bg-opacity-20 text-center duration-300 text-white font-semibold h-full py-1 px-4 ${
                    selectedButton === i
                      ? "border-pink-700 bg-pink-950 bg-opacity-40"
                      : "bg-[#0B2538] bg-opacity-40"
                  }
                  } `}
                >
                  {e.name}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="w-full h-full">
        <FirstSectionComponent
          title={selected.data[0].title}
          paragraph={selected.data[0].paragraph}
        />

        <SecondSectionComponent
          title={selected.data[1].title}
          paragraph={selected.data[1].paragraph}
          imageUrl={`/bg-flag/${service.flag}.jpg`} // Assuming imageUrl is passed
        />

        {selected.data[7] && selected.data[7].paragraph && (
          <ParagraphComponent
            title={selected.data[7].title}
            paragraph={selected.data[7].paragraph}
          />
        )}
        {selected.data[2].paragraph && (
          <ParagraphComponent
            title={selected.data[2].title}
            paragraph={selected.data[2].paragraph}
          />
        )}

        {selected.data[8] && selected.data[8].paragraph && (
          <ParagraphComponent
            title={selected.data[8].title}
            paragraph={selected.data[8].paragraph}
          />
        )}

        {selected.data[9] && selected.data[9].paragraph && (
          <ParagraphComponent
            title={selected.data[9].title}
            paragraph={selected.data[9].paragraph}
          />
        )}
        <div
          style={{ backgroundImage: `url(/in.jpg)` }}
          className="w-screen bg-[#0B2538]"
        >
          <div className="w-full p-6 sm:p-16 flex flex-col md:flex-row gap-12 justify-center items-center">
            <Card
              icon="/icon/fam.jpg"
              title={selected.data[3].title}
              paragraph={selected.data[3].paragraph}
            />
            <Card
              icon="/icon/time.jpg"
              title={selected.data[4].title}
              paragraph={selected.data[4].paragraph}
            />
            <Card
              icon="/icon/home.jpg"
              title={selected.data[5].title}
              paragraph={selected.data[5].paragraph}
            />
            <Card
              icon="/icon/map.jpg"
              title={selected.data[6].title}
              paragraph={selected.data[6].paragraph}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesInfo;
