import { BiMenu } from "react-icons/bi"
import { Link } from "react-router-dom"
import { BiX } from "react-icons/bi"
import { useState } from "react"


export const Nav = () => {
    const [open, setIsOpen] = useState<boolean>(false);

    return (
        <>
            <nav className="text-white flex justify-between ">
                <h2 className="text-[25px] font-bold"> Ecoly</h2>
                <span className="hidden md:flex gap-7 items-center">
                    <Link to='home'>HOME</Link>
                    <Link to='home'>ABOUT</Link>
                    <Link to='home'>SERVICES</Link>
                    <Link to='home'>BLOGS</Link>
                    <Link to='home'>CONTACT</Link>
                    <Link to='home' className="text-white bg-secondary p-2 px-10 rounded-sm">ORDER </Link>
                </span>
                <BiMenu className="text-[20px] md:hidden flex" onClick={() => {
                    setIsOpen(true)
                }} />
                <span className={`${ open ? "right-[0%]" : "right-[-100%]"} duration-700 flex md:hidden gap-7 flex-col fixed top-0 right-0 backdrop-blur-md bg-transparent w-3/4 h-screen items-center justify-center `}>
                    <BiX className="text-[25px] absolute right-5 top-5" onClick={() => {
                        setIsOpen(false)
                    }}/>
                    <Link to='home'>HOME</Link>
                    <Link to='home'>ABOUT</Link>
                    <Link to='home'>SERVICES</Link>
                    <Link to='home'>BLOGS</Link>
                    <Link to='home'>CONTACT</Link>
                    <Link to='home' className="text-white bg-secondary p-2 px-7 rounded-sm">ORDER </Link>
                </span>
            </nav>
        </>
    )
}
