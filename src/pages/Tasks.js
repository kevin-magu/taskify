// Task.js
import React from "react";
import Createtask from "../components/tasks-page/Createtask";
import Userpic from "../components/tasks-page/Userpic";
import Loginbutton from "../components/tasks-page/Loginbutton";
import Taskcard from "../components/tasks-page/Taskcard";
import Dropdown from "../components/tasks-page/Dropdown";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Link, useLocation } from "react-router-dom";
import "../styles/Tasks.css";
import { Edit } from "@mui/icons-material";

import { useEffect, useState } from "react";
import { app } from "../Firebaseconfig";
import { getFirestore, collection, getDocs } from "firebase/firestore";

function Tasks() {
  const Location = useLocation();
  const queryParams = new URLSearchParams(Location.search);
  const loginStatus = queryParams.get("Form");

  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  useEffect(() => {
    if (loginStatus === "success") {
      setShowSuccessMessage(true);

      const timer = setTimeout(() => {
        setShowSuccessMessage(false);
      }, 6000);
      return () => clearTimeout(timer);
    } else {
      console.log("error");
      console.log(db)
    }
  }, [loginStatus]);

  const db = getFirestore(app);
  const taskCollectionRef = collection(db, "users");
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getTasks = async () => {
      const taskData = await getDocs(taskCollectionRef);
      setUsers(taskData.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getTasks();
  }, []);

  return (
    <div>
      {showSuccessMessage && (
        <div className="login-success">Welcome back Champ!</div>
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
        <Taskcard users={users} />
      </div>
    </div>
  );
}

export default Tasks;
