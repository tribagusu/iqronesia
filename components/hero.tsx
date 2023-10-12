"use client";

import React, { FC } from "react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import img1 from "@/public/images/hero-image-1.png";
import img2 from "@/public/images/hero-image-2.png";
import img3 from "@/public/images/hero-image-3.png";

const Hero = () => {
  const settings: any = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 3000,
    pauseOnHover: true,
  };

  return (
    <div className="w-full overflow-hidden">
      <Slider {...settings}>
        <div className="w-full md:h-[70vh] overflow-hidden relative">
          <div className="max-w-[50%] md:max-w-[35%] absolute text-white left-[10%] top-[20%] md:top-[30%]">
            <h1 className="text-[20px] md:text-[3rem] leading-tight mb-5">
              You only die once, <br /> you live forever.
            </h1>
            <p className="text-[14px] md:text-[20px] leading-tight">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat,
              aut. Lorem ipsum dolor sit amet consectetur.
            </p>
          </div>
          <Image
            src={img1}
            alt="image"
            className="w-full h-72 md:h-full object-cover"
          />
        </div>
        <div className="md:h-[70vh] overflow-hidden relative">
          <Image
            src={img2}
            alt="image"
            className="w-full h-72 md:h-full object-cover"
          />
        </div>
        <div className="md:h-[70vh] overflow-hidden relative">
          <Image
            src={img3}
            alt="image"
            className="w-full h-72 md:h-full object-cover"
          />
        </div>
      </Slider>
    </div>
  );
};

export default Hero;
