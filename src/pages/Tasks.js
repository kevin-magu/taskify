import Createtask from "../components/tasks-page/Createtask";
import Userpic from "../components/tasks-page/Userpic";
import Loginbutton from "../components/tasks-page/Loginbutton"; 
import Taskcard from "../components/tasks-page/Taskcard";
import Dropdown from "../components/tasks-page/Dropdown";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";

import '../styles/Tasks.css';
function Tasks() {
  return (
    <div>
      
        <div className="header2">
          <Createtask />
          <div className="login-button-section">
          <Userpic />
          <Loginbutton />
          </div>
          
        </div>
        <div className="header2">
          <Dropdown />
        </div>
        <div className="task-card-container">
              <Taskcard />
              <Taskcard />
          </div>
    </div>
  )
}

export default Tasks