import Link from 'next/link'
import React from 'react'
import NavBar from './component/NavBar'
import Image from 'next/image'


const HomePage = () => {
  return (
    <div className="flex flex-col items-center justify-center ">
    

      <div className="flex flex-col items-center h-full px-4 py-8">

        <div className="flex flex-col md:flex-row justify-between items-center w-full max-w-4xl px-5 py-8 bg rounded-lg shadow-xl border-1">
       
       <div className="flex flex-col md:items-start ">
                  <h1 className="text-4xl font-semibold">Steven Stafford</h1>
              
                  <p className="ml-4 mt-4 text-lg font-thin">I'm a Software Engineer living in Nashville, Tennessee.
             
                  </p>

                  <Link href="/projects" className="mt-6 px-2 py-3 bg-blue-500 text-white rounded">  
                    View Projects
                  </Link>   
                
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

      <div className="flex flex-col md:flex-row justify-between items-center w-full max-w-4xl px-5 py-8 bg rounded-lg shadow-xl border-1">
             
       </div>

    </div>  
  
  )
}

export default HomePage