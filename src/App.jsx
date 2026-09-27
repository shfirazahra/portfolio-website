import React, { useEffect, useState } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Journey from './components/Journey'
import Certificates from './components/Certificates'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Testimonial from './components/Testimonial'
import Contact from './components/Contact'
import Footer from './components/Footer'

const App = () => {
  // 1. Set ke false agar web terbuka di Light Mode terlebih dahulu
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      offset: 100
    });
    // 2. Memastikan class 'dark' dihapus dari HTML saat pertama kali web dimuat
    document.documentElement.classList.remove('dark');
  }, []);

  useEffect(() => {
    AOS.refresh();
  }, [darkMode]);

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    document.documentElement.classList.toggle('dark'); 
  };

  return (
    <div className={
      darkMode
      // Bagian dark:to-[#251216] saya hapus sepenuhnya agar gradasinya kembali membaur dengan warna to-rose-400 seperti desain andalan Anda sebelumnya!
      ? 'relative bg-gradient-to-br from-rose-500 to-rose-400 dark:from-[#3a1f24] min-h-screen'
      : 'relative bg-linear-to-br from-rose-100 to-rose-50 min-h-screen'
    }>
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode}/>
      <Hero />
      <About/>
      <Journey/>
      <Skills />
      <Certificates />
      <Projects />
      <Testimonial />
      <Contact />
      <Footer />
    </div>
  )
}

export default App