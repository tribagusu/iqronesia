import React, { Dispatch, SetStateAction } from "react";
import Link from "next/link";
import { type TMenu } from "@/lib/types";

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
    <ul className={`dropdown ${dropdownClass} ${dropdown ? "show" : ""}`}>
      {menus?.map((menu, index) => (
        <li key={index}>
          <Link
            onClick={() => setDropdown(false)}
            href={`/${menu.href}`}
            className="min-w-[150px]"
          >
            {menu.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default MenuDropdown;
