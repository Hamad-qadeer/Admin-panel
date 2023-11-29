"use client";
import React from "react";
import ThemeOptionsComponent from "./ThemeOptionsComponent";
import Breadcrumbs from "@/components/Common/Breadcrumb";

const ThemeOptions = () => {
  return (
    <div className="page-content">
      <Breadcrumbs title="Theme Options" breadcrumbItem="Theme Options" />
      <ThemeOptionsComponent />
    </div>
  );
};

export default ThemeOptions;
