import React from "react";
import Link from "next/link";
import Image from "next/image";
import { BsArrowRightShort, BsArrowRight } from "react-icons/bs";
import { projectHighlight } from "@/config/project-highlight";
import { useMaxChar } from "@/hooks/use-max-char";
import img1 from "@/public/images/iqro-perth-project.png";

const ProjectHighlight = () => {
  return (
    <div className="container my-[5rem]">
      <div className="flex flex-col md:flex-row justify-between mb-10">
        <div className="flex flex-col">
          <h2 className="font-bold text-3xl mb-2">Project Highlight</h2>
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

      {/* project goes here */}
      <div className="flex flex-col md:flex-row justify-between gap-10">
        <div className="md:w-[50%] min-h-80 relative overflow-hidden rounded shadow">
          <Image
            src={img1}
            alt="image"
            className="w-full h-auto md:h-full object-cover"
          />
        </div>
        <div className="flex flex-col md:w-[50%]">
          <h3 className="text-2xl font-semibold mb-5">
            {projectHighlight.title}
          </h3>
          <p>{useMaxChar(projectHighlight.desc, 1000)}</p>
          <div className="flex py-5 text-mustard font-medium">
            <Link
              href={projectHighlight.href}
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
    </div>
  );
};

export default ProjectHighlight;
