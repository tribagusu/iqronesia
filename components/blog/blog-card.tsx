import React from "react";
import Link from "next/link";
import Image from "next/image";
import { BsArrowRightShort } from "react-icons/bs";
import { DateTime } from "luxon";

const BlogCard = ({ blog }) => {
  const sortedArticle = blog?.items.sort(
    (a, b) =>
      DateTime.fromISO(b.fields.created_at.toLocaleString()).toMillis() -
      DateTime.fromISO(a.fields.created_at.toLocaleString()).toMillis()
  );

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {sortedArticle?.map((item, i) => (
        <Link
          key={i}
          href={`/media/blog/${item.fields.title
            .toLowerCase()
            .replaceAll(" ", "-")}`}
          className="bg-white rounded-2xl overflow-hidden shadow relative "
        >
          <Image
            src={`https:${item.fields.thumbnail.fields.file.url}`}
            width={item.fields.thumbnail.fields.file.details.image.width}
            height={item.fields.thumbnail.fields.file.details.image.height}
            alt="foto"
            className="w-full h-56 object-cover w"
          />
          <div className="py-4 mb-3 px-10 flex flex-col lg:h-36">
            <h4 className=" text-lg font-semibold mb-5">{item.fields.title}</h4>
            <div className="flex flex-col justify-between ">
              <p className="text-gray-500 text-sm mb-1">
                {DateTime.fromISO(
                  item?.fields?.created_at.toLocaleString()
                ).toFormat("DD")}
              </p>
              <p className="text-gray-500 text-sm">{item.fields.author}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default BlogCard;
