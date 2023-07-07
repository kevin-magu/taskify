import {getAuth, signOut } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'

function Loginbutton() {

  //Obtain the Firebase Auth instance and the 
  //history object using getAuth and useHistory:
  const auth = getAuth();
  const navigate = useNavigate();

  //Implement a logout function that signs out the user and redirects to <Home />:
  const handleLogout = async () =>{
    try {
      await signOut(auth);
      navigate('/')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div>
        <button className='logout-button'onClick={handleLogout}><p>Log Out</p></button>
    </div>
  )
}

export default Loginbutton