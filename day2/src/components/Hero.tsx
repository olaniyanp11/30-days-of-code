import React, { useState, useEffect } from "react";
import Main from "../assets/cctv.png";
import { BiPlay } from "react-icons/bi";

export const Hero = () => {
    const [experience, setExperience] = useState(0);
    const [product, setProduct] = useState(0);
    const [projectDone, setProjectDone] = useState(0);

    // Function to animate the counter
    const animateCounter = (setState: React.Dispatch<React.SetStateAction<number>>, target : number, duration :number) => {
        let start = 0;
        const increment = Math.ceil(target / (duration / 10)); // Adjust increment based on duration
        const timer = setInterval(() => {
            start += increment;
            if (start >= target) {
                setState(target); // Set the target value when complete
                clearInterval(timer);
            } else {
                setState(start);
            }
        }, 10);
    };

    useEffect(() => {
        animateCounter(setExperience, 11, 1600); // 1 second animation for 11
        animateCounter(setProduct, 25, 1100); // 1 second animation for 25
        animateCounter(setProjectDone, 100, 1700); // 1.5 seconds animation for 100
    }, []);

    return (
        <div className="main p-7 flex flex-col sm:flex-row  sm:items-center sm:justify-between w-full">
            <div className="w-full pb-10 sm:w-1/2">
                <h1 className="text-[40px] sm:text-[70px] text-primary leading-10 sm:leading-[1]">
                    Professional <span className="text-[#115249]">Security services</span> You can trust
                </h1>
                <p className="text-neutral-600">Ensuring Safety, Reliability, and Peace of Mind</p>
                <div className="flex justify-between ">
                    <span>
                        <span className="text-[30px] text-primary">{experience}</span>
                        <br />
                        Experience
                    </span>
                    <span>
                        <span className="text-[30px] text-primary">{product}</span>
                        <br />
                        Product
                    </span>
                    <span>
                        <span className="text-[30px] text-primary">{projectDone}+</span>
                        <br />
                        Project Done
                    </span>
                </div>
            </div>
            <div className="relative w-full flex justify-end sm:w-1/2">
                <img
                    src={Main}
                    alt=""
                    className="rounded-t-[200px] rounded-b-[200px] h-[500px] border-[10px] border-white"
                />
                <div className="absolute bottom-0 p-4 bg-primary rounded-[50%] border-[#0036306c] border-[5px] left-5">
                    <BiPlay className="text-white" />
                </div>
            </div>
        </div>
    );
};
