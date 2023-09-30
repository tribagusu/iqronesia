import React from "react";
import Link from "next/link";
// import { aboutNavConfig } from "@/config/nav";
import { type TMenu } from "@/lib/types";
import NavMenu from "./nav-menu";

type DropdownProps = {
  menus: TMenu[];
  depthLevel: number;
  dropdown: boolean;
};

const DropdownMenu: React.FC<DropdownProps> = ({
  menus,
  depthLevel,
  dropdown,
}) => {
  depthLevel = depthLevel + 1;
  const dropdownClass = depthLevel > 1 ? "dropdown-submenu" : "";

  return (
    <ul className={`dropdown ${dropdownClass} ${dropdown ? "show" : ""}`}>
      {menus?.map((menu, index) => (
        <li key={index}>
          <Link href={menu.href}>{menu.title}</Link>
        </li>
      ))}
    </ul>
  );
};

export default DropdownMenu;
