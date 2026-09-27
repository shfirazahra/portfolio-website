import React, { useState } from 'react'
import { 
  FaCertificate,
  FaCode,
  FaEnvelope,
  FaHome,
  FaProjectDiagram,
  FaUser,
  FaBriefcase,
  FaCommentDots
} from 'react-icons/fa'
import { FiSun, FiMoon } from 'react-icons/fi'
import { motion } from 'framer-motion'

const Navbar = ({ darkMode, toggleDarkMode }) => {
  const [activeTab, setActiveTab] = useState('Home')

  const navItems = [
    { name: 'Home', link: '#home', icon: FaHome },
    { name: 'About', link: '#about', icon: FaUser },
    { name: 'Journey', link: '#journey', icon: FaBriefcase },
    { name: 'Skills', link: '#skills', icon: FaCode },
    { name: 'Certificates', link: '#certificates', icon: FaCertificate },
    { name: 'Projects', link: '#projects', icon: FaProjectDiagram },
    { name: 'Contact', link: '#contact', icon: FaEnvelope },
  ]

  return (
    <div className='fixed z-50 bottom-0 left-0 right-0 flex justify-center'>
      <motion.nav
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className='relative w-[95%] max-w-4xl mb-4'
      >
       <div className='relative bg-gradient-to-r from-rose-500 to-rose-400 dark:from-[#3a1f24] dark:to-[#251216]] backdrop-blur-xl rounded-2xl shadow-2xl border border-white/25 px-3 py-2 transition-colors duration-300'>
          <div className='absolute -top-12 right-3'>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={toggleDarkMode}
              className='p-2 rounded-full bg-gray-900 dark:bg-gray-100 transition-colors backdrop-blur-sm'
            >
              {darkMode ? (
                <FiSun className='w-4 lg:w-5 h-4 text-black'/>
              ) : (
                <FiMoon className='w-4 lg:w-5 h-4 text-white'/>
              )}
            </motion.button>
          </div>
          <div className='flex items-center justify-around gap-0.5'>
            {navItems.map((item)=>{
                const Icon = item.icon
                const isActive = activeTab === item.name
                return(
                    <motion.a
                        key={item.name}
                        href={item.link}
                        onClick={()=>setActiveTab(item.name)}
                        whileHover={{scale: 1.1}}
                        whileTap={{scale:0.9}}
                        className='flex flex-col items-center gap-0.5
                        py-1.5 px-2 relative group flex-1'>
                          {isActive && (
                            <motion.div
                            layoutId='activeTab'
                            className='absolute -top-2 left-1/2 -translate-x-1/2 w-6 h-1 bg-white rounded-full'
                            transition={{ duration: 0.3 }}
                            />
                            )}
                            <Icon
                            className={`w-5 h-5 transition-all 
                            duration-300 ${
                                isActive
                            ? 'text-white'
                            : 'text-white/70 group-hover:text-white'
                            }`}/>

                           <span className={`text-[10px] font-medium transition-all duration-300 ${
                         isActive
                        ? 'text-white'
                       : 'text-white/60 group-hover:text-white'
}`}>
                        {item.name}
</span>
                    </motion.a>
                )
            })}
          </div>
        </div>
      </motion.nav>
    </div>
  )
}

export default Navbar