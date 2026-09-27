import React, { useRef } from 'react'
import project1 from '../assets/project1.png'
import project2 from '../assets/project2.png'
import project3 from '../assets/project3.png'
import project4 from '../assets/project4.png'
import project5 from '../assets/project5.png'
import project6 from '../assets/project6.png'
import { ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react'
import { FaGithub } from 'react-icons/fa'

const Projects = () => {
    const scrollRef = useRef(null)

    const projectsData = [
        {
            id: 1,
            image: project1,
            title: 'Toko Sejati Kosmetik Website',
            desc: 'Website ini dikembangkan sebagai solusi belanja online yang lengkap, memudahkan pelanggan untuk melihat katalog produk kosmetik secara sistematis dan melakukan transaksi dengan alur yang jelas.',
            tags: ['CI3', 'PHP', 'Mysql', 'HTML','CSS','JavaScript'],
            githubLink: 'https://github.com/shfirazahra/TokoSejati',
            liveLink: 'https://tokosejati.domcloud.dev/'
        },
        {
            id: 2,
            image: project2,
            title: 'GOBEL-Go Belajar',
            desc: 'Platform bimbingan belajar online yang menghubungkan siswa dengan tutor — manajemen kelas, jadwal, dan panel admin terintegrasi',
            tags: ['CI3', 'PHP', 'Mysql', 'HTML','CSS','JavaScript'],
            githubLink: 'https://github.com/shfirazahra/GOBEL',
            liveLink: 'https://gobel.domcloud.dev/'
        },
        {
            id: 3,
            image: project3,
            title: 'Jambi Web GIS',
            desc: 'Sistem informasi geografis persebaran rumah sakit dan penyakit di Kota Jambi berbasis peta web interaktif',
            tags: ['QGIS','PHP', 'Mysql','CSS','JavaScript'],
            githubLink: 'https://github.com/shfirazahra/JambiGIS',
            liveLink: 'https://jambigis.domcloud.dev/'
        },
        {
            id: 4,
            image: project4,
            title: 'Bumen Redja Abadi Warehouse Service',
            desc: 'Sistem manajemen gudang berbasis cloud dengan sinkronisasi real-time dan pencetakan slip otomatis untuk PT Bumen Redja Abadi',
            tags: ['Firebase', 'Cloud', 'HTML', 'CSS', 'JavaScript'],
            githubLink: 'https://bra-servicewarehouse.web.app/',
            liveLink: 'https://bra-servicewarehouse.web.app/'
        },
        {
            id: 5,
            image: project6,
            title: 'Lyfera-The Weavers Eternal Dreamscape ',
            desc: 'Kumpulan berbagai karya seni ku dalam bentuk website',
            tags: ['HTML', 'CSS', 'JavaScript'],
            githubLink: 'https://github.com/Lyferaa/Lyfera',
            liveLink: 'https://lyferaa.github.io/Lyfera/'
        },
        {
            id: 6,
            image: project5,
            title: 'Marta Store',
            desc: 'Desain UI/UX Marta Store',
            tags: ['Figma', 'UI', 'UX'],
            githubLink: 'https://www.figma.com/design/nMU7aoNPQJ5Vrl7ZESRHfe/Marta-Store?node-id=0-1&p=f',
            liveLink: 'https://www.figma.com/design/nMU7aoNPQJ5Vrl7ZESRHfe/Marta-Store?node-id=0-1&p=f'
        },
    ]

    const infiniteProjects = [...projectsData, ...projectsData, ...projectsData]

    const handleScroll = (direction) => {
        if (scrollRef.current) {
            const { scrollLeft } = scrollRef.current
            // Mengambil lebar kartu pertama ditambah gap-6 (24px) agar pergeseran di HP pas dan tidak mental kembali
            const firstCard = scrollRef.current.children[0]
            const cardWidth = firstCard ? firstCard.offsetWidth + 24 : 320
            const targetScroll = direction === 'left' ? scrollLeft - cardWidth : scrollLeft + cardWidth

            scrollRef.current.scrollTo({
                left: targetScroll,
                behavior: 'smooth'
            })

            setTimeout(() => {
                if (scrollRef.current) {
                    const maxScroll = scrollRef.current.scrollWidth / 3
                    if (scrollRef.current.scrollLeft >= maxScroll * 2) {
                        scrollRef.current.scrollLeft = maxScroll
                    } else if (scrollRef.current.scrollLeft <= 0) {
                        scrollRef.current.scrollLeft = maxScroll
                    }
                }
            }, 400)
        }
    }

    return (
        <section id='projects' className='py-20 relative overflow-hidden'>
            <div className='container mx-auto px-4 sm:px-8 lg:px-14 relative z-10'>
                <div className='flex flex-col sm:flex-row justify-between items-center mb-16 gap-4'>
                    <div className='text-center sm:text-left'>
                        <h2 className='text-3xl sm:text-4xl font-bold mb-4 dark:text-white text-gray-900'>
                            My Creative <span className='text-rose-500 dark:text-rose-400'>Projects</span>
                        </h2>
                    </div>
                    {/* Tombol diganti stylenya agar sama persis seperti di bagian Testimonial */}
                    <div className='flex gap-3'>
                        <button
                            onClick={() => handleScroll('left')}
                            className='w-12 h-12 rounded-full border flex items-center justify-center transition-all duration-300 focus:outline-none focus:ring-2 border-rose-300 text-rose-500 hover:bg-rose-500 hover:text-white focus:ring-rose-400 dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-rose-600 dark:focus:ring-white'
                            aria-label="Scroll Left"
                        >
                            <ChevronLeft size={24} />
                        </button>
                        <button
                            onClick={() => handleScroll('right')}
                            className='w-12 h-12 rounded-full border flex items-center justify-center transition-all duration-300 focus:outline-none focus:ring-2 border-rose-300 text-rose-500 hover:bg-rose-500 hover:text-white focus:ring-rose-400 dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-rose-600 dark:focus:ring-white'
                            aria-label="Scroll Right"
                        >
                            <ChevronRight size={24} />
                        </button>
                    </div>
                </div>

                <div
                    ref={scrollRef}
                    className='flex gap-6 scrollbar-none snap-mandatory snap-x overflow-x-hidden w-full px-4'>
                    {infiniteProjects.map((project, index) => (
                        <div
                            key={`${project.id}-${index}`}
                            className='w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] shrink-0 snap-start 
                            group rounded-3xl overflow-hidden border-2 transition-all duration-300
                             dark:border-zinc-800/60 border-gray-100 dark:bg-zinc-900/40 bg-white
                              hover:border-rose-500/50 dark:hover:border-rose-500/50
                               hover:shadow-[0_20px_40px_rgba(220,38,38,0.15)] flex flex-col'>
                            
                            <div className='relative overflow-hidden aspect-video bg-gray-100 dark:bg-zinc-900'>
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className='w-full h-full object-cover transition-transform duration-500 
                                    group-hover:scale-105'
                                />
                                <div className='absolute inset-0 bg-linear-to-t from-black/20 to-transparent
                                 opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
                            </div>

                            <div className='p-6 flex flex-col justify-between grow min-h-50'>
                                <div>
                                    <h3 className='text-lg font-bold mb-2 dark:text-white text-gray-900
                                     group-hover:text-rose-500 dark:group-hover:text-rose-400 transition-colors 
                                     duration-300'>
                                        {project.title}
                                    </h3>
                                    <p className='text-xs leading-relaxed mb-4 dark:text-gray-400
                                     text-gray-600 line-clamp-2'>
                                        {project.desc}
                                    </p>
                                </div>
                                <div>
                                    <div className='flex flex-wrap gap-1.5 mb-4'>
                                        {project.tags.map((tag, i) => (
                                            <span
                                                key={i}
                                                className='text-[10px] font-medium px-2.5 py-0.5 rounded-full 
                                                font-mono dark:bg-rose-500/10 bg-rose-500/5 dark:text-rose-300
                                                 text-rose-600'>
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                    <div className='flex items-center gap-4 pt-2 border-t dark:border-zinc-800/80
                                     border-gray-100'>
                                        {/* Link GitHub */}
                                        <a
                                            href={project.githubLink}
                                            target='_blank'
                                            rel='noopener noreferrer'
                                            className='inline-flex items-center gap-1.5 text-xs font-medium
                                             transition-colors duration-300 dark:text-gray-400 text-gray-600
                                              dark:hover:text-white hover:text-black'>
                                            <FaGithub size={14} /> Code
                                        </a>
                                        {/* Link Live Demo */}
                                        <a
                                            href={project.liveLink}
                                            target='_blank'
                                            rel='noopener noreferrer'
                                            className='inline-flex items-center gap-1.5 text-xs font-medium 
                                            transition-colors duration-300 dark:text-gray-400 text-gray-600
                                             dark:hover:text-white hover:text-black'>
                                            <ExternalLink size={14} /> Live Demo
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Projects