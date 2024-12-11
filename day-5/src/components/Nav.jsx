import React from 'react'
import { Link } from 'react-router-dom'
import { BiMenu, BiX } from 'react-icons/bi'
import { useState } from 'react'

export const Nav = () => {
  const [open, setIsOpen] = useState(false);
  return (
    <>
      <nav className='flex w-full justify-between px-5 h-[10vh] items-center'>
        <h2 className='main font-bold text-secondary text-[23px]'>  Traveler</h2>
        <span className='sm:flex gap-3 items-center hidden '>
          <Link to='/' > Home</Link>
          <Link to='/' > About</Link>
          <Link to='/' > Services</Link>
          <Link to='/' className='bg-secondary text-white p-3 rounded-[50px] w-[150px] text-center' > Sign up now</Link>
        </span>
        <span className={`${open? "right-[0%]" : "right-[-100%]"} z-50 sm:hidden duration-700 flex gap-3 items-center fixed flex-col top-0 right-0 bg-secondary h-screen w-[70%] justify-center`}>
          <BiX className='text-[white] absolute top-5 right-5 text-[30px]' onClick={() => {
            setIsOpen(false);
          }} />
          <Link to='/' className='text-white' > Home</Link>
          <Link to='/' className='text-white' > About</Link>
          <Link to='/' className='text-white' > Services</Link>
          <Link to='/' className='bg-white text-secondary p-3 rounded-[50px] w-[150px] text-center font-bold' > Sign up now</Link>
        </span>
        <BiMenu className='text-secondary  text-[25px] sm:hidden ' onClick={() => {
          setIsOpen(true);
        }} />
      </nav>
    </>
  )
}
