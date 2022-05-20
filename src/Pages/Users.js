import React from 'react';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import Loading from './Shared/Loading';

const Users = () => {
    const url = `http://localhost:5000/users`
    const { data: users, loading, refetch } = useQuery("users", () => fetch(url).then(res => res.json()))
    if (loading) {
        return <Loading type="spokes" color="red"></Loading>
    }
    const handleAdmin = (email) => {
        const url = `http://localhost:5000/admin/${email}`
        fetch(url, {
            method: "PUT",
            headers: {
                'content-type': "application/json",
                authorization: `Bearer ${localStorage.getItem("accessToken")}`
            },
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    refetch()
                    toast.success("You have Successfully Made him Admin")

                } else {
                    toast.error("You are unauthorized")
                }
            })
    }
    return (
        <div >
            <div class="overflow-x-auto ">
                <table class="table w-full bg-primary">
                    <thead className='py-3'>
                        <tr>
                            <th>S/L No</th>
                            <th>Email</th>
                            <th>Admin</th>
                            <th>Delete</th>

                        </tr>
                    </thead>
                    <tbody >
                        {
                            users?.map((user, index) =>
                                <tr key={user._id} >
                                    <th className='text-black'>{index + 1}</th>
                                    <td className='text-black'>{user.email}</td>
                                    <td className='text-black'>{
                                        user.role === 'admin' ? <p className='text-xl font-bold text-red-500'>Admin</p> : <button onClick={() => handleAdmin(user.email)} className="btn btn-success">Make Admin</button>

                                    }</td>
                                    <td className='text-black'><button className="btn btn-error">Delete</button></td>
                                </tr>
                            )
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Users;