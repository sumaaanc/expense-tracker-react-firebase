import React from 'react'
import {useGetUserInfo} from "../hooks/useGetUserInfo"
import {signOut} from "firebase/auth"
import { authentication } from '../firebase/config'
import "./profile.css"
import { useNavigate } from 'react-router-dom'

function Profile() {
    const {photo, name} = useGetUserInfo()
    const navigate = useNavigate()

    const signOutUser = () => {
      signOut(authentication)
      .then(()=> {
        localStorage.clear()
        navigate("/")
      }  
      ).catch( (error)=> {
        console.error("error occured while signing out", error)
      }
      )
    }
  return (
    <div className='container'>
      <div className='profile-picture'>
        <img src={photo} alt={name} />
      </div>
      <div className='sign-out'>
        <button onClick={signOutUser} type="button">Sign out</button>
      </div>
    </div>
  )
}

export default Profile
