import React from "react";
import Sidebar from "../components/Sidebar";
import { Routes, Route } from "react-router-dom";
import Actors from "./Actors";

const Home = () => {
  return (
    <div className='min-h-screen'>
      <Sidebar />
    </div>
  );
};

export default Home;
