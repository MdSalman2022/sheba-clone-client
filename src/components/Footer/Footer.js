import React from 'react'
import { AiOutlineLine } from 'react-icons/ai'
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa'

function Footer() {
    return (
        <div className="">
            <footer className="footer p-5 lg:p-10 bg-accent text-neutral-content mx-auto">
                <div className="flex flex-col lg:grid lg:grid-cols-5 footer justify-items-center lg:w-52 lg:w-[1100px] mx-auto">
                    <div className='col-span-1'>
                        <span className=" text-black font-bold">CONTACT</span>
                        <a className="link link-hover">16516</a>
                        <a className="link link-hover">info@sheba.xyz</a>
                        <p className="text-left">Corporate Address</p>
                        <p className="text-left">House # 57, Road # 25, <br /> Block - A,Banani, Dhaka 1212</p>
                    </div>
                    <div className='col-span-1'>
                        <span className=" text-black font-bold">OTHER PAGES</span>
                        <a className="link link-hover">Blog</a>
                        <a className="link link-hover">Help</a>
                        <a className="link link-hover">Terms of use</a>
                        <a className="link link-hover">Privacy Policy</a>
                        <a className="link link-hover">Sitemap</a>
                    </div>
                    <div className='col-span-1'>
                        <span className=" text-black font-bold">COMPANY</span>
                        <a className="link link-hover">sManager</a>
                        <a className="link link-hover">sBusiness</a>
                        <a className="link link-hover">sDelivery</a>
                        <a className="link link-hover">sBondhu</a>
                    </div>
                    <div className='col-span-2 text-left lg:text-right'>
                        <p className="">
                            <span className="col-span-2 text-black font-bold link link-hover">DOWNLOAD OUR APP</span>
                            <p className="">Tackle your to-do list wherever you are with our mobile app & make your life easy.</p>
                            <div className="flex lg:justify-end  gap-5">
                                <img className='w-32 my-2 ' src="https://i.ibb.co/SKFJRfY/play-store.png" alt="play-store" border="0" />
                                <img className='w-32 my-2 ' src="https://i.ibb.co/4FfW0bg/app-store.png" alt="app-store" border="0" />
                            </div>
                            <p className='flex lg:justify-end text-3xl gap-5 text-black'>
                                <FaFacebookF className=" border-black border p-2 rounded-full" />
                                <FaLinkedinIn className=" border-black border p-2 rounded-full" />
                                <FaInstagram className=" border-black border p-2 rounded-full" />
                            </p>
                        </p>
                    </div>
                </div>

            </footer>
            <div className="flex bg-[#DFE0E3] h-14 justify-center items-center">
                <p>Copyright © 2023 Sheba Platform Limited | All Rights Reserved</p>
            </div>
        </div>
    )
}

export default Footer
