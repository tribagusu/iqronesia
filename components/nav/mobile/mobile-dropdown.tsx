import React, { Dispatch, SetStateAction } from "react";
import Link from "next/link";
import { type TMenu } from "@/lib/types";

type MobileDropdownProps = {
  menus: TMenu[];
  depthLevel: number;
  dropdown: boolean;
  setShowNav: Dispatch<SetStateAction<boolean>>;
};

const MobileDropdown: React.FC<MobileDropdownProps> = ({
  menus,
  depthLevel,
  dropdown,
  setShowNav,
}) => {
  depthLevel = depthLevel + 1;
  const dropdownClass = depthLevel > 1 ? "dropdown-submenu" : "";

  return (
    <ul className={`mobile-dropdown ${dropdown ? "show" : ""}`}>
      {menus?.map((menu, index) => (
        <Link
          onClick={() => setShowNav(false)}
          key={index}
          href={`/${menu.href}`}
          className="flex items-center my-0 mx-auto w-full py-2 border-b border-[#ddd] text-[15px]"
        >
          {menu.title}
        </Link>
      ))}
    </ul>
  );
};

export default MobileDropdown;
