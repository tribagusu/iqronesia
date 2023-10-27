"use client";

import React, { useState } from "react";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";

import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { programsData } from "@/config/programs";
import { useMaxChar } from "@/hooks/use-max-char";
import { maxChar } from "../../utils/max-char";

import { BsArrowRightShort, BsArrowLeftShort } from "react-icons/bs";

import img1 from "@/public/images/quran-program.png";

const Program = () => {
  const [sliderRef, setSliderRef] = useState(null);
  const settings: any = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 500,
  };

  return (
    <div className="container my-[5rem]">
      <div className="flex flex-col md:flex-row justify-between mb-10">
        <div className="flex flex-col">
          <h2 className="font-bold text-3xl mb-2">Program</h2>
          <p className="mb-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam,
            ab.
          </p>
        </div>
        <Link
          href="/"
          className="button-green smooth h-[2.5rem] mr-auto md:mr-0"
        >
          View All{" "}
          <span>
            <BsArrowRight />
          </span>
        </Link>
      </div>

      {/* slider */}
      <Slider ref={setSliderRef} {...settings}>
        {/* program goes here */}
        {programsData.map((program, i) => (
          <div
            key={i}
            className="flex flex-col w-full md:min-h-70 overflow-hidden relative rounded-2xl shadow-md"
          >
            <div className="flex flex-col md:flex-row w-full">
              <div className="flex flex-col bg-[#f7f5ed] md:w-[50%] p-10">
                <div className="flex flex-col">
                  <small className="pill mb-5 bg-lightGreen text-white">
                    {program.category.toLocaleUpperCase()}
                  </small>
                  <h1 className="text-2xl mb-2 font-bold">{program.title}</h1>
                  <p className="">{maxChar(program.desc, 300)}</p>
                  <div className="flex py-5 text-mustard font-medium">
                    <Link
                      href="/"
                      className="flex items-center gap-2 hover:translate-x-2 ease-in-out duration-300"
                    >
                      <span className="hover:underline">See more</span>
                      <span className="text-lg scale-x-150">
                        <BsArrowRightShort />
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="md:w-[50%] h-auto">
                <Image
                  src={img1}
                  alt="image"
                  className="w-full h-auto md:h-full object-cover"
                />
              </div>
            </div>
          </div>
        ))}
      </Slider>
      <div className="arrow-button">
        <div className="arrow-button-left" onClick={sliderRef?.slickPrev}>
          <button>
            <BsArrowLeftShort />
          </button>
        </div>
        <div onClick={sliderRef?.slickNext} className="arrow-button-right">
          <button>
            <BsArrowRightShort />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Program;
