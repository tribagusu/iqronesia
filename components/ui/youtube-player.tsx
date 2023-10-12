"use client";

import React from "react";
import ReactPlayer from "react-player/youtube";

const YoutubePlayer = () => {
  return (
    <div className="h-auto md:w-[50%]">
      <ReactPlayer
        width="100%"
        height="100%"
        // className="react-player"
        controls={false}
        url="https://www.youtube.com/watch?v=qjLCl_mrpNc"
      />
    </div>
  );
};

export default YoutubePlayer;
