import React from 'react';

const Stats = () => {
    return (
        <div className='bg-linear-to-r from-[#4F39F6] to-[#9514FA] py-10'>
            <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between text-center text-white space-y-8 md:space-y-0 px-5">

                <div className="space-y-2 flex-1">
                    <h2 className="text-4xl font-bold">50K+</h2>
                    <p className="text-lg opacity-80">Active Users</p>
                </div>

                <div className="hidden md:block w-px h-16 bg-white/30"></div>

                <div className="space-y-2 flex-1">
                    <h2 className="text-4xl font-bold">200+</h2>
                    <p className="text-lg opacity-80">Premium Tools</p>
                </div>

                <div className="hidden md:block w-px h-16 bg-white/30"></div>

                <div className="space-y-2 flex-1">
                    <h2 className="text-4xl font-bold">4.9</h2>
                    <p className="text-lg opacity-80">Rating</p>
                </div>

            </div>
        </div>
    );
};

export default Stats;