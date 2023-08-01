import React, { useEffect, useState } from "react";
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
import { useAuth } from "../../AuthContext";
import { db } from "../../Firebaseconfig";
import { Edit } from "@mui/icons-material";
import EditTask from "../edit-page/Editform"; // Import the EditTask component

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

  const handleEditClick = (taskId) => {
    // Set the selected task for editing
    const selectedTask = tasks.find((task) => task.id === taskId);
    setSelectedTask(selectedTask);
  };

  const handleDeleteClick = async (taskId) => {
    try {
      // Delete the task from the database
      await deleteDoc(doc(db, `users/${currentUser.uid}/tasks/${taskId}`));
      alert("Task deleted successfully")
      // Update the state to remove the deleted task from the UI
      setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
    } catch (error) {
      console.error("Error deleting task: ", error);
    }
  };

  const handleTaskUpdate = () => {
    // Call this function to update the UI after saving changes in EditTask
    // We will refetch the tasks from the database
    fetchTasks();
  };

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
            {/* Add buttons to trigger the editing and deletion */}
            <button onClick={() => handleEditClick(task.id)}>
              <Edit /> edit
            </button>
            <button onClick={() => handleDeleteClick(task.id)}>Delete</button>
          </p>
        </div>
      ))}

      {/* Render the EditTask component inside a modal */}
      {selectedTask && (
        <div className="edit-modal">
          <div className="edit-modal-content">
            {/* Pass the selected task as a prop to the EditTask component */}
            <EditTask task={selectedTask} onUpdate={handleTaskUpdate} />
            <button onClick={() => setSelectedTask(null)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Taskcard;
