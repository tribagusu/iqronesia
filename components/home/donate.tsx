import Link from "next/link";
import React from "react";
Link;

const Donate = () => {
  return (
    <div className="w-full mb-5 py-10 bg-green">
      <div className="container min-h-full flex justify-between items-center flex-col text-white">
        <h3 className="text-3xl text-center mb-5 uppercase font-bold">
          you can make a difference
        </h3>
        <p className="text-center text-lg md:w-[70%] mb-5">
          Charity does not in any way decrease the wealth and the servant who
          forgives, Allah adds to his respect, and the one who shows humility,
          and Allah elevates him in the estimation (of the people). <br />
          <strong>Hadith 6264, Book 32, Muslim</strong>
        </p>
        <Link
          href="/get-involved/donation"
          className="text-green pill-md uppercase bg-yellow hover:text-black font-medium shadow-sm smooth"
        >
          donate
        </Link>
      </div>
    </div>
  );
};

export default Donate;
