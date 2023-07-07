import Form from "../../components/login-page/Form";
import '../../styles/Login.css'
import { Link } from "react-router-dom";
import { Google } from "@mui/icons-material";
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';


import Slide from '@mui/material/Slide';
import { useState } from "react";
//firebase ini

import { auth } from "../../Firebaseconfig";
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

function Registrationform() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [snackbarOpen, setSnackbarOpen] = useState(false)
  const auth = getAuth()
  const handleRegister = async (e) =>{
    e.preventDefault();

    try {
      if (password.length<6) {
        throw new Error('Password should be at least 6 characters long')
        
      }
      await createUserWithEmailAndPassword(auth, email, password);
      console.log("successiful");
    } catch (error) {
      setErrorMessage(error.message);
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
          <input type="text" placeholder='Enter your email' value={email} onChange={(e) => setEmail(e.target.value)} />

          <label id='label'>Password</label>
          <input type="text" placeholder='Enter your Password' onChange={(e) => setPassword(e.target.value)}/>
          <button type="submit">Register</button>

          <p className='sign-in-with-google'> 
          <Google className='google-icon'/>Sign up with Google 
           </p>
           <p className='create-account-link'>Already have an account? 
           <Link to="/login" className='reginster-link'><button>Login here</button> </Link> </p> 
        </form>

        <Snackbar open={snackbarOpen} autoHideDuration={2000} onClose={handleSnackbarClose}>
        <MuiAlert onClose={handleSnackbarClose} severity="error" variant="filled">
        {errorMessage}
        </MuiAlert>
        </Snackbar>
      </div>
    </div>
  )
}

export default Registrationform