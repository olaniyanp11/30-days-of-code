import React from 'react'
import Mouse from "../assets/mouse.png"
import { BiMoney } from 'react-icons/bi'
import { motion } from 'framer-motion'

export const Hero = () => {

    return (
        <>
            <motion.div className='flex flex-col pb-6  w-full px-3 pt-5 z-20 gap-[20px] sm:gap-0 sm:flex-row sm:justify-center sm:px-10 '>
                <motion.div className='mb-5 sm:w-3/4 sm:mb-0 flex flex-col gap-1'>
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.1 }}
                        className='text-white bold text-[40px] sm:text-[70px] leading-[1.0] tracking-wider'>Welcome to MouseMate </motion.h2>
                    <motion.h3 initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.3 }} className='text-white text-[14px] font-medium'>Your Ultimate Destination for Computer Mice</motion.h3>
                    <motion.p initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.5 }} className='text-white text-[14px] tracking-wider font-light'>Discover cutting-edge technology, ergonomic designs, and precision-engineered computer mice for every need. Whether you're a gamer, a designer, or a multitasker, we have the perfect mouse for you.</motion.p>
                    <motion.Link initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1.1 }} to="/" className='mt-4 bg-blue-500 text-white w-[200px] text-center p-2 flex items-center gap-3 '><BiMoney /> Purchase Now </motion.Link>
                </motion.div>
                <motion.div initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 1.1 }} className='w-full sm:w-1/2 z-20'>
                    <img src={Mouse} alt="" />
                </motion.div>
            </motion.div>

        </>
    )
}
