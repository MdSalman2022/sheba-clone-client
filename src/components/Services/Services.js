import React from 'react';
import { FaAngleRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { animateScroll as scroll } from 'react-scroll'


const scrolltop = () => {
    scroll.scrollToTop();
}

const Services = () => {


    return (
        <div className='w-full h-full md:mt-[10%] lg:mt-[10%] lg:w-[1100px] mx-auto lg:mt-20 px-3 lg:px-0'>
            <div className="flex justify-between">
                <p className="text-2xl font-bold py-10 text-black text-left">For Your Home</p>
                <div className="text-lg font-semibold py-10 text-primary text-left flex justify-center items-center">
                    <Link to="/allservices"><p>View All </p></Link>
                    <FaAngleRight />
                </div>

            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                <Link to="/service" onClick={scrolltop}>
                    <div className="flex flex-col gap-2">
                        <img className='rounded-lg' src="https://i.ibb.co/hctc9gH/burnerrepair-270x180.webp" alt="burnerrepair-270x180" border="0" />
                        <p className="text-md font-semibold text-center">Ac Servicing</p>
                    </div>
                </Link>
                <Link to="/service" onClick={scrolltop} >
                    <div className="flex flex-col gap-2">
                        <img className='rounded-lg shadow-lg' src="https://i.ibb.co/kK0DY39/1619428672-plumbingsanitaryservices-270x180.webp" alt="1619428672-plumbingsanitaryservices-270x180" border="0" />
                        <p className="text-md font-semibold text-center">Plumbing & Sanitary Services</p>
                    </div>
                </Link>
                <Link to="/service" onClick={scrolltop}>
                    <div className="flex flex-col gap-2">
                        <img className='rounded-lg shadow-lg' src="https://i.ibb.co/WfJBkdh/1612862065-paintingservices-270x180.webp" alt="1612862065-paintingservices-270x180" border="0" />
                        <p className="text-md font-semibold text-center">Painting Services</p>
                    </div>
                </Link>
                <Link to="/service" onClick={scrolltop}>
                    <div className="flex flex-col gap-2">
                        <img className='rounded-lg' src="https://i.ibb.co/B386kbV/1617855940-homecleaning-270x180.webp" alt="1617855940-homecleaning-270x180" border="0" />
                        <p className="text-md font-semibold text-center">Home Cleaning</p>
                    </div>
                </Link>

            </div>

            <div className="flex justify-between">
                <p className="text-2xl font-bold py-10 text-black text-left">Recently View</p>
                <div className="text-lg font-semibold py-10 text-primary text-left flex justify-center items-center">
                    <Link to="/allservices"><p>View All </p></Link>
                    <FaAngleRight />
                </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-5">
                <Link to="/service" onClick={scrolltop}>
                    <div className="flex flex-col gap-2">
                        <img className='rounded-lg' src="https://i.ibb.co/hctc9gH/burnerrepair-270x180.webp" alt="burnerrepair-270x180" border="0" />
                        <p className="text-md font-semibold text-center">Ac Servicing</p>
                    </div>
                </Link>
                <Link to="/service" onClick={scrolltop}>
                    <div className="flex flex-col gap-2">
                        <img className='rounded-lg shadow-lg' src="https://i.ibb.co/kK0DY39/1619428672-plumbingsanitaryservices-270x180.webp" alt="1619428672-plumbingsanitaryservices-270x180" border="0" />
                        <p className="text-md font-semibold text-center">Plumbing & Sanitary Services</p>
                    </div>
                </Link>
            </div>

            <div className="flex justify-between">
                <p className="text-2xl font-bold py-10 text-black text-left">Trending</p>
                <div className="text-lg font-semibold py-10 text-primary text-left flex justify-center items-center">
                    <Link to="/allservices"><p>View All </p></Link>
                    <FaAngleRight />
                </div>

            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-5">
                <Link to="/service" onClick={scrolltop}>
                    <div className="flex flex-col gap-2">
                        <img className='rounded-lg' src="https://i.ibb.co/hctc9gH/burnerrepair-270x180.webp" alt="burnerrepair-270x180" border="0" />
                        <p className="text-md font-semibold text-center">Ac Servicing</p>
                    </div>
                </Link>
                <Link to="/service" onClick={scrolltop}>
                    <div className="flex flex-col gap-2">
                        <img className='rounded-lg shadow-lg' src="https://i.ibb.co/kK0DY39/1619428672-plumbingsanitaryservices-270x180.webp" alt="1619428672-plumbingsanitaryservices-270x180" border="0" />
                        <p className="text-md font-semibold text-center">Plumbing & Sanitary Services</p>
                    </div>
                </Link>
                <Link to="/service" onClick={scrolltop}>
                    <div className="flex flex-col gap-2">
                        <img className='rounded-lg shadow-lg' src="https://i.ibb.co/WfJBkdh/1612862065-paintingservices-270x180.webp" alt="1612862065-paintingservices-270x180" border="0" />
                        <p className="text-md font-semibold text-center">Painting Services</p>
                    </div>
                </Link>
            </div>


            <div className="flex justify-between">
                <p className="text-2xl font-bold py-10 text-black text-left">Recommended</p>
                <div className="text-lg font-semibold py-10 text-primary text-left flex justify-center items-center">
                    <Link to="/allservices"><p>View All </p></Link>
                    <FaAngleRight />
                </div>

            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-5">
                <Link to="/service" onClick={scrolltop}>
                    <div className="flex flex-col gap-2">
                        <img className='rounded-lg' src="https://i.ibb.co/hctc9gH/burnerrepair-270x180.webp" alt="burnerrepair-270x180" border="0" />
                        <p className="text-md font-semibold text-center">Ac Servicing</p>
                    </div>
                </Link>
                <Link to="/service" onClick={scrolltop}>
                    <div className="flex flex-col gap-2">
                        <img className='rounded-lg shadow-lg' src="https://i.ibb.co/kK0DY39/1619428672-plumbingsanitaryservices-270x180.webp" alt="1619428672-plumbingsanitaryservices-270x180" border="0" />
                        <p className="text-md font-semibold text-center">Plumbing & Sanitary Services</p>
                    </div>
                </Link>
                <Link to="/service" onClick={scrolltop}>
                    <div className="flex flex-col gap-2">
                        <img className='rounded-lg shadow-lg' src="https://i.ibb.co/WfJBkdh/1612862065-paintingservices-270x180.webp" alt="1612862065-paintingservices-270x180" border="0" />
                        <p className="text-md font-semibold text-center">Painting Services</p>
                    </div>
                </Link>
            </div>

        </div>
    );
};

export default Services;