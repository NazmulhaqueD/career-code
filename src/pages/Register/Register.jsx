import React, { useContext } from 'react';
import registerLottie from "../../assets/lottie/register.json";
import Lottie from 'lottie-react';
import { AuthContext } from '../../context/AuthContext/AuthContext';
import SocialLogin from '../Shared/SocialLogin';
import { Navigate, useNavigate } from 'react-router';

const Register = () => {

    const { createUser } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSignUp = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        // create user with firebase authentication
        createUser(email, password)
            .then((result) => {
                console.log(result);
                navigate('/')
            })
            .catch(error => {
                console.log(error.message)
            })
    }

    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <Lottie className='w-[400px]' animationData={registerLottie} loop={true}></Lottie>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <div className="card-body">
                        <h1 className="text-5xl my-6 font-bold">Register now!</h1>

                        {/* register form */}
                        <form onSubmit={handleSignUp} className="space-y-4">
                            <label className="label">Email</label>
                            <input type="email" className="input" name='email' placeholder="Email" />

                            <label className="label">Password</label>
                            <input type="password" className="input" name='password' placeholder="Password" />

                            <div><a className="link link-hover">Forgot password?</a></div>
                            <button className="btn w-full btn-neutral mt-4">Register</button>
                        </form>
                        <SocialLogin></SocialLogin>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;