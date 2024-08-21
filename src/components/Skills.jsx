import React from 'react'
import html from '../assests/html.png';
import css from '../assests/css.png';
import TailwindCss from '../assests/tailwind.png';
import react from '../assests/react.png';
import js from '../assests/javascript.png'
//import java from '../assests/java.png'
//import php from '../assests/php.png'

const Skills = () => {
  return (
    <div className=' border border-gray-600 bg-black text-gray-400 md:h-{150px} max-w-{1200px} mx-auto 
    grid grid-cols-3 place-items-center md:flex md: justify-between md:items-center'>

        <h2 className='text-gray-700 text-2xl md:text-4xl front-bold m-4'>My <br/>Tech<br/>Stack</h2>
      
        <div className='flex flex-col items-center m-4 sm:my-0 w-{40px} md:w-{100px} mt-4'>
            <img src={html} alt=''/>
            <p className='mt-2'>html</p>
        </div>

        <div className='flex flex-col items-center m-4 sm:my-0 w-{40px} md:w-{100px}'>
            <img src={css} alt=''/>
            <p className='mt-2'>css</p>
        </div>

        <div className='flex flex-col items-center m-4 sm:my-0 w-{20px} md:w-{80px}'>
            <img src={js} alt=''/>
            <p className='mt-2'>Java Script</p>
        </div>

        <div className='flex flex-col items-center m-4 sm:my-0 w-{20px} md:w-{80px}'>
            <img src={react} alt=''/>
            <p className='mt-2'>React</p>
        </div>

        <div className='flex flex-col items-center m-4 sm:my-0 w-{20px} md:w-{100px}'>
            <img src={TailwindCss} alt=''/>
            <p className='mt-2'>Tailwind Css</p>
        </div>


        
        
        


        {/*<div className='flex flex-col items-center m-4 sm:my-0 w-{100px} md:w-{100px}'>
            <img src={java} alt=''/>
            <p className='mt-8'>Java</p>
        </div>


        <div className='flex flex-col items-center m-4 sm:my-0 w-{100px} md:w-{100px}'>
            <img src={php} alt=''/>
            <p className='mt-8'>Php</p>
        </div>*/}
    </div>
    
  )
}

export default Skills
