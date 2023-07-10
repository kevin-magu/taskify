// Taskcard.js

import { Edit } from "@mui/icons-material";
import { useEffect, useState } from "react";
import { app } from "../../Firebaseconfig";
import { getFirestore, collection, getDocs } from "firebase/firestore";

function Taskcard({ users }) {
  const db = getFirestore(app);
  const taskCollectionRef = collection(db, "users");

  return (
    <div>
      {users.map((user) => (
        <div className="task-card" key={user.id}>
          <p className="task-description">
            Task Title: {user.task_title}
          </p>
          <p className="task-status">
            Status: <span>{user.task_status}</span>
          </p>
          <p className="task-due-date">Due Date: {user.task_duedate}</p>
          <p className="edit">
            <a href="#">
              {" "}
              <Edit />{" "}
            </a>
          </p>
        </div>
      ))}
    </div>
  );
}

export default Taskcard;
