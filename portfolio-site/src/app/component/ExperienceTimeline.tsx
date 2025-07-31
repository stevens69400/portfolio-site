'use client';

import React from 'react';
import { FaBriefcase, FaCertificate } from 'react-icons/fa';
import { RiScrollToBottomLine } from 'react-icons/ri';
import Image from 'next/image';

const experiences = [
  {
    title: 'Scrum Master (in Training)',
    company: 'Momentum Technology',
    date: 'Oct 2025 (official) – Present',
    icon: <FaBriefcase className="w-5 h-5 text-white" />,
    description:
      'Currently training and performing Scrum Master responsibilities including sprint planning, team facilitation, retrospectives, and agile coaching. Official title begins in October 2025.',
  },
  {
    title: 'Technical Support Specialist',
    company: 'Momentum Technology',
    date: 'May 2024 – Present',
    icon: <FaBriefcase className="w-5 h-5 text-white" />,
    description:
      'Developed automated Playwright test cases and integrated them into the CI/CD pipeline to ensure deployment quality.',
  },
  {
    title: 'Front-End Developer',
    company: 'JC Movement',
    date: 'Oct 2024 – Present',
    icon: <FaBriefcase className="w-5 h-5 text-white" />,
    description:
      'Designed, built, and maintain JC Movement’s donor and parent-facing site using TypeScript and Next.js. Started with a Framer prototype in Oct 2024 and deployed a full static site in May 2025. Future plans include a full-stack application.',
  },
  {
    title: 'Customer Service Representative',
    company: 'Momentum Technology',
    date: 'May 2023 – May 2024',
    icon: <FaBriefcase className="w-5 h-5 text-white" />,
    description:
      'Assisted customers with technical issues and billing. Managed internal tools to troubleshoot app errors and provide account support.',
  },
  {
    title: 'AS in Computer Science, Graduate',
    company: 'South College',
    date: 'June 2023 – April 2025',
    icon: (
      <Image
        width={24}
        height={24}
        src="/southcollege_logo.jpeg"
        alt="South College Logo"
        className="rounded-full"
      />
    ),
    description:
      'Graduated with an Associate’s degree in Computer Science. Focused on AWS technologies like S3, EC2, and IAM. Gained hands-on experience deploying cloud applications and working with infrastructure. Also built foundational skills in JavaScript, version control, and problem-solving based on South College’s CS curriculum.',
  },
];

const certifications = [
  {
    name: 'Google Project Management Professional Certificate (v2)',
    issuer: 'Coursera',
    date: 'Issued May 28, 2025',
  },
  {
    name: 'Google IT Support Professional Certificate (v2)',
    issuer: 'Coursera',
    date: 'Issued Apr 16, 2025',
  },
  {
    name: 'AWS Academy Graduate - Cloud Developing',
    issuer: 'AWS Training and Certification',
    date: 'Issued Sep 5, 2024',
  },
];

export default function ExperienceTimeline() {
  return (
    <div className="flex-col items-center justify-around max-w-2xl mx-auto px-4 py-10">
      <h2 className="group flex flex-row items-center justify-center gap-1 text-2xl font-bold mb-6">
        Experiences <RiScrollToBottomLine />
        <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm text-gray-500">
          Scroll to View More
        </span>
      </h2>

      <div className="">
        {experiences.map((exp, idx) => (
          <div key={idx} className="relative mb-10">
            <div className="absolute -left-6 top-1.5 w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
              {exp.icon}
            </div>
            <div className="ml-6">
              <h3 className="text-lg font-semibold">{exp.title}</h3>
              <p className="text-sm italic">{exp.company} | {exp.date}</p>
              <p className="text-sm mt-2">{exp.description}</p>
            </div>
          </div>
        ))}
      </div>

      <h3 className="text-xl font-bold mt-12 mb-4 flex items-center gap-2">
        <FaCertificate className="text-yellow-500" /> Certifications
      </h3>
      <ul className="space-y-3 pl-2">
        {certifications.map((cert, idx) => (
          <li key={idx} className="text-sm leading-tight">
            <span className="font-medium">{cert.name}</span> <br />
            <span className="text-gray-600">{cert.issuer} — {cert.date}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
