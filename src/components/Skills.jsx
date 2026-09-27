import React from 'react'

const Skills = () => {
    const skills = [
        { name: 'HTML,CSS,JavaScript', percentage: 90, color: '#2e9979' },
        { name: 'UI/UX', percentage: 88, color: '#4FC08D' },
        { name: 'PHP & CodeIgniter', percentage: 85, color: '#06B6D4' },
        { name: 'MySQL/Database', percentage: 85, color: '#06B6D4' },
        { name: 'Java & Kotlin', percentage: 85, color: '#06B6D4' },
        { name: 'Tailwind CSS & Bootstrap', percentage: 80, color: '#f7bd1e' },
        { name: 'Vue JS', percentage: 75, color: '#ffb384' },
        { name: 'Python', percentage: 75, color: '#ffb384' },
       
       
    ]

    return (
        <section id='skills' className='min-h-screen flex items-center py-20 px-4 sm:px-6 overflow-hidden relative'>
            <div className='absolute inset-0 overflow-hidden'>
                <div className='absolute -top-40 -right-40 w-80 h-80 bg-pink-400/5 rounded-full blur-3xl' />
                <div className='absolute -bottom-40 -left-40 w-80 h-80 bg-pink-600/5 rounded-full blur-3xl' />
            </div>

            <div className='max-w-6xl mx-auto w-full relative z-10'>
                <div className='text-center mb-16' data-aos='fade-up'>
                    <div className='inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-400/10 
                    border border-rose-400/20 mb-5'>
                            <span className='w-2 h-2 rounded-full bg-rose-400 animate-pulse' />
                            <span className='text-sm font-medium dark:text-gray-300 text-gray-700'>
                                Expertise
                            </span>
                    </div>
                    <h2 className='text-3xl sm:text-4xl lg:text-5xl font-bold dark:text-white text-gray-900'>
                        My <span className='text-rose-400 dark:text-rose-400'>Skills</span>
                    </h2>
                    <p className='mt-4 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto'>
                        Spesialisasi teknis saya dalam pengembangan Full-Stack dan desain UI/UX.
                    </p>
                </div>

                <div className='grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12'>
                    {skills.map((skill, index) => {
                        const radius = 60
                        const circumference = 2 * Math.PI * radius
                        const offset = circumference - (skill.percentage / 100) * circumference
                        const size = 150

                        return (
                            <div 
                            key={index}
                            className='flex flex-col items-center'
                            data-aos='fade-up'
                            data-aos-delay={index * 100}>
                                
                                <div className='relative' style={{ width: size, height: size }}>
                                    <svg className='transform -rotate-90' width={size} height={size}>
                                        <circle
                                        cx={size / 2}
                                        cy={size / 2}
                                        r={radius}
                                        fill='none'
                                        stroke='#e5e7eb'
                                        strokeWidth='10'
                                        className='dark:stroke-gray-700'
                                        />
                                        <circle
                                        cx={size / 2}
                                        cy={size / 2}
                                        r={radius}
                                        fill='none'
                                        stroke={skill.color}
                                        strokeWidth='10'
                                        strokeDasharray={circumference}
                                        strokeDashoffset={offset}
                                        strokeLinecap='round'
                                        className='transition-all duration-1000 ease-out'
                                        style={{ transition: 'stroke-dashoffset 1.5s ease-in-out' }}
                                        />
                                    </svg>
                                    
                                    <div className='absolute inset-0 flex items-center justify-center'>
                                        <div className='text-center'>
                                            <span className='text-3xl font-bold dark:text-white text-gray-900'>
                                                {skill.percentage}%
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                <h3 className='mt-4 text-base font-semibold text-center
                                 dark:text-white text-gray-900'>
                                    {skill.name}
                                </h3>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )}
export default Skills