import React from "react";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import Image from "next/image";
import { articles } from "@/config/articles";
import { useMaxChar } from "@/hooks/use-max-char";

import { BsArrowRightShort } from "react-icons/bs";
import img1 from "@/public/images/tech1.jpeg";

const Blog = () => {
  return (
    <div className="container my-20">
      {/* next feature */}
      <div>
        <div>Search</div>
        <div>Sort</div>
      </div>

      {/* blog */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {articles?.map((article, i) => (
          <div
            key={i}
            className="bg-white rounded-xl overflow-hidden shadow-md relative"
          >
            <Image src={img1} alt="foto" className="w-full h-56 object-cover" />
            <div className="py-4 px-10 flex flex-col lg:h-36">
              <h4 className=" text-lg font-semibold mb-3">{article.title}</h4>
              <p>{useMaxChar(article.content, 120)}</p>
            </div>
            <div className="flex py-5 md:py-8 px-10 text-darkGreen">
              <Link
                href="/"
                className="flex items-center gap-2 hover:translate-x-2 ease-in-out duration-300"
              >
                <span className="hover:underline">Read more</span>
                <span className="text-lg scale-x-150">
                  <BsArrowRightShort />
                </span>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
