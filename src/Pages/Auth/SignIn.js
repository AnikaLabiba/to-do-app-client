import React from 'react';
import auth from '../../firebase.init'
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';

const SignIn = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

    return (
        <div className='flex justify-center items-center'>
            <div class="card w-96 bg-base-100 shadow-xl ">
                <div class="card-body">
                    <button onClick={() => signInWithGoogle(auth)} class="btn btn-outline">Continue with Google</button>
                </div>
            </div>

        </div>
    );
};

export default SignIn;