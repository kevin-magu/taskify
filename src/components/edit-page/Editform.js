import { useState } from "react";
import { doc, updateDoc } from "firebase/firestore";
import { useAuth } from "../../AuthContext";
import { db } from "../../Firebaseconfig";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import '../../styles/Editform.css'

function EditTask({ task }) {
  const { currentUser } = useAuth();
  const [taskTitle, setTaskTitle] = useState(task.task_title);
  const [taskDescription, setTaskDescription] = useState(task.task_description);
  const [dueDate, setDueDate] = useState(task.task_duedate);
  const [taskPriority, setTaskPriority] = useState(task.task_priority);
  const [taskStatus, setTaskStatus] = useState(task.task_status);

  const usersCollectionRef = collection(
    db,
    `users/${currentUser.uid}/tasks`
  );
  const taskDocRef = doc(usersCollectionRef, task.id);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await updateDoc(taskDocRef, {
        task_title: taskTitle,
        task_description: taskDescription,
        task_priority: taskPriority,
        task_duedate: dueDate,
        task_status: taskStatus,
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
      <input type="text" value={taskPriority} />
      <input type="date" value={dueDate} />

      <button type="submit">Save</button>
    </form>
  );
}

export default EditTask;
