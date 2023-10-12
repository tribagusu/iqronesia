import React from "react";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import Image from "next/image";

import img1 from "@/public/images/tech1.jpeg";
import img2 from "@/public/images/tech2.jpeg";
import img3 from "@/public/images/tech3.jpg";

const RecentArticles = () => {
  return (
    <div className="container my-[5rem]">
      <div className="flex justify-between mb-10">
        <div className="flex flex-col">
          <h2 className="font-bold text-3xl">Recent Articles</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam,
            ab.
          </p>
        </div>
        <Link href="/" className="button-green h-[2.5rem]">
          View All{" "}
          <span>
            <BsArrowRight />
          </span>
        </Link>
      </div>

      {/* articles */}
      <div className="flex flex-col md:flex-row w-full justify-between gap-3">
        <Link
          href="/"
          className="flex flex-col relative bg-black h-[450px] md:w-[33%] overflow-hidden rounded-2xl shadow-xl"
        >
          <Image
            src={img1}
            alt="image"
            className="object-cover w-full h-[30rem] opacity-70"
          />
          <div className="absolute left-0 bottom-0 text-white px-5 mb-10">
            <h4 className="font-bold text-2xl mb-5">
              This is Where The Article Title Goes
            </h4>
            <div className="flex items-center justify-between ">
              <small className="pill px-2 bg-mustard">Meilina Widyawati</small>
              <small>25 Oct, 2023</small>
            </div>
          </div>
        </Link>

        <Link
          href="/"
          className="flex flex-col relative bg-black h-[450px] md:w-[33%] overflow-hidden rounded-2xl shadow-xl"
        >
          <Image
            src={img2}
            alt="image"
            className="object-cover w-full h-[30rem] opacity-70"
          />
          <div className="absolute left-0 bottom-0 text-white px-5 mb-10">
            <h4 className="font-bold text-2xl mb-5">
              This is Where The Article Title Goes
            </h4>
            <div className="flex items-center justify-between ">
              <small className="pill px-2 bg-mustard">Meilina Widyawati</small>
              <small>25 Oct, 2023</small>
            </div>
          </div>
        </Link>

        <Link
          href="/"
          className="flex flex-col relative bg-black h-[450px] md:w-[33%] overflow-hidden rounded-2xl shadow-xl"
        >
          <Image
            src={img3}
            alt="image"
            className="object-cover w-full h-[30rem] opacity-70"
          />
          <div className="absolute left-0 bottom-0 text-white px-5 mb-10">
            <h4 className="font-bold text-2xl mb-5">
              This is Where The Article Title Goes
            </h4>
            <div className="flex items-center justify-between ">
              <small className="pill px-2 bg-mustard">Meilina Widyawati</small>
              <small>25 Oct, 2023</small>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default RecentArticles;
