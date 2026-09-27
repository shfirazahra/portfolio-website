import React from 'react'
import { FaGithub, FaHeart, FaInstagram, FaLinkedin } from 'react-icons/fa'

const Footer = () => {
    const currentYear = new Date().getFullYear()
  return (
   <footer
   className='border-t bg-linear-to-br from-rose-400 to-white
   dark:bg-linear-to-br dark:from-rose-900 to-rose-400 dark:from-[#3a1f24] dark:to-[#251216]] py-6'>
    <div className='container mx-auto px-6 flex flex-col sm:flex-row
    justify-between items-center gap-4'>
        <div>
            <h3 className='text-xl text-rose-500 font-bold
             dark:text-rose-400'>Portfolio</h3>
            <p className='text-xs'>Frontend Developer</p>
        </div>
        <div className='flex gap-4'>
            <a 
            href="https://github.com/shfirazahra" 
            className='hover:text-rose-500 transition-colors'>
                <FaGithub size={20}/>
            </a>
            <a 
            href="https://www.linkedin.com/in/shfiraazhraa/" 
            className='hover:text-rose-500 transition-colors'>
                <FaLinkedin size={20}/>
            </a>
            <a 
            href="https://www.instagram.com/shfiraazhraa._/" 
            className='hover:text-rose-500 transition-colors'>
                <FaInstagram size={20}/>
            </a>
        </div>
        <p className='text-xs flex items-center gap-1'>
            {currentYear} Made with <FaHeart className='text-rose-500'/>
            by <span className='font-semibold text-rose-500'>
                Shafira</span>
        </p>
    </div>
    
    <div className='h-24'></div>
   </footer>
  )
}

export default Footer