import React from 'react';

const Projects = () => {
    return (
        <div className="flex gap-10">
              <div className="flex flex-row items-center justify-around px-30 py-8 gap-10">
                <div className="flex md:flex-row justify-around items-center w-150 px-9 py-8 bg rounded-lg">
                  <div className="flex flex-col md:items-start">
                    <h1 className="text-4xl font-semibold">Steven, Here! 👋🏽 </h1>
                    <p className="ml-4 mt-4 text-lg font-thin">
                      I'm a Software Engineer living in Nashville, Tennessee. I have a passion for building web applications and exploring new technologies. In my free time, I enjoy hiking, reading, and playing video games.
                    </p>
                    <p className="ml-4 mt-4 text-lg font-thin">
                      I have experience in various programming languages and frameworks, including JavaScript, Python, React, and Node.js. I love collaborating with others and learning from different perspectives.
                    </p>
                 </div>

                </div>
              </div>
               
            </div>
    );
};

export default Projects;