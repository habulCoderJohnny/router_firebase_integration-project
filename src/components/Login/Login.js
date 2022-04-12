import './Login.css';
import { getAuth } from 'firebase/auth';
import React from 'react';
import {useSignInWithGoogle} from 'react-firebase-hooks/auth';
import app from '../../firebase.init';
import {useLocation, useNavigate } from 'react-router-dom';

const auth = getAuth(app);

const Login = () => {
    const [signInWithGoogle,user] = useSignInWithGoogle(auth);
    const location= useLocation();
    const navigate = useNavigate();

    const from = location?.state?.from?.pathname || '/' ;

    const handleGoogleSignIn = ()=>{
        signInWithGoogle()
        .then( ()=>{
            navigate(from,{replace:true})
        })

    }
       return (
        <div>
            <h2>Login</h2>
            <div>
            <button onClick={handleGoogleSignIn}><img src="https://image.similarpng.com/very-thumbnail/2020/12/Flat-design-Google-logo-design-Vector-PNG.png" alt=""/>Sign in with Google</button>
            </div>
            <form>
                <input type="email" placeholder='Your Email' required/>
                <input type="password" placeholder='Your Password' required/>
                <input type="submit" value="Login"/>
            </form>
        </div>
    );
};

export default Login;