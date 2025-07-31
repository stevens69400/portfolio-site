import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaRegFolderOpen } from 'react-icons/fa'
import { TbCertificate } from 'react-icons/tb'

const About = () => {
  return (
    <div className="flex flex-col md:flex-row gap-10 items-center justify-center w-full px-8 py-10  rounded-lg shadow-md">
      
      {/* Text Section */}
      <div className="max-w-2xl">
        <h1 className="text-4xl font-bold mb-4">Steven, here! 👋🏽</h1>
        <p className="text-lg  mb-4 leading-relaxed">
          That photo to the right is me and my girlfriend on my graduation day — a moment that meant a lot to both of us.
        </p>
        <p className="text-lg mb-4 leading-relaxed">
          I live in Nashville, Tennessee, and while I once dreamed of climbing the ranks as a software engineer, I’ve realized that what drives me isn’t position — it’s purpose. I’m passionate about improving systems, learning every day, and using technology to serve people.
        </p>
        <p className="text-lg mb-4 leading-relaxed">
          I’ve been part of the <strong>JC Movement</strong>, a nonprofit before-and-after school program I’ve witness my Uncle Joseph Jenkins start in 2017. I helped in its earliest days, and now it serves three partner schools. I’m honored to continue contributing by building and maintaining its web platform.
        </p>
        <p className="text-lg mb-4 leading-relaxed">
          My love for family and my faith in the Lord have carried me through every season. I truly believe the Lord has brought me this far for a reason — and I know there so much more He has for me to do in this world.
        </p>

        {/* Links */}
        <div className="flex flex-row gap-4 mt-6 flex-wrap">
          <Link
            href="https://drive.google.com/file/d/1AZVKNw2mo7YsX3ZBkq9UL5xQ-dVswZj5/view"
            target="_blank"
            className="flex items-center justify-center gap-2 px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600 transition-colors"
          >
            Review Resume <FaRegFolderOpen className="hover:scale-110 transition-transform" />
          </Link>
          <Link
            href="https://www.credly.com/users/steven-stafford-cred"
            target="_blank"
            className="flex items-center justify-center gap-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
          >
            View Certifications <TbCertificate className="hover:scale-110 transition-transform" />
          </Link>
        </div>
      </div>

      {/* Image Section */}
      <div className="flex ">
        <Image
          src="/picmeandlove.jpg"
          alt="Steven and his girlfriend on graduation day"
          className="rounded-xl shadow-lg border border-gray-300"
          width={400}
          height={400}
        />
      </div>
    </div>
  )
}

export default About
