import React from "react";

const ResponsiveLanding = () => {
  return (
    <>
      <div className="flex flex-column w-[100%] h-[200vh] relative items-center justify-end">
        <div className="flex flex-column w-100 h-100">
          <div className="basis-1/2 bg-[#21181d]"></div>
          <div className="basis-1/2 bg-[#ece8dd]"></div>
        </div>
        <div className="absolute flex flex-column w-11/12 h-[95%] z-10  justify-center">
          <div className="basis-1/2 bg-[#2c3a21]"></div>
          <div className="basis-1/2 bg-[#f4f2e6]"></div>
          <div className="absolute bg-gray-200 self-center w-[93%] h-[20%]">
            <div className="inline-grid grid-cols-4 w-100 h-100">
              <div className="bg-gray-200"></div>
              <div className="bg-gray-200"></div>
              <div className="bg-gray-200"></div>
              <div className="bg-gray-200"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ResponsiveLanding;
