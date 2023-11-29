"use client";

import Breadcrumbs from "@/components/Common/Breadcrumb";
import React from "react";
import AddPoolComponent from "@/app/AddPool/AddPoolComponent";

const AddPool = () => {
  return (
    <div className="page-content">
      <Breadcrumbs title="" breadcrumbItem="Add Pool" />
      <AddPoolComponent />
    </div>
  );
};

export default AddPool;
