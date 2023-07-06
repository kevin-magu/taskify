import React, { useState } from 'react';
import { EmojiEmotions, Try } from '@mui/icons-material';
import { Google } from '@mui/icons-material';
import { Link } from 'react-router-dom';

//firebase ini
import {app} from '../../Firebaseconfig'
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

function Form() {
  //registration from firebase
  const auth = getAuth(app)
  const regForm = () => {
    const [email, setEmail] = useState('');
    const [Password, setPassword] = useState('');

    const handleRegister = async (e) =>{
      e.preveventDefault();

      try {
        await createUserWithEmailAndPassword(auth, email,password)
      } catch (error) {
        console.log(error)
      }
    }
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
        <form onSubmit={handleRegister}>
          <label>Username</label>
          <input type="text" value={email} placeholder='Enter your username' />

          <label id='label' >Password</label>
          <input type="text" value={password} placeholder='Enter your Password' />
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