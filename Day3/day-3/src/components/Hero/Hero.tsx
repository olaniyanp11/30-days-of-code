import Main from "../../assets/girl.png"
import { FaGoogleScholar } from "react-icons/fa6"
import { motion } from "framer-motion"
export const Hero = () => {
    return (
        <>
            <div className="flex flex-col  gap-10 sm:flex-row sm:items-center sm:justify-center">
                <div className="px-10 flex flex-col  items-start sm:w-[50%] w-full ">
                    <motion.h1 initial={{ y : 20,opacity:0 }}
                        animate={{ y : 0 , opacity:1}}
                        transition={{ duration: 1.2 }}
                        className="bold text-neutral-800 text-[38px] sm:text-[50px] leading-9 pb-5 "> Develop your skills in a new and unique way</motion.h1>
                    <motion.p initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1.9 }} className="text-neutral-600">
                        Explore interactive lessons and real-world projects to enhance your skills and build confidence in web development.
                    </motion.p>
                    <motion.div initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1.9}} className=' flex gap-5 mt-5'>
                        <button className='py-2 border  px-4 rounded-lg  from-primary  bg-gradient-to-r to-secondary text-white'>
                            Enroll now
                        </button>
                        <button className=' py-2 border px-4 rounded-lg border-primary '>
                            Whats new
                        </button>
                    </motion.div>
                </div>
                <div className="h-[300px] relative flex justify-center items-center sm:h-[400px] sm:w-1/2">
                    <div className="from-primary sm:w-[350px] sm:h-[350px]  bg-gradient-to-r to-secondary rounded-full absolute w-[240px] h-[240px] top-10 z-20 mt-1 ">
                    </div>
                    <div className="bg-transparent sm:w-[350px] sm:h-[350px] rounded-full absolute w-[250px] h-[250px] top-10 border-dotted border-primary border-[5px] animate-spin ">
                    </div>
                    <img src={Main} alt="" className="absolute bottom-0 z-50" />
                    <div className="absolute  py-2 backdrop-blur-md bg-[#ffffff73] z-[12345] w-[170px] justify-between rounded-xl left-5 top-[60%]">
                        <div className="text-neutral-800 flex items-center justify-center gap-3 ">
                            <FaGoogleScholar className="text-primary bold" />
                            <div className="flex flex-col gap-0 items-center ">
                                <span className="text-primary ">50+</span> 
                                Online Courses
                            </div>
                        </div>
                    </div>
                    <div className="absolute  py-1 backdrop-blur-md bg-[#ffffff73] z-[12345] w-[140px] justify-between rounded-xl right-5 top-[20%]">
                        <div className="text-neutral-800 flex items-center justify-center gap-3 ">
                          
                            <div className="flex flex-col gap-0 items-center ">
                                <span className="text-primary ">100+</span> 
                                Online Students
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
