import React from "react";
import BikeImg from "../assets/bikeSelling-21-op.jpg";
import ProductCard from "./ProductCard";
import SideBillCard from "./SideBillCard";
import cycle1 from "../assets/ProdBike-9.jpg";
import cycle2 from "../assets/ProdBike-10.jpg";
import cycle3 from "../assets/ProdBike-11.jpg";
import cycle4 from "../assets/ProdBike-12.jpg";
import FilterMenu from "./FilterMenu";
import { ShoppingCart } from "@mui/icons-material";

const images = [
  { id: 1, url: cycle1, name: "Roadster", price: 3000 },
  { id: 2, url: cycle2, name: "Hiker", price: 2000 },
  { id: 3, url: cycle3, name: "nuke", price: 5000 },
  { id: 4, url: cycle4, name: "Trubo", price: 1000 },
  { id: 5, url: cycle1, name: "Roadster", price: 900 },
  { id: 6, url: cycle2, name: "Hiker", price: 3000 },
  { id: 7, url: cycle3, name: "nuke", price: 800 },
  { id: 8, url: cycle4, name: "Trubo", price: 1500 },
  { id: 9, url: cycle1, name: "Roadster", price: 1200 },
  { id: 10, url: cycle2, name: "Hiker", price: 1600 },
  { id: 11, url: cycle3, name: "nuke", price: 6000 },
  { id: 12, url: cycle4, name: "Trubo", price: 1100 },
];

const Landing = () => {
  return (
    <div className="bg-[#8e9091] w-full h-[200vh] flex flex-col items-center">
      <div className="w-[95%] h-[45%] bg-gradient-to-r from-[#323e4a] to-[#16232b] flex flex-col mt-5">
        <div className="bg-[#fbfbfc] flex items-center">
          <div className="flex-1">
            <div
              className="h-10 w-10 m-2 bg-cover bg-center cursor-pointer"
              style={{
                backgroundImage: `url('https://cdn-icons-png.flaticon.com/512/8583/8583430.png')`,
              }}
            ></div>
          </div>
          <ul className="flex items-center space-x-3 mr-3">
            <li className="ml-2 p-3 font-bold cursor-pointer opacity-60 hover:opacity-100 text-[#16232b]">
              Home
            </li>
            <li className="ml-2 p-3 font-bold cursor-pointer opacity-60 hover:opacity-100 text-[#16232b]">
              Products
            </li>
            <li className="ml-2 p-3 font-bold cursor-pointer opacity-60 hover:opacity-100 text-[#16232b]">
              About Us
            </li>
            <li className="ml-2 p-3 font-bold cursor-pointer opacity-60 hover:opacity-100 text-[#16232b]">
              Contact Us
            </li>
            <li className="font-bold cursor-pointer bg-gradient-to-br from-[#e2402e] to-[#f97061] rounded-full opacity-90 hover:opacity-100">
              <button className="px-6 py-3 text-gray-100 text-sm ">
                Login
              </button>
            </li>
            <li className="font-bold cursor-pointer bg-gradient-to-br from-[#16232b] to-[#2f4c5d] rounded-full opacity-90 hover:opacity-100">
              <button className="px-6 py-3 text-gray-100 text-sm">
                Sign Up
              </button>
            </li>
          </ul>
        </div>
        <div
          className="flex-1 bg-center bg-cover flex flex-col items-center justify-center"
          style={{
            backgroundImage: `url(${BikeImg})`,
          }}
        >
          <div className="flex flex-col items-center justify-center -mt-10">
            <p className="text-4xl text-center text-white font-extrabold m-1">
              This is Title
            </p>
            <p className="text-md text-center text-white font-bold m-1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti,
              quibusdam. Obcaecati, expedita!
            </p>
            <button className="bg-[#e2402e] m-2 py-2 px-4 rounded-md text-white opacity-90 hover:opacity-100">
              Go to Products
            </button>
          </div>
        </div>
      </div>
      <div className="w-[90%] h-[60%]">
        <div className="w-full h-full -mt-8 bg-white opacity-90 overflow-y-auto scroll-smooth">
          <div className="h-40 w-full bg-gray-100">
            <FilterMenu />
          </div>
          <div className="h-12 w-full bg-white flex justify-center items-center">
            <p className="font-bold text-[#16232b]">Get the Best Fit For You</p>
          </div>
          <div className="h-[67%] w-full overflow-y-auto scroll-smooth">
            <div className="h-[150%] w-full">
              <div className="w-full h-full grid grid-cols-5">
                <div className="h-full col-span-4 overflow-y-scroll scroll-smooth scrollbar-hide">
                  <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-2 m-2">
                    {images.map((item) => {
                      return (
                        <div className="h-96 bg-gray-100 hover:bg-gray-200 opacity-90 hover:opacity-100">
                          <ProductCard
                            key={item.id}
                            image={item.url}
                            name={item.name}
                            price={item.price}
                          />
                        </div>
                      );
                    })}
                  </div>
                </div>
                <div className="h-full flex flex-col items-center relative">
                  <div className="h-full m-2 bg-gray-100">
                    <SideBillCard />
                  </div>
                  <button className="w-[88%] bg-[#e2402e] rounded-lg text-white self-center py-2 absolute bottom-16">
                    <span>
                      <ShoppingCart />
                    </span>{" "}
                    Add to Cart
                  </button>
                  <button className="w-[88%] bg-[#e2402e] rounded-lg text-white self-center py-2 absolute bottom-4">
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
