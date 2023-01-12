import React from 'react';
import { AiOutlineLine } from 'react-icons/ai';
import { MdMasks, MdSanitizer } from 'react-icons/md';
import { IoCall } from 'react-icons/io5';
import { GiWinterGloves } from 'react-icons/gi';


const About = () => {
    return (
        <div className='bg-neutral h-full mt-20'>
            <div className="div w-full lg:w-[1100px] mx-auto">
                <div className="pt-10 flex justify-start items-center">
                    <p className='text-black text-3xl font-thin'><AiOutlineLine /></p> <p> WHY CHOOSE US</p>
                </div>
                <h2 className="text-3xl text-left font-semibold">Because we care about your safety..</h2>


                <div className="flex flex-col w-full h-96 lg:h-full lg lg:flex-row  justify-start items-center lg:gap-10 my-10">
                    <div className="grid lg:grid-cols-2 gap-5 w-full">
                        <div className='flex gap-2 bg-white w-full h-32 rounded-lg items-center justify-center'>
                            <MdMasks className='text-primary text-6xl' />
                            <p className='text-left font-semibold'>Ensuring<br />Masks</p>
                        </div>
                        <div className='flex gap-2 bg-white w-full h-32 rounded-lg items-center justify-center'>
                            <IoCall className='text-primary text-6xl' />
                            <p className='text-left font-semibold'>24/7<br />Support</p>
                        </div>
                        <div className='flex gap-2 bg-white w-full h-32 rounded-lg items-center justify-center'>
                            <MdSanitizer className='text-primary text-6xl' />
                            <p className='text-left font-semibold'>Sanitising<br />Hands & <br />Equipment</p>
                        </div>
                        <div className='flex gap-2 bg-white w-full h-32 rounded-lg items-center justify-center'>
                            <GiWinterGloves className='text-primary text-6xl' />
                            <p className='text-left font-semibold'>Ensuring<br />Gloves</p>
                        </div>
                    </div>
                    <img className='h-72 w-full rounded-lg' src="https://i.ibb.co/6vjrcBz/why-choose-us.webp" alt="why-choose-us" border="0" />
                </div>


            </div>
            <div className="bg-white h-1 "></div>
            <div className="ads bg-accent mt-80 lg:mt-0">
                <div className='flex lg:grid lg:grid-cols-3 w-full h-full lg:h-32 justify-items-end  content-center lg:w-[1100px] mx-auto'>
                    <div className='flex lg:gap-24 justify-center'>
                        <div className='text-center space-y-3'>
                            <p className='text-xl lg:text-5xl font-semibold'>15,000+</p>
                            <p className='text-xl'>Service Providers</p>
                        </div>
                        <div className="w-1 bg-neutral"></div>
                    </div>
                    <div className='flex lg:gap-24 justify-center'>
                        <div className='text-center space-y-3'>
                            <p className='text-xl lg:text-5xl font-semibold'>2,00,000+</p>
                            <p className='text-xl'>Order Served</p>
                        </div>
                        <div className="w-1 bg-neutral"></div>
                    </div>
                    <div className='flex lg:pr-24 justify-center'>
                        <div className='text-center space-y-3'>
                            <p className='text-xl lg:text-5xl font-semibold'>1,00,000+</p>
                            <p className='text-xl'>5 Star Received</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="works bg-white mt-[200px] lg:mt-0">
                <div className="w-96 lg:w-[1100px] mx-auto">
                    <div className="h-[600px] grid lg:grid-cols-2 gap-4 justify-items-center content-center place-content-center">

                        <div>
                            <div className="  flex justify-start items-center">
                                <p className='text-black text-3xl font-thin'><AiOutlineLine /></p> <p> HOW IT WORKS</p>
                            </div>
                            <h2 className="text-3xl text-left font-semibold">Easiest way to get a service</h2>

                            <img className='mt-10 rounded-xl' src="https://i.ibb.co/Qv6cwdb/Screenshot-2023-01-12-203725.png" alt="Screenshot-2023-01-12-203725" border="0" />
                        </div>

                        <div className='flex flex-col justify-end'>
                            <ul className="pt-5 steps steps-vertical ">
                                <li className="step step-accent ">
                                    <p className='text-left py-5'><span className='font-semibold text-xl'>Select the Service </span><br />Pick the service you are looking for- from the website or the app.</p>
                                </li>
                                <li className="step step-accent">
                                    <p className='text-left py-5'><span className='font-semibold text-xl'>Pick your schedule</span><br />Pick your convenient date and time to avail the service. Pick the service provider based on their rating.</p>
                                </li>
                                <li className="step step-accent">
                                    <p className='text-left py-5'><span className='font-semibold text-xl'>Place Your Order & Relax </span><br />Review and place the order. Now just sit back and relax. We’ll assign the expert service provider’s schedule for you.</p>
                                </li>
                            </ul>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;