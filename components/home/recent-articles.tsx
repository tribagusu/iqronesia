import React from "react";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import Image from "next/image";
import { maxChar } from "../../utils/max-char";
import { client } from "@/lib/contentful";
import { DateTime } from "luxon";
import { BsArrowRightShort } from "react-icons/bs";

async function getData() {
  const res = await client.getEntries({ content_type: "blog" });
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (res.errors) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }
  return res;
}

const RecentArticles = async () => {
  const blog = await getData();
  const sortedArticle = blog?.items.sort(
    (a, b) =>
      DateTime.fromISO(b.fields.created_at.toLocaleString()).toMillis() -
      DateTime.fromISO(a.fields.created_at.toLocaleString()).toMillis()
  );

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
        <Link
          href="/blog"
          className="button-green smooth h-[2.5rem] mr-auto md:mr-0"
        >
          View All Articles{" "}
          <span>
            <BsArrowRight />
          </span>
        </Link>
      </div>

      {/* articles */}
      <div className="flex flex-col md:flex-row w-full justify-between gap-5">
        {sortedArticle
          .filter((item, i) => i < 3)
          .map((article, i) => (
            <div
              key={i}
              className="flex flex-col relative bg-black h-[300px] md:w-[33%] overflow-hidden rounded shadow"
            >
              {/* <Image
                src={img1}
                alt="image"
                className="object-cover w-full h-[30rem] opacity-60 transition ease-in-out duration-500 hover:scale-105"
              /> */}
              <Image
                src={`https:${article.fields.thumbnail["fields"].file.url}`}
                width={
                  article.fields.thumbnail["fields"].file.details.image.width
                }
                height={
                  article.fields.thumbnail["fields"].file.details.image.height
                }
                alt="foto"
                className="object-cover w-full h-[30rem] transition ease-in-out duration-500 hover:scale-105 opacity-60"
              />
              <div className="absolute left-0 bottom-0 text-white px-5 mb-5">
                <div className="flex items-center justify-between ">
                  <small className="pill px-2 mb-3 bg-yellow text-black">
                    {article?.fields?.author.toLocaleString()}
                  </small>
                  <small>
                    {DateTime.fromISO(
                      article?.fields?.created_at.toLocaleString()
                    ).toFormat("DD")}
                  </small>
                </div>
                <h4 className="font-bold text-2xl mb-5">
                  {maxChar(article?.fields?.title.toLocaleString(), 60)}
                </h4>
                <div className="flex">
                  <Link
                    href={`/blog/${article?.fields?.title
                      .toLocaleString()
                      .toLowerCase()
                      .replaceAll(" ", "-")}`}
                    className="flex items-center gap-2 hover:translate-x-2 ease-in-out duration-300 p-2 hover:underline text-white"
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
