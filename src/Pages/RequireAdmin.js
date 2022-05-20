import React, { Children, useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import useAdmin from '../hooks/useAdmin';
import auth from './firebaseinit';
import Loading from './Shared/Loading';

const RequireAdmin = ({ children }) => {
    const [user, loading] = useAuthState(auth)
    const { admin, adminLoading } = useAdmin(user)
    const location = useLocation()

    if (adminLoading || loading) {
        return <Loading type="spokes" color="red"></Loading>
    }

    if (!user || !admin) {
        return <Navigate to="/login" state={{ from: location }} raplace />
    }
    return children;
};

export default RequireAdmin;