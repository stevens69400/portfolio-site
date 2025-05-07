
import Link from 'next/link';
import { CiSun, CiDark } from "react-icons/ci"; 
import React from 'react'; 
import ThemeSwitch from './ThemeSwitch';
import { FaHome } from "react-icons/fa";
import about from '../about/page';


const NavBar = () => {

  return (
    <div className="flex justify-around px-2 py-8">
      <div className="">
        <Link href="/" className="sm:text-2xl md:text-5xl lg:text-4xl">
           <FaHome />
        </Link>
      </div>
      <div className="flex justify-between items-center gap-7">
        <Link href="/about" className="text-lg">
          About
        </Link>
        <Link href="/projects" className="text-lg">
          Projects
        </Link>
        <Link href="/notebook" className="text-lg">
          Notebook
        </Link>
        <ThemeSwitch />
      </div>
    </div>
  );
};

export default NavBar;