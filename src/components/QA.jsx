import React from "react";
import AccordionItem from "./Accordion";

const QA = () => {
  const accordionItems = [
    { title: "Title 1", content: "Paragraph 1" },
    { title: "Title 2", content: "Paragraph 2" },
    { title: "Title 3", content: "Paragraph 3" },
    { title: "Title 4", content: "Paragraph 4" },
    { title: "Title 5", content: "Paragraph 5" },
  ];

  return (
    <div className="bg-[#F5F8FC] w-full h-full sm:py-32 py-24 px-8 md:px-24 xl:px-40 flex flex-wrap">
      <AccordionItem title="Title 1" content="Paragraph 1" />
      <AccordionItem title="Title 1" content="Paragraph 1" />
      <AccordionItem title="Title 1" content="Paragraph 1" />
      <AccordionItem title="Title 1" content="Paragraph 1" />
      <AccordionItem title="Title 1" content="Paragraph 1" />
    </div>
  );
};

export default QA;
