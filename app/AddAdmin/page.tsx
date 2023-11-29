"use client";

import Breadcrumbs from "@/components/Common/Breadcrumb";
import React from "react";
import AddAdminComponent from "@/app/AddAdmin/AddAdminComponent";

const AddAdmin = () => {
  return (
    <div className="page-content">
      <Breadcrumbs title="" breadcrumbItem="Add Admin" />
      <AddAdminComponent />
    </div>
  );
};

export default AddAdmin;
