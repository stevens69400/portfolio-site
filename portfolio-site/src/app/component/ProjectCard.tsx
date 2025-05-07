import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { IoIosOpen } from "react-icons/io"; // Importing the IoIosOpen icon from react-icons

const ProjectCard: React.FC = () => {
  return (
    <div className="flex flex-row justify-center gap-10 px-5 py-5">
      
      {/* Project 1 */}
      <Link href='/' className="group flex flex-col items-center px-5 py-5 rounded-xl hover:shadow-2xl hover:border-1">
      <div className="sm:text-xl md:text-xl lg:text-xl ml-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300 px-1 py-1">
      <IoIosOpen />
        </div>

        <Image
          src="/portfolio-screenshot.png"
          alt="Picture of the author"
          className="w-full h-full border border-gray-300 rounded-lg"
          width={192}
          height={192}
        />
        <div className="px-5 py-5 text-center">
          <h1 className="text-lg font-semibold py-1.5">Portfolio Website</h1>
          <p className="text-sm font-thin py-1.5">This is my main website, which you are currently on.</p>
          <ul className="flex flex-wrap gap-2 justify-center">
            <li className="px-3 py-1 bg-blue-500 text-white text-sm rounded-full shadow-sm border-1 border-black">React</li>
            <li className="px-3 py-1 bg-green-500 text-white text-sm rounded-full shadow-sm border-1 border-black">Node.js</li>
            <li className="px-3 py-1 bg-yellow-500 text-white text-sm rounded-full shadow-sm border-1 border-black">JavaScript</li>
            <li className="px-3 py-1 bg-purple-500 text-white text-sm rounded-full shadow-sm border-1 border-black">TypeScript</li>
          </ul>
          </div>
        </Link>

      {/* Project 2 */}
      <div className="flex flex-col items-center px-9 py-8 rounded-xl hover:shadow-2xl hover:border-1">  
        <Image
          src="/construction.png"
          alt="Picture of the author"
          className="w-48 h-48 border border-gray-300 rounded-lg"
          width={192}
          height={192}
        />
        <div className="px-5 py-5 text-center">
          <h1 className="text-lg font-semibold py-1.5">Coming Soon!</h1>
          <p className="text-sm font-thin py-1.5">Many more Project Will be added Soon.</p>
          <ul className="flex flex-row gap-2 justify-center">
            <li className="px-3 py-1 bg-gray-500 text-white text-sm rounded-full shadow-sm"></li>
            <li className="px-3 py-1 bg-gray-500 text-white text-sm rounded-full shadow-sm"></li>
            <li className="px-3 py-1 bg-gray-500 text-white text-sm rounded-full shadow-sm"></li>
            <li className="px-3 py-1 bg-gray-500 text-white text-sm rounded-full shadow-sm"></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;