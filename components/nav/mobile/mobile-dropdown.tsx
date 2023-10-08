import React from "react";
import Link from "next/link";
import { type TMenu } from "@/lib/types";

type MobileDropdownProps = {
  menus: TMenu[];
  depthLevel: number;
  dropdown: boolean;
};

const MobileDropdown: React.FC<MobileDropdownProps> = ({
  menus,
  depthLevel,
  dropdown,
}) => {
  depthLevel = depthLevel + 1;
  const dropdownClass = depthLevel > 1 ? "dropdown-submenu" : "";

  return (
    <ul className={`mobile-dropdown ${dropdown ? "show" : ""}`}>
      {menus?.map((menu, index) => (
        <Link
          key={index}
          href={menu.href}
          className="flex items-center my-0 mx-auto w-full pl-6 py-2 border-b border-[#ddd]"
        >
          {menu.title}
        </Link>
      ))}
    </ul>
  );
};

export default MobileDropdown;
