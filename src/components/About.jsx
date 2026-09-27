import React from 'react'
import about from '../assets/about.png'
import { ArrowRight } from 'lucide-react'
import { FaTiktok, FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa'

const About = () => {
  const socialLinks = [
    { icon: FaInstagram, label: 'Instagram', color: 'hover:text-pink-500 hover:border-pink-500/40', href: 'https://www.instagram.com/shfiraazhraa._/'},
    { icon: FaTiktok, label: 'TikTok', color: 'hover:text-purple-500 hover:border-purple-500/40', href: 'https://tiktok.com/shfiraazhraa._'},
    { icon: FaGithub, label: 'GitHub', color: 'hover:text-red-500 hover:border-red-500/40',href: 'https://github.com/shfirazahra' },
    { icon: FaLinkedin, label: 'Linkedin', color: 'hover:text-blue-500 hover:border-blue-500/40',href: 'https://www.linkedin.com/in/shfiraazhraa/' }
  ]

  return (
    <section id='about' className='min-h-screen flex items-center py-20 px-4 sm:px-6 overflow-hidden relative'>
      <div className='max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 
      items-center relative z-10'>
        
        <div className='order-2 lg:order-1 flex flex-col items-center lg:items-start text-center lg:text-left' 
        data-aos='fade-right'>
          
          <div className='inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-400/10 border
           border-rose-400/20 mb-4'>
            <span className='w-2 h-2 rounded-full bg-rose-400 animate-pulse' />
            <span className='text-xs sm:text-sm font-semibold tracking-wider uppercase text-pink-600
             dark:text-rose-400'>
              About Me
            </span>
          </div>

          <h2 className='text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 dark:text-white text-gray-900
           leading-tight'>
            Merancang Antarmuka
            <span className='text-rose-400 dark:text-rose-400 block'>Membangun Logika</span>
          </h2>

          <p className='text-base lg:text-lg mb-8 leading-relaxed dark:text-gray-300 text-gray-700 max-w-xl'>
            Lulusan D3 Teknik Informatika Universitas Dian Nuswantoro. 
            Memiliki keahlian pengembangan Front-End, Back-End, Mobile App, dan UI/UX Design, didukung oleh sertifikasi kompetensi dari BNSP, Meta, Google dan Microsoft. 
            Saya menggabungkan kemampuan teknis IT dengan pemahaman administrasi operasional untuk menciptakan solusi digital yang efisien, user-friendly, dan mendorong pertumbuhan bisnis.
          </p>
          <div className='flex gap-4 mb-8'>
           {socialLinks.map((social, index) => {
  const IconComponent = social.icon
  return (
    <a
      key={index}
      href={social.href} // <-- Diubah jadi seperti ini
      aria-label={social.label}
      data-aos='zoom-in'
      data-aos-delay={index * 100}
      className={`w-12 h-12 rounded-full flex items-center justify-center text-xl 
        border border-gray-200 dark:border-gray-800 bg-white/50 dark:bg-gray-900/50 
        backdrop-blur-sm dark:text-gray-300 text-gray-700 transition-all duration-300 
        hover:scale-110 hover:shadow-lg ${social.color}`}
    >
      <IconComponent />
    </a>
  
              )
            })}
          </div>
          <a href="#contact" data-aos='fade-up' data-aos-delay='300'>
            <button className='group inline-flex items-center gap-2 px-8 py-3.5 rounded-full
             font-semibold text-white bg-linear-to-r from-rose-500 to-rose-400 dark:from-[#3a1f24] dark:to-[#251216]]
             hover:shadow-[0_0_40px_rgba(220,38,38,0.7)] shadow-[0_0_20px_rgba(220,38,38,0.3)] 
             transition-all duration-300 transform hover:scale-105'>
              Let's Talk
              <ArrowRight className='w-5 h-5 transition-transform group-hover:translate-x-1' />
            </button>
          </a>
        </div>
        <div className='relative order-1 lg:order-2 flex justify-center' data-aos='fade-left'>
          <div className='relative w-full max-w-sm sm:max-w-md'>
            <div className='absolute inset-0 bg-linear-to-r from-black-1100 via-rose to-rose-400
            
            rounded-[40%_60%_60%/40%_60%_70%] filter blur-xl opacity-40 animate-pulse' />

            <div className='absolute inset-0 bg-linear-to-tr from-black-1100 via-rose to-rose-400
            rounded-[40%_60%_60%/40%_60%_70%] transform rotate-3 scale-105' />

            <img 
              src={about} 
              alt="About Me"
              className='relative z-10 rounded-[40%_60%_60%/40%_60%_70%] shadow-2xl w-full
               h-auto object-cover border-2 border-rose-400/30 backdrop-blur-sm' 
            />

            <div className='absolute -bottom-6 -right-6 w-24 h-24 bg-rose-400/20 rounded-full 
            blur-2xl pointer-events-none' />
            <div className='absolute -top-6 -left-6 w-20 h-20 bg-rose-600/20 rounded-full 
            blur-xl pointer-events-none' />
          </div>
        </div>

      </div>
    </section>
  )
}

export default About