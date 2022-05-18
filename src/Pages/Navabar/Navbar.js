import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div class="navbar bg-base-100 flex justify-center items-center">
            <Link to='/' class="btn btn-ghost normal-case text-xl">To-do App</Link>
        </div >
    );
};

export default Navbar;