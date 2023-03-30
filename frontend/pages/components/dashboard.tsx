import React from "react";
import Navbar from "./navbar";
import Sidebar from "./sidebar";

const dashboard = () => {
  return (
    <>
      <Navbar />
      <Sidebar />

      <div className="ml-72 m-[-70px] ">
        <h1 className="text-2xl pb-10">Selamat Datang.....</h1>
      </div>
    </>
  );
};

export default dashboard;
