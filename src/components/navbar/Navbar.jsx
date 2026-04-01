import React from 'react';

const Navbar = ({ isCart }) => {
    return (
        <div className="navbar bg-base-100 shadow-sm ">
            <div className='flex container mx-auto'>
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu space-y-2 font-bold menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <li className='cursor-pointer bg-gray-100 p-2 rounded-md'>Products</li>
                            <li className='cursor-pointer bg-gray-100 p-2 rounded-md'>Features</li>
                            <li className='cursor-pointer bg-gray-100 p-2 rounded-md'>Pricing</li>
                            <li className='cursor-pointer bg-gray-100 p-2 rounded-md'>Testimonials</li>
                            <li className='cursor-pointer bg-gray-100 p-2 rounded-md'>FAQ</li>
                        </ul>
                    </div>
                    <a className="font-bold bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent text-xl">Digitools</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 space-x-8">
                        <li className='cursor-pointer'>Products</li>
                        <li className='cursor-pointer'>Features</li>
                        <li className='cursor-pointer'>Pricing</li>
                        <li className='cursor-pointer'>Testimonials</li>
                        <li className='cursor-pointer'>FAQ</li>
                    </ul>
                </div>
                <div className="navbar-end space-x-1.5">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                        <div className="indicator">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /> </svg>
                            <span className={`${isCart.length <= 0 ? '' : 'badge badge-sm indicator-item bg-orange-300'}`}>{isCart.length <= 0 ? '' : isCart.length}</span>
                        </div>
                    </div>
                    <h3 className='cursor-pointer'>Login</h3>
                    <a className="btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white rounded-full">Get Started</a>
                </div>
            </div>
        </div >
    );
};

export default Navbar;