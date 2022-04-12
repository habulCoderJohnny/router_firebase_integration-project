import React from 'react';

const Signup = () => {
    return (
        <div>
            <h3>SignUp Now</h3>
            <form>
                <input type="text" placeholder='Your name' required/>
                <input type="email" placeholder='Your Email' required/>
                <input type="password" placeholder='Your Passsword' required/>
                <input type="submit" value="SignUp"/>

            </form>
        </div>
    );
};

export default Signup;