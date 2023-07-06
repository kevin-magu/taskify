import Form from "../../components/login-page/Form";
import '../../styles/Login.css'
import { Link } from "react-router-dom";
import { Google } from "@mui/icons-material";
import { useState } from "react";
//firebase ini

import { auth } from "../../Firebaseconfig";
import { createUserWithEmailAndPassword } from 'firebase/auth';

function Registrationform() {
  

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async (e) =>{
    e.preventDefault();

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      console.log("successiful");
    } catch (error) {
      console.log(error)
    } 
  
};

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
      </div>
    </div>
  )
}

export default Registrationform