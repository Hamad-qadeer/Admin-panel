"use client";
import React from "react";
import TermsOfServiceComponent from "./TermsOfServiceComponent";
import Breadcrumbs from "@/components/Common/Breadcrumb";

const TermsOfService = () => {
  return (
    <div className="page-content">
      <Breadcrumbs title="Terms of Service" breadcrumbItem="Terms of Service" />
      <TermsOfServiceComponent />
    </div>
  );
};

export default TermsOfService;
