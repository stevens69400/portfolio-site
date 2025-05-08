import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaRegFolderOpen, } from "react-icons/fa"
import { TbCertificate } from "react-icons/tb"





const About = () => {
  return (
    <div className="flex gap-10">
      <div className="flex flex-row items-center justify-around px-30 py-8 gap-10">
        <div className="flex flex-col md:flex-row justify-around items-center w-150 px-9 py-8 bg rounded-lg">
          <div className="flex flex-col md:items-start">
            <h1 className="text-4xl font-semibold">Steven, Here! 👋🏽 </h1>
            <p className="ml-4 mt-4 text-lg font-thin">
              I'm a Software Engineer living in Nashville, Tennessee. I have a passion for building web applications and exploring new technologies. In my free time, I enjoy hiking, reading, and playing video games.
            </p>
            <p className="ml-4 mt-4 text-lg font-thin">
              I have experience in various programming languages and frameworks, including JavaScript, Python, React, and Node.js. I love collaborating with others and learning from different perspectives.
            </p>
            <p className="ml-4 mt-4 text-lg font-thin">
              I'm always looking for new challenges and opportunities to grow as a developer. If you're interested in working together or just want to chat, feel free to reach out!
            </p>
            <div className="flex flex-row gap-4 mt-6">
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
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center w-150 px-5 py-8 bg">
          <div className="flex flex-col md:items-start">
          <div className="flex justify-center items-center">
                <Image 
                  src="/about.png"
                  alt="Picture of the author"
                  className='w-full h-full border border-black-300 rounded-xl'
                  width={200}
                  height={200}>

                  </Image>
        </div>
                                 
            </div>
            </div>
      </div>
       
    </div>
  )
}

export default About