"use client";

import Breadcrumbs from "@/components/Common/Breadcrumb";
import React from "react";
import AddKYCUserComponent from "@/app/AddKYCUser/AddKYCUserComponent";

const AddKYCUser = () => {
  return (
    <div className="page-content">
      <Breadcrumbs title="" breadcrumbItem="Add KYC User" />
      <AddKYCUserComponent />
    </div>
  );
};

export default AddKYCUser;
