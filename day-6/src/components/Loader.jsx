// Loader.js
import React from 'react';

export const Loader = () => (
    <div className="flex flex-col justify-center items-center h-screen bg-black ">
        <div className="border-t-4 border-white border-solid rounded-full w-16 h-16 animate-spin mb-4"></div>
        <h2 className="text-white text-xl">Loading...</h2>
    </div>
);
