import { GitHub, Task } from '@mui/icons-material';
import { Twitter } from '@mui/icons-material';
import { LinkedIn } from '@mui/icons-material';
import { WhatsApp } from '@mui/icons-material';
import { useState, useEffect } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

import Tasks from './pages/Tasks';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import CreatetasksMain from './pages/CreatetasksMain';
import Managetasks from './pages/Managetasks';
import { AuthProvider } from './AuthContext';

import { Link } from 'react-router-dom';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

function App() {
  const [user, setUser] = useState(null);
  const auth = getAuth();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
    return () => {
      unsubscribe();
    };
  }, [auth]);

  return (
    <AuthProvider> {/* Wrap the entire App with the AuthProvider */}
      <div className="App">
        <div className='main-page-container'>
          <Router>
            <div className='app-title'> <Link className='link-to-register' to="/"> <p>Taskify</p></Link> </div>
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/createtasks" element={user ? <Tasks /> : <Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/createtasksmain" element={<CreatetasksMain />} />
              <Route path="/managetasks" element={<Managetasks />} />
            </Routes>
          </Router>
        </div>
        <footer>
          <p className='social-links'>
            <span style={{ marginLeft: `20px`, fontWeight: `bold`, color: `blue` }}>&copy; 2023 Taskify</span>
            <span style={{ marginLeft: `20px`, fontWeight: `bold`, color: `blue`, marginRight: `30px` }}>Proudly developed by Kevin M</span>
            <a href="#"><GitHub /></a> <a href="#"><Twitter /> </a>
            <a href="#"> <LinkedIn /> </a> <a href="#"> <WhatsApp /> </a>
          </p>
        </footer>
      </div>
    </AuthProvider>
  );
}

export default App;
