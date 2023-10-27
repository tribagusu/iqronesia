import React from "react";
import { notFound } from "next/navigation";
import { client } from "@/lib/contentful";
import RichText from "@/components/blog/rich-text";
import { DateTime } from "luxon";

export async function generateStaticParams() {
  const res = await client.getEntries({ content_type: "blog" });
  return res.items.map((item) => ({
    params: { slug: item.fields.slug },
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const articles = await client.getEntries({ content_type: "blog" });
  const article = articles?.items?.find(
    (article) =>
      article.fields.title.toString().toLowerCase().replaceAll(" ", "-") ===
      params.slug
  );

  return {
    title: article.fields.title.toString(),
    description: article.fields.author.toString(),
  };
}

const Article = async ({ params }: { params: { slug: string } }) => {
  const articles = await client.getEntries({ content_type: "blog" });
  const article = articles?.items?.find(
    (article) =>
      article.fields.title.toString().toLowerCase().replaceAll(" ", "-") ===
      params.slug
  );

  if (!article) notFound();

  return (
    <div className="container my-10">
      <div className="flex flex-col md:w-[60%] m-auto">
        <h1 className="text-2xl font-bold mb-2">
          {article?.fields?.title.toLocaleString()}
        </h1>
        <small className="text-sm">
          {DateTime.fromISO(
            article?.fields?.created_at.toLocaleString()
          ).toFormat("DD")}
        </small>
        <small className="text-sm">
          Posted by <strong>{article?.fields?.author.toLocaleString()}</strong>
        </small>
        <div className="mt-5">
          <RichText content={article.fields.article} />
        </div>
      </div>
    </div>
  );
};

export default Article;
