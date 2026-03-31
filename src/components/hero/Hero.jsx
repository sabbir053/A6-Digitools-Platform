import React from 'react';
import bannerImg from "../../assets/banner.png";
import { CiPlay1 } from 'react-icons/ci';

const Hero = () => {
    return (
        <div className='container mx-auto space-y-5 p-3 my-5 grid grid-cols-1 md:grid-cols-2 items-center justify-center'>
            <div className='space-y-3'>
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium shadow-sm bg-[#E1E7FF]">
                    <span className="w-2 h-2 bg-[#9514FA] rounded-full animate-pulse"></span>
                    <span className="text-[#9514FA] text-linear-to-r from-[#4F39F6] to-[#9514FA]">
                        New: AI-Powered Tools Available
                    </span>
                </div>
                <h1 className='text-4xl md:text-[50px] font-bold'>Supercharge Your <br></br> Digital Workflow</h1>
                <p className='text-sm text-gray-400'>Access premium AI tools, design assets, templates, and productivity <br />
                    software—all in one place. Start creating faster today.
                    Explore Products
                </p>
                <div className='flex gap-3'>
                    <button className='btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white rounded-full'>Explore Products</button>
                    <button className='btn btn-outline items-center btn-primary rounded-full'> <CiPlay1 /> Watch Demo</button>
                </div>
            </div>
            <div className="w-full">
                <img
                    className="w-full max-h-150 object-contain"
                    src={bannerImg}
                    alt="img"
                />
            </div>
        </div>
    );
};

export default Hero;