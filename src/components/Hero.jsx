import { DownloadIcon, Mail } from 'lucide-react'
import React from 'react'
import CV from '../assets/CV.pdf'
import hero from '../assets/hero.png'
import { FaGithub, FaInstagram, FaTiktok, FaYoutube } from 'react-icons/fa'

const Hero = ({ darkMode }) => {
  const socialIcons = [
    { icon: FaInstagram, alt: 'Instagram', link: '#' },
    { icon: FaTiktok, alt: 'TikTok', link: '#' },
    { icon: FaGithub, alt: 'Github', link: '#' },
    { icon: FaYoutube, alt: 'Youtube', link: '#' },
  ]

  return (
    <section id='home' className='min-h-screen flex items-center relative overflow-hidden'>
      <div className='container mx-auto px-4 sm:px-8 lg:px-14 py-12 lg:-mt-14 relative z-10'>
        
        <div className='flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16'>
          <div className='lg:w-2/5 w-full flex justify-center' data-aos='fade-right'>
            <div className='relative group'>
              <div className='absolute inset-0 bg-linear-to-r from-rose-400 to-rose-600 rounded-full filter
               blur-2xl opacity-30 
              group-hover:opacity-50 transition-opacity duration-500' />
              
              <div className='relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96'>
                <img 
                  src={hero} 
                  alt="hero" 
                  className='w-full h-full object-cover rounded-full relative z-10
                    transform group-hover:scale-105 transition-transform duration-500' 
                />
                
                <div className='absolute inset-0 border-2 border-rose-400/30 rounded-full 
                scale-110 group-hover:scale-125 transition-transform duration-500' />
                <div className='absolute inset-0 border-2 border-rose-400/20 rounded-full 
                scale-125 group-hover:scale-150 transition-transform duration-700' />
              </div>
            </div>
          </div>

          <div className='lg:w-3/5 w-full flex flex-col items-center lg:items-start text-center lg:text-left'
           data-aos='fade-left'>
            <div className='inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-pink-400/10 border
             border-pink-400/20 mb-5'>
              <span className='w-2 h-2 rounded-full bg-green-400 animate-pulse' />
              <span className='text-sm font-medium dark:text-gray-300 text-gray-700'>Available for work</span>
            </div>

            <h1 className='text-4xl sm:text-5xl lg:text-6xl font-bold mb-3 dark:text-white text-gray-900'>
             Hi, I'm <span className='text-rose-400 dark:text-rose-400'>Shafira</span>
            </h1>
            
            <h2 className='text-xl sm:text-2xl font-mono mb-4 dark:text-rose-400 text-pink-600'>
              <span className='text-gray-400 dark:text-gray-500'>&lt;</span>
              Full-Stack Developer
              <span className='text-gray-400 dark:text-gray-500'>&gt;</span>
            </h2>
            
            <p className='mb-6 leading-relaxed max-w-md lg:max-w-lg dark:text-gray-300 text-gray-700'>
              Membangun aplikasi web yang tidak hanya solid secara sistem, tapi juga nyaman di mata.
            </p>
            
            <div className='flex gap-8 mb-7'>
              {[
                { number: '1', label: 'Year Experience' },
                { number: '6', label: 'Projects Done' },
                { number: '6', label: 'Happy Colleague' },
              ].map((stat, index) => (
                <div key={index} className='text-center'>
                  <div className='text-2xl font-bold dark:text-white text-gray-900'>{stat.number}</div>
                  <div className='text-xs dark:text-gray-400 text-gray-600'>{stat.label}</div>
                </div>
              ))}
            </div>

            <div className='flex flex-col sm:flex-row gap-4 w-full sm:w-auto'>
              <a href={CV} download className='w-full sm:w-auto'>
                <button className='w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3 
                rounded-full text-white font-semibold bg-linear-to-r from-rose-500 to-rose-400 dark:from-[#3a1f24] dark:to-[#251216]] transition-all 
                 duration-300 transform hover:scale-105'>
                  <DownloadIcon size={18} />
                  Download CV
                </button>
              </a>
              
              <a href="#contact" className='w-full sm:w-auto'>
                <button className='w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3
                 rounded-full 
                font-semibold border-2 dark:border-rose-300 border-rose-500 dark:text-white text-gray-800
                 dark:hover:bg-rose-300 hover:bg-rose-500 dark:hover:shadow-[0_0_40px_rgba(220,38,38,0.7)] 
                 hover:shadow-[0_0_40px_rgba(220,38,38,0.7)] dark:hover:text-white hover:text-white
                  transition-all
                  duration-300 transform hover:scale-105'>
                  <Mail size={18} />
                  Hire Me
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero