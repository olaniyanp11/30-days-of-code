import { BiMoney } from "react-icons/bi"
import Main from "../assets/two.jpg"
import { Link } from "react-router-dom"
import {motion} from "framer-motion"

export const Sustainable = () => {
    return (
        <>
            <motion.div className="px-5 py-10 flex flex-col gap-8 sm:flex-row sm:justify-center items-center bg-[#efffe0]">
                <motion.img initial={{ opacity: "0", y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1.0 }} src={Main} alt="" className="w-full h-[450px] sm:w-[40%] " />
                <motion.div className="flex flex-col gap-3  sm:w-[40%]">
                    <motion.h2 initial={{ opacity: "0", y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1.3 }} className="text-secondary text-[26px] font-bold leading-8"> Enviromental Sustainable Forever Green Future</motion.h2>
                    <motion.span initial={{ opacity: "0", y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1.5 }} className="flex flex-row gap-4">
                        <BiMoney className="text-[70px] text-secondary"/>
                        <motion.div >
                            <motion.div>Economic Benefits</motion.div>
                            <motion.div>
                                Exploring the economic benefits of implementing sustainable practices, such as increased efficiency, cost savings, and access to new markets, highlights the potential for businesses to thrive while contributing positively to society.
                            </motion.div>
                        </motion.div>
                    </motion.span>
                    <Link to="#" className="bg-secondary py-2 px-8 animate-pulse text-white rounded-sm text-center ">Lets Talk</Link>
                </motion.div>
            </motion.div>
        </>
    )
}
