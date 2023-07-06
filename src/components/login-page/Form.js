import React, { useState } from 'react';
import { EmojiEmotions, Try } from '@mui/icons-material';
import { Google } from '@mui/icons-material';
import { Link } from 'react-router-dom';

//firebase ini
import { auth } from '../../Firebaseconfig';
import {signInWithEmailAndPassword } from 'firebase/auth';

function Form() {
  //registration from firebase
  
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async (e) =>{
      e.preventDefault();

      try {
        await signInWithEmailAndPassword(auth, email, password);
        console.log("Login sucessiful");
      } catch (error) {
        console.log(error)
      } 
    
  };


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
          <label>Username</label>
          <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Enter your username' />

          <label id='label' >Password</label>
          <input type="text" value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Enter your Password' />
          <button type='submit'>Login</button>

          <p className='sign-in-with-google'> 
          <Google className='google-icon'/>Sign in with Google 
           </p>
           <p className='create-account-link'>Don't have an account? <Link to="/register" className='reginster-link'><button>Register here</button> </Link> </p> 
        </form>
      </div>
    </div>
  )
}
<p>Taskify</p>
export default Form