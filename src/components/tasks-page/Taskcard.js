import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { useAuth } from "../../AuthContext";
import { db } from "../../Firebaseconfig";
import { Edit } from "@mui/icons-material";
import EditTask from "../edit-page/Editform"; // Adjust the path accordingly
import '../../styles/Editform.css'

function Taskcard() {
  const { currentUser } = useAuth();
  const [tasks, setTasks] = useState([]);
  const [selectedTask, setSelectedTask] = useState(null); // Add selectedTask state

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

  const handleEditClick = (task) => {
    setSelectedTask(task); // Set the selected task for editing
  };

  return (
    <div className="task-card-container">
      {tasks.map((task) => (
        <div className="task-card" key={task.id}>
          <p className="task-description">Task Title: {task.task_title}</p>
          <p className="task-status">
            Status: <span>{task.task_status}</span>
          </p>
          <p>Priority: {task.task_priority}</p>
          <p className="task-due-date">Due Date: {task.task_duedate}</p>
          <p className="edit">
            {/* Add a button to trigger the editing */}
            <button onClick={() => handleEditClick(task)}>
              <Edit />
            </button>
          </p>
        </div>
      ))}

      {/* Render the EditTask component inside a modal */}
      {selectedTask && (
        <div className="edit-modal">
          <div className="edit-modal-content">
            {/* Pass the selected task as a prop to the EditTask component */}
            <EditTask task={selectedTask} />
            <button onClick={() => setSelectedTask(null)} className="close-button">Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Taskcard;
