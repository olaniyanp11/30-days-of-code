import React from 'react';
import { Link } from 'react-router-dom';
import Main from "../assets/man.png";
import { motion } from "framer-motion";

export const Hero = () => {
    return (
        <>
            <motion.div
                className="flex flex-col lg:flex-row items-center gap-5 px-3  h-full justify-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
            >
                {/* Text Section */}
                <motion.div
                    className="flex flex-col items-start gap-4 px-5 h-full justify-center"
                    initial={{ x: -100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                >
                    <motion.h1
                        className="text-secondary font-bold main text-[40px] sm:text-[45px] leading-[1.2] uppercase"
                        initial={{ y: -50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8 }}
                    >
                        Discover Your Next Adventure!
                    </motion.h1>

                    <motion.p
                        className="text-gray-600 max-w-lg"
                        initial={{ y: -30, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                    >
                        Explore breathtaking destinations, plan seamless trips, and create unforgettable memories with us.
                    </motion.p>

                    <motion.div
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ type: "spring", stiffness: 200 }}
                    >
                        <Link
                            to="/"
                            className="bg-secondary text-white p-3 rounded-[50px] text-center px-10 font-bold"
                        >
                            Start Your Journey
                        </Link>
                    </motion.div>
                </motion.div>

                {/* Image Section */}
                <motion.div
                    className="relative"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1 }}
                >
                    <img
                        src={Main}
                        alt="Traveler"
                        className="z-10 max-w-full h-auto"
                    />
                </motion.div>
            </motion.div>
        </>
    );
};
