import React from "react";
import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom";

const AdminLayout = () => {
  return (
    <div className='min-h-screen bg-gray-50/50'>
      <Sidebar />
      <div className='p-4 xl:ml-80'>
        <Outlet />
      </div>
    </div>
  );
};

export default AdminLayout;
