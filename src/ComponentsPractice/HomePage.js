import { Box, Container } from "@mui/material";
import React from "react";
import websiteImg from "../assets/website-design-3.jpg";

const HomePage = () => {
  return (
    <div className="flex flex-column relative">
      <img src={websiteImg} alt="image" className="w-100 h-100" />
      <div className="absolute top-20 left-28 w-10/12">
        <div className="flex flex-row space-x-4 items-center">
          <div className="flex-1">
            <p>logo</p>
          </div>
          <div className="px-2">
            <p className="text-white font-bold">Home</p>
          </div>
          <div className="px-2">
            <p className="text-white font-bold">Products</p>
          </div>
          <div className="px-2">
            <p className="text-white font-bold">About Us</p>
          </div>
          <div className="px-2">
            <p className="text-white font-bold">Contact Us</p>
          </div>
          <div className="px-2">
            <p className="text-white font-bold">Solutions</p>
          </div>
          <div className="bg-[#f7ce37] px-4 py-2 rounded-lg">
            <button className="text-white font-bold">Login</button>
          </div>
          <div className="bg-inherit px-4 py-2 border-[#f7ce37] border-2 rounded-lg">
            <button className="text-[#f7ce37] font-bold">SignUp</button>
          </div>
        </div>
      </div>
      <div className="absolute top-56 left-32">
        <p className="text-8xl text-gray-100 font-extrabold">Kisan Sahayak</p>
        <p className="font-md text-white text-gray-400 py-1 px-1">
          A platform for changing the future if Farming
        </p>
        <div className="bg-inherit border-2 border-[#f7ce37] rounded-full w-36 px-4 py-2 my-4">
          <button className="text-center text-gray-100">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
