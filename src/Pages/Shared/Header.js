import React from 'react';

const Header = () => {
    const menu = <>
        <li><a>Category</a></li>
        <li><a>Sell Type</a></li>
        <li><a>Price Range</a></li>
        <li><a>Blockchain</a></li>
    </>
    return (
        <div className='sticky top-5 z-10'>
            <div class="navbar bg-primary font-primary px-8 lg:px-20 ">
                <div class="navbar-start">
                    <div class="dropdown">
                        <label tabindex="0" class="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {menu}
                        </ul>
                    </div>
                    <a class="btn btn-ghost normal-case text-xl">Bitsy</a>
                </div>
                <div class="navbar-center hidden lg:flex">
                    <ul class="menu menu-horizontal p-0">
                        {menu}
                    </ul>
                </div>
                <div class="navbar-end">
                    <ul className='menu menu-horizontal space-x-2'>
                        <li><a className='btn btn-outline btn-accent'>Login</a></li>
                        <li><a className='btn btn-accent'>Sign Up</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;