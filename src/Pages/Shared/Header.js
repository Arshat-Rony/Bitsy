import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import img from "../../assests/Images/logo/bits-logo (1).png"
import auth from '../firebaseinit';
const Header = () => {
    const [user] = useAuthState(auth)
    const menu = <>
        <li><a>Category</a></li>
        <li><a>Sell Type</a></li>
        <li><a>Price Range</a></li>
        <li><a>Blockchain</a></li>
    </>
    return (
        <div className='sticky top-0 z-10'>
            <div class="navbar bg-primary font-primary px-8 lg:px-20 ">
                <div class="navbar-start">
                    <div class="dropdown">
                        <label tabindex="0" class="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow rounded-box w-52 bg-primary">
                            {menu}
                        </ul>
                    </div>
                    <Link to="/" class="btn btn-ghost normal-case text-xl">
                        <img width="50px" src={img} alt="" />
                        Bitsy</Link>
                </div>
                <div class="navbar-center hidden lg:flex">
                    <ul class="menu menu-horizontal p-0">
                        {menu}
                    </ul>
                </div>
                <div class="navbar-end">
                    <ul className='menu menu-horizontal space-x-2'>
                        <li><Link to="/login" className='btn btn-outline btn-accent'>Login</Link></li>
                        {
                            user ?
                                <li><a onClick={() => signOut(auth)} className='btn btn-accent text-black'>Sign Out</a></li>

                                :
                                <li><Link to="/signup" className='btn btn-accent'>Sign Up</Link></li>
                        }

                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;