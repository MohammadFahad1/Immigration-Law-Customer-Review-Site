import React from 'react';
import { toast, Toaster } from 'react-hot-toast';

const Pricing = () => {
    return (
        <div className='my-40 max-w-5xl mx-auto'>
            <h1 className='text-3xl text-blue-500 text-center font-bold underline'>NEED A PROFESSIONAL CONSULTATION?</h1>
            <div className="flex justify-center">
                <div className="flex md:flex-row flex-col px-4 py-2 my-10 gap-y-7 gap-x-7 max-w-7xl">
                    <div className="bg-gradient-to-t from-gray-900 to-gray-600 border border-gray-200 rounded-xl drop-shadow-md shadow-current p-5 h-auto w-[300px] hover:shadow-lg hover:transform hover:scale-105 duration-500 ease-in-out">
                        <div className="flex flex-col justify-center items-center text-white p-2">
                            <div className="text-3xl">Green Card</div>
                            <div className="flex justify-center my-3 font-medium md:tracking-tighter">
                                <div className="text-2xl md:text-3xl mt-[3px] md:mt-[1px]">$</div>
                                <div className="text-3xl md:text-5xl">500</div>
                                <div className="text-lg md:text-xl mt-[9px] md:mt-[20px]"></div>
                            </div>
                            <div className="px-8 py-1 rounded-3xl font-medium bg-white text-stone-900 hover:bg-gray-100 cursor-pointer">
                                <button>Order Now</button>
                            </div>
                            <div className="text-white text-sm my-4 border-t border-white flex flex-col justify-center items-center h-60">
                                <li className="m-1">Thorough legal review and consultation for no extra charge</li>
                                <li className="m-1">Include a child for just $450 more per child
                                </li>
                                <li className="m-1">Begin worry-free: guaranteed approval or your money back!
                                </li>
                            </div>
                        </div>
                    </div>
                    <div className="bg-gradient-to-b from-orange-500 to-yellow-500 border border-gray-200 rounded-xl drop-shadow-md shadow-current p-5 h-auto w-[300px] hover:shadow-lg hover:transform hover:scale-105 duration-500 ease-in-out">
                        <div className="flex flex-col justify-center text-white p-2">
                            <div className="text-3xl">Parent Visa</div>
                            <div className="flex justify-center my-3 font-medium md:tracking-tighter">
                                <div className="text-2xl md:text-3xl mt-[3px] md:mt-[1px]">$</div>
                                <div className="text-3xl md:text-5xl">1000</div>
                                <div className="text-lg md:text-xl mt-[9px] md:mt-[20px]"></div>
                            </div>
                            <div className="px-8 py-1 rounded-3xl font-medium bg-white text-stone-900 hover:bg-gray-100 cursor-pointer">
                                <button>Order Now</button>
                            </div>
                            <div className="text-white text-sm my-4 border-t border-white flex flex-col justify-center h-60">
                                <li className="m-1">Fast Parent Visa Application review (in just 4 hours)
                                </li>
                                <li className="m-1">4 comprehensive quality assurance checks
                                </li>
                                <li className="m-1">Guaranteed Parent Visa approval or your money back
                                </li>
                                <li className="m-1">99.7% Success Rate</li>
                            </div>
                        </div>
                    </div>
                    <div className="bg-gradient-to-br from-blue-700 via-blue-800 to-gray-900 border border-gray-200 rounded-xl drop-shadow-md shadow-current p-5 h-auto w-[300px] hover:shadow-lg hover:transform hover:scale-105 duration-500 ease-in-out">
                        <div className="flex flex-col justify-center items-center text-white p-2">
                            <div className="text-3xl">U.S. Citizenship</div>
                            <div className="flex justify-center my-3 font-medium md:tracking-tighter">
                                <div className="text-2xl md:text-3xl mt-[3px] md:mt-[1px]">$</div>
                                <div className="text-3xl md:text-5xl">2000</div>
                                <div className="text-lg md:text-xl mt-[9px] md:mt-[20px]"></div>
                            </div>
                            <div className="px-8 py-1 rounded-3xl font-medium bg-white text-stone-900 hover:bg-gray-100 cursor-pointer">
                                <button>Order Now</button>
                            </div>
                            <div className="text-white text-sm my-4 border-t border-white flex flex-col justify-center h-60">
                                <li className="m-1">Fast application review in just 4 hours</li>
                                <li className="m-1">4 comprehensive quality assurance checks</li>
                                <li className="m-1">Guaranteed approval or your money back</li>
                                <li className="m-1">99.7% Success Rate</li>
                                <li className="m-1">Seamless petition assembly for returning customers!</li>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Pricing;