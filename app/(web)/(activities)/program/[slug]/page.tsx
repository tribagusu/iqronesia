import React from "react";
import { notFound } from "next/navigation";
import { client } from "@/lib/contentful";
import RichText from "@/components/blog/rich-text";
import Markdown from "react-markdown";
import Image from "next/image";
import Link from "next/link";
import { IoLogoWhatsapp } from "react-icons/io";

export async function generateStaticParams() {
  const res = await client.getEntries({ content_type: "program" });
  return res.items.map((item) => ({
    params: { slug: item.fields.slug },
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const programs = await client.getEntries({ content_type: "program" });
  const program = programs?.items?.find(
    (program) =>
      program.fields.title.toString().toLowerCase().replaceAll(" ", "-") ===
      params.slug
  );

  return {
    title: program.fields.title.toString(),
    description: program.fields.description?.toString(),
  };
}

const Program = async ({ params }: { params: { slug: string } }) => {
  const programs = await client.getEntries({ content_type: "program" });
  const program = programs?.items?.find(
    (program) =>
      program.fields.title.toString().toLowerCase().replaceAll(" ", "-") ===
      params.slug
  );

  if (!program) notFound();

  return (
    <div className="container my-10">
      <div className="flex flex-col md:w-[60%] m-auto">
        {/* <Image
          src={`https:${program.fields.image.fields.file.url}`}
          width={program.fields.image.fields.file.details.image.width}
          height={program.fields.image.fields.file.details.image.height}
          alt="foto"
          className="w-full h-56 object-cover  rounded mb-5"
        /> */}
        {/* <h1 className="text-lg md:text-4xl font-bold mb-5">
          {program?.fields?.title.toLocaleString()}
        </h1> */}
        {/* <small className="text-sm text-gray-500">
          {DateTime.fromISO(
            article?.fields?.created_at.toLocaleString()
          ).toFormat("DD")}
        </small> */}
        {/* <small className="text-sm text-gray-500">
          Posted by <strong>{article?.fields?.author.toLocaleString()}</strong>
        </small> */}
        <div>
          <Markdown className="markdown">
            {program.fields.description?.toLocaleString()}
          </Markdown>
        </div>

        <div className="flex justify-center mt-5 md:mt-[2rem]">
          <Link
            href="https://chat.whatsapp.com/FnAbWQXojgB9M6kpgY0qry"
            target="_blank"
            className="btn-md-green uppercase font-medium shadow-sm smooth text-white"
          >
            <span className="text-white text-xl mr-2 py-2">
              <IoLogoWhatsapp />
            </span>
            JOIN ENGLISH CLUB
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Program;
