import React from 'react'
import Main from "../assets/ero1.png"
import { Link } from 'react-router-dom'


export const Hero = () => {
    return (
        <>
            <section className='flex flex-col w-full sm:flex-row justify-center items-center overflow-hidden'>
                <div className='px-5 flex w-full flex-col pt-10 items-start sm:w-[70%] '>
                    <h2 className='font-bold text-[60px] sm:text-[80px] leading-[1.1] sm:leading-[1] text-neutral-800'>BRING <span className=''>NATURE</span> INDOORS</h2>
                    <h4 className='text-[20px]'>One Plant at a Time</h4>
                    <Link to="/" className='w-[300px] py-4 bg-primary rounded-[150px] text-white text-center mt-4'> Shop now</Link>
                </div>
                <div className='sm:w-1/2'>
                    <img src={Main} alt="" className=' sm:w-[80%]' />
                </div>
            </section>
        </>
    )
}
