import { Nav } from "./Nav"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"

export const Hero = () => {
    return (
        <>
            <div className="w-full bg-url main h-screen bg-cover px-5 py-8 bg-right sm:bg-center">
                <Nav />
                <div className="flex flex-col h-full justify-center gap-3 sm:w-3/4 md:w-1/2">
                    <motion.h3 initial={{ opacity: "0", y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.0 }} className="text-secondary">NATURAL ENVIROMENT</motion.h3>
                    <motion.h2 initial={{ opacity: "0", y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.3 }} className="text-white bold text-[50px] sm:text-[70px] leading-[1]">
                        Be Safe Controls Enviroment
                    </motion.h2>
                    <motion.p className="text-[13px] sm:text-[18px] text-neutral-200 tracking-wider" initial={{ opacity: "0", y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.5 }}> Discover an immersive way to explore safety in interactive environments. Learn, play, and create safe practices with engaging tools and fun challenges. Start your journey towards a safer tomorrow!</motion.p>
                    <span className="flex justify-between sm:justify-start sm:gap-10">
                        <Link to="https://wa.me/+2347079617597" className="bg-secondary py-2 px-8 text-white rounded-sm ">Lets Talk</Link>
                        <Link to="https://wa.me/+2347079617597" className="bg-transparent py-2 px-8 text-white rounded-sm border border-secondary ">Read More</Link>
                    </span>
                </div>
            </div>
        </>
    )
}
