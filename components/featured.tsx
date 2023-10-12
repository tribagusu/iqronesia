import React, { useEffect, useState } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import { BsArrowRight } from "react-icons/bs";

const Featured = () => {
  const YoutubePlayer = dynamic(
    () => import("@/components/ui/youtube-player"),
    {
      ssr: false,
    }
  );

  const videoTitle =
    "Meneladani Rumah Tangga Rasulullah - Pengajian Keluarga IQRO";
  const videoDesc =
    "Meneladani Rumah Tangga Rasulullah - Pengajian Keluarga IQRO";
  const videoDate = "24 Oct, 2023";

  return (
    <div className="container my-[6rem]">
      <div className="flex flex-col md:flex-row rounded-xl shadow-lg overflow-hidden border w-full">
        <YoutubePlayer />
        <div className="flex flex-col justify-between p-10 md:w-[50%]">
          <div className="flex flex-col">
            <small className="pill mb-5 bg-red-500 text-white">VIDEO</small>
            <h1 className="text-2xl mb-2 font-bold">{videoTitle}</h1>
            <p className="mb-10">{videoDesc}</p>
          </div>
          <div className="flex flex-col md:flex-row self-start md:self-auto md:justify-between items-center">
            <span className="flex self-start md:self-end mb-2">
              {videoDate}
            </span>

            <Link
              href="https://www.youtube.com/@IQROChannel/streams"
              target="_blank"
              className="button-green"
            >
              IQRO Youtube Channel
              <span>
                <BsArrowRight />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
