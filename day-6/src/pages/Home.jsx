import { Nav } from "../components/Nav"
import { Hero } from "../components/Hero"
export const Home = () => {
    return (
        <>
            <div className="back fixed z-[-1] top-0 right-0 bottom-0 w-full h-screen overflow-hidden">
            </div>
            {/* <marquee className='hidden sm:flex absolute w-full  h-fit top-0 bold text-white transform rotate-[30deg] flex-nowrap cursor-vertical-text text-[130px] z-0 opacity-30'>
                Welcome to MouseMate - Your Ultimate Destination for Computer Mice
            </marquee> */}

            <Nav />
            <Hero />
        </>
    )
}
