import React from "react";
import { client } from "@/lib/contentful";
import BlogCard from "@/components/blog/blog-card";
import { BsSearch } from "react-icons/bs";

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

const Blog = async () => {
  const blog = await getData();

  return (
    <div className="container my-16">
      <h1 className="text-4xl font-bold mb-2">Blog</h1>
      <p className="text-lg mb-10">
        Discover various tips and information that will help you become a better
        Muslim.
      </p>

      {/* ========== search ========== */}
      <form
        // onSubmit={(e) => e.preventDefault()}
        className="flex my-10 w-fit"
      >
        <input
          // onChange={(e) => setSearchQuery(e?.target?.value)}
          type="search"
          placeholder="Search article"
          className="md:min-w-[300px] rounded-s py-2 px-3 border outline-none shadow-sm"
        />
        <button className="inline-flex justify-center items-center py-1 px-4 rounded-e transition ease-out duration-200 bg-green text-white shadow-sm">
          <BsSearch />
        </button>
      </form>

      {/* ========== blog ========== */}
      <BlogCard blog={blog} />
    </div>
  );
};

export default Blog;
