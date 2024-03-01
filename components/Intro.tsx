"use client"
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { TypeAnimation } from 'react-type-animation';
import {motion} from "framer-motion"

export const Intro = () => {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }} className="col-span-8 place-self-center text-center sm:text-left">
        <h1 className="text-white mb-4 text-2xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
        <span className="text-transparent bg-clip-text bg-gradient-to-l from-purple-400 to-pink-600 ">Hi, I'm{" "}</span><br/>
        <TypeAnimation
      sequence={[
        'Sleek',
        3500,
        'A Full Stack Web Developer',
        2000,
        '',
        // 1000,
        // 'We produce food for Chinchillas',
        // 1000
      ]}
      wrapper="span"
      speed={30}
    //   style={{ fontSize: '1.5em', display: 'inline-block' }}
      repeat={Infinity}
    />
        </h1>
        <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
            {/* Bringing your idea to life with Web Development */}
            Crafting Your Digital Dreams.
            </p>
        <div className="flex justify-center">
    {/* <Link href="/" className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-800 text-white mt-3">
        <span className='bLock bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2'>Hire me</span>
        </Link> */}
         <Link
              href="/#contact"
              className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-800 text-white mt-3">
              <span className="block bg-transparent sm:bg-[#121212] hover:bg-[#121212] sm:hover:bg-slate-800 rounded-full px-5 py-2">
                Hire Me
              </span>
            </Link>
        </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }} className="col-span-4 place-self-center mt-4 lg:mt-0">
            <Image
            src="/002.jpg"
            alt="sleek logo"
            width={200}
            height={200}
            // className='md:rounded-bl-full'
            className='rounded-full lg:w-[300px] lg:h-[300px]'
            />
        
        </motion.div>
    </section>
  )
}
