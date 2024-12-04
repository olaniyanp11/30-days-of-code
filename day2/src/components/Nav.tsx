import React from 'react'
import { Link } from 'react-router-dom'
import { BiDownArrow } from 'react-icons/bi'
import { BsFacebook, BsGithub, BsYoutube } from 'react-icons/bs'
import { useState } from 'react'
import { BiX } from 'react-icons/bi'
import { BiMenu } from 'react-icons/bi'
import scrollLock from "scroll-lock";
import { disablePageScroll, enablePageScroll } from "scroll-lock"


export const Nav = () => {
    const [dropdown, setDropdown] = useState<boolean>(false);
    const [isOpen, setIsopen] = useState<boolean>(false);
    return (
        <>
            <nav className='w-full px-10 flex sm:flex-row gap-10 justify-between h-[10vh] items-center shadow-md flex-row-reverse '>
                <span className={`font-thin hidden w-3/4 justify-between sm:flex `}>
                    <Link to='/'>Home</Link>
                    <Link to='/'>About us </Link>
                    <Link to='/'>Services</Link>
                    <Link to='/'>Page</Link>
                    <Link to='/' className={`flex justify-center items-center gap-2 `} onMouseEnter={() => setDropdown(true)} onMouseLeave={() => setDropdown(false)} onClick={() => setDropdown(!dropdown)}>Contact Us <BiDownArrow /></Link>
                    <span className={`absolute hidden ${dropdown ? "sm:flex" : "sm:hidden"}  transition-all transition-2s duration-200 ease-in-out delay-100 transform  top-10 float-right bg-primary text-white p-10  justify-center gap-12 border-b-2 `}>
                        <div className='flex flex-col border-r-2 pr-10'>
                            <Link to="#">Contact 1</Link>
                            <Link to="#">Contact 2</Link>
                            <Link to="#">Contact 3</Link>
                            <Link to="#">Contact 4</Link>
                        </div>
                        <div className='flex flex-col border-r-2 pr-10'>
                            <Link to="#">Contact 1</Link>
                            <Link to="#">Contact 2</Link>
                            <Link to="#">Contact 3</Link>
                            <Link to="#">Contact 4</Link>
                        </div>
                        <div className='flex flex-col border-r-2 pr-10'>
                            <Link to="#">Contact 1</Link>
                            <Link to="#">Contact 2</Link>
                            <Link to="#">Contact 3</Link>
                            <Link to="#">Contact 4</Link>
                        </div>
                        <div className='flex flex-col border-r-2 pr-10'>
                            <Link to="#">Contact 1</Link>
                            <Link to="#">Contact 2</Link>
                            <Link to="#">Contact 3</Link>
                            <Link to="#">Contact 4</Link>
                        </div>
                        <div className='flex flex-col border-r-2 pr-10'>
                            <Link to="#">Contact 1</Link>
                            <Link to="#">Contact 2</Link>
                            <Link to="#">Contact 3</Link>
                            <Link to="#">Contact 4</Link>
                        </div>

                        <div className='flex flex-col  pr-10'>
                            <Link to="#">Contact 1</Link>
                            <Link to="#">Contact 2</Link>
                            <Link to="#">Contact 3</Link>
                            <Link to="#">Contact 4</Link>
                        </div>


                    </span>
                </span>
                <span className={`z-30 font-thin sm:hidden flex ${isOpen ? "w-full" : "w-0"} fixed bg-primary transition-all duration-1000  top-[-10%] flex-col text-white rounded-[70%] ${isOpen ? "h-[90%]" : "h-0"} pl-[20%] justify-center right-[-20%] `}>
                    <BiX className='z-[123456789] text-[30px] absolute  top-[20%] right-[40%]' onClick={() => { setIsopen(false); scrollLock.enablePageScroll() }} />
                    <Link to='/'>Home</Link>
                    <Link to='/'>About us </Link>
                    <Link to='/'>Services</Link>
                    <Link to='/'>Page</Link>
                    <Link to='/'> Contact</Link>
                </span>
                <BiMenu className='text-primary sm:hidden flex' onClick={() => { setIsopen(true); scrollLock.disablePageScroll() }} />
                <div className={`flex text-[#003630] sm:w-[10%] w-[20%] justify-between `}>
                    <BsFacebook className='hover:animate-ping' />
                    <BsGithub />
                    <BsYoutube />

                </div>

            </nav>
        </>
    )
}