import React from 'react';

const Navbar = () => {
    return (
        <div className="p-5 bg-base-100 shadow-sm">
            <div className='flex justify-between items-center container mx-auto'>

                <div className="">
                    <a className="btn btn-ghost text-xl">Digitools</a>
                </div>
                <div className='px-10'>
                    <ul className='flex justify-between items-center gap-8'>
                        <li className='cursor-pointer'>Products</li>
                        <li className='cursor-pointer'>Features</li>
                        <li className='cursor-pointer'>Pricing</li>
                        <li className='cursor-pointer'>Testimonials</li>
                        <li className='cursor-pointer'>FAQ</li>
                    </ul>
                </div>
                <div className='flex items-center space-x-5'>
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                        <div className="indicator">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" 
                            stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /> </svg>
                            <span className="badge badge-sm indicator-item bg-orange-300">8</span>
                        </div>
                    </div>
                    <h3>Login</h3>
                    <button className='btn btn-success'>Get Starter</button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;