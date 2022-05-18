import React from 'react';
import { Link } from 'react-router-dom';
import bg from '../../../src/images/bg.png'
import './Home.css'

const Home = () => {
    return (
        <div class="hero min-h-screen home" >
            <div class="hero-overlay bg-opacity-30"></div>
            <div class="hero-content text-center text-neutral-content">
                <div class="max-w-md ">
                    <h1 class="mb-5 text-5xl font-bold">Hello, welcome to To-do App</h1>
                    <p class="mb-5 ">What's new today to do?</p>
                    <p>Add your today's plan</p>
                    <Link to='/addTask'> <button class="btn btn-primary">Add Task</button></Link>
                </div>
            </div>
        </div>

    );
};

export default Home;