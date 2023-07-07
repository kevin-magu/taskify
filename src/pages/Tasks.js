import Createtask from "../components/tasks-page/Createtask";
import Userpic from "../components/tasks-page/Userpic";
import Loginbutton from "../components/tasks-page/Loginbutton";
import Taskcard from "../components/tasks-page/Taskcard";
import Dropdown from "../components/tasks-page/Dropdown";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Link, useLocation } from "react-router-dom";
import "../styles/Tasks.css";

import { useEffect, useState } from "react";

function Tasks() {
  const Location = useLocation();
  const queryParams = new URLSearchParams(Location.search);
  const loginStatus = queryParams.get('Form');

  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  useEffect(() => {
    if (loginStatus === "success") {
      setShowSuccessMessage (true);

      const timer = setTimeout(() => {
        setShowSuccessMessage(false);
      }, 6000);
      return () => clearTimeout(timer);
    } else {
      console.log("error");
    }
  }, [loginStatus]);

  return (
    <div>
      {showSuccessMessage && (
        <div  className="login-success" >Welcome back Champ!</div>
      )}

  
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
  );
}

export default Tasks;
