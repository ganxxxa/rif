import AboutRif from "@/components/AboutRif";
import BlogSection from "@/components/Blog";
import ConsultationComponent from "@/components/Consultation";
import Form from "@/components/Form";
import React from "react";

const page = () => {
  return (
    <main>
      <AboutRif />
      {/* <ConsultationComponent /> */} <Form />
      <BlogSection />
    </main>
  );
};

export default page;
