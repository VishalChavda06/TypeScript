import React from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Navbar />
      <div className="flex">
        <Sidebar />
        <main className="flex-1 p-6">{children}</main>
      </div>
    </div>
  );
};

export default DashboardLayout;
