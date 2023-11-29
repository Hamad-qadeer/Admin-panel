"use client";
import React from "react";
import MenuLinks from "./MenuLinks";
import Breadcrumbs from "@/components/Common/Breadcrumb";

const Menu = () => {
  return (
    <React.Fragment>
      <div className="page-content">
        <Breadcrumbs title="Menu" breadcrumbItem="Menu" />
        <MenuLinks />
      </div>
    </React.Fragment>
  );
};

export default Menu;
