import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import img from "../../assests/Images/logo/bits-logo (1).png"
import auth from '../firebaseinit';
import CustomLink from './CustomLink';
const Header = () => {
    const [user] = useAuthState(auth)
    const menu = <>
        <li><CustomLink to="/sellers">Top Sellers</CustomLink></li>
        <li><CustomLink to="/upload">Add Product</CustomLink></li>
        <li><a>Price Range</a></li>
        <li><a>Blockchain</a></li>
        <li><CustomLink to="/dashboard">Dashboard</CustomLink></li>
    </>
    return (
        <div className='sticky top-0 z-10'>
            <div className="navbar bg-primary font-primary px-8 lg:px-20 ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex="0" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow rounded-box w-52 bg-primary">
                            {menu}
                        </ul>
                    </div>
                    <Link to="/" className="btn btn-ghost normal-case text-xl">
                        <img width="50px" src={img} alt="" />
                        Bitsy</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        {menu}
                    </ul>
                </div>
                <div className="navbar-end">
                    <ul className='menu menu-horizontal space-x-2'>
                        <li><Link to="/login" className='btn btn-outline btn-accent'>Login</Link></li>
                        {
                            user ?
                                <li><a onClick={() => {
                                    signOut(auth)
                                }} className='btn btn-accent text-black'>Sign Out</a></li>

                                :
                                <li><Link to="/signup" className='btn btn-accent'>Sign Up</Link></li>
                        }

                    </ul>
                    <label for="my-drawer-2" tabIndex="1" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                </div>
            </div>
        </div>
    );
};

export default Header;