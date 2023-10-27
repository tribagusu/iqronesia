import React, { useEffect, useState } from "react";

import { client } from "@/lib/contentful";

import BlogCard from "@/components/blog/blog-card";

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
    <div className="container my-20">
      {/* next feature */}
      <form
        // onSubmit={(e) => e.preventDefault()}
        className="flex my-10 w-fit"
      >
        <input
          // onChange={(e) => setSearchQuery(e?.target?.value)}
          type="search"
          placeholder="Search article"
          className="md:min-w-[300px] rounded py-2 px-3 border outline-none shadow-sm"
        />
        <button className="btn-md-lightGreen shadow-sm">Search</button>
      </form>

      {/* blog */}
      <BlogCard blog={blog} />
    </div>
  );
};

export default Blog;
