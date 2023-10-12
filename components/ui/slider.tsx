"use client";

import React, { FC } from "react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";

import img1 from "@/public/images/tech1.jpeg";
import img2 from "@/public/images/tech2.jpeg";
import img3 from "@/public/images/tech3.jpg";

const SliderCarousel = () => {
  const settings: any = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 2500,
    pauseOnHover: true,
    // nextArrow: (
    //   <div className="relative">
    //     <div className="next-slick-arrow hidden md:absolute">
    //       {" "}
    //       <BsFillArrowRightCircleFill />{" "}
    //     </div>
    //   </div>
    // ),
    // prevArrow: (
    //   <div className="">
    //     <div className="prev-slick-arrow hidden md:absolute">
    //       {" "}
    //       <BsFillArrowLeftCircleFill />{" "}
    //     </div>
    //   </div>
    // ),
  };

  return (
    <div className="relative my-0 p-0 bg-pink-500">
      <Slider {...settings}>
        <div className="md:h-[80vh] overflow-hidden relative">
          <Image
            src={img1}
            alt="image"
            className="w-full h-72 md:h-full object-cover"
          />
        </div>
        <div className="md:h-[80vh] overflow-hidden relative">
          <Image
            src={img2}
            alt="image"
            className="w-full h-72 md:h-full object-cover"
          />
        </div>
        <div className="md:h-[80vh] overflow-hidden relative">
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

export default SliderCarousel;
