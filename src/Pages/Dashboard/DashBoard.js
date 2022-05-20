import React from 'react';
import { Outlet } from 'react-router-dom';
import useAdmin from '../../hooks/useAdmin';
import CustomLink from '../Shared/CustomLink';
import Loading from '../Shared/Loading';

const DashBoard = () => {
    const { admin, adminLoading } = useAdmin()
    if (adminLoading) {
        return <Loading type="spokes" color="red"></Loading>
    }
    return (
        <div>
            <div class="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />

                <div class="drawer-content flex flex-col items-center justify-center">
                    <h2 className='text-center font-bold font-serif text-3xl text-red-600'>Welcome to Your Dashboard</h2>
                    <Outlet></Outlet>
                </div>
                <div class="drawer-side relative z-0">

                    <label for="my-drawer-2" class="drawer-overlay"></label>

                    <ul class="menu p-4 h-screen  w-80 bg-black text-base-content">
                        <li><CustomLink to='/dashboard' className='font-bold'>Your Items</CustomLink></li>
                        <li><CustomLink to="/dashboard/earnings">Your Earnings</CustomLink></li>
                        {
                            admin && <li><CustomLink to="/dashboard/users">Users</CustomLink></li>
                        }
                    </ul>

                </div>

            </div>

        </div>
    );
};

export default DashBoard;

