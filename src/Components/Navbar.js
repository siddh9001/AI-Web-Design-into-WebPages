import React from "react";

const Navbar = () => {
  return (
    <>
      <nav className="flex items-center justify-between p-4 bg-[#212d39] text-white">
        <div className="flex items-center">
          <div className="mr-6">
            <img
              src="https://images.unsplash.com/photo-1505705694340-019e1e335916?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8YmlrZSUyMHNlbGxpbmclMjB3ZWJzaXRlfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=600&q=60"
              alt="logo"
              className="h-10 w-10 rounded-full"
            />
          </div>
          <div className="font-medium">
            <a className="mr-4" href="#">
              Home
            </a>
            <a className="mr-4" href="#">
              Products
            </a>
            <a className="mr-4" href="#">
              About us
            </a>
          </div>
        </div>
        <div className="flex items-center">
          <button className="bg-white hover:bg-[#fac34c] text-gray-800 font-medium py-2 px-4 rounded-full">
            Login
          </button>
          <button className="ml-4 bg-white hover:bg-[#fac34c] text-gray-800 font-medium py-2 px-4 rounded-full">
            Sign Up
          </button>
          <div className="ml-4 bg-inherit rounded-full p-2">
            <img
              src="https://cdn-icons-png.flaticon.com/512/1144/1144811.png"
              alt="avatar"
              className="h-8 w-8 bg-white rounded-full"
            />
          </div>
        </div>
      </nav>
      <div
        className="bg-cover bg-center h-96 w-full"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1485965120184-e220f721d03e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80')`,
        }}
      />
    </>
  );
};

export default Navbar;
