import {onAuthStateChanged, getAuth, signInWithPopup, GoogleAuthProvider,signOut,createUserWithEmailAndPassword,signInWithEmailAndPassword  } from "firebase/auth";
import { useState,useEffect } from "react";
import initilizationAuthentication from "../Pages/Firebase/firebase.init";


initilizationAuthentication();


const useFirebase=()=>{
  
    const [user,setUser]=useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [email,setEmail]=useState('')
    const auth = getAuth();
    const [password,setPasword]=useState('');
    const [error,setError]=useState('');


    


  const handleEmailLogin=(email,password,history,location)=>{
    signInWithEmailAndPassword(auth, email, password,history,location)
  .then((userCredential) => {
    setIsLoading(true)
    const user = userCredential.user;
    const destination=location.state.form || '/';
    history.replace(destination)
    // ...
  })
  .catch((error) => {
 
    setError(error.message) 
  }).finally(() => setIsLoading(false));
 
  }

    const handleRegister=e=>{
      e.preventDefault();
      if(password.length<6){
        setError('Password Must be at least 6 characters long')
        return
      }
     
      createUserWithEmailAndPassword(auth, email, password)
      
  .then((result) => {
    // Signed in 
    setEmail(result.user)
    console.log(result.user);
    // ...
  })
  

     
    }


    const googleSignIn=()=>{
        const googleProvider = new GoogleAuthProvider();
        setIsLoading(true);
        return signInWithPopup(auth, googleProvider)
    }

    

    const logOut=()=>{

      setIsLoading(true)
        signOut(auth)
        .finally(() => setIsLoading(false))

    };

    useEffect(()=>{
       const unsubscribed= onAuthStateChanged(auth, user=> {
            if (user) {
              
            setUser(user);
              // ...
            } else {
              setUser({})
            }
             setIsLoading(false);

           
          });
          return ()=> unsubscribed;
    },[])
    return {
        isLoading,
        email,
        error,
        password,
        user,
        logOut,
        googleSignIn,
        handleEmailLogin,
        handleRegister,
    }

}
export default useFirebase;