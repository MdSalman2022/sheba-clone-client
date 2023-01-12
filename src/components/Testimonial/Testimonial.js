import React from 'react';
import { AiOutlineLine } from 'react-icons/ai';

const Testimonial = () => {
    return (
        <div className='bg-accent mt-[300px] md:mt-0 lg:mt-0'>
            <div className="py-20 lg:w-[1100px] mx-auto">
                <div className="flex justify-start items-center">
                    <p className='text-black text-3xl font-thin'><AiOutlineLine /></p> <p>SOME HAPPY FACES</p>
                </div>
                <h2 className="pt-2 lg:text-3xl text-left font-semibold">Real Happy Customers, Real Stories</h2>

                <div className="lg:grid lg:grid-cols-2 h-full w-full lg:h-96 justify-items-center place-content-end content-end">
                    <div className="flex items-center ">
                        <div className=" border-4 border-[#00a1ba] w-1  h-full lg:h-80"></div>
                        <p className='w-80 lg:w-full pl-2 lg:pl-10 text-left lg:text-2xl '>
                            “ Such service platforms are available in other countries. I’ve personally used those when I was abroad.
                            I’m very pleased that such a portal is available here in Bangladesh as well. Thank you Sheba.xyz.
                            <br />
                            <span className="text-lg font-semibold">- Zabeen Yusuf Nur </span> <br />
                            <span className="text-lg"> IT Consultant, Australia</span>
                        </p>
                    </div>
                    <img className='w-96' src="https://i.ibb.co/wB5cSvM/ads.png" alt="ads" border="0" />
                </div>
            </div>
        </div>
    );
};

export default Testimonial;