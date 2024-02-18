import AboutRif from "@/components/AboutRif";
import BlogSection from "@/components/Blog";
import ConsultationComponent from "@/components/Consultation";
import React from "react";

const page = () => {
  return (
    <main>
      <AboutRif />
      {/* <ConsultationComponent /> */}
      <BlogSection />
    </main>
  );
};

export default page;
