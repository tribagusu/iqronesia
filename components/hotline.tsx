import React from "react";
import { BsFillTelephoneFill } from "react-icons/bs";

const Hotline = () => {
  return (
    <div className="container mb-5">
      <div className="flex justify-center items-center bg-lightGreen h-[100px] mt-[-10px]">
        <div className="flex items-center gap-4 text-white">
          <span className="text-[25px]">
            <BsFillTelephoneFill />
          </span>
          <h2 className=" text-[25px] font-bold">
            <strong>+61 422 466 165</strong> (IQRO HOTLINE)
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Hotline;
