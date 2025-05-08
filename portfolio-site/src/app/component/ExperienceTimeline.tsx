import React from 'react';
import { FaBriefcase, FaUserGraduate } from "react-icons/fa";
import { RiScrollToBottomLine } from "react-icons/ri";



const experiences = [
  {
    title: "Technical Support Specialist",
    company: "Momentum Technology",
    date: "May 2024 – Present",
    icon: <FaBriefcase className="w-5 h-5 text-white" />,
    description: "Worked on building automated test cases using Playwright and integrated them into the CI/CD pipeline.",
  },
  {
    title: "Customer Service Representative",
    company: "Momentum Technology",
    date: "May 2023 – May 2024",
    icon: <FaBriefcase className="w-5 h-5 text-white" />,
    description: "Provided support and assistance to customers, resolving issues and ensuring satisfaction.",
  },
  {
    title: "AS Computer Science Student",
    company: "South College",
    date: "2023 – Present",
    icon: <FaUserGraduate className="w-5 h-5 text-white" />,
    description: "Pursuing a degree in Computer Science with a focus on software development.",
  },
];

export default function ExperienceTimeline() {
  return (
    <div className="flex-col items-center justify-around max-w-2xl mx-auto px-4 py-10">
      <h2 className="group flex flex-row items-center justify-center gap-1 text-2xl font-bold mb-6">Experiencies <RiScrollToBottomLine />
        <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm text-gray-500">Scroll to View More</span>
      </h2> 
      <div className="border-l-2 border-gray-300 pl- 4">
        {experiences.map((exp, idx) => (
          <div key={idx} className="relative mb-10">
            <div className="absolute -left-6 top-1.5 w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
              {exp.icon}
            </div>
            <div className="ml-6">
              <h3 className="text-lg font-semibold ">{exp.title}</h3>
              <p className="text-sm  italic">{exp.company} | {exp.date}</p>
              <p className="text-sm mt-2">{exp.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
