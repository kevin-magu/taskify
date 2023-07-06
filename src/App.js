import { GitHub, Task } from '@mui/icons-material';
import { Twitter } from '@mui/icons-material';
import { LinkedIn } from '@mui/icons-material';
import { WhatsApp } from '@mui/icons-material';
import Tasks from './pages/Tasks'
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Edit from './pages/Edit';

import { Link } from 'react-router-dom'; 

import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import './App.css';

function App() {

  App.use(function (req, res, next) {
    res.setHeader('Set-Cookie', 'HttpOnly;Secure;SameSite=None');
    next();
  });
  return (
    <div className="App">
      <div className='main-page-container'>
      
        <Router>
        <div className='app-title'> <Link className='link-to-register' to="/"> <p>Taskify</p></Link> </div>
            <Routes> 
            <Route exact path="/"element={<Home />}/>
            <Route path="/createtasks" element={<Tasks />}/>
            <Route path="/login" element={<Login />}/>
            <Route path="/register" element={<Register />}/>
            <Route path="/edit" element={<Edit />}/>
            </Routes>
        </Router>
      </div>
      <footer>
        <p className='social-links'><a href="#"><GitHub /></a> <a href="#"><Twitter /> </a>
        <a href="#"> <LinkedIn /> </a> <a href="#"> <WhatsApp /> </a>
          <span style={{ marginLeft: `20px`, fontWeight: `bold`, color: `blue` }}>&copy; 2023 Taskify</span>
          <span style={{ marginLeft: `20px`, fontWeight: `bold`,  color: `blue` }}>Proudly developed by Kevin M</span>
        </p>
      </footer>
    </div>
  );
}

export default App;
