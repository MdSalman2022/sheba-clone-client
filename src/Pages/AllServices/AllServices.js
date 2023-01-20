import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import { animateScroll as scroll } from 'react-scroll'

const AllServices = () => {

    let services = [
        {
            id: '1',
            name: 'Ac Repair Services',
        },
        {
            id: '2',
            name: 'Appliance Repair',
        },
        {
            id: '3',
            name: 'Trips & Travels',
        },
        {
            id: '4',
            name: 'Shifting',
        },
        {
            id: '5',
            name: 'Beauty & Salon',
        },
        {
            id: '6',
            name: 'Car Care Services',
        },
        {
            id: '7',
            name: 'Cleaning & Pest Control',
        },
        {
            id: '8',
            name: 'Painting & Renovation',
        },
        {
            id: '9',
            name: 'Electronics & Gadgets Repair',
        },
        {
            id: '10',
            name: 'Driver Service',
        },
        {
            id: '11',
            name: 'Electric & Plumbing',
        },
        {
            id: '12',
            name: 'Car Rental',
        },
        {
            id: '13',
            name: 'Men\'s Care & Salon',
        },
        {
            id: '14',
            name: 'Emergency Services',
        }
    ]

    const [active, setActive] = useState('1')

    const [isFixed, setIsFixed] = useState(false);

    useEffect(() => {
        function handleScroll() {
            if (window.scrollY > 50) {
                setIsFixed(true);
            } else {
                setIsFixed(false);
            }
        }

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    const scrolltop = () => {
        scroll.scrollToTop();
    }

    return (
        <div className='h-full mb-10  '>

            <div className="w-full lg:w-[1100px] h-full mx-auto">
                <h1 className="text-4xl font-semibold text-left py-10 lg:px-0 px-2">All Services</h1>
                <div className="mx-auto md:grid grid-cols-4">
                    <div>
                        <div className={`col-span-1 bg-white ${isFixed ? 'lg:fixed top-20 -ml-2' : ''} `}>
                            <ul className='text-left'>
                                {
                                    services.map(service =>

                                        <ScrollLink to={service.id} spy={true} smooth={true} offset={-100} duration={500}>
                                            <li onClick={() =>
                                                setActive(service.id)}
                                                className={`py-3 hover:bg-neutral w-full hover:font-semibold px-6 border-r-4 ${active === service.id ? 'border-[#00a1ba] bg-neutral font-semibold' : ''} `}>
                                                {service.name}
                                            </li>
                                        </ScrollLink>
                                    )
                                }
                            </ul>
                        </div>
                    </div>
                    <div className="col-span-3 space-y-5 md:space-y-20">
                        {
                            services.map(service =>
                                <div
                                    className='text-left space-y-5 md:pl-10 px-2'
                                    id={service.id}>

                                    <h1 className="text-xl lg:text-3xl">{service.name}</h1>
                                    <div className="grid grid-cols-2 md:grid-cols-3 gap-5">

                                        <Link to="/service" onClick={scrolltop}>
                                            <div className="flex flex-col gap-2">
                                                <img className='rounded-lg shadow-lg' src="https://i.ibb.co/hctc9gH/burnerrepair-270x180.webp" alt="burnerrepair-270x180" border="0" />
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
                            )

                        }

                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllServices;