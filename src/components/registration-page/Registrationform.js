import Form from "../../components/login-page/Form";
import '../../styles/Login.css'
import { Link } from "react-router-dom";
import { Google } from "@mui/icons-material";
import MuiAlert from '@mui/material/Alert';
import { Snackbar } from "@mui/material";
import { useState } from "react";
//firebase ini

import { auth } from "../../Firebaseconfig";
import { getAuth, createUserWithEmailAndPassword, AuthErrorCodes } from 'firebase/auth';

function Registrationform() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const auth = getAuth();
  const handleRegister = async (e) =>{
    e.preventDefault();

    try {
      if (password.length<6) {
        throw new Error('Password should be at least 6 characters long')
      }
      setIsLoading(true);
      await createUserWithEmailAndPassword(auth, email, password);

    } catch (error) {
      setIsLoading(false)
      if (error.code === AuthErrorCodes.EMAIL_EXISTS) {
        setErrorMessage('Email address is already in use')
      }else{
        setErrorMessage('An error occured. Please try again');
      }
      setSnackbarOpen(true);
    } 
};

const handleSnackbarClose = () => {
  setSnackbarOpen(false);
}

  return (
    <div className='form-section'>
      <div className='form-left-side'>
      <p>
      Join us today and unlock a world of productivity. Register now!
      </p>
      
      </div>
      <div className='form-right-side'>
      

        <form onSubmit={handleRegister}>
          <label>Email</label>
          <input type="email" placeholder='Enter your email' value={email} onChange={(e) => setEmail(e.target.value)} required/>

          <label id='label'>Password</label>
          <input type="text" placeholder='Enter your Password' onChange={(e) => setPassword(e.target.value)} required/>
          <button type="submit" id="register-button" disabled={isLoading}>{isLoading? 'Authenticating...' : 'Register'}</button>

          <p className='sign-in-with-google'> 
          <Google className='google-icon'/>Sign up with Google 
           </p>
           <p className='create-account-link'>Already have an account? 
           <Link to="/login" className='reginster-link'><button>Login here</button> </Link> </p> 
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

export default Registrationform