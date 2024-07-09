import React from "react";
import Image from "next/image";
import Link from "next/link";
import logoWhite from "@/public/iqronesia-logo-white.png";
import { footerData } from "@/config/footer";
import {
  AiFillLinkedin,
  AiFillInstagram,
  AiFillFacebook,
  AiFillYoutube,
} from "react-icons/ai";

const WebFooter = () => {
  return (
    <footer className="space-y-6 pt-[3rem] lg:pt-[5rem] bg-green">
      <div className="container flex flex-col lg:flex-row text-white pb-0 md:pb-[2rem]">
        <div className="mr-[5rem] mb-[2rem]">
          <Image src={logoWhite} alt="iqro" className="w-[250px]" />
        </div>
        <div className="flex flex-col md:flex-row">
          {footerData?.map((data, i) => (
            <div key={i} className="flex flex-col mr-[3rem] mb-[1rem]">
              <h4 className="mb-1 md:mb-3 font-extrabold">{data.title}</h4>
              {data?.items?.map((item, i) => (
                <div key={i} className="flex flex-col">
                  <Link
                    href={`${item.blank ? item.link : "/" + item.link}`}
                    target={`${item.blank ? "_blank" : "_self"}`}
                    className="hover:underline hover:text-yellow md:mt-[3px]"
                  >
                    {item.name}
                  </Link>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className="container flex flex-col md:flex-row text-white border-t border-t-white py-[1rem]">
        <div className="flex gap-3 text-white text-3xl mr-[10rem] mb-[2rem]">
          <Link href="https://instagram.com" target="_blank" className="">
            <AiFillInstagram />
          </Link>
          <Link href="https://facebook.com" target="_blank" className="">
            <AiFillFacebook />
          </Link>
          <Link href="https://youtube.com" target="_blank" className="">
            <AiFillYoutube />
          </Link>
        </div>
        <div className="flex flex-col gap-1">
          <div className="flex gap-10">
            <h5 className="uppercase font-bold">iqro centre sydney</h5>
            <p>39 McCourt Street, Wiley Park, NSW 2195</p>
          </div>
          <div className="flex gap-10">
            <h5 className="uppercase font-bold">iqro centre perth</h5>
            <p>Shop 2, 45 Kent Street, Cannington WA 6107</p>
          </div>
        </div>
      </div>
      <div className="text-center text-white bg-darkPurple2 py-4">
        &copy; 2024 Iqronesia by Iqro Foundation
      </div>
    </footer>
  );
};

export default WebFooter;
