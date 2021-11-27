
import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link,useLocation,useHistory } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import { useForm } from "react-hook-form";

import './Login.css'

const Login = () => {
    const {user, googleSignIn,handleEmailLogin,}=useAuth();
    const location=useLocation();
    const history=useHistory();
    const redirect_uri=location.state?.from || '/home';
    const [isLoading, setIsLoading] = useState(true);
    const handleGoogleLogin=()=>{

        googleSignIn()
        .then((result) => {
           
           history.push(redirect_uri)
               
              })
              .finally(() => setIsLoading(false));}
              const { register, handleSubmit } = useForm();
  const onSubmit = data =>{
    handleEmailLogin(data.email,data.password,history,location)
    console.log(data);
  } 
    
    return (
        <div className="login-background">
           <div  className="w-100  border  py-5 text-center login-body ">
               <h1 className="mt-5">Please Login</h1>

               <h3 className="text-primary fw-bolder">{user.displayName}</h3>

               <form onSubmit={handleSubmit(onSubmit)}>
                        <input className="w-50 py-2" type="email"{...register("email")} />
                        <br/>
                        <input className="w-50 py-2 my-1"  type="number" {...register("password")} />
                        <br/>
                        <input className="btn btn-primary w-50 py-2" type="submit" />
                </form>

                   <br />
                   <br />
                   <p className="text-white fw-bolder ">Are You sure you have don't Account <Link to ="/register">Register</Link></p>
                   
                 <Button onClick={ handleGoogleLogin} className="m-2 btn-warning text-white fw-bolder">Google-Login</Button>
                 
                   


               
           </div>
        </div>
    );
};

export default Login;