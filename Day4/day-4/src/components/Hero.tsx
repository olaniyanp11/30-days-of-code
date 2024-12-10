import { Nav } from "./Nav"
import { Link } from "react-router-dom"

export const Hero = () => {
    return (
        <>
            <div className="w-full bg-url main h-screen bg-cover px-5 py-8 bg-right sm:bg-center">
                <Nav />
                <div className="flex flex-col h-full justify-center gap-3 sm:w-1/2">
                    <h3 className="text-secondary">NATURAL ENVIROMENT</h3>
                    <h2 className="text-white bold text-[50px] sm:text-[70px] leading-[1]">
                        Be Safe Controls Enviroment
                    </h2>
                    <p className="text-[13px] sm:text-[18px] text-neutral-200 tracking-wider"> Discover an immersive way to explore safety in interactive environments. Learn, play, and create safe practices with engaging tools and fun challenges. Start your journey towards a safer tomorrow!</p>
                    <span className="flex justify-between sm:justify-start sm:gap-10">
                        <Link to="#" className="bg-secondary py-2 px-8 text-white rounded-sm ">Lets Talk</Link>
                        <Link to="#" className="bg-transparent py-2 px-8 text-white rounded-sm border border-secondary ">Read More</Link>
                    </span>
                </div>
            </div>
        </>
    )
}
