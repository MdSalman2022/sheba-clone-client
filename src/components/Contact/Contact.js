import React from 'react';
import { IoMdCall } from 'react-icons/io';

const Contact = () => {
    return (
        <div className='bg-neutral lg:py-5 z-10 mt-72 lg:mt-0 py-20   lg:my-0'>
            <div className='w-full lg:w-[1100px] h-full mx-auto'>
                <div className="flex flex-col lg:grid lg:grid-cols-3 justify-items-center h-full content-center relative">
                    <div className='col-span-2 h-40 flex flex-col justify-center items-start'>
                        <p className="lg:text-2xl font-semibold mt-24 lg:mt-0">
                            Can’t find your desired service? Let us know 24/7 in 16516.
                        </p>
                        <div className="flex flex-col mx-auto lg:mx-0 lg:flex-row  mt-5 gap-5">
                            <button className="btn w-full lg:w-52 btn-primary">Request a service</button>
                            <button className="btn w-full lg:w-52 btn-primary btn-outline text-xl"><IoMdCall /> &nbsp;&nbsp; 16516</button>
                        </div>
                    </div>
                    <div className="w-40 lg:w-96 lg:col-span-1 absolute -top-32 right-32 lg:-top-36  lg:right-0">
                        <img src="https://i.ibb.co/C844ZGR/service-request.png" alt="service-request" border="0" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;