import React from 'react';
import { EmojiEmotions } from '@mui/icons-material';

function Form() {
  return (
    <div className='form-section'>
      <div className='form-left-side'>
      <p>
        Unleash your productivity potential and conquer your goals effortlessly.
        
      </p>
      <p><EmojiEmotions /></p>
      </div>
      <div className='form-right-side'>
        <form>
          <label>Username</label>
          <input type="text" placeholder='Enter your username' />

          <label id='label'>Password</label>
          <input type="text" placeholder='Enter your Password' />
          
        </form>
      </div>
    </div>
  )
}

export default Form