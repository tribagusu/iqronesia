import React from "react";
import Link from "next/link";
import Image from "next/image";

const ProgramCard = ({ programs, selected }) => {
  return (
    <div className="tab-panels">
      {programs?.map((item, index) => (
        <div
          key={index}
          className={`${selected === index ? "panel-selected" : "hidden"}`}
        >
          {item.fields.programs.map((program, index) => (
            <Link key={index} href="/" className="flex w-full flex-col">
              <Image
                src={`https:${program.fields.image.fields.file.url}`}
                width={program.fields.image.fields.file.details.image.width}
                height={program.fields.image.fields.file.details.image.height}
                alt="foto"
                className="w-full h-56 object-cover  rounded-xl"
              />
              <p className="mt-5 text-sm mb-1 pill bg-green text-white">
                {program?.fields?.title}
              </p>
            </Link>
          ))}
        </div>
      ))}
    </div>
  );
};

export default ProgramCard;
