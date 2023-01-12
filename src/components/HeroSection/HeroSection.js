import React, { useState } from 'react'
import { ImLocation } from 'react-icons/im'
import { FaSearch } from 'react-icons/fa'
import { BsGrid } from 'react-icons/bs'
import { BiCurrentLocation } from 'react-icons/bi'

function HeroSection() {

    const [onclick, setOnclick] = useState('')

    const handleClick = data => {
        setOnclick(data)
    }

    return (
        <div className='relative'>
            <img src="https://i.ibb.co/86GH0k5/interior.jpg" alt="cleaners" border="0" className='h-[500px] w-full object-cover opacity-52' />

            <div className="absolute top-40 left-0 md:left-[300px] lg:left-[600px]">
                <h1 className="text-5xl font-bold text-white drop-shadow-lg mb-5">Your Personal Assistant</h1>
                <p className="text-2xl font-semibold text-white drop-shadow-lg">One-stop solution for your services. Order any service, anytime.</p>
            </div>
            <div className="form-control absolute top-72 hidden lg:flex md:left-[280px] lg:left-[580px]">
                <div className='flex gap-5'>
                    <label htmlFor="my-modal" className="btn btn-neutral w-32 lg:w-52 h-16 text-xl bg-white border-none">
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


                    <label className="relative w-[600px] h-16">
                        <input type="text" placeholder="Search" className="input input-bordered h-16 w-52 lg:w-[600px]" />
                        <span className='btn btn-primary absolute top-0 right-1 h-14 px-5 my-1 text-xl'><FaSearch /></span>

                    </label>
                </div>
            </div>
            <div className="services w-full h-96 md:w-[600px] lg:w-[1100px]  lg:h-36  shadow-md absolute bg-white lg:-bottom-16 lg:left-[400px] rounded-lg">
                <div className="grid grid-cols-3 lg:grid-cols-7 gap-5 place-items-center p-2">
                    <img className='hover:bg-neutral p-10 rounded-lg duration-300' src="https://i.ibb.co/D72bXnv/1601959826-ac-52x52.webp" alt="1601959826-ac-52x52" border="0" />
                    <img className='hover:bg-neutral p-10 rounded-lg duration-300' src="https://i.ibb.co/MCPnbhG/1583681524-tiwnn-52x52.webp" alt="1583681524-tiwnn-52x52" border="0" />
                    <img className='hover:bg-neutral p-10 rounded-lg duration-300' src="https://i.ibb.co/S5GMjtV/default-52x52.webp" alt="default-52x52" border="0" />
                    <img className='hover:bg-neutral p-10 rounded-lg duration-300' src="https://i.ibb.co/ncKgKBL/1583681093-tiwnn-52x52.webp" alt="1583681093-tiwnn-52x52" border="0"></img>
                    <img className='hover:bg-neutral p-10 rounded-lg duration-300' src="https://i.ibb.co/8MnZM6z/1599673571-tiwnn-52x52.webp" alt="1599673571-tiwnn-52x52" border="0"></img>
                    <img className='hover:bg-neutral p-10 rounded-lg duration-300' src="https://i.ibb.co/LvGq2bs/default-52x52.webp" alt="default-52x52" border="0" />
                    <p className="text-3xl text-primary hover:bg-neutral p-12  rounded-lg duration-300"><BsGrid /></p>

                </div>
            </div>

        </div>


    )
}

export default HeroSection
