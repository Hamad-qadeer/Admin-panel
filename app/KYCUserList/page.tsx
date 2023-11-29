"use client";

import Breadcrumbs from "@/components/Common/Breadcrumb";
import React from "react";
import KYCUserListComponent from "@/app/KYCUserList/KYCUserListComponent";

const KYCUserList = () => {
  return (
    <div className="page-content">
      <Breadcrumbs title="" breadcrumbItem="KYC User List" />
      <KYCUserListComponent />
    </div>
  );
};

export default KYCUserList;
