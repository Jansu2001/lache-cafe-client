import React, { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';

const PrivateRoutes = ({ children }) => {

    const { user, loading } = useContext(AuthContext)
    const location = useLocation()
    if (loading) {
        return <Spinner animation="border" variant="warning" />
    }
    else if (user) {
        return children
    }
    else {
       return <Navigate to='/login' state={{ from: location }} replace></Navigate>
    }
};

export default PrivateRoutes;