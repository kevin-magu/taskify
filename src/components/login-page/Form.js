import React, { useState, useEffect } from 'react';
import { EmojiEmotions, Try } from '@mui/icons-material';
import { Google } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import MuiAlert from '@mui/material/Alert';
import { Snackbar } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

//firebase ini
import { auth } from '../../Firebaseconfig';
import {getAuth, signInWithEmailAndPassword,AuthErrorCodes} from 'firebase/auth';
import { FirebaseError } from 'firebase/app';

function Form() {
  //registration from firebase
  
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState(false);
    const [snackbarOpen, setSnackbarOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const handleLogin = async (e) =>{
      e.preventDefault();

      try {
        setIsLoading(true);
        const login = await signInWithEmailAndPassword(auth, email, password);
        
        navigate('/createtasks?Login=success')
      }catch (error) {
        console.log(error);
     if(error instanceof FirebaseError) {
      setIsLoading(false);

        if (error.code === 'auth/user-not-found') {
          setErrorMessage('Email does not exist');
        }else if(error.code === 'auth/wrong-password'){
          setErrorMessage('Wrong Password');
        }else if(error.code === 'auth/network-request-failed'){
          setErrorMessage('Network connection error');
        }else if(error.code === 'auth/invalid-email'){
          setErrorMessage('Invalid Email address');
        }
        else{
          setErrorMessage('An error occurred. Please try again later');
        }
      }
        setSnackbarOpen(true);
      } 
      
  };
  const handleSnackbarClose  = () => {
    setSnackbarOpen(false);
  }


  return (
    <div className='form-section'>
      <div className='form-left-side'>
        
      <p>
        Unleash your productivity potential and conquer your goals effortlessly.
      </p>

      <p><EmojiEmotions /></p>
      </div>
      <div className='form-right-side'>
        <form onSubmit={handleLogin}>
          <label>Email</label>
          <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Enter your username' />

          <label id='label' >Password</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Enter your Password' />
          <button type='submit' id="register-button">{isLoading? 'Authenticating...' :'Login'}</button>

          <p className='sign-in-with-google'> 
          <Google className='google-icon'/>Sign in with Google 
           </p>
           <p className='create-account-link'>Don't have an account? <Link to="/register" className='reginster-link'><button>Register here</button> </Link> </p> 
        </form>
        <Snackbar open={snackbarOpen} autoHideDuration={5000} onClose={handleSnackbarClose}>
        <MuiAlert onClose={handleSnackbarClose} severity="error" variant="filled">
        {errorMessage}
        </MuiAlert>
        </Snackbar>
      </div>
    </div>
  )
}
<p>Taskify</p>
export default Form