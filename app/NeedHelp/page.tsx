"use client";
import React from "react";
import Help from "./Help";
import Breadcrumb from "@/components/Common/Breadcrumb";

const NeedHelp = () => {
  return (
    <React.Fragment>
      <div className="page-content">
        <Breadcrumb title="" breadcrumbItem="Need Help" />
        <Help />
      </div>
    </React.Fragment>
  );
};

export default NeedHelp;
