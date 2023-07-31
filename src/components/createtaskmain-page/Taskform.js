import React, { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { useAuth } from "../../AuthContext";
import { db } from "../../Firebaseconfig";

function Taskform() {
  const { currentUser } = useAuth();
  const [taskTitle, setTaskTitle] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [taskPriority, setTaskPriority] = useState("");
  const [taskStatus, setTaskStatus] = useState("In Progress");

  // Add the state variable to track the selected priority checkbox
  const [selectedPriority, setSelectedPriority] = useState(null);

  const [showSuccessMessage, setSuccessMessage] = useState(false);
  const [showErrorMessage, setErrorMessage] = useState(false);

  const usersCollectionRef = collection(db, `users/${currentUser.uid}/tasks`);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Determine the task priority based on the selected checkbox
      let newsetTaskPriority = "";
      if (selectedPriority === "high") {
        newsetTaskPriority = "High";
      } else if (selectedPriority === "medium") {
        newsetTaskPriority = "Medium";
      } else if (selectedPriority === "low") {
        newsetTaskPriority = "Low";
      }

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

  const handlePriorityChange = (priority) => {
    setSelectedPriority(priority);
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
        <label>Task Title</label>
        <input
          type="text"
          value={taskTitle}
          onChange={(e) => setTaskTitle(e.target.value)}
        />

        <label>Task Description</label>
        <textarea
          value={taskDescription}
          onChange={(e) => setTaskDescription(e.target.value)}
        ></textarea>

        <label>Due Date</label>
        <input
          type="date"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
        />

        <label>Task Priority</label>
        <div>
          <label>High</label>
          <input
            type="checkbox"
            checked={selectedPriority === "high"}
            onChange={() => handlePriorityChange("high")}
          />
        </div>
        <div>
          <label>Medium</label>
          <input
            type="checkbox"
            checked={selectedPriority === "medium"}
            onChange={() => handlePriorityChange("medium")}
          />
        </div>
        <div>
          <label>Low</label>
          <input
            type="checkbox"
            checked={selectedPriority === "low"}
            onChange={() => handlePriorityChange("low")}
          />
        </div>

        <label>Status</label>
        <div>
          <select
            value={taskStatus}
            onChange={(e) => setTaskStatus(e.target.value)}
          >
            <option value="In Progress">In Progress</option>
            <option value="Pending">Pending</option>
            <option value="Complete">Complete</option>
          </select>
        </div>

        <button className="create-task-button" onClick={handleSubmit}>
          Create Task
        </button>
      </form>
    </div>
  );
}

export default Taskform;
