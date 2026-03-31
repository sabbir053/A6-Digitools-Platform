import React from 'react';
import { FaSquareFacebook, FaXTwitter } from 'react-icons/fa6';
import { TbBrandInstagramFilled } from 'react-icons/tb';

const Footer = () => {
    return (
        <div className='bg-[#101727] p-5'>
            <div className='container mx-auto pt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5'>
                <div className='space-y-3'>
                    <h2 className='text-4xl text-center md:text-start font-bold text-white cursor-pointer'>Digitools</h2>
                    <p className='text-sm text-gray-400 text-center md:text-start'>Premium digital tools for creators, professionals, and businesses. Work smarter with our suite of powerful tools.</p>
                </div>
                <div>
                    <h2 className='text-lg text-center md:text-start pb-4 font-bold text-gray-300'>Product</h2>
                    <ul className='space-y-2 text-sm text-center md:text-start'>
                        <li className='text-gray-400 cursor-pointer'>Features</li>
                        <li className='text-gray-400 cursor-pointer'>Pricing</li>
                        <li className='text-gray-400 cursor-pointer'>Templates</li>
                        <li className='text-gray-400 cursor-pointer'>Integrations</li>
                    </ul>
                </div>
                <div>
                    <h2 className='text-lg pb-4 font-bold text-gray-300 text-center md:text-start'>Company</h2>
                    <ul className='space-y-2 text-sm text-center md:text-start'>
                        <li className='text-gray-400 cursor-pointer'>About</li>
                        <li className='text-gray-400 cursor-pointer'>Blog</li>
                        <li className='text-gray-400 cursor-pointer'>Careers</li>
                        <li className='text-gray-400 cursor-pointer'>Press</li>
                    </ul>
                </div>
                <div>
                    <h2 className='text-lg pb-4 font-bold text-gray-300 text-center md:text-start'>Resources</h2>
                    <ul className='space-y-2 text-sm text-center md:text-start'>
                        <li className='text-gray-400 cursor-pointer'>Documentation</li>
                        <li className='text-gray-400 cursor-pointer'>Help Center</li>
                        <li className='text-gray-400 cursor-pointer'>Community</li>
                        <li className='text-gray-400 cursor-pointer'>Contact</li>
                    </ul>
                </div>
                <div>
                    <h2 className='text-lg text-center md:text-start pb-4 font-bold text-gray-300'>Social Links</h2>
                    <div className="flex justify-center md:justify-start gap-3">
                        <div className="w-10 h-10 flex items-center justify-center bg-white rounded-full shadow cursor-pointer">
                            <TbBrandInstagramFilled className="text-xl" />
                        </div>
                        <div className="w-10 h-10 flex items-center justify-center bg-white rounded-full shadow cursor-pointer">
                            <FaSquareFacebook className="text-xl" />
                        </div>
                        <div className="w-10 h-10 flex items-center justify-center bg-white rounded-full shadow cursor-pointer">
                            <FaXTwitter className="text-xl" />
                        </div>
                    </div>
                </div>
            </div>

            <div className='container mx-auto py-3'>
                <hr className='text-gray-400 mt-8 mb-4' />
                <div className='flex justify-between'>
                    <p className='text-gray-400'>© 2026 Digitools. All rights reserved.</p>
                    <div className='flex gap-2 md:gap-3'>
                        <p className='text-gray-400 cursor-pointer'>Privacy Policy</p>
                        <p className='text-gray-400 cursor-pointer'>Terms of Service</p>
                        <p className='text-gray-400 cursor-pointer'>Cookies</p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Footer;