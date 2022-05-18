import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import './Home.css'

const Home = () => {
    const navigate = useNavigate()
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

    let errrorElement
    if (error) {
        errrorElement = <p className='text-red-500 text-xl'>{error.message}</p>
    }
    if (loading) {
        return <button className="btn btn-square loading"></button>
    }
    if (user) {
        navigate('/tasks')
    }
    return (
        <div className="hero min-h-screen home" >
            <div className="hero-overlay bg-opacity-30"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md ">
                    <h1 className="mb-5 text-5xl font-bold">Hello, welcome to To-do App</h1>
                    <p className="mb-5 ">What's new today to do?</p>
                    <p>Add your today's plan</p>
                    <button onClick={() => signInWithGoogle()} className="btn btn-outline">Continue with Google</button>
                    {errrorElement}
                </div>
            </div>
        </div>

    );
};

export default Home;