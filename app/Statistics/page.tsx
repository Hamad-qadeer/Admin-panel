"use client";

import Breadcrumbs from "@/components/Common/Breadcrumb";
import React from "react";
import StatisticsComponent from "@/app/Statistics/StatisticsComponent";

const Statistics = () => {
  return (
    <div className="page-content">
      <Breadcrumbs title="" breadcrumbItem="Statistics" />
      <StatisticsComponent />
    </div>
  );
};

export default Statistics;
