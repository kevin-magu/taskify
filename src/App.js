import { GitHub } from '@mui/icons-material';
import { Twitter } from '@mui/icons-material';
import { LinkedIn } from '@mui/icons-material';
import { WhatsApp } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import Tasks from './pages/Tasks'

import './App.css';

function App() {
  return (
    <div className="App">

      <div className='main-page-container'>
      <div className='app-title'><p>Taskify</p></div>
      <Tasks />
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
