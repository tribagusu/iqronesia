import React from "react";
import { client } from "@/lib/contentful";
import Department from "@/components/program/department";

async function getData() {
  const res = await client.getEntries({ content_type: "department" });
  if (res.errors) {
    throw new Error("Failed to fetch data");
  }
  return res;
}

const ProgramPage = async () => {
  const department = await getData();

  // console.log("program", department);

  return (
    <div className="container my-10 md:my-16">
      <h1 className="text-4xl font-bold mb-2">Program</h1>
      <p className="text-lg mb-10">
        Discover various tips and information that will help you become a better
        Muslim.
      </p>

      {/* ========== department ========== */}
      <Department department={department.items} />
    </div>
  );
};

export default ProgramPage;
