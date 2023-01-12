import React from 'react';
import { AiOutlineLine } from 'react-icons/ai';
import { ImLocation } from 'react-icons/im';

const Download = () => {
    return (
        <div>
            <div className=' h-full lg:w-[1100px] mx-auto lg:h-96 my-20 px-5 lg:px-0'>
                <div className="grid lg:grid-cols-3 gap-10 justify-items-center content-center h-96">
                    <div className="col-span-1 w-full lg:w-96 mt-5 lg:mt-0">
                        <img className='' src="https://i.ibb.co/r28PXkB/app-download.webp" alt="app-download" border="0" />
                    </div>
                    <div className='col-span-2'>
                        <div className="pt-10 flex justify-start items-center">
                            <p className='text-black text-3xl font-thin'><AiOutlineLine /></p> <p> DOWNLOAD OUR APP</p>
                        </div>
                        <h2 className="text-3xl text-left font-semibold">Any Service, Any Time, Anywhere.</h2>
                        <p className='text-left w-96'>Give us your mobile number. You’ll get an SMS with the app download link.</p>
                        <div className="form-control">
                            <label className="input-group px-5  w-full lg:px-0 ">
                                <input type="text" placeholder="Type your mobile number" className="input input-bordered lg:w-96  w-full " />
                                <span className='btn btn-primary bg-opacity-80 border-none'>Get the app</span>
                            </label>
                        </div>
                        <div className="flex w-60 gap-5">
                            <img className='w-32 mt-10' src="https://i.ibb.co/SKFJRfY/play-store.png" alt="play-store" border="0" />
                            <img className='w-32 mt-10' src="https://i.ibb.co/4FfW0bg/app-store.png" alt="app-store" border="0" />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Download;