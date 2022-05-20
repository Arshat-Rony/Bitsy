import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from './firebaseinit';
import Loading from './Shared/Loading';

const RequireAuth = ({ children }) => {
    const [user, loading] = useAuthState(auth)
    const location = useLocation()
    if (loading) {
        return <Loading type="spokes" color="red"></Loading>
    }
    if (!user) {
        return <Navigate to="/login" state={{ from: location }} raplace />
    }
    return children;
};

export default RequireAuth;