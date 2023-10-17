import React from "react";
import Image from "next/image";
import Link from "next/link";

const Join = () => {
  return (
    <div className="container mb-10">
      <div className="bg-[#f7f5ed] py-10 px-[1rem] border border-mustard rounded-md">
        <h2 className="text-center text-2xl md:text-3xl font-bold mb-[1rem] mx-auto md:max-w-[70%] uppercase">
          join our community
        </h2>
        <p className="text-center text-base mb-2 mx-auto md:w-[70%] lg:w-[50%]">
          You can make a difference! Join with our community to spread the
          kindness and make impact!
        </p>

        <div className="flex justify-center mt-[2rem]">
          <Link
            href="/"
            className="pill-md uppercase bg-mustard hover:bg-[#9c8743] font-medium shadow-sm smooth text-white"
          >
            JOIN
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Join;
