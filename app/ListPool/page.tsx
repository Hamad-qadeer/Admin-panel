"use client";

import Breadcrumbs from "@/components/Common/Breadcrumb";
import React from "react";
import ListPoolComponent from "@/app/ListPool/ListPoolComponent";

const ListPool = () => {
  return (
    <div className="page-content">
      <Breadcrumbs title="" breadcrumbItem="List Pool" />
      <ListPoolComponent />
    </div>
  );
};

export default ListPool;
