import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const Testimonial = () => {
    // Referensi untuk mengendalikan scroll container
    const scrollContainerRef = useRef(null);

    const testimonials = [
        {
            id: 1,
            name: 'Akmal Reza Maulana',
            role: 'Admin Service',
            company: 'PT Bumen Redja Abadi',
            image: '/images/akmal.jpg', 
            text: 'Seorang profesional yang berdedikasi tinggi dalam penyelesaian tugas, berjiwa kreatif dalam bidang desain, dan konsisten dalam mencapai hasil kerja yang melampaui ekspektasi.'
        },
        {
            id: 2,
            name: 'Fatin Salsabila',
            role: 'Data Entry',
            company: 'PT Swakarya Insan Mandiri',
            image: '/images/nurul.jpg',
            text: 'Shafira itu orang nya rajin, sampai ke tempat kerja selalu awal & pagi banget padahal rumahnya jauh. Orang nya baik & ramah sama semua temen nya.'
        },
        {
            id: 3,
            name: 'Nurul Rahmatika',
            role: 'Kolega',
            company: 'Universitas Dian Nuswantoro',
            image: '/images/rezqua.jpg',
            text: 'Orang nya baik, jujur, kalem plus pinter sama ngambis juga nih anak'
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
    };

    const cardVariants = {
        hidden: { opacity: 0, scale: 0.9 },
        visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
    };

    // Fungsi untuk menggeser scroll ke Kiri atau Kanan
    const scroll = (direction) => {
        if (scrollContainerRef.current) {
            // Lebar geser disesuaikan dengan perkiraan lebar 1 kartu + gap
            const scrollAmount = direction === 'left' ? -420 : 420; 
            scrollContainerRef.current.scrollBy({
                left: scrollAmount,
                behavior: 'smooth'
            });
        }
    };

    return (
        <section id='testimonial' className='min-h-screen py-20 px-4 sm:px-6 flex items-center relative overflow-hidden'>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-rose-400/10 rounded-full blur-[100px] -z-10"></div>

            <div className='max-w-6xl mx-auto w-full'>
                
                {/* Bagian Header dan Tombol Navigasi */}
                <div className='flex flex-col sm:flex-row justify-between items-center mb-12 gap-6' data-aos='fade-up'>
                    <div className='text-center sm:text-left'>
                        <div className='inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-pink-400/10 border border-pink-400/20 mb-5'>
                            <span className='w-2 h-2 rounded-full bg-rose-400 animate-pulse' />
                            <span className='text-sm font-medium dark:text-gray-300 text-gray-700'>What People Say</span>
                        </div>
                        <h2 className='text-3xl sm:text-4xl lg:text-5xl font-bold dark:text-white text-gray-900'>
                            Client & Colleague <span className='text-rose-400'>Reviews</span>
                        </h2>
                    </div>

                   {/* Tombol Panah Kiri dan Kanan */}
                    <div className='flex gap-3'>
                        <button 
                            onClick={() => scroll('left')}
                            className='w-12 h-12 rounded-full border flex items-center justify-center transition-all duration-300 focus:outline-none focus:ring-2 border-rose-300 text-rose-500 hover:bg-rose-500 hover:text-white focus:ring-rose-400 dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-rose-600 dark:focus:ring-white'
                            aria-label="Scroll Left"
                        >
                            <ChevronLeft size={24} />
                        </button>
                        <button 
                            onClick={() => scroll('right')}
                            className='w-12 h-12 rounded-full border flex items-center justify-center transition-all duration-300 focus:outline-none focus:ring-2 border-rose-300 text-rose-500 hover:bg-rose-500 hover:text-white focus:ring-rose-400 dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-rose-600 dark:focus:ring-white'
                            aria-label="Scroll Right"
                        >
                            <ChevronRight size={24} />
                        </button>
                    </div>
                    </div>

                {/* Container Horizontal Scroll */}
                <motion.div 
                    ref={scrollContainerRef} // Ref disambungkan ke sini
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-100px' }}
                    className='flex overflow-x-auto gap-6 pb-8 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] px-2'
                >
                    {testimonials.map((item) => (
                        <motion.div 
                            key={item.id}
                            variants={cardVariants}
                            className='relative p-6 sm:p-8 bg-white/60 dark:bg-zinc-900/60 backdrop-blur-xl border border-rose-100 dark:border-zinc-800 rounded-3xl shadow-lg hover:shadow-rose-500/20 transition-all duration-300 group w-[320px] md:w-[400px] flex-none snap-center whitespace-normal'
                        >
                            <div className='absolute top-6 right-6 text-rose-300/30 dark:text-rose-500/20 group-hover:text-rose-400/40 transition-colors duration-300'>
                                <Quote size={40} className="sm:w-[60px] sm:h-[60px]" fill="currentColor" />
                            </div>

                            <div className='relative z-10'>
                                <p className='text-gray-600 dark:text-gray-300 leading-relaxed mb-8 italic text-sm md:text-base break-words'>
                                    "{item.text}"
                                </p>
                                
                                <div className='flex items-center gap-4'>
                                    <img 
                                        src={item.image} 
                                        alt={item.name} 
                                        className='w-12 h-12 sm:w-14 sm:h-14 rounded-full border-2 border-rose-300 dark:border-rose-500 object-cover bg-gray-200 shrink-0'
                                        onError={(e) => {
                                            e.target.onerror = null; 
                                            e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(item.name)}&background=fda4af&color=fff`;
                                        }}
                                    />
                                    <div>
                                        <h4 className='font-bold text-gray-900 dark:text-white group-hover:text-rose-500 transition-colors text-sm sm:text-base line-clamp-1'>
                                            {item.name}
                                        </h4>
                                        <p className='text-xs font-medium text-pink-600 dark:text-rose-400 line-clamp-1'>
                                            {item.role} <span className='text-gray-400 dark:text-gray-500'>at</span> {item.company}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

            </div>
        </section>
    );
};

export default Testimonial;
