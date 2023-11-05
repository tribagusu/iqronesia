import React from "react";
import { notFound } from "next/navigation";
import { client } from "@/lib/contentful";
import RichText from "@/components/blog/rich-text";

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
    description: program.fields.description.toString(),
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
        <h1 className="text-lg md:text-4xl font-bold mb-5">
          {program?.fields?.title.toLocaleString()}
        </h1>
        {/* <small className="text-sm text-gray-500">
          {DateTime.fromISO(
            article?.fields?.created_at.toLocaleString()
          ).toFormat("DD")}
        </small> */}
        {/* <small className="text-sm text-gray-500">
          Posted by <strong>{article?.fields?.author.toLocaleString()}</strong>
        </small> */}
        <div className="mt-10">
          <RichText content={program.fields.description} />
        </div>
      </div>
    </div>
  );
};

export default Program;
