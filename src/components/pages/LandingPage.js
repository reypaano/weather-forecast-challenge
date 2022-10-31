import React from 'react'
import LoginButton from '../LoginButton'
import LogoutButton from '../LogoutButton';
import { useAuth0 } from '@auth0/auth0-react';
const LandingPage = () => { 
  const { login, isAuthenticated } = useAuth0();
  return (
   
      <>
      <div className='center-container'>
        <h1>Landing Page</h1>
        <h3>Welcome to the weather forecats web application.
        Please Login with your Github user to use the application
        and view the weather in your city.</h3>

        <LoginButton/>
        <LogoutButton/>
      </div>
      
      </>
  )
  };
  
  export default LandingPage;