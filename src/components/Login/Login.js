import React from 'react';
import useFirebase from '../../Hooks/useFirebase';

const Login = () => {
    const {singInWithGoogle} = useFirebase();
    return (
        <div>
            <h2>Login form</h2>
            <div>
            <button onClick={singInWithGoogle}><img style={{width:'20px'}} src="https://image.similarpng.com/very-thumbnail/2020/12/Flat-design-Google-logo-design-Vector-PNG.png" alt="" srcset="" />Sign in with Google</button>
            </div>
            <form>
                <input type="email" name="" id="" placeholder='Your Email' required/>
                <input type="password" name="" id=""   placeholder='Your Passsword' required/>
                <input type="submit" value="Login"/>

            </form>
        </div>
    );
};

export default Login;