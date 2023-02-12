import React from "react";
import cycle from "../assets/ProdBike-5.jpg";

const SideBillCard = (props) => {
  return (
    <div className="flex flex-col w-full h-full">
      <div className="w-full">
        <img src={cycle} alt="cycle" />
      </div>
      <div className="w-full">
        <p className="m-1 p-1 text-2xl text-center text-[#16232b] font-bold hover:underline cursor-pointer">
          Roadster
        </p>
      </div>
      <div className="w-full flex gap-4 justify-center">
        <div className="w-8 h-8 bg-[#a76029] rounded-full cursor-pointer"></div>
        <div className="w-8 h-8 bg-[#3c1915] rounded-full cursor-pointer"></div>
        <div className="w-8 h-8 bg-[#9b9e56] rounded-full cursor-pointer"></div>
        <div className="w-8 h-8 bg-[#92191c] rounded-full cursor-pointer"></div>
      </div>
      <p className="text-center text-[#16232b] font-semibold mt-3">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      </p>
      <ul className="w-full self-center mt-2 ml-2 p-2">
        <li className="m-1 font-bold">Sepcs</li>
        <li className="m-1 font-semibold">height: 5.2''</li>
        <li className="m-1 font-semibold">weight: 8 kg</li>
        <li className="m-1 font-semibold">Brakes: normal</li>
        <li className="m-1 font-semibold">
          Price:{" "}
          <span className="text-[#e2402e] font-bold underline">₹5000</span>
        </li>
      </ul>
    </div>
  );
};

export default SideBillCard;
