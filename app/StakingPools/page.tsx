"use client";

import Breadcrumbs from "@/components/Common/Breadcrumb";
import React from "react";
import StakingPoolsComponent from "@/app/StakingPools/StakingPoolsComponent";

const StakingPool = () => {
  return (
    <div className="page-content">
      <Breadcrumbs title="" breadcrumbItem="Staking Pool" />
      <StakingPoolsComponent />
    </div>
  );
};

export default StakingPool;
