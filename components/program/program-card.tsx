import React from "react";
import Link from "next/link";
import Image from "next/image";

const ProgramCard = ({ programs, selected }) => {
  return (
    <div className="tab-panels">
      {programs?.map((item, index) => (
        <div
          key={index}
          className={`${
            selected === index
              ? "grid grid-cols-1 md:grid-cols-3 gap-8 w-full"
              : "hidden"
          }`}
        >
          {item.fields.programs.map((program, index) => (
            <Link
              key={index}
              href={`/program/${program.fields.title
                .toLowerCase()
                .replaceAll(" ", "-")}`}
              className="flex w-full flex-col"
            >
              <Image
                src={`https:${program.fields.image.fields.file.url}`}
                width={program.fields.image.fields.file.details.image.width}
                height={program.fields.image.fields.file.details.image.height}
                alt="foto"
                className="w-full h-32 object-cover  rounded"
              />
              <h4 className="text-lg font-semibold mt-5 mb-1">
                {program?.fields?.title}
              </h4>
            </Link>
          ))}
        </div>
      ))}
    </div>
  );
};

export default ProgramCard;
