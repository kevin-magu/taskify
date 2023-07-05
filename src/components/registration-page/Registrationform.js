import Form from "../../components/login-page/Form";
import '../../styles/Login.css'
import { Link } from "react-router-dom";
import { Google } from "@mui/icons-material";

function Registrationform() {
  return (
    <div className='form-section'>
      <div className='form-left-side'>
      <p>
      Join us today and unlock a world of productivity. Register now!
      </p>
      
      </div>
      <div className='form-right-side'>
        <form>
          <label>Username</label>
          <input type="text" placeholder='Enter your username' />

          <label id='label'>Password</label>
          <input type="text" placeholder='Enter your Password' />
          <button>Register</button>

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