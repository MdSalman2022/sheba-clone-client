import React, { useEffect, useState } from 'react';
import { FaStar } from 'react-icons/fa';

const ServicePage = () => {



    const [isFixed, setIsFixed] = useState(false);

    useEffect(() => {
        function handleScroll() {
            if (window.scrollY > 250) {
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




    return (
        <div className='mb-10'>
            <div className="relative">
                <img src="https://i.ibb.co/86GH0k5/interior.jpg" alt="cleaners" border="0" className='h-[400px] w-full object-cover opacity-52 brightness-50' />


                <div className="text-sm breadcrumbs absolute top-[20%] md:left-[22%] text-white">
                    <ul>
                        <li><a>Home</a></li>
                        <li>AC Repair Services</li>
                        <li>Winter AC Servicing</li>
                    </ul>
                </div>
                <div className="absolute top-[30%]   md:left-[3%] lg:left-[22%]">
                    <h1 className="text-2xl md:text-5xl font-bold text-white drop-shadow-lg mb-5 text-left">Winter AC Servicing</h1>
                    <p className="text-xl bg-[#209e61] my-2 py-3 px-2 w-40 font-semibold text-white text-left rounded-lg">
                        5.00 out of 5
                    </p>
                    <p className='text-left text-white'>(15 ratings on 2 services)</p>
                    <ul className='text-left text-white'>
                        <li>Trusted & Reliable AC Technicians</li>
                        <li>Experience The Excitement!</li>
                    </ul>
                </div>
            </div>

            <div className="lg:w-[1100px] h-full mx-auto">
                <h1 className="text-4xl font-semibold text-left py-10">All Services</h1>
                <div className=" mx-auto md:grid grid-cols-4">
                    <div>
                        <div className={`col-span-1 bg-white ${isFixed ? 'md:fixed top-20 -ml-2' : ''} `}>
                            <ul className='text-left'>
                                <li className={`py-3 hover:bg-neutral hover:font-semibold px-10 ml-6 border-r-4 hover:border-[#00a1ba] hover:bg-neutral font-semibold' `}  >Service Overview</li>
                                <li className={`py-3 hover:bg-neutral hover:font-semibold px-10 ml-6 border-r-4 hover:border-[#00a1ba] hover:bg-neutral font-semibold' `} >FAQ</li>
                                <li className={`py-3 hover:bg-neutral hover:font-semibold px-10 ml-6 border-r-4 hover:border-[#00a1ba] hover:bg-neutral font-semibold' `} >Reviews</li>
                                <li className={`py-3 hover:bg-neutral hover:font-semibold px-10 ml-6 border-r-4 hover:border-[#00a1ba] hover:bg-neutral font-semibold' `} >Details</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-span-3 space-y-20">
                        <div className='text-left space-y-10 px-2 md:pl-10'>
                            <div>
                                <h1 className="text-xl md:text-3xl">What's Included?</h1>
                                <ul className='list-disc pl-10'>
                                    <li>Only service charge</li>
                                    <li>Sheba.xyz Brandize AC Cover</li>
                                </ul>
                            </div>

                            <div>
                                <h1 className="text-xl md:text-3xl">What's Excluded?</h1>
                                <ul className='list-disc pl-10'>
                                    <li>Price of materials or parts</li>
                                    <li>Transportation cost for carrying new materials/parts</li>
                                    <li>Warranty given by manufacturer</li>
                                    <li>Hanging Charge (If Applicable )</li>
                                </ul>
                            </div>

                            <div>
                                <h1 className="text-xl md:text-3xl">Available Services</h1>
                                <ul className='list-disc pl-10'>
                                    <li>AC Master Service</li>
                                    <li>AC Water Drop Solution</li>
                                    <li>AC Leak Repair</li>
                                </ul>
                            </div>

                            <div>
                                <h1 className="text-xl lg:text-4xl">FAQ</h1>
                                <ul className='list-disc pl-10'>
                                    <li>AC Master Service</li>
                                    <li>AC Water Drop Solution</li>
                                    <li>AC Leak Repair</li>
                                </ul>
                            </div>

                            <div>
                                <div className="collapse collapse-arrow  rounded-box my-5">
                                    <input type="checkbox" className="peer" />
                                    <div className="collapse-title bg-neutral text-neutral-content peer-checked:bg-secondary peer-checked:text-info-content">
                                        1. Should i cover my air conditioner in winter?
                                    </div>
                                    <div className="collapse-content bg-neutral text-neutral-content peer-checked:bg-secondary peer-checked:text-info-content">
                                        <p>There is a better time of year to cover it and you need to make sure it is covered properly to avoid damaging the unit</p>
                                    </div>
                                </div>
                                <div className="collapse collapse-arrow  rounded-box my-5">
                                    <input type="checkbox" className="peer" />
                                    <div className="collapse-title bg-neutral text-neutral-content peer-checked:bg-secondary peer-checked:text-info-content">
                                        2. How to properly cover my air conditioner?
                                    </div>
                                    <div className="collapse-content bg-neutral text-neutral-content peer-checked:bg-secondary peer-checked:text-info-content">
                                        <p>To cover your air conditioner, cover only the top of the unit. Some full-sized ac covers may look pretty, No tension, after provide ac service our expert technician will wrap up your machine
                                        </p>
                                    </div>
                                </div>
                                <div className="collapse collapse-arrow  rounded-box my-5">
                                    <input type="checkbox" className="peer" />
                                    <div className="collapse-title bg-neutral text-neutral-content peer-checked:bg-secondary peer-checked:text-info-content">
                                        3. Do i have to pay any charge if i don't take any service?
                                    </div>
                                    <div className="collapse-content bg-neutral text-neutral-content peer-checked:bg-secondary peer-checked:text-info-content">
                                        <p>If you don’t avail any services for your AC after our Service Provider send a technician at your doorstep then you only have to pay the visiting charge which is BDT 200.
                                        </p>
                                    </div>
                                </div>
                                <div className="collapse collapse-arrow  rounded-box my-5">
                                    <input type="checkbox" className="peer" />
                                    <div className="collapse-title bg-neutral text-neutral-content peer-checked:bg-secondary peer-checked:text-info-content">
                                        4. Do you give material or parts warrenty?
                                    </div>
                                    <div className="collapse-content bg-neutral text-neutral-content peer-checked:bg-secondary peer-checked:text-info-content">
                                        <p>
                                            No. We do not manufacture AC parts/Equipment's by ourselves. So, the warranty differs as per manufacturer. However, we can give you 7 days free service warranty.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <h1 className="text-xl md:text-3xl">How to order</h1>
                                <ul className="steps steps-vertical">
                                    <li className="step step-primary">Register</li>
                                    <li className="step step-primary">Choose plan</li>
                                    <li className="step step-primary">Purchase</li>
                                </ul>
                            </div>

                            <div>
                                <h1 className="text-xl md:text-3xl">Review of Winter AC Servicing in Gulshan</h1>
                                <div className="grid grid-cols-2 w-full md:w-96 mt-10">
                                    <div className='flex flex-col'>
                                        <div className="text-xl md:text-3xl">5.00</div>
                                        <p className='flex gap-2 text-warning'><FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar /></p>
                                        <p>2 reviews</p>
                                        <p>and 14 ratings</p>
                                    </div>
                                    <div>
                                        <div className="flex flex-col">
                                            <div className="flex items-center space-x-1">
                                                <span className="flex-shrink-0 w-12 text-sm">5</span>
                                                <div className="flex-1 h-4 overflow-hidden rounded-sm">
                                                    <div className="bg-success h-4 w-5/6"></div>
                                                </div>
                                                <span className="flex-shrink-0 w-12 text-sm text-right">83%</span>
                                            </div>
                                            <div className="flex items-center space-x-1">
                                                <span className="flex-shrink-0 w-12 text-sm">4</span>
                                                <div className="flex-1 h-4 overflow-hidden rounded-sm">
                                                    <div className="bg-success h-4 w-4/6"></div>
                                                </div>
                                                <span className="flex-shrink-0 w-12 text-sm text-right">67%</span>
                                            </div>
                                            <div className="flex items-center space-x-1">
                                                <span className="flex-shrink-0 w-12 text-sm">3</span>
                                                <div className="flex-1 h-4 overflow-hidden rounded-sm">
                                                    <div className="bg-success h-4 w-3/6"></div>
                                                </div>
                                                <span className="flex-shrink-0 w-12 text-sm text-right">50%</span>
                                            </div>
                                            <div className="flex items-center space-x-1">
                                                <span className="flex-shrink-0 w-12 text-sm">2</span>
                                                <div className="flex-1 h-4 overflow-hidden rounded-sm">
                                                    <div className="bg-success h-4 w-2/6"></div>
                                                </div>
                                                <span className="flex-shrink-0 w-12 text-sm text-right">33%</span>
                                            </div>
                                            <div className="flex items-center space-x-1">
                                                <span className="flex-shrink-0 w-12 text-sm">1</span>
                                                <div className="flex-1 h-4 overflow-hidden rounded-sm">
                                                    <div className="bg-success h-4 w-1/6"></div>
                                                </div>
                                                <span className="flex-shrink-0 w-12 text-sm text-right">17%</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="flex justify-between  ">
                                    <div className="flex space-x-4">
                                        <div>
                                            <img src="https://source.unsplash.com/100x100/?portrait" alt="" className="object-cover w-12 h-12 rounded-full dark:bg-gray-500" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold">Leroy Jenkins</h4>
                                            <span className="text-xs dark:text-gray-400">2 days ago</span>
                                        </div>
                                    </div>
                                    <div className="flex items-center space-x-2 dark:text-yellow-500">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current">
                                            <path d="M494,198.671a40.536,40.536,0,0,0-32.174-27.592L345.917,152.242,292.185,47.828a40.7,40.7,0,0,0-72.37,0L166.083,152.242,50.176,171.079a40.7,40.7,0,0,0-22.364,68.827l82.7,83.368-17.9,116.055a40.672,40.672,0,0,0,58.548,42.538L256,428.977l104.843,52.89a40.69,40.69,0,0,0,58.548-42.538l-17.9-116.055,82.7-83.368A40.538,40.538,0,0,0,494,198.671Zm-32.53,18.7L367.4,312.2l20.364,132.01a8.671,8.671,0,0,1-12.509,9.088L256,393.136,136.744,453.3a8.671,8.671,0,0,1-12.509-9.088L144.6,312.2,50.531,217.37a8.7,8.7,0,0,1,4.778-14.706L187.15,181.238,248.269,62.471a8.694,8.694,0,0,1,15.462,0L324.85,181.238l131.841,21.426A8.7,8.7,0,0,1,461.469,217.37Z"></path>
                                        </svg>
                                        <span className="text-xl font-bold">4.5</span>
                                    </div>
                                </div>
                                <div className="pt-2 space-y-2 text-sm dark:text-gray-400">
                                    <p>Vivamus sit amet turpis leo. Praesent varius eleifend elit, eu dictum lectus consequat vitae. Etiam ut dolor id justo fringilla finibus.</p>
                                    <p>Donec eget ultricies diam, eu molestie arcu. Etiam nec lacus eu mauris cursus venenatis. Maecenas gravida urna vitae accumsan feugiat. Vestibulum commodo, ante sit urna purus rutrum sem.</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    );
};

export default ServicePage;