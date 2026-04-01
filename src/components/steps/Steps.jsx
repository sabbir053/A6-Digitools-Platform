import React from 'react';
import userImg from '../../assets/user.png'
import packageImg from '../../assets/package.png'
import rocketImg from '../../assets/rocket.png'

const Steps = () => {
    return (
        <div className="bg-[#F9FAFC] py-10 sm:py-5 my-6">
            <div className="mx-auto container px-3 md:px-6 lg:px-8">
                <div className="mx-auto text-center">
                    <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-4xl">Get Started In 3 Steps</h2>
                    <p className="mt-4 text-lg leading-8 text-gray-600">Start using premium digital tools in minutes, not hours.</p>
                </div>
                <div className="mt-10 sm:mt-5 lg:mt-24 grid grid-cols-1 lg:grid-cols-3 gap-x-8 gap-y-8">

                    <div className="relative pl-16 rounded-3xl bg-white p-8 shadow-sm ring-1 ring-gray-200">
                        <div class="absolute top-5 right-5 flex h-10 w-10 items-center justify-center rounded-full bg-[#8A2BE2] text-sm font-semibold text-white">01</div>

                        <div class="text-base font-semibold leading-7 text-gray-900">
                            <div class="mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-[#F3E8FF] mx-auto">
                                <img src={userImg} alt="user img" />
                            </div>
                            <div class="text-center text-2xl">Create Account</div>
                        </div>

                        <dd class="mt-4 text-center text-base leading-7 text-gray-600">Sign up for free in seconds. No credit card required to get started.</dd>
                    </div>

                    <div className="relative pl-16 rounded-3xl bg-white p-8 shadow-sm ring-1 ring-gray-200">
                        <div class="absolute top-5 right-5 flex h-10 w-10 items-center justify-center rounded-full bg-[#8A2BE2] text-sm font-semibold text-white">02</div>

                        <div class="text-base font-semibold leading-7 text-gray-900">
                            <div class="mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-[#F3E8FF] mx-auto">
                                <img src={packageImg} alt="package img" />
                            </div>
                            <div class="text-center text-2xl">Choose Products</div>
                        </div>

                        <dd class="mt-4 text-center text-base leading-7 text-gray-600">Browse our catalog and select the tools that fit your needs.</dd>
                    </div>

                    <div className="relative pl-16 rounded-3xl bg-white p-8 shadow-sm ring-1 ring-gray-200">
                        <div class="absolute top-5 right-5 flex h-10 w-10 items-center justify-center rounded-full bg-[#8A2BE2] text-sm font-semibold text-white">03</div>

                        <div class="text-base font-semibold leading-7 text-gray-900">
                            <div class="mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-[#F3E8FF] mx-auto">
                                <img src={rocketImg} alt="rocket img" />
                            </div>
                            <div class="text-center text-2xl">Start Creating</div>
                        </div>

                        <dd class="mt-4 text-center text-base leading-7 text-gray-600">Download and start using your premium tools immediately.</dd>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Steps;