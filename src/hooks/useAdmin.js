import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../Pages/firebaseinit';

const useAdmin = () => {
    const [user] = useAuthState(auth)
    const [admin, setAdmin] = useState(null)
    const [adminLoading, setAdminLoading] = useState(true)
    const url = `http://localhost:5000/users/admin/${user.email}`
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setAdmin(data.admin)
                setAdminLoading(false)
            })
    }, [url])
    return {
        admin, adminLoading
    }
};

export default useAdmin;