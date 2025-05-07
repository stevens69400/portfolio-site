import React from 'react';
import Link from 'next/link'; 
import { IoIosOpen } from "react-icons/io"; // Importing the IoIosOpen icon from react-icons

const Notebook: React.FC = () => {
  const chapters = [
    {
      title: 'Chapter 1: The Evolution of My Portfolio',
      content: `In this chapter, I reflect on the journey of building my personal portfolio website—from my very first static site built with basic HTML and CSS, to the dynamic, responsive version I use today.`,
      link: '/notebook/chapter-1' // Link to the specific page
    },
    {
      title: 'Chapter 2: How to implement Dark Mode',
      content: `In this chapter, I discuss the implementation of dark mode in my portfolio. I explore the challenges I faced and the solutions I found, including using next-theme and ThemeSwitch Component.`,
      link: '/notebook/chapter-1' // Link to the specific page
    },
    {
      title: 'Chapter 3: How to Upload a Site to AWS S3',
      content: `In this chapter, I detail the process of uploading my portfolio site to AWS S3. I cover the steps involved, from setting up an S3 bucket to configuring permissions and making the site publicly accessible.`,
      link: '/notebook/chapter-1' // Link to the specific page
    },
    
    // Add more chapters here
  ];

  return (
    <div className="min-h-screen p-8 flex justify-center">
      <div className="w-full max-w-3xl p-8 bg-[repeating-linear-gradient(white,white_24px,#dceafc_25px)] border border-gray-300 border-l-[10px] border-l-red-400 shadow-xl relative rounded-md">
        <h1 className="text-4xl text-black font-bold mb-6 font-mono">📓 Notebook</h1>
        {chapters.map((chapter, index) => (
          <div key={index} className="mb-8">
            <Link href={chapter.link} className="group text-2xl text-blue-800 font-semibold mb-2 hover:underline">
                <div className="text-black sm:text-xl md:text-xl lg:text-xl ml-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <IoIosOpen />
                </div>
                {chapter.title} 
            </Link>
            <p className="text-gray-800 whitespace-pre-line font-mono">{chapter.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Notebook;