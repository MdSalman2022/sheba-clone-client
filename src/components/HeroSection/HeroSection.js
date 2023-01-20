import React, { useState } from 'react'
import { ImLocation } from 'react-icons/im'
import { FaSearch } from 'react-icons/fa'
import { BsGrid } from 'react-icons/bs'
import { BiCurrentLocation } from 'react-icons/bi'
import { FaAngleRight } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function HeroSection() {

    const [onclick, setOnclick] = useState('')

    const handleClick = data => {
        setOnclick(data)
    }

    const [id, setId] = useState('1')

    let services = [
        {
            id: '1',
            name: 'Ac Repair Services',
            img: 'https://i.ibb.co/D72bXnv/1601959826-ac-52x52.webp'
        },
        {
            id: '2',
            name: 'Appliance Repair',
            img: 'https://i.ibb.co/MCPnbhG/1583681524-tiwnn-52x52.webp'
        },
        {
            id: '3',
            name: 'Trips & Travels',
            img: 'https://i.ibb.co/S5GMjtV/default-52x52.webp'
        },
        {
            id: '4',
            name: 'Shifting',
            img: 'https://i.ibb.co/ncKgKBL/1583681093-tiwnn-52x52.webp'
        },
        {
            id: '5',
            name: 'Beauty & Salon',
            img: 'https://i.ibb.co/8MnZM6z/1599673571-tiwnn-52x52.webp'
        },
        {
            id: '6',
            name: 'Car Care Services',
            img: 'https://i.ibb.co/LvGq2bs/default-52x52.webp'
        },
    ]


    return (
        <div className='relative'>
            <img src="https://i.ibb.co/86GH0k5/interior.jpg" alt="cleaners" border="0" className='h-[500px] w-full object-cover opacity-52' />

            <div className="absolute top-[30%]   md:left-[3%] lg:left-[32%]">
                <h1 className="text-5xl font-bold text-white drop-shadow-lg mb-5">Your Personal Assistant</h1>
                <p className="text-2xl font-semibold text-white drop-shadow-lg">One-stop solution for your services. Order any service, anytime.</p>
            </div>
            <div className="form-control absolute top-[55%] hidden md:flex lg:flex  md:left-[3%] lg:left-[32%]">
                <div className='flex gap-5'>
                    <label htmlFor="my-modal" className="btn btn-neutral w-[20%] h-16 text-xl bg-white border-none">
                        <ImLocation className='text-primary' /> Gulshan
                    </label>

                    <input type="checkbox" id="my-modal" className="modal-toggle" />
                    <div className="modal">
                        <div className="modal-box bg-neutral">
                            <h3 className="font-bold text-lg w-full shadow-md mb-10 ">Select Your City</h3>
                            <div className="grid lg:grid-cols-2 gap-2">
                                <div onClick={() => handleClick("dhaka")} className={`dhaka bg-white border px-7 py-5 flex flex-col justify-center  ${onclick === "dhaka" ? "border-primary" : ''}`}>
                                    <img src="https://i.ibb.co/Hrx3zgp/dhaka.jpg" alt="dhaka" border="0" />
                                    <p className="text-center text-primary font-semibold pt-3">Dhaka</p>
                                </div>
                                <div onClick={() => handleClick("chittagong")} className={`dhaka bg-white border px-7 py-5 flex flex-col justify-center ${onclick === "chittagong" ? "border-primary" : ''}`}>
                                    <img src="https://i.ibb.co/hL6nNXH/chittagong.jpg" alt="chittagong" border="0" />
                                    <p className="text-center text-primary font-semibold pt-3 ">Chittagong</p>
                                </div>
                            </div>
                            <div className='mt-5'>
                                <p className='btn btn-primary btn-outline text-primary border-2 border-primary'><BiCurrentLocation /> &nbsp; &nbsp;At my current location</p>
                            </div>
                            <div className="modal-action">
                                <label htmlFor="my-modal" className="btn">Done</label>
                            </div>
                        </div>
                    </div>


                    <label className="relative w-[80%] h-16">
                        <input type="text" placeholder="Search" className="input input-bordered h-16 w-52 w-[600px]" />
                        <span className='btn btn-primary absolute top-0 right-1 h-14 px-5 my-1 text-xl'><FaSearch /></span>

                    </label>
                </div>
            </div>
            <div className="services md:absolute md:-bottom-16 md:left-[100px] md:w-[600px] lg:w-[1100px] lg:h-36 lg:absolute lg:-bottom-16 lg:left-[400px] rounded-lg bg-white shadow-md ">
                <div className="grid grid-cols-4 md:grid-cols-7 md:gap-5 place-items-center p-2">
                    {
                        services.map(service =>
                            <label htmlFor="my-modal-3" ><div className='flex flex-col gap-3 items-center justify-center hover:bg-neutral duration-300 p-4 w-full rounded-lg'><img className=' w-10' src={service.img} alt="1601959826-ac-52x52" border="0" /> <p>{service.name}</p></div></label>
                        )

                    }
                    <Link to="/allservices"><div className="flex flex-col gap-3 items-center justify-center hover:bg-neutral duration-300 px-6 py-8 w-full rounded-lg"><BsGrid className='text-3xl text-primary' /> <p>All Services</p></div></Link>


                    {/* modal  */}
                    <input type="checkbox" id="my-modal-3" className="modal-toggle " />
                    <div className="modal">
                        <div className="modal-box relative bg-neutral p-0 rounded-lg mx-auto">
                            <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2 text-xl text-primary shadow-lg">✕</label>
                            <div className='grid grid-cols-2 '>
                                <div className=" bg-[#F4F5F8]">
                                    <ul>

                                        {
                                            services.map(service =>
                                                <li onClick={() => setId(service.id)} className={`py-3 px-3 hover:bg-white transition-all duration-300 flex items-center gap-2 text-lg ${id === service.id ? 'bg-white' : ''}`} ><img className='w-6' src={service.img} alt="" /> {service.name} - {service.id}</li>
                                            )
                                        }


                                        <Link to="/allservices"><li className='py-3 px-3 hover:bg-white transition-all duration-300 flex items-center gap-3 text-lg'><BsGrid className='text-lg text-primary' /> All Services</li></Link>
                                    </ul>
                                </div>
                                <div className=" ">
                                    <ul className='text-left bg-white'>
                                        <Link to="/service"><li className='py-3 px-2 transition-all duration-300 hover:font-bold flex items-center text-left hover:shadow-lg'>Mini-Service {`${id}`} </li></Link>
                                        <Link to="/service"><li className='py-3 px-2 transition-all duration-300 hover:font-bold flex items-center text-left hover:shadow-lg'>Mini-Service {`${id}`} </li></Link>
                                        <Link to="/service"><li className='py-3 px-2 transition-all duration-300 hover:font-bold flex items-center text-left hover:shadow-lg'>Mini-Service {`${id}`} </li></Link>
                                        <Link to="/service"><li className='py-3 px-2 transition-all duration-300 hover:font-bold flex items-center text-left hover:shadow-lg'>Mini-Service {`${id}`} </li></Link>
                                        <Link to="/service"><li className='py-3 px-2 transition-all duration-300 hover:font-bold flex items-center text-left hover:shadow-lg'>Mini-Service {`${id}`} </li></Link>
                                        <Link to="/service"><li className='py-3 px-2 transition-all duration-300 hover:font-bold flex items-center text-left hover:shadow-lg'>Mini-Service {`${id}`} </li></Link>
                                        <Link to="/service"><li className='py-3 px-2 transition-all duration-300 hover:font-bold flex items-center text-left hover:shadow-lg'>Mini-Service {`${id}`} </li></Link>
                                        <Link to="/service"><li className='py-3 px-2 transition-all duration-300 hover:font-bold flex items-center text-left hover:shadow-lg'>Mini-Service {`${id}`} </li></Link>
                                        <Link to="/service"><li className='py-3 px-2 transition-all duration-300 hover:font-bold flex items-center text-left hover:shadow-lg'>Mini-Service {`${id}`} </li></Link>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>


    )
}

export default HeroSection
