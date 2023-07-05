import { GitHub } from '@mui/icons-material';
import { Twitter } from '@mui/icons-material';
import { LinkedIn } from '@mui/icons-material';
import { WhatsApp } from '@mui/icons-material';

import Home from './pages/Home'

import './App.css';

function App() {
  return (
    <div className="App">

      <div className='main-page-container'>

      <div className='app-title'><p>Taskify</p></div>
      <Home />
      </div>
      <footer>
        <p className='social-links'><a href="#"><GitHub /></a> <a href="#"><Twitter /> </a>
        <a href="#"> <LinkedIn /> </a> <a href="#"> <WhatsApp /> </a>
        </p>
      </footer>
    </div>
  );
}

export default App;
