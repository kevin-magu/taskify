import React, { useEffect, useState } from "react";
import { collection, getDocs, onSnapshot } from "firebase/firestore";
import { useAuth } from "../../AuthContext";
import { db } from "../../Firebaseconfig";
import { Edit } from "@mui/icons-material";
import EditTask from "../edit-page/Editform"; // Adjust the path accordingly
import "../../styles/Editform.css";

function Taskcard() {
  const { currentUser } = useAuth();
  const [tasks, setTasks] = useState([]);
  const [selectedTask, setSelectedTask] = useState(null); // Add selectedTask state

  useEffect(() => {
    // Use the onSnapshot method to listen for real-time updates
    const unsubscribe = onSnapshot(
      collection(db, `users/${currentUser.uid}/tasks`),
      (querySnapshot) => {
        const updatedTasks = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setTasks(updatedTasks);
      },
      (error) => {
        console.error("Error in real-time listener:", error);
        // Handle the error, show an error message, etc.
      }
    );

    // Clean up the listener when the component is unmounted
    return () => unsubscribe();
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
            <button onClick={() => setSelectedTask(null)} className="close-button">
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Taskcard;
