import React from "react";
import { BsFillTelephoneFill } from "react-icons/bs";

const Hotline = () => {
  return (
    <div className="mb-5 mt-[-10px]">
      <div className="flex justify-center items-center bg-lightGreen h-[70px] md:h-[100px] p-5">
        <div className="flex justify-center items-center gap-4 text-white text-center">
          <span className="hidden sm:block md:text-[25px] text-center">
            <BsFillTelephoneFill />
          </span>
          <h2 className="text-[18px] md:text-[25px]">
            <strong>+61 422 466 165</strong> (IQRO Hotline)
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Hotline;
