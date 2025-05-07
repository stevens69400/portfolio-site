import React from 'react';
import Link from 'next/link';

const Notebook: React.FC = () => {
  const chapters = [
    {
      title: 'Introduction',
      content: `Welcome to my project tutorial! In this chapter, I’ll explain the purpose and goals of the project...`
    },
    {
      title: 'My First Portfolio 2022',
      content: `This is my first portfolio, which I created using basic HTML and CSS. It was a simple static site with no interactivity...`
    },
    {
      title: 'My AI Portfolio 2024',
      content: `I will my AI portfolio, which is a more advanced version of my previous portfolio. It includes features like...`
    },

    {
      title: 'My Current Portfolio 2025',
      content: `The current version of my portfolio is built using React and Next.js. It is fully responsive and includes features like dark mode and a dynamic layout`
    },
    // Add more chapters here
  ];

  return (
    <div className="min-h-screen p-8 flex justify-center">
      <div className="w-full max-w-3xl p-8 bg-[repeating-linear-gradient(white,white_24px,#dceafc_25px)] border border-gray-300 border-l-[10px] border-l-red-400 shadow-xl relative rounded-md">
      <div className="flex item-right justify-end">
            <Link href="/notebook" className="text-lg hover:text-red-500 hover:border-1 rounded-lg px-1">
            👈🏽 Go Back 
            </Link>
        </div>
        <h1 className="text-4xl text-black font-bold mb-6 font-mono">The Evolution of My Portfolio</h1>
        {chapters.map((chapter, index) => (
          <div key={index} className="mb-8">
            <h2 className="text-2xl text-black font-semibold mb-2">{chapter.title}</h2>
            <p className="text-gray-800 whitespace-pre-line font-mono">{chapter.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Notebook;
