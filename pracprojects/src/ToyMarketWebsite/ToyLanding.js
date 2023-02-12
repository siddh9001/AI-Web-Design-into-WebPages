import React, { useState } from "react";
import upperImg from "../assets/toy-wesite-31-upper.png";
import c1 from "../assets/lowToy-c1.png";
import c2 from "../assets/lowToy-c2.png";
import c3 from "../assets/lowToy-c3.png";
import ToyCard from "./ToyCard";
import { ChevronLeft, ChevronRight, Menu } from "@mui/icons-material";
import { useMediaQuery, useTheme } from "@mui/material";
const toycars = [
  { id: 1, url: c1 },
  { id: 2, url: c2 },
  { id: 3, url: c3 },
  { id: 4, url: c1 },
  { id: 5, url: c2 },
  { id: 6, url: c3 },
];

const ToyLanding = () => {
  var theme = useTheme();
  var ismatch = useMediaQuery(theme.breakpoints.down("md"));

  const [menuOption, setmenuOption] = useState(false);

  const onMenuClick = () => {
    setmenuOption(!menuOption);
  };

  const onLeftClick = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 300;
  };
  const onRightClick = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 300;
  };

  const Drawer = (
    <>
      <div className="bg-[#f6b83d] rounded-xl p-2 m-2">
        <Menu size={40} className="text-white" onClick={onMenuClick} />
      </div>
      {menuOption && (
        <>
          <div className="absolute bg-[#fcdda074] top-16 right-3 p-2 rounded-lg max-sm:bg-[#fcdda0f4]">
            <ul className="w-40 h-full">
              <li className="p-2 text-white font-bold hover:bg-[#f6b83d] rounded-lg">
                Home
              </li>
              <li className="p-2 text-white font-bold hover:bg-[#f6b83d] rounded-lg">
                Products
              </li>
              <li className="p-2 text-white font-bold hover:bg-[#f6b83d] rounded-lg">
                About Us
              </li>
              <li className="p-2 text-white font-bold hover:bg-[#f6b83d] rounded-lg">
                Contact Us
              </li>
              <div className="w-full h-[2px] my-[2px] bg-gray-300"></div>
              <li className="p-2 text-white font-bold hover:bg-[#f6b83d] rounded-lg">
                Login
              </li>
              <li className="p-2 text-white font-bold hover:bg-[#f6b83d] rounded-lg">
                Sign Up
              </li>
            </ul>
          </div>
        </>
      )}
    </>
  );
  return (
    <div className="w-screen h-[120vh] bg-[#10151c]">
      <div className="w-[95%] h-full bg-gradient-to-br from-[#413a33] to-[#61503c] flex flex-row justify-around ">
        <div className="w-[85%] h-full bg-[#caa463] flex flex-col items-center justify-center">
          <div className="w-[80%] h-[95%] bg-gray-200 rounded-2xl flex flex-col">
            <div
              className="w-full flex-grow rounded-t-2xl"
              style={{
                backgroundImage: `url(${upperImg})`,
                backgroundSize: "cover",
              }}
            >
              <div className="flex flex-row-reverse items-center gap-3 p-2 relative">
                {ismatch ? (
                  <>{Drawer}</>
                ) : (
                  <>
                    <div className="bg-inherit px-4 py-2 border-[#f6b83d] border-2 rounded-full">
                      <button className="text-[#f6b83d] font-bold">
                        Sign Up
                      </button>
                    </div>
                    <div className="bg-[#f6b83d] px-4 py-2 rounded-full">
                      <button className="text-white font-bold">Login</button>
                    </div>
                    <div className="px-2">
                      <button className="text-white font-bold">
                        Contact Us
                      </button>
                    </div>
                    <div className="px-2">
                      <button className="text-white font-bold">About Us</button>
                    </div>
                    <div className="px-2">
                      <button className="text-white font-bold">Products</button>
                    </div>
                    <div className="px-2">
                      <button className="text-white font-bold">Home</button>
                    </div>
                  </>
                )}
              </div>
              {/* for the middle paragraph */}
              <div className="flex justify-center sm:justify-start w-full">
                <div className="p-4 m-4 w-[40%] max-sm:w-full">
                  <p className="text-3xl text-[#f8734c] font-extrabold max-sm:text-center">
                    Rally Cars
                  </p>
                  <p className="text-xl text-[#2a2827] font-extrabold max-sm:text-center">
                    On the way!
                  </p>
                  <p className="text-[#f6b83d] py-2 font-bold max-sm:text-center">
                    Beautiful Cars
                  </p>
                  <p className="max-sm:text-center">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Eveniet officiis alias odit explicabo corporis, ad nulla.
                  </p>
                  <button className="bg-[#f6b83d] px-3 py-2 my-4 rounded-full max-sm:text-center max-sm:w-full">
                    Go to Store
                  </button>
                </div>
              </div>
            </div>
            <div className="w-full h-[35%] bg-[#29292d] rounded-b-2xl flex relative items-center space-x-2">
              <div className="rounded-full cursor-pointer bg-[#404144] py-2">
                <ChevronLeft
                  className="opacity-50 hover:opacity-100"
                  sx={{ color: "white" }}
                  size={40}
                  onClick={onLeftClick}
                />
              </div>
              <div
                id="slider"
                className="flex flex-row overflow-x-scroll whitespace-nowrap scroll-smooth"
              >
                {toycars.map((item, id) => {
                  return <ToyCard key={id} img={item.url} />;
                })}
              </div>
              <div className="rounded-full cursor-pointer bg-[#404144] py-2">
                <ChevronRight
                  className="opacity-50 hover:opacity-100"
                  sx={{ color: "white" }}
                  size={40}
                  onClick={onRightClick}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToyLanding;
