import React, { useState } from "react";
import { doc, updateDoc } from "firebase/firestore";
import { useAuth } from "../../AuthContext";
import { db } from "../../Firebaseconfig";
import { collection, getFirestore } from "firebase/firestore";
import "../../styles/Editform.css";

function EditTask({ task }) {
  const { currentUser } = useAuth();
  const [taskTitle, setTaskTitle] = useState(task.task_title);
  const [taskDescription, setTaskDescription] = useState(task.task_description);
  const [dueDate, setDueDate] = useState(task.task_duedate);
  const [taskPriority, setTaskPriority] = useState(task.task_priority);
  const [taskStatus, setTaskStatus] = useState(task.task_status); // Add the taskStatus state

  // Add these state variables and set their initial values
  const [highPriority, setHighPriority] = useState(taskPriority === "High");
  const [mediumPriority, setMediumPriority] = useState(
    taskPriority === "Medium"
  );
  const [lowPriority, setLowPriority] = useState(taskPriority === "Low");

  const usersCollectionRef = collection(db, `users/${currentUser.uid}/tasks`);
  const taskDocRef = doc(usersCollectionRef, task.id);

  const handleHighPriorityChange = (e) => {
    setHighPriority(e.target.checked);
    setMediumPriority(false);
    setLowPriority(false);
  };

  const handleMediumPriorityChange = (e) => {
    setHighPriority(false);
    setMediumPriority(e.target.checked);
    setLowPriority(false);
  };

  const handleLowPriorityChange = (e) => {
    setHighPriority(false);
    setMediumPriority(false);
    setLowPriority(e.target.checked);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Determine the task priority based on the checkboxes
      let newTaskPriority = "";
      if (highPriority) {
        newTaskPriority = "High";
      } else if (mediumPriority) {
        newTaskPriority = "Medium";
      } else if (lowPriority) {
        newTaskPriority = "Low";
      }

      await updateDoc(taskDocRef, {
        task_title: taskTitle,
        task_description: taskDescription,
        task_priority: newTaskPriority, // Use the newly determined priority
        task_duedate: dueDate,
        task_status: taskStatus, // Use the taskStatus state
      });

      alert("Task updated successfully!");
      // You can add additional code here to handle successful update, show a success message, etc.
    } catch (error) {
      alert("Error updating task:", error);
      // You can add additional code here to handle the error, show an error message, etc.
    }
  };

  return (
    <form onSubmit={handleSubmit} className="edit-form">
      {/* Your form inputs for editing the task */}
      {/* For example: */}
      <input
        type="text"
        value={taskTitle}
        onChange={(e) => setTaskTitle(e.target.value)}
      />
      <textarea
        type="text"
        value={taskDescription}
        onChange={(e) => setTaskDescription(e.target.value)}
      />
      <label>Task Priority</label>
      <div>
        <label>High</label>
        <input
          className="checkbox-input"
          type="checkbox"
          checked={highPriority}
          onChange={handleHighPriorityChange}
        />
      </div>
      <div>
        <label>Medium</label>
        <input
          className="checkbox-input"
          type="checkbox"
          checked={mediumPriority}
          onChange={handleMediumPriorityChange}
        />
      </div>
      <div>
        <label>Low</label>
        <input
          className="checkbox-input"
          type="checkbox"
          checked={lowPriority}
          onChange={handleLowPriorityChange}
        />
      </div>
      <label className="date-input">Due date</label>
      <input
        type="date"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
      />

      <button type="submit">Save</button>
    </form>
  );
}

export default EditTask;
