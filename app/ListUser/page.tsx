"use client";

import Breadcrumbs from "@/components/Common/Breadcrumb";
import React from "react";
import ListUserComponent from "@/app/ListUser/ListUserComponent";

const ListUser = () => {
  return (
    <div className="page-content">
      <Breadcrumbs title="" breadcrumbItem="List User" />
      <ListUserComponent />
    </div>
  );
};

export default ListUser;
