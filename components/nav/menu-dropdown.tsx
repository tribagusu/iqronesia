import React, { Dispatch, SetStateAction } from "react";
import Link from "next/link";
import { type TMenu } from "@/lib/types";
import { FaArrowUp } from "react-icons/fa";

type DropdownProps = {
  menus: TMenu[];
  depthLevel: number;
  dropdown: boolean;
  setDropdown: Dispatch<SetStateAction<boolean>>;
};

const MenuDropdown: React.FC<DropdownProps> = ({
  menus,
  depthLevel,
  dropdown,
  setDropdown,
}) => {
  depthLevel = depthLevel + 1;
  const dropdownClass = depthLevel > 1 ? "dropdown-submenu" : "";

  return (
    <div className={`dropdown ${dropdownClass} ${dropdown ? "show" : ""}`}>
      <div className="flex justify-center container m-auto">
        {menus?.map((menu, index) => (
          <Link
            key={index}
            onClick={() => setDropdown(false)}
            href={`/${menu.href}`}
            className="flex flex-col"
          >
            <span className="flex items-center gap-2 text-lg text-black font-bold mb-2 ">
              {menu.title}{" "}
              <span className="text-white font-bold hover:text-green ease-in-out duration-300 rotate-45">
                <FaArrowUp />
              </span>
            </span>
            <span className="block">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Quibusdam, quae!
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MenuDropdown;
