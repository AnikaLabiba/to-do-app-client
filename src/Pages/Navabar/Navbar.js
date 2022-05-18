import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const Navbar = () => {
    const [user] = useAuthState(auth)
    const navigate = useNavigate()
    const handleSignOut = () => {
        signOut(auth)
        navigate('/')
    }
    return (
        <div className="navbar bg-base-100 flex justify-between ">
            <Link to='/' className="btn btn-ghost normal-case text-xl">To-do App</Link>
            {
                user && <button onClick={handleSignOut} className="btn btn-ghost">Sign Out</button>
            }
        </div >
    );
};

export default Navbar;