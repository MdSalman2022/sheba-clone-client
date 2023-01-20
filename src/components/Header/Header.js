import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const Header = () => {

    const { user, logOut } = useContext(AuthContext)

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }

    return (
        <div className='sticky top-0 z-50 w-full mx-auto bg-base-100'>
            <div className="navbar lg:w-[1100px] mx-auto ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><NavLink to="/allservices" className='font-semibold mr-2'>All Services</NavLink></li>
                            {
                                user ?
                                    <div className='flex items-center gap-5'>
                                        <div className="avatar">
                                            <div className="w-10 rounded-full">
                                                <img src={user?.photoURL ? user?.photoURL : "https://i.ibb.co/DM3jqw5/Profile-avatar-placeholder-large.png"} alt="profile" />
                                            </div>
                                        </div>
                                        <div className='rounded-xl btn btn-error btn-outline focus:text-neutral '><a onClick={handleLogOut}>Logout</a></div>
                                    </div>
                                    :
                                    <li><Link to="/login" className='font-semibold'>Login</Link></li>
                            }
                        </ul>
                    </div>
                    <Link to='/' className="btn btn-ghost normal-case w-40">
                        <img src="https://i.ibb.co/L88VNqV/sheba.png" alt="" />
                    </Link>
                </div>
                <div className="navbar-center  hidden flex">
                    <ul className="menu menu-horizontal px-1">
                        <li>
                            <div className="form-control">
                                <label className="input-group">
                                    <input type="text" placeholder="0.01" className="input input-bordered w-96" />
                                    <span>Search</span>
                                </label>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="navbar-end hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><NavLink to="/allservices" className='font-semibold mr-2'>All Services</NavLink></li>
                        {
                            user ?
                                <div className='flex items-center gap-5'>
                                    <div className="avatar">
                                        <div className="w-10 rounded-full">
                                            <img src={user?.photoURL ? user?.photoURL : "https://i.ibb.co/DM3jqw5/Profile-avatar-placeholder-large.png"} alt="profile" />
                                        </div>
                                    </div>
                                    <div className='rounded-xl btn btn-error btn-outline focus:text-neutral '><a onClick={handleLogOut}>Logout</a></div>
                                </div>
                                :
                                <li><Link to="/login" className='font-semibold'>Login</Link></li>
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;