"use client";

import Breadcrumbs from "@/components/Common/Breadcrumb";
import React from "react";
import AddStakingPoolComponent from "@/app/AddStakingPool/AddStakingPoolComponent";

const AddStakingPool = () => {
  return (
    <div className="page-content">
      <Breadcrumbs title="" breadcrumbItem="Add Staking Pool" />
      <AddStakingPoolComponent />
    </div>
  );
};

export default AddStakingPool;
