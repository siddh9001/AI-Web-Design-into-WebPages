import React from "react";
// import cycle from "../assets/ProdBike-15.jpg";

const ProductCard = (props) => {
  return (
    <div className="flex flex-col w-full h-full">
      <div className="w-full">
        <img src={props.image} alt="cycle" />
      </div>
      <div className="w-full">
        <p className="m-1 text-2xl text-center text-[#16232b] font-bold hover:underline cursor-pointer">
          {props.name}
        </p>
      </div>
      <div className="m-1 w-full flex">
        <p className="text-center text-sm font-semibold">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        </p>
      </div>
      <div>
        <p className="underline text-center text-[#e2402e] font-bold">
          ₹{props.price}
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
