"use client";
import React from "react";
import Link from "next/link";

import { usePathname } from "next/navigation";

const Navbar = () => {
  const router = usePathname();

  const navList = [
    { label: "Overview", linkTo: "/" },
    { label: "Conformance", linkTo: "/conformance" },
    { label: "Lead Time", linkTo: "/lead-time" },
    { label: "Process Flow", linkTo: "/process-flow" },
    { label: "Root Causes", linkTo: "/root-causes" },
  ];

  return (
    <nav className="bg-blue-600 text-white p-4 shadow-md">
      <div className="container mx-auto md:flex md:justify-between md:items-center">
        <div className="md:flex md:items-center md:space-x-2">
          <div className="text-2xl p-2 font-bold">Process Mining Dashboard</div>
        </div>
        <div className="flex flex-col md:flex-row md:space-x-6">
          {navList.map((link) => {
            const isActive = router === link.linkTo;
            return (
              <Link
                key={link.label}
                href={link.linkTo}
                className={`hover:text-blue-200 p-2 rounded transition-all ${
                  isActive ? "bg-blue-800 shadow" : ""
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
