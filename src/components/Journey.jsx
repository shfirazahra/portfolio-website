import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Calendar } from 'lucide-react';

const Journey = () => {
    // Data riwayat sudah digabung (Pendidikan & Pekerjaan)
    const journeyItems = [
        {
            id: 1,
            category: 'work',
            title: 'Service & Warranty Claim Administrator',
            organization: 'PT Bumen Redja Abadi',
            date: '2025 - 2026',
            description: 'Mengelola input dan validasi data pada sistem Product Quality Report (PQR) serta Warranty Service Claim (WSC) dengan tingkat akurasi tinggi.'
        },
        {
            id: 2,
            category: 'work',
            title: 'Cooperative Administrator',
            organization: 'Kantor Wilayah ATR/BPN Provinsi Jawa Tengah', 
            date: '2024-2025', 
            description: 'Bertanggung jawab atas pencatatan transaksi kas harian, rekonsiliasi pendapatan, dan analisis keuntungan bulanan secara sistematis.'
        },
        {
            id: 3,
            category: 'work',
            title: 'Data Entry Clerk',
            organization: 'PT Swakarya Insan Mandiri',
            date: '2024-2024',
            description: 'Memproses entri data skala besar (840+ dokumen KK) secara konsisten dengan fokus pada kecepatan dan ketepatan target harian.'
        },
        {
            id: 4,
            category: 'internship',
            title: 'Full-Stack Developer',
            organization: 'Kantor Wilayah ATR/BPN Provinsi Jawa Tengah',
            date: '2023-2024',
            description: 'Merancang dan mengembangkan aplikasi Web & Mobile berjudul SI-INKA yang terintegrasi sebagai solusi digital inventaris instansi.'
        },
         {
            id: 5,
            category: 'education',
            title: 'D3-Teknik Informatika',
            organization: 'Universitas Dian Nuswantoro',
            date: '2021-2024',
            description: 'Mahasiswi TI UDINUS yang memiliki fokus dalam pengembangan Website & Mobile dengan teknologi modern.'
        }
    ];

    return (
        <section id='journey' className='min-h-screen py-20 px-4 sm:px-6 flex items-center relative'>
            <div className='max-w-4xl mx-auto w-full relative z-10'>
                
                {/* Judul Section */}
                <div className='text-center mb-16' data-aos='fade-up'>
                    <div className='inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-400/10 border border-rose-400/20 mb-5'>
                        <span className='w-2 h-2 rounded-full bg-rose-400 animate-pulse' />
                        <span className='text-sm font-medium dark:text-gray-300 text-gray-700'>Experience & Education</span>
                    </div>
                    <h2 className='text-3xl sm:text-4xl lg:text-5xl font-bold dark:text-white text-gray-900'>
                        My <span className='text-rose-400'>Journey</span>
                    </h2>
                </div>

                {/* Timeline Container */}
                <div className='relative'>
                    {/* Garis tengah vertikal */}
                    <div className='absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-rose-300 via-pink-400 to-rose-300 dark:from-rose-500/50 dark:via-pink-500/50 dark:to-rose-500/50 md:-translate-x-1/2 rounded-full' />

                    <div className='space-y-12'>
                        {journeyItems.map((item, index) => (
                            <motion.div 
                                key={item.id}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: '-50px' }}
                                transition={{ duration: 0.5, delay: index * 0.2 }}
                                className={`relative flex flex-col md:flex-row items-start md:items-center ${
                                    index % 2 === 0 ? 'md:flex-row-reverse' : ''
                                }`}
                            >
                                {/* Garis pemisah imajiner untuk layout desktop */}
                                <div className='hidden md:block w-1/2' />

                                {/* Ikon Lingkaran di Tengah */}
                                <div className='absolute left-4 md:left-1/2 -translate-x-1/2 flex items-center justify-center w-10 h-10 rounded-full bg-white dark:bg-gray-900 border-4 border-rose-400 dark:border-rose-500 shadow-[0_0_15px_rgba(244,63,94,0.3)] z-10'>
                                    {item.category === 'work' ? (
                                        <Briefcase size={16} className='text-rose-500' />
                                    ) : (
                                        <GraduationCap size={18} className='text-pink-500' />
                                    )}
                                </div>

                                {/* Konten Card */}
                                <div className={`ml-12 md:ml-0 md:w-1/2 ${
                                    index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12 md:text-left'
                                }`}>
                                    <div className='p-6 bg-white/50 dark:bg-zinc-900/50 backdrop-blur-sm border border-gray-100 dark:border-zinc-800 rounded-2xl shadow-xl hover:shadow-rose-500/10 transition-shadow duration-300 group'>
                                        
                                        <div className={`flex items-center gap-2 mb-2 text-xs font-semibold text-rose-500 dark:text-rose-400 ${
                                            index % 2 === 0 ? 'md:justify-end' : 'md:justify-start'
                                        }`}>
                                            <Calendar size={14} />
                                            <span>{item.date}</span>
                                        </div>

                                        <h3 className='text-xl font-bold text-gray-900 dark:text-white mb-1 group-hover:text-rose-500 transition-colors'>
                                            {item.title}
                                        </h3>
                                        <h4 className='text-sm font-medium text-pink-600 dark:text-pink-400 mb-3'>
                                            {item.organization}
                                        </h4>
                                        <p className='text-gray-600 dark:text-gray-400 text-sm leading-relaxed'>
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Journey;