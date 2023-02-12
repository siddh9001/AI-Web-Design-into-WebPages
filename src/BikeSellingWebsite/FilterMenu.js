import Checkbox from "@mui/material/Checkbox";
import { FormControlLabel } from "@mui/material";
import React from "react";
import { styled } from "@mui/material/styles";

const MCheckbox = styled(Checkbox)({
  color: "#e2402e6b",
  "&.Mui-checked": {
    color: "#e2402e",
  },
});

const FilterMenu = () => {
  return (
    <div className="w-full h-full grid grid-cols-3 grid-rows-4">
      <div className="border-r-2 border-gray-400">
        <p className="w-full font-bold text-center text-[#16232b] pt-1">
          Categories
        </p>
      </div>
      <div className="border-r-2 border-gray-400">
        <p className="w-full text-center text-[#16232b] font-bold pt-1">
          Colors And Styles
        </p>
      </div>
      <div className="">
        <p className="w-full text-center text-[#16232b] font-bold pt-1">
          Heights and Gears
        </p>
      </div>
      <div className="border-r-2 border-gray-400 row-span-3">
        <div className="h-full w-full grid grid-cols-2 grid-rows-3">
          <div className="pl-3">
            <FormControlLabel control={<MCheckbox />} label="OffRoad" />
          </div>
          <div className="pl-2">
            <FormControlLabel control={<MCheckbox />} label="Daily Travel" />
          </div>
          <div className="pl-3">
            <FormControlLabel control={<MCheckbox />} label="Stylish" />
          </div>
          <div className="pl-2">
            <FormControlLabel control={<MCheckbox />} label="Geared" />
          </div>
          <div className="pl-3">
            <FormControlLabel control={<MCheckbox />} label="Sportz" />
          </div>
        </div>
      </div>
      <div className="border-r-2 border-gray-400 row-span-3">
        <div className="w-full h-full grid grid-cols-2">
          <div className="w-full h-full grid grid-cols-3 grid-rows-3 ml-2 place-content-center">
            <div className="bg-[#a76029] h-8 w-8 rounded-full cursor-pointer"></div>
            <div className="bg-[#1d1c1e] h-8 w-8 rounded-full cursor-pointer"></div>
            <div className="bg-[#9b9e56] h-8 w-8 rounded-full cursor-pointer"></div>
            <div className="bg-[#92191c] h-8 w-8 rounded-full cursor-pointer"></div>
            <div className="bg-[#3c1915] h-8 w-8 rounded-full cursor-pointer"></div>
            <div className="bg-[#cfccc5] h-8 w-8 rounded-full cursor-pointer"></div>
            <div className="bg-gray-500 h-8 w-8 rounded-full cursor-pointer"></div>
            <div className="bg-white h-8 w-8 rounded-full cursor-pointer"></div>
          </div>
          <div className="w-full h-full flex flex-col justify-items-start">
            <div className="pl-3">
              <FormControlLabel control={<MCheckbox />} label="Funky" />
            </div>
            <div className="pl-3">
              <FormControlLabel control={<MCheckbox />} label="Simple" />
            </div>
          </div>
        </div>
      </div>
      <div className="row-span-3">
        <div className="h-full w-full grid grid-cols-2 grid-rows-3">
          <div className="pl-3">
            <FormControlLabel control={<MCheckbox />} label="Child" />
          </div>
          <div className="pl-2">
            <FormControlLabel control={<MCheckbox />} label="5 Gears" />
          </div>
          <div className="pl-3">
            <FormControlLabel control={<MCheckbox />} label="Teen" />
          </div>
          <div className="pl-2">
            <FormControlLabel control={<MCheckbox />} label="6 Gears" />
          </div>
          <div className="pl-3">
            <FormControlLabel control={<MCheckbox />} label="Adult" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterMenu;
