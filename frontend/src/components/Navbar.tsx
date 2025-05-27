"use client";
import React, { useState } from "react";
import Link from "next/link";

import { usePathname } from "next/navigation";
import { MenuIcon } from "lucide-react";

const Navbar = () => {
  const router = usePathname();
  const [openNav, setOpenNav] = useState(false);
  const navList = [
    { label: "Overview", linkTo: "/overview" },
    { label: "Conformance", linkTo: "/conformance" },
    { label: "Lead Time", linkTo: "/lead-time" },
    { label: "Process Flow", linkTo: "/process-flow" },
    { label: "Root Causes", linkTo: "/root-causes" },
  ];

  return (
    <nav className="bg-black text-white p-2 shadow-md sticky top-0 z-10">
      <div className="container mx-auto md:flex md:justify-between md:items-center">
        <div className="md:flex flex justify-between items-center md:items-center md:space-x-2">
          {/* <button className="md:hidden p-">..</button> */}
          <MenuIcon
            className="md:hidden"
            onClick={() => setOpenNav(!openNav)}
          />
          <Link href="/" className="flex flex-col items-end">
            <div className="  text-[17px] font-bold text-orange-500">
              Process Mining Dashboard
            </div>
            <span className="text-[8px]">
              By <b className="text-orange-500">Lumel</b>{" "}
            </span>
          </Link>
        </div>
        <div
          className={`${
            openNav ? "flex" : "hidden"
          } animate-in transition-all flex-col md:flex md:flex-row md:space-x-6`}
        >
          {navList.map((link) => {
            const isActive = router === link.linkTo;
            return (
              <Link
                key={link.label}
                href={link.linkTo}
                className={`text-[14px] font-semibold p-1 rounded transition-all ${
                  isActive
                    ? "bg-orange-500 shadow text-black"
                    : "hover:text-orange-200"
                } `}
              >
                {link.label}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
