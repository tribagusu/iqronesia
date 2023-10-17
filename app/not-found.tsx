"use client";

import { HiArrowLongLeft } from "react-icons/hi2";

export default function NotFound() {
  return (
    <div className="flex h-screen overflow-auto bg-darkGreen text-white">
      <div className="flex flex-col mx-auto items-center justify-center px-4">
        <h1 className="text-[100px] md:text-[130px] leading-none">404</h1>
        <p className="text-center text-lg md:text-xl max-w-lg font-light">
          Sorry.. We searched high and low but couldn&apos;t find what
          you&apos;re looking for. Let&apos;s find a better place for you to go.
        </p>
        <a
          href="/"
          className="flex items-center gap-2 px-3 text-white hover:underline mt-5"
        >
          <HiArrowLongLeft />
          Back to home
        </a>
      </div>
    </div>
  );
}
