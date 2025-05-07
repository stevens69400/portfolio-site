import React from 'react'

const About = () => {
  return (
    <div className="flex">
      <div className="flex flex-col items-center px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center w-full max-w-4xl px-5 py-8 bg rounded-lg shadow-xl border-1">
          <div className="flex flex-col md:items-start">
            <h1 className="text-4xl font-semibold">About Me</h1>
            <p className="ml-4 mt-4 text-lg font-thin">
              I'm a Software Engineer living in Nashville, Tennessee. I have a passion for building web applications and exploring new technologies. In my free time, I enjoy hiking, reading, and playing video games.
            </p>
            <p className="ml-4 mt-4 text-lg font-thin">
              I have experience in various programming languages and frameworks, including JavaScript, Python, React, and Node.js. I love collaborating with others and learning from different perspectives.
            </p>
            <p className="ml-4 mt-4 text-lg font-thin">
              I'm always looking for new challenges and opportunities to grow as a developer. If you're interested in working together or just want to chat, feel free to reach out!
            </p>
          </div>
          </div>
      </div>
       
    </div>
  )
}

export default About