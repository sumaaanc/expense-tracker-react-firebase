import React from 'react';
import {authentication, provider} from "../../firebase/config";
import {signInWithPopup} from "firebase/auth";
import {useNavigate, Navigate} from "react-router-dom";
import "./signin.css"


function Auth() {
  const navigate = useNavigate();
 
  
  const signInWithGoogle = async () => {
    try {
      const { user } = await signInWithPopup(authentication, provider);
      const authInfo = {
        userID: user.uid,
        name: user.displayName,
        photo: user.photoURL,
        isAuth: true
      };
      localStorage.setItem("auth", JSON.stringify(authInfo));
      navigate("/expense");
    } catch (error) {
      console.error("Error signing in with Google: ", error);
    }
  };
  if(localStorage.getItem("auth")){
    return <Navigate to={"/expense"} /> 
  }
    return (
      <div className='containerDiv'>
        <button type="button" onClick={signInWithGoogle}>Sign in with Google account</button>
      </div>
    );
  
}

export default Auth;
