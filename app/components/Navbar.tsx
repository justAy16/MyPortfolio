"use client"
import React, {useState} from 'react';
import Image from 'next/image';
import { Socials } from '@/app/data/Data';
import Link from 'next/link';
import { XMarkIcon } from '@heroicons/react/16/solid';
import MenuDisplay from './MenuDisplay';

function Navbar() {
  const [menuOpen, setMenuOpen]=useState(false)
  

  return (
    <nav className="fixed top-0 z-[90] border border-[#33353F] w-full  bg-[#121212] bg-opacity-100 items-center py-1 px-5 md:px-20">
       <div className="flex container items-center justify-between mx-auto">
    <div className="flex flex-row gap-3 items-center">
      <div >
        {menuOpen ? (
  <button
    onClick={() => setMenuOpen(false)}
    className="flex items-center px-3 py-2 mt-3 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
  >
    <XMarkIcon className="h-5 w-5" />
  </button>
) : (
  <Image
    onClick={() => setMenuOpen(true)} 
    src="/001.jpg"
    alt="sleek logo"
    width={40}
    height={40}
    className="w-full h-full object-contain rounded-full"
  />
)}
      </div>
      {/* <div className="relative hidden md:block">
          <Image
            src="/001.jpg"
            alt="sleek logo"
            width={40}
            height={40}
            className="w-full h-full object-contain rounded-full"
          />
      </div> */}
        <Link href="/" className="text-white text-[25px] font-semibold">
          Sleek
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500">
            {" "}
            Inc.
          </span>
        </Link>
      </div>
      <div className="flex flex-row gap-5 mb-2">
        {Socials.map((social) => (
          <Link key={social.key} href={social.href} target={social.target}>
          <Image
            key={social.key}
            src={social.src}
            alt={social.name}
            width={28}
            height={28}
          />
          </Link>
        ))}
      </div>
      </div>
      {menuOpen ? <MenuDisplay /> : null}
      </nav>
  )
}

export default Navbar