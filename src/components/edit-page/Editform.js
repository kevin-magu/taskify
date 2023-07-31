import React, { useState } from "react";
import { doc, updateDoc } from "firebase/firestore";
import { useAuth } from "../../AuthContext";
import { db } from "../../Firebaseconfig";
import { collection, getFirestore } from "firebase/firestore";
import "../../styles/Editform.css";

function EditTask({ task, onUpdate }) {
  const { currentUser } = useAuth();
  const [taskTitle, setTaskTitle] = useState(task.task_title);
  const [taskDescription, setTaskDescription] = useState(task.task_description);
  const [dueDate, setDueDate] = useState(task.task_duedate);
  const [taskPriority, setTaskPriority] = useState(task.task_priority);
  const [taskStatus, setTaskStatus] = useState(task.task_status);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await updateDoc(doc(db, `users/${currentUser.uid}/tasks`, task.id), {
        task_title: taskTitle,
        task_description: taskDescription,
        task_priority: taskPriority,
        task_duedate: dueDate,
        task_status: taskStatus,
      });

      // Call the onUpdate callback to update the UI in the parent component
      onUpdate();

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
          type="radio"
          name="priority"
          value="High"
          checked={taskPriority === "High"}
          onChange={(e) => setTaskPriority(e.target.value)}
        />
      </div>
      <div>
        <label>Medium</label>
        <input
          type="radio"
          name="priority"
          value="Medium"
          checked={taskPriority === "Medium"}
          onChange={(e) => setTaskPriority(e.target.value)}
        />
      </div>
      <div>
        <label>Low</label>
        <input
          type="radio"
          name="priority"
          value="Low"
          checked={taskPriority === "Low"}
          onChange={(e) => setTaskPriority(e.target.value)}
        />
      </div>
      <label>Due Date</label>
      <input
        type="date"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
      />
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
      <button type="submit">Save</button>
    </form>
  );
}

export default EditTask;
