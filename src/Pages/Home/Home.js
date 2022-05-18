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
        return <button class="btn btn-square loading"></button>
    }
    if (user) {
        navigate('/tasks')
    }
    return (
        <div class="hero min-h-screen home" >
            <div class="hero-overlay bg-opacity-30"></div>
            <div class="hero-content text-center text-neutral-content">
                <div class="max-w-md ">
                    <h1 class="mb-5 text-5xl font-bold">Hello, welcome to To-do App</h1>
                    <p class="mb-5 ">What's new today to do?</p>
                    <p>Add your today's plan</p>
                    <button onClick={() => signInWithGoogle()} class="btn btn-outline">Continue with Google</button>
                    {errrorElement}
                </div>
            </div>
        </div>

    );
};

export default Home;