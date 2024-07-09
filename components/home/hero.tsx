"use client";

import React, { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import img1 from "@/public/images/hero-image-4.png";
import img2 from "@/public/images/hero-image-2.png";
import img3 from "@/public/images/hero-image-3.png";

const Hero = () => {
  return (
    <div className="w-full overflow-hidden">
      <div className="w-full md:h-[55vh] overflow-hidden relative">
        <div className="max-w-[50%] md:max-w-[30%] absolute text-white left-[10%] top-[20%] md:top-[30%]">
          <h1 className="text-[20px] md:text-[3rem] leading-tight mb-5 font-bold bg-yellow text-black px-2 w-fit">
            Speak like natives
          </h1>
          <p className="text-[14px] md:text-[20px] leading-tight drop-shadow-md">
            Connect with Australian native speakers, learn together, and scale
            up your game.
          </p>
          <Link
            href="https://www.youtube.com/@IQROChannel/streams"
            target="_blank"
            className="btn-sm-green smooth mt-5"
          >
            <span className="p-1">JOIN NOW</span>
          </Link>
        </div>
        <Image
          src={img1}
          alt="image"
          className="w-full h-72 md:h-full object-cover"
        />
      </div>
      <div className="flex flex-col justify-center items-center mt-10 w-full">
        <h1 className="text-center font-bold text-[2rem] md:text-[3rem] mb-2">
          Welcome to Iqronesia
        </h1>
        <p className="text-center max-w-2xl text-xl px-4">
          Iqronesia is a community-run education and social welfare embracing
          the peaceful value of Islam for the Australian-Indonesian society.
        </p>
      </div>
    </div>
  );
};

export default Hero;
