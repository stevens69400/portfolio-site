import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import Terminal from './component/Terminal'
import { FaLinkedin,FaInstagram,FaGithub, FaYoutube} from "react-icons/fa";
import  ExperinceTimeline from './component/ExperienceTimeline'



const HomePage = () => {
  return (
    <div className="flex flex-col items-center justify-center ">
    

      <div className="flex flex-col items-center h-full px-4 py-8">

        <div className="flex flex-col md:flex-row justify-between items-center w-full max-w-4xl px-5 py-8 bg rounded-lg shadow-xl border-1 hover:scale-105 transition-transform duration-300">
       
       <div className="flex flex-col md:items-start">
                  <h1 className="text-4xl font-semibold">Steven Stafford</h1>
                  <p className="ml-4 px-2 py-2 text-lg font-thin mr-10">I am a Software Engineer living in Nashville, Tennessee.
                  </p>
        </div>

                <div>
                  <Image
                    src="/meoji.jpeg"
                    alt="Picture of the author"
                    className='w-48 h-48 rounded-full border-5 border-black-300'
                    width={192}
                    height={192}
                  />
                </div>

          </div>

      </div>
   
      <div className="flex flex-col md:flex-row justify-between gap-4 items-center w-full max-w-4xl px-5 py-8 bg">
      <Terminal />
      </div>

      <div className='flex  gap-4 sm:text-2xl md:text-5xl lg:text-4xl'>
          
      <Link href="https://www.instagram.com/stevebookmark"  target="_blank"  className="sm:text-2xl md:text-5xl lg:text-4xl  hover:text-purple-500">
               <FaInstagram />
        </Link>

        <Link href="www.linkedin.com/in/steven-m-stafford"  target="_blank"  className="sm:text-2xl md:text-5xl lg:text-4xl  hover:text-blue-500">
                <FaLinkedin /> 

        </Link>

        <Link href="https://github.com/stevens69400" target="_blank"  className="sm:text-2xl md:text-5xl lg:text-4xl hover:text-gray-500">
                <FaGithub />
        </Link>
       
        <Link href="https://www.youtube.com/@SteveGoat72"  target="_blank"  className="flex gap-3 sm:text-2xl md:text-4xl lg:text-4l hover:text-red-500">
                <FaYoutube />
        </Link>

      </div>
      <div className="flex md:flex-row justify-around  gap-4 items-center w-full max-w-4xl px-5 py-8 bg">
        <h1 className=" text-xl font-semibold">Next Chapter: Internships Incoming</h1>
        <ExperinceTimeline />

        </div>
      
    </div>  
  
  )
}
export default HomePage