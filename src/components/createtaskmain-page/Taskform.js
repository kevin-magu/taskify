// Taskform.js
import { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { useAuth } from "../AuthContext";
import { db } from "../../Firebaseconfig";

function Taskform() {
  const { currentUser } = useAuth();
  const [taskTitle, setTaskTitle] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [taskPriority, setTaskPriority] = useState("");
  const [taskStatus, setTaskStatus] = useState("In Progress");

  const [highPriority, setHighPriority] = useState(false);
  const [mediumPriority, setMediumPriority] = useState(false);
  const [lowPriority, setLowPriority] = useState(false);

  const [showSuccessMessage, setSuccessMessage] = useState(false);
  const [showErrorMessage, setErrorMessage] = useState(false);

  const usersCollectionRef = collection(db, `users/${currentUser.uid}/tasks`);

  const handleSubmit = async (e) => {
    e.preventDefault();
    let newsetTaskPriority = "";
    if (highPriority) {
      newsetTaskPriority = "High";
    } else if (mediumPriority) {
      newsetTaskPriority = "Medium";
    } else if (lowPriority) {
      newsetTaskPriority = "Low";
    }

    setTaskPriority(newsetTaskPriority);
    try {
      await addDoc(usersCollectionRef, {
        task_title: taskTitle,
        task_description: taskDescription,
        task_priority: newsetTaskPriority,
        task_duedate: dueDate,
        task_status: taskStatus,
      });

      setSuccessMessage(true);
      const timer = setTimeout(() => {
        setSuccessMessage(false);
      }, 4000);
      return () => clearTimeout(timer);
    } catch (error) {
      setErrorMessage(true);
      const timer = setTimeout(() => {
        setErrorMessage(false);
      }, 4000);
      return () => clearTimeout(timer);
    }
  };

  return (
    <div className="create-tasks-main-container">
      <div className="create-tasks-main">
        <h2>Create a new task</h2>
      </div>
      <form className="create-task-form">
        {showSuccessMessage && <div>Success</div>}
        {showErrorMessage && <div>Error</div>}

        {/* Form inputs */}

        <button className="create-task-button" onClick={handleSubmit}>
          Create Task
        </button>
      </form>
    </div>
  );
}

export default Taskform;
