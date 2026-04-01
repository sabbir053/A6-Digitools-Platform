import React from 'react';

const Pricing = () => {
    return (
        <div className='container mx-auto my-20 p-3'>
            <h2 className='text-4xl text-center font-bold'>Simple, Transparent Pricing</h2>
            <p className='text-sm text-gray-400 text-center py-2'>Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-6 gap-10'>
                <div className="card bg-base-100 shadow-sm">
                    <div className="card-body">
                        <h3 className="text-2xl font-bold">Starter</h3>
                        <p className="text-sm text-gray-400">Perfect for getting started</p>
                        <div className='py-3'>
                            <h2 className='text-5xl font-bold'>$0 <span className='text-sm text-gray-500 font-thin'>/Month</span></h2>
                        </div>
                        <ul className="mt-6 flex flex-col gap-2 text-xs">
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span className='text-lg'>Access to 10 free tools</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span className='text-lg'>Basic templates</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span className='text-lg'>Community support</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span className='text-lg'>1 project per month</span>
                            </li>
                        </ul>
                        <div className="mt-6">
                            <button className="btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-full text-white btn-block">Get Started Free</button>
                        </div>
                    </div>
                </div>

                <div className="relative card bg-linear-to-r from-[#4F39F6] to-[#9514FA] shadow-sm text-white">
                    <div className='absolute px-3 py-1 bg-yellow-200 rounded-full items-center -top-5 left-[36%] shadow-2xl'>
                        <h2 className='text-red-500 font-bold'>Most Popular</h2>
                    </div>
                    <div className="card-body">
                        <h3 className="text-2xl font-bold">Pro</h3>
                        <p className="text-sm text-gray-200">Best for professionals</p>
                        <div className='py-3'>
                            <h2 className='text-5xl font-bold'>$29 <span className='text-sm text-gray-200 font-thin'>/Month</span></h2>
                        </div>
                        <ul className="mt-6 flex flex-col gap-2 text-xs">
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span className='text-lg'>Access to all premium tools</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span className='text-lg'>Unlimited templates</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span className='text-lg'>Priority support</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span className='text-lg'>Unlimited projects</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span className='text-lg'>Cloud sync</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span className='text-lg'>Advanced analytics</span>
                            </li>
                        </ul>
                        <div className="mt-6 bg-white rounded-full">
                            <button className="btn rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent btn-block font-bold">
                                Start Pro Trial
                            </button>
                        </div>
                    </div>
                </div>

                <div className="card bg-base-100 shadow-sm">
                    <div className="card-body">
                        <h3 className="text-2xl font-bold">Enterprise</h3>
                        <p className="text-sm text-gray-400">For teams and businesses</p>
                        <div className='py-3'>
                            <h2 className='text-5xl font-bold'>$99 <span className='text-sm text-gray-500 font-thin'>/Month</span></h2>
                        </div>
                        <ul className="mt-6 flex flex-col gap-2 text-xs">
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span className='text-lg'>Everything in Pro</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span className='text-lg'>Team collaboration</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span className='text-lg'>Custom integrations</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span className='text-lg'>Dedicated support</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span className='text-lg'>SLA guarantee</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span className='text-lg'>Custom branding</span>
                            </li>
                        </ul>
                        <div className="mt-6">
                            <button className="btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white btn-block rounded-full">Contact Sales</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Pricing;