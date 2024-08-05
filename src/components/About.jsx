import React from 'react'
import image from '../assests/my.jpg'

const About = () => {
  return (
    <div className='text-white max-w-{1200px} mx-auto my-12' id='about'>
        <div className='md:grid md:grid-cols-2 sm:py-16 '>
            <div className='mt-4 md:mt-0 text-left flex flex-col h-full justify-start py-6 md:py-0'>
                <div className='my-auto mx-6'>
                    <h2 className='text-4xl font-bold mb-4 primary-color'>About Me</h2>
                    <p className='text-base lg:text-lg'>I am currently seeking an internship opportunity in front-end development, back-end development, or full-stack web development. As an Information Technology student at SLIATE, I have developed a strong foundation in web technologies and am eager to apply my skills in a real-world environment. I am passionate about learning and contributing to a dynamic team, and I look forward to the opportunity to grow and develop as a professional in the field</p>
                </div>
            </div>

            <img  className=' mx-auto rounded-3xl py-8 md:py-0' src={image} alt='/' width={300} height={300} />
        </div>
      
    </div>
  )
}

export default About
