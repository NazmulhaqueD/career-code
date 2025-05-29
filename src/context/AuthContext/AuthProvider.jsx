import React, { useState } from 'react';
import { AuthContext } from './AuthContext';
import { auth } from '../../firebase/firebase.init';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

const AuthProvider = ({ children }) => {

    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        setLoading(false)
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const signIn = (email,password)=>{
        setLoading(false);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const authInfo = {
        loading,
        setLoading,
        createUser,
        signIn,
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;