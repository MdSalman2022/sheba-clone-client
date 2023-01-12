import React from 'react';
import { FaAngleRight } from 'react-icons/fa';

const Services = () => {
    return (
        <div className='w-full h-full mt-[400px] lg:w-[1100px] mx-auto lg:mt-20 px-3 lg:px-0'>
            <div className="flex justify-between">
                <p className="text-2xl font-bold py-10 text-black text-left">For Your Home</p>
                <div className="text-lg font-semibold py-10 text-primary text-left flex justify-center items-center">
                    <p>View All </p>
                    <FaAngleRight />
                </div>

            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
                <img className='rounded-lg' src="https://i.ibb.co/hctc9gH/burnerrepair-270x180.webp" alt="burnerrepair-270x180" border="0" />
                <img className='rounded-lg' src="https://i.ibb.co/kK0DY39/1619428672-plumbingsanitaryservices-270x180.webp" alt="1619428672-plumbingsanitaryservices-270x180" border="0" />
                <img className='rounded-lg' src="https://i.ibb.co/WfJBkdh/1612862065-paintingservices-270x180.webp" alt="1612862065-paintingservices-270x180" border="0" />
                <img className='rounded-lg' src="https://i.ibb.co/B386kbV/1617855940-homecleaning-270x180.webp" alt="1617855940-homecleaning-270x180" border="0" />

            </div>

            <div className="flex justify-between">
                <p className="text-2xl font-bold py-10 text-black text-left">Recently View</p>
                <div className="text-lg font-semibold py-10 text-primary text-left flex justify-center items-center">
                    <p>View All </p>
                    <FaAngleRight />
                </div>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4  gap-5">
                <img className='rounded-lg' src="https://i.ibb.co/hctc9gH/burnerrepair-270x180.webp" alt="burnerrepair-270x180" border="0" />
                <img className='rounded-lg' src="https://i.ibb.co/kK0DY39/1619428672-plumbingsanitaryservices-270x180.webp" alt="1619428672-plumbingsanitaryservices-270x180" border="0" />

            </div>

            <div className="flex justify-between">
                <p className="text-2xl font-bold py-10 text-black text-left">Trending</p>
                <div className="text-lg font-semibold py-10 text-primary text-left flex justify-center items-center">
                    <p>View All </p>
                    <FaAngleRight />
                </div>

            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4  gap-5">
                <img className='rounded-lg' src="https://i.ibb.co/hctc9gH/burnerrepair-270x180.webp" alt="burnerrepair-270x180" border="0" />
                <img className='rounded-lg' src="https://i.ibb.co/kK0DY39/1619428672-plumbingsanitaryservices-270x180.webp" alt="1619428672-plumbingsanitaryservices-270x180" border="0" />
                <img className='rounded-lg' src="https://i.ibb.co/WfJBkdh/1612862065-paintingservices-270x180.webp" alt="1612862065-paintingservices-270x180" border="0" />
                <img className='rounded-lg' src="https://i.ibb.co/B386kbV/1617855940-homecleaning-270x180.webp" alt="1617855940-homecleaning-270x180" border="0" />
            </div>


            <div className="flex justify-between">
                <p className="text-2xl font-bold py-10 text-black text-left">Recommended</p>
                <div className="text-lg font-semibold py-10 text-primary text-left flex justify-center items-center">
                    <p>View All </p>
                    <FaAngleRight />
                </div>

            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4  gap-5">
                <img className='rounded-lg' src="https://i.ibb.co/hctc9gH/burnerrepair-270x180.webp" alt="burnerrepair-270x180" border="0" />
                <img className='rounded-lg' src="https://i.ibb.co/kK0DY39/1619428672-plumbingsanitaryservices-270x180.webp" alt="1619428672-plumbingsanitaryservices-270x180" border="0" />
                <img className='rounded-lg' src="https://i.ibb.co/WfJBkdh/1612862065-paintingservices-270x180.webp" alt="1612862065-paintingservices-270x180" border="0" />

            </div>

        </div>
    );
};

export default Services;