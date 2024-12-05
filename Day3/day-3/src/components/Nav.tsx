import { Link } from 'react-router-dom'
import { BiMenu } from 'react-icons/bi'
import { BiX } from 'react-icons/bi'
import { useState } from 'react'

export const Nav = () => {
    const [open, setOpen] = useState<boolean>(false)

    return (
        <>
            <nav className='w-full h-[10vh] flex justify-between items-center  p-10 '>
                <h2 className='text-[25px] bold text-neutral-800'> Etech.</h2>
                <div className=' gap-3 md:gap-10 items-center sm:flex hidden'>
                    <div className=' flex gap-5 '>
                        <Link to="#"> Courses</Link>
                        <Link to="#"> Teachers</Link>
                        <Link to="#"> Offers</Link>
                        <Link to="#"> Contact</Link>
                    </div>
                    <div className=' flex gap-5'>
                        <button className=' py-2 border w-[100px] px-3 rounded-lg border-primary '>
                            Sign Up
                        </button>
                        <button className='py-2 border w-[100px] px-3 rounded-lg  from-primary  bg-gradient-to-r to-secondary text-white'>
                            FreeTrial
                        </button>
                    </div>

                </div>
                <BiMenu className={`text-primary text-[25px] ${open? "hidden" : "flex"} sm:hidden`}onClick={()=>setOpen(true)} />
                {/* after nav */}
                <div className={`gap-3 md:gap-10 items-center duration-700 ${open ? "right-[0%]" :" right-[-100%]" } sm:hidden flex flex-col fixed top-0 right-0 from-[#bf40bf6b] backdrop-blur-md  bg-gradient-to-r to-[#ffc0cb9a]  w-[70%] pt-[30%] text-white uppercase  h-full z-[9876543]`}>
                    <BiX fontSize={"30px"} className='absolute top-5 right-5' onClick={() => setOpen(false)} />
                        <Link to="#"> Courses</Link>
                        <Link to="#"> Teachers</Link>
                        <Link to="#"> Offers</Link>
                        <Link to="#"> Contact</Link>
                        <button className=' py-2 border w-[150px] px-3 rounded-lg border-primary '>
                            Sign Up
                        </button>
                        <button className='py-2 border w-[150px] px-3 rounded-lg  from-primary  bg-gradient-to-r to-secondary text-white'>
                            FreeTrial
                        </button>
                  

                </div>
            </nav>
        </>
    )
}
