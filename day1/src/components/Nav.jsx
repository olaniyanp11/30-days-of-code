import React from 'react'
import { Link } from 'react-router-dom'
import { BiCar, BiCart } from 'react-icons/bi'
import { CgProfile } from 'react-icons/cg'
import { BiSearch } from 'react-icons/bi'
import { BiMenu } from 'react-icons/bi'
import { BiX } from 'react-icons/bi'
import { useState } from 'react'
export const Nav = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            <nav className='w-full flex justify-between px-5 items-center bg-white !overflow-x-hidden h-[10vh]'>
                <h2 className='font-bold  text-[20px]'> Plant.</h2>
                <span className='w-[60%] gap-2 md:flex justify-between hidden'>
                    <Link to="/"> Home</Link>
                    <Link to="/"> Collection</Link>
                    <Link to="/"> Shop</Link>
                    <Link to="/"> About</Link>
                    <Link to="/"> Contact</Link>
                </span>
                <span className='flex gap-3 text-neutral-500'>
                    <BiCart />
                    <CgProfile />
                    <BiSearch/>
                </span>

                <div className={`fixed sm:hidden flex ${isOpen ? 'translate-x-0' : 'translate-x-full'} transition-all delay-[2]  flex-col top-0 right-0 bg-primary h-screen w-[60%] text-white pl-[15%] pt-[20%] gap-3`}>
                    <BiX className='absolute top-3 right-3 text-[25px] ' onClick={()=>{ setIsOpen(!isOpen)}}/>
                    <Link to="/"> Home</Link>
                    <Link to="/"> Collection</Link>
                    <Link to="/"> Shop</Link>
                    <Link to="/"> About</Link>
                    <Link to="/"> Contact</Link>
                </div>
                <BiMenu className='text-primary text-[20px] sm:hidden flex ' onClick={()=>{ setIsOpen(!isOpen)}}/> 
            </nav>
        </>
    )
}
