"use client";
import React from "react";
import PrivacyPolicyComponent from "./PrivacyPolicyComponent";
import Breadcrumb from "@/components/Common/Breadcrumb";

const PrivacyPolicy = () => {
  return (
    <div className="page-content">
      <Breadcrumb title="Privacy Policy" breadcrumbItem="Privacy Policy" />
      <PrivacyPolicyComponent />
    </div>
  );
};

export default PrivacyPolicy;
