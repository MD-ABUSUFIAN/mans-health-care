import React from 'react';
import { Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const Register = () => {
    const {email,
        error,
        password, 
        handlePassword,
        handleEmail,
        handleRegister}=useAuth();
    return (
        <div className="login-background">
        <div  className=" w-100  border  py-5 text-center login-body ">
            <h1 className="mt-5 text-black">Please Register</h1>
           
                <form onSubmit={handleRegister}>
                <input onBlur={handleEmail} className="mx-auto w-50 m-auto mb-2 px-5 mt-2 py-2 rounded-pill" type="email" name="emial" id="" placeholder="Enter Your Email" required/>
                <br />
                <input onBlur={handlePassword} className="mx-auto w-50 m-auto py-2 px-5 mb-2 rounded-pill" type="password" name="" id=""  placeholder="Enter Your Password" required/>
                <br />
                <div><h5 className="text-danger fw-bolder fs-4">{error}</h5></div>
                <input className="btn btn-primary text-white fw-bold px-5 mb-3" type="submit" value="Register" />
                </form>
                <br />
                <br />

                <p className="text-white fw-bolder ">Are You sure you already have on Account <Link to ="/login">Login</Link></p>
            
        </div>
     </div>
    );
};

export default Register;