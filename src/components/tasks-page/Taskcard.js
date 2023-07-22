import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { useAuth } from "../../AuthContext";
import { db } from "../../Firebaseconfig";
import { Edit } from "@mui/icons-material";

function Taskcard() {
  const { currentUser } = useAuth();
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const querySnapshot = await getDocs(
          collection(db, `users/${currentUser.uid}/tasks`)
        );
        const taskData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setTasks(taskData);
      } catch (error) {
        console.error("Error fetching tasks: ", error);
      }
    };

    if (currentUser) {
      fetchTasks();
    }
  }, [currentUser]);

  return (
    <div className="task-card-container">
      {tasks.map((task) => (
        <div className="task-card" key={task.id}>
          <p className="task-description">
            Task Title: {task.task_title}
          </p>
          <p className="task-status">
            Status: <span>{task.task_status}</span>
          </p>
          <p className="task-due-date">Due Date: {task.task_duedate}</p>
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
