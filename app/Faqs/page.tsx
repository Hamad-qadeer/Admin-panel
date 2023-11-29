"use client";
import React from "react";
import QuestionCategory from "./QuestionCategory";
import Breadcrumbs from "@/components/Common/Breadcrumb";

const Faqs = () => {
  return (
    <React.Fragment>
      <div className="page-content">
        <Breadcrumbs title="FAQS" breadcrumbItem="FAQS" />
        <QuestionCategory />
      </div>
    </React.Fragment>
  );
};

export default Faqs;
