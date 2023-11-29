"use client";

import Breadcrumbs from "@/components/Common/Breadcrumb";
import React from "react";
import ListAdminComponent from "@/app/ListAdmin/ListAdminComponent";

const ListAdmin = () => {
  return (
    <div className="page-content">
      <Breadcrumbs title="" breadcrumbItem="List Admin" />
      <ListAdminComponent />
    </div>
  );
};

export default ListAdmin;
