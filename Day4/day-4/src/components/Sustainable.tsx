import { BiMoney } from "react-icons/bi"
import Main from "../assets/two.jpg"
import { Link } from "react-router-dom"

export const Sustainable = () => {
    return (
        <>
            <div className="px-5 py-10 flex flex-col gap-8 sm:flex-row sm:justify-center items-center">
                <img src={Main} alt="" className="w-full h-[450px] sm:w-[40%] " />
                <div className="flex flex-col gap-3  sm:w-[40%]">
                    <h2 className="text-secondary text-[26px] font-bold leading-8"> Enviromental Sustainable Forever Green Future</h2>
                    <span className="flex flex-row gap-4">
                        <BiMoney className="text-[70px] text-secondary"/>
                        <div >
                            <div>Economic Benefits</div>
                            <div>
                                Exploring the economic benefits of implementing sustainable practices, such as increased efficiency, cost savings, and access to new markets, highlights the potential for businesses to thrive while contributing positively to society.
                            </div>
                        </div>
                    </span>
                    <Link to="#" className="bg-secondary py-2 px-8 text-white rounded-sm text-center ">Lets Talk</Link>
                </div>
            </div>
        </>
    )
}
