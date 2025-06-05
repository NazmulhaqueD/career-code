import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext/AuthContext';
import { Navigate, useLocation } from 'react-router';

const PrivateRoute = ({ children }) => {

    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    console.log(location)

    if (loading) {
        return <p className='text-6xl text-center my-56'>loading..............</p>
    }
    else if (!user) {
       return <Navigate to='/signIn' state={location?.pathname}></Navigate>
    }
    else {
        return children;
    }

};

export default PrivateRoute;