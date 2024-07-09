import React from "react";
import Image from "next/image";
import Link from "next/link";

const Join = () => {
  return (
    <div className="container mb-10">
      <div className="bg-[#f7f5ed] py-5 md:py-10 px-[1rem] border border-darkYellow rounded">
        <h2 className="text-center text-2xl md:text-3xl font-bold mb-2 md:mb-[1rem] mx-auto md:max-w-[70%] uppercase">
          join our community
        </h2>
        <p className="text-center text-base mb-2 mx-auto md:w-[70%] lg:w-[50%]">
          Spread kindness and make an impact with our community!
        </p>

        <div className="flex justify-center mt-5 md:mt-[2rem]">
          <Link
            href="/volunteer"
            className="btn-md-green uppercase font-medium shadow-sm smooth text-white"
          >
            JOIN
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Join;
