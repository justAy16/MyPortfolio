import React from "react";
import { NavLinks } from "@/app/data/Data";
import Link from "next/link";

const Navigation = () => {

  return (
    <div
      className="fixed z-[50] place-self-center -bottom-20 w-[50%] md:w-[20%] max-h-[150px] rounded-full flex justify-between items-center border bg-black border-white px-4 py-7"
    >
      {/* {isRouting && <Transition />} */}
      {NavLinks.map((nav) => (
        <Link key={nav.name} href={nav.link} className="mb-16 pl-4 min-w-[20%]">
          <nav.icon
            className={`w-[24px] h-[24px] `}
          />
        </Link>
      ))}
    </div>
  );
};

export default Navigation;
