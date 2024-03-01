import React from 'react';
import { Menu } from '@/data/Data';
import Link from 'next/link';

interface MenuItem {
  title: string;
  path: string;
}

// interface MenuDisplayProps {
//   links: MenuItem[];
// }

const MenuDisplay = () => {
  return (
    <div className="menu block w-auto">
  {Menu.map(({title, path}:MenuItem)=>(
    <ul className=" py-1 flex flex-col items-center space-x-8 mt-0">
        <li key={title}>
        <Link
      href={path}
      className="block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white"
    >
      {title}
    </Link>
        </li>
    </ul>
  ))}
  </div>
  );
};

export default MenuDisplay;
