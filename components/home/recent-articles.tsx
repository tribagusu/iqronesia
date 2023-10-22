import React from "react";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import Image from "next/image";
import { articles } from "@/config/articles";
import { useMaxChar } from "@/hooks/use-max-char";

import { BsArrowRightShort } from "react-icons/bs";
import img1 from "@/public/images/tech1.jpeg";

const RecentArticles = () => {
  const filteredArticles = articles.filter((article, i) => i < 3);

  return (
    <div className="container my-[5rem]">
      <div className="flex flex-col md:flex-row justify-between mb-10">
        <div className="flex flex-col">
          <h2 className="font-bold text-3xl mb-2">Recent Articles</h2>
          <p className="mb-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam,
            ab.
          </p>
        </div>
        <Link href="/media/blog" className="button-green smooth h-[2.5rem]">
          View All{" "}
          <span>
            <BsArrowRight />
          </span>
        </Link>
      </div>

      {/* articles */}
      <div className="flex flex-col md:flex-row w-full justify-between gap-5">
        {articles
          ?.filter((item, i) => i < 3)
          .map((article) => (
            <div
              key={article.id}
              className="flex flex-col relative bg-black h-[450px] md:w-[33%] overflow-hidden rounded-2xl shadow-xl"
            >
              <Image
                src={img1}
                alt="image"
                className="object-cover w-full h-[30rem] opacity-60 transition ease-in-out duration-500 hover:scale-105"
              />
              <div className="absolute left-0 bottom-0 text-white px-5 mb-5">
                <div className="flex items-center justify-between ">
                  <small className="pill px-2 mb-3 bg-mustard">
                    {article.author}
                  </small>
                  <small>{article.date}</small>
                </div>
                <h4 className="font-bold text-2xl mb-5">
                  {useMaxChar(article.title, 55)}
                </h4>
                <div className="flex">
                  <Link
                    href="/"
                    className="flex items-center gap-2 hover:translate-x-2 ease-in-out duration-300 p-2 hover:underline text-mustard"
                  >
                    <span className="">Read more</span>
                    <span className="text-lg scale-x-150">
                      <BsArrowRightShort />
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default RecentArticles;
