import React from "react";
import Link from "next/link";
import Image from "next/image";
import { BsArrowRightShort } from "react-icons/bs";
import { DateTime } from "luxon";
import { contactData } from "@/config/contact";
import img1 from "@/public/images/iqro-masjid.jpeg";
import { MdMapsHomeWork } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";
import { IoMail } from "react-icons/io5";
import { BiSolidTimeFive } from "react-icons/bi";

const Contact = () => {
  return (
    <div className="container my-20 flex flex-col">
      <h1 className="text-4xl font-bold mb-2">Contact Us</h1>
      <p className="text-lg mb-10">
        Need help or have any feedback for us? Please contact us through these
        communication channels:
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {contactData?.map((item, i) => (
          <div
            key={i}
            className="bg-white rounded-xl overflow-hidden shadow relative"
          >
            <Image
              src={img1}
              alt="foto"
              className="w-full h-56 object-cover w"
            />
            <div className="py-4 mb-3 px-10 flex flex-col">
              <h4 className=" text-lg font-semibold mb-3">{item.name}</h4>
              <ul className="flex flex-col justify-between gap-2">
                <li className="flex gap-4 text-blue-700">
                  <span className="text-lg pt-1">
                    <MdMapsHomeWork />
                  </span>
                  <Link
                    href={item.maps}
                    target="_blank"
                    className="text-blue-700 hover:underline"
                  >
                    {item.address}
                  </Link>
                </li>
                <li className="flex gap-4 items-center">
                  <span className="text-lg">
                    <BsFillTelephoneFill />
                  </span>
                  <span>{item.phone}</span>
                </li>
                <li className="flex gap-4 items-center">
                  <span className="text-lg">
                    <IoMail />
                  </span>
                  <span>{item.email}</span>
                </li>
                <li className="flex gap-4 items-center">
                  <span className="text-lg">
                    <BiSolidTimeFive />
                  </span>
                  <span>{item.open_hours}</span>
                </li>
              </ul>
              <Link
                href={item.href}
                className="flex items-center gap-2 hover:translate-x-2 ease-in-out duration-300 text-green mt-5"
              >
                <span className="hover:underline">Go to {item.name}</span>
                <span className="text-lg scale-x-150">
                  <BsArrowRightShort />
                </span>
              </Link>
            </div>
            {/* <div className="flex my-5 px-10 text-darkGreen"></div> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Contact;
