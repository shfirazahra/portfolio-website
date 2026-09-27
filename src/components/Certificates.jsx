import React from 'react'
import { motion } from 'framer-motion'
import certificateImg from '../assets/certificate.png'
import { Award, Calendar, ExternalLink } from 'lucide-react'

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
}

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5
        }
    }
}

const Certificates = () => {
    const certificate = [
        { id: 1, title: 'Junior Mobile Programmer Competency Certification', issuer: 'Badan Nasional Sertifikasi Profesi', date: '2024', credentialUrl: 'https://lsp.dinus.id/pemegang-sertifikat' },
        { id: 2, title: 'Google AI Essentials Specialization', issuer: 'Google', date: '2026', credentialUrl: 'https://coursera.org/share/6012b29fc8be9d6b011baf3ac4b9fb4a' },
        { id: 3, title: 'Meta Android Developer Professional Certificate', issuer: 'Meta', date: '2026', credentialUrl: 'https://coursera.org/share/50001fcd8067dd442f7e979b4bc30d54' },
        { id: 4, title: 'Microsoft UX Design Proffesional Certificate', issuer: 'Microsoft', date: '2026', credentialUrl: 'https://coursera.org/share/cb562ecc4fc3de39c72ff7f0bf2222b7' },
        { id: 5, title: 'Web Programming Competency Certification', issuer: 'Asosiasi Profesi Telematika Indonesia', date: '2024', credentialUrl: 'https://www.linkedin.com/in/shfiraazhraa/overlay/Certifications/1060576589/treasury/?profileId=ACoAAFC4SmIBb-62FvH21V-HxVq989RTyXeibxA' },
        { id: 6, title: 'TOEFL Proficiency Test Certificate', issuer: 'Universal English', date: '2026', credentialUrl: 'https://www.linkedin.com/in/shfiraazhraa/overlay/Certifications/1060265279/treasury/?profileId=ACoAAFC4SmIBb-62FvH21V-HxVq989RTyXeibxA' },
        { id: 7, title: 'Python Specialization', issuer: 'Scrimba', date: '2026', credentialUrl: 'https://coursera.org/share/eb4a867670688510e970e80eadf8b47d' },
        { id: 8, title: 'SOLID Programming Principles Certificate', issuer: 'Dicoding', date: '2026', credentialUrl: 'https://www.dicoding.com/certificates/MEPJO26YQZ3V' },
        { id: 9, title: 'Artificial Intelligence Learning Path Certificate', issuer: 'MySkill', date: '2026', credentialUrl: 'https://storage.googleapis.com/myskill-v2-certificates/learning-path-chiCSyKSKG7f8gcRltKK/QNfKWyrDe3cSSLqfEEQibv1afbm1-IZoR0aBdBzotRuNSAx7h.pdf' },
        { id: 10, title: 'National Seminar on Informatics Engineering: Artificial Intelligence (Attendee)', issuer: 'HMDTI UDINUS', date: '2022', credentialUrl: 'https://www.linkedin.com/in/shfiraazhraa/overlay/Certifications/1049844693/treasury/?profileId=ACoAAFC4SmIBb-62FvH21V-HxVq989RTyXeibxA' }

    ]

    return (
        <section id='certificates' className='min-h-screen flex items-center relative overflow-hidden py-20'>
            <div className='container mx-auto px-4 sm:px-8 lg:px-14'>
                <div className='flex flex-col lg:flex-row items-center gap-12 lg:gap-16'>
                    
                    <div className='lg:w-2/5 w-full flex justify-center' data-aos='fade-right'>
                        <div className='relative group'>
                            <div className='absolute inset-0 bg-gradient-to-r from-rose-400 to-rose-600 rounded-full
                             filter blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-500' />
                            
                            <div className='relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96'>
                                <img 
                                    src={certificateImg} 
                                    alt="Certificates" 
                                   className='w-full h-full object-cover object-top rounded-full relative z-10 transform 
                                    group-hover:scale-105 transition-transform duration-500' 
                                />
                                
                                <div className='absolute inset-0 border-2 border-rose-400/30 rounded-full 
                                scale-110 group-hover:scale-125 transition-transform duration-500' />
                                <div className='absolute inset-0 border-2 border-rose-400/20 rounded-full
                                 scale-125 group-hover:scale-150 transition-transform duration-700' />
                            </div>
                        </div>
                    </div>

                    <div className='lg:w-3/5 w-full' data-aos='fade-left'>
                        <div className='inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-400/10 
                        border border-rose-400/20 mb-5'>
                            <span className='w-2 h-2 rounded-full bg-rose-400 animate-pulse' />
                            <span className='text-sm font-medium dark:text-gray-300 text-gray-700'
                            >Certifications</span>
                        </div>

                        <h2 className='text-4xl sm:text-5xl lg:text-5xl font-bold mb-6 dark:text-white
                         text-gray-900'>
                            My <span className='text-rose-400 dark:text-rose-400'>Certificates</span>
                        </h2>

                        {/* Penambahan efek scroll (max-h, overflow-y-auto, pr-2) diterapkan di baris className ini */}
                        <motion.div
                            variants={containerVariants}
                            initial='hidden'
                            whileInView='visible'
                            viewport={{ once: true, margin: '-100px' }}
                            className='max-h-[450px] overflow-y-auto pr-2 grid grid-cols-1 border-t border-b border-gray-200/50
                             dark:border-zinc-800/50 w-full'>
                            
                            {certificate.map((cert, index) => (
                                <motion.div
                                    key={cert.id}
                                    variants={itemVariants}
                                    className={`p-3 sm:p-4 flex flex-col justify-between group relative 
                                        transition-colors duration-300 hover:bg-rose-400/5
                                         dark:hover:bg-rose-400/10 ${
                                        index < certificate.length - 1 ? 'border-b' : ''
                                    } border-gray-200/50 dark:border-zinc-800/50`}>
                                    
                                    <div className='flex flex-col sm:flex-row sm:items-center justify-between gap-3'>
                                        <div className='flex items-start gap-3'>
                                            <div className='p-2 rounded-xl bg-rose-400/10 text-rose-600
                                             dark:text-rose-400 group-hover:scale-110 transition-transform 
                                             duration-300 shrink-0'>
                                                <Award size={20} />
                                            </div>
                                            <div>
                                                <h3 className='font-bold text-base text-gray-900
                                                 dark:text-white group-hover:text-rose-600
                                                  dark:group-hover:text-rose-400 transition-colors'>
                                                    {cert.title}
                                                </h3>
                                                <span className='text-sm font-medium text-gray-600
                                                 dark:text-zinc-400 block mt-0.5'>
                                                    {cert.issuer}
                                                </span>
                                            </div>
                                        </div>
                                        
                                        <div className='flex items-center justify-between sm:flex-col sm:items-end
                                         gap-1.5 shrink-0 max-sm:pt-3 max-sm:border-t max-sm:border-gray-100/50
                                          max-sm:dark:border-zinc-800/30'>
                                            <div className='flex items-center gap-1.5 text-xs font-mono
                                             text-gray-500 dark:text-zinc-400'>
                                                <Calendar size={13} />
                                                <span>{cert.date}</span>
                                            </div>
                                            <a 
                                                href={cert.credentialUrl}
                                                target='_blank'
                                                rel='noopener noreferrer'
                                                className='inline-flex items-center gap-1 text-xs font-semibold
                                                 text-green-600 dark:text-green-400 hover:underline'>
                                                Verify <ExternalLink size={11} />
                                            </a>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Certificates