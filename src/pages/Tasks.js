import Createtask from "../components/main-page/Createtask";
import Userpic from "../components/main-page/Userpic";
import Loginbutton from "../components/main-page/Loginbutton"; 
import Taskcard from "../components/main-page/Taskcard";
import Dropdown from "../components/main-page/Dropdown";

import '../styles/Home.css';
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