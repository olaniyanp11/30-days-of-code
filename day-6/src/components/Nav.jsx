import React from 'react'
import { Link } from 'react-router-dom'
import { BiMenu, BiX } from 'react-icons/bi'
import { motion } from 'framer-motion'
import { useState } from 'react'
export const Nav = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <nav className='text-white flex justify-between items-center h-[12vh] px-5'>
        <h2 className='bold uppercase text-bold items-center'>MouseMate</h2>
        <span className='sm:flex justify-between items-center gap-4 hidden'>
          <Link to='/'>Home</Link>
          <Link to='/'>About</Link>
          <Link to='/'>Services</Link>
          <Link to='/' className='w-[150px] text-center border p-2 '>Order now</Link>
        </span>
        <motion.span className={`duration-700 ${open ? "right-0 opacity-100" : "right-[-100%] opacity-0"} flex justify-center items-center gap-4 sm:hidden flex-col top-0 fixed  right-0 bg-transparent backdrop-blur-md h-screen w-full z-50  `}>
          <BiX className='top-5 absolute right-5 text-[30px]' onClick={()=>{ setOpen(!open)}}/>
          <Link to='/'>Home</Link>
          <Link to='/'>About</Link>
          <Link to='/'>Services</Link>
          <Link to='/' className='w-[150px] text-center border p-2 '>Order now</Link>
        </motion.span>
        
        <BiMenu className='text-white text-[25px] sm:hidden' onClick={() => { setOpen(!open) }} />
      </nav>
    </>
  )
}
