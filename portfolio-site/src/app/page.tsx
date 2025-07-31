import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Terminal from './component/Terminal'
import ExperienceTimeline from './component/ExperienceTimeline'
import { FaLinkedin, FaInstagram, FaGithub, FaYoutube } from 'react-icons/fa'

const HomePage = () => {
  return (
    <div className="flex flex-col items-center justify-center">

      {/* Hero Section */}
      <section className="flex flex-col items-center w-full px-4 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-4xl px-5 py-10
          bg-gradient-to-r from-indigo-800 via-indigo-600 to-purple-700
          rounded-2xl shadow-2xl border border-indigo-700
          hover:scale-105 transition-transform duration-300 relative overflow-hidden">

          {/* Text */}
          <div className="flex flex-col md:items-start text-center md:text-left mb-6 md:mb-0">
            <h1 className="text-5xl font-bold text-white">Hello 👋🏽</h1>
            <h1 className="text-5xl font-bold text-white">I am Steven Stafford</h1>
            <p className="mt-4 text-xl text-white max-w-2xl">
              <span className="font-semibold text-white">Scrum Master</span> at&nbsp;
              <Link href="https://www.momentumtech.io/" target="_blank" className="text-yellow-300 underline">
                Momentum Technology
              </Link>
              , I lead sprint planning and streamline agile operations.
            </p>
            <p className="mt-4 text-xl text-white max-w-2xl">
              <strong>Front-End Developer</strong> for&nbsp;
              <Link href="https://jcmovement.org" target="_blank" className="text-yellow-300 underline">
                JC Movement
              </Link>
              , I design, build, and maintain their impactful web platform.
            </p>
          </div>

          {/* Headshot */}
          <Image
            src="/headshot.jpg"
            alt="Steven Stafford Headshot"
            className="rounded-lg"
            width={250}
            height={300}
          />
        </div>
      </section>

      {/* Terminal Section */}
      <section className="w-full max-w-4xl px-5 py-8">
        <Terminal />
      </section>

      {/* Social Links */}
      <section className="flex gap-8 text-4xl py-6">
        <Link
          href="https://www.instagram.com/stevebookmark"
          target="_blank"
          aria-label="Instagram"
          className="hover:text-purple-500 transition-transform hover:scale-110"
        >
          <FaInstagram />
        </Link>
        <Link
          href="https://www.linkedin.com/in/steven-m-stafford"
          target="_blank"
          aria-label="LinkedIn"
          className="hover:text-blue-600 transition-transform hover:scale-110"
        >
          <FaLinkedin />
        </Link>
        <Link
          href="https://github.com/stevens69400"
          target="_blank"
          aria-label="GitHub"
          className="hover:text-gray-600 transition-transform hover:scale-110"
        >
          <FaGithub />
        </Link>
        <Link
          href="https://www.youtube.com/@SteveGoat72"
          target="_blank"
          aria-label="YouTube"
          className="hover:text-red-600 transition-transform hover:scale-110"
        >
          <FaYoutube />
        </Link>
      </section>

      {/* Experience Timeline */}
      <section className="flex flex-col md:flex-row items-center justify-around w-full max-w-4xl px-5 py-8">
        <ExperienceTimeline />
      </section>

    </div>
  )
}

export default HomePage
