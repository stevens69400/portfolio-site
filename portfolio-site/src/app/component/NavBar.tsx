
import Link from 'next/link';
import { CiSun, CiDark, CiShop } from "react-icons/ci"; 
import React from 'react'; 
import ThemeSwitch from './ThemeSwitch';
import { FaHome } from "react-icons/fa";
import about from '../about/page';


const NavBar = () => {

  return (
    <div className="flex flow-row justify-around px-2 py-8 sticky">
      <div className=''>
        <Link href="/" className="sm:text-2xl md:text-5xl lg:text-4xl hover:text-amber-500"> 
          <CiShop />
        </Link>
      </div>
      <div className="flex justify-between items-center gap-7">
        <Link href="/about" className="text-lg hover:text-x hover:border-1 rounded-lg px-1">
          About
        </Link>
        <Link href="/projects" className="text-lg hover:text-x hover:border-1 rounded-lg px-1">
          Projects
        </Link>
        <Link href="/notebook" className="text-lg hover:text-x hover:border-1 rounded-lg px-1g">
          Notebook
        </Link>
        <ThemeSwitch />
      </div>
    </div>
  );
};

export default NavBar;