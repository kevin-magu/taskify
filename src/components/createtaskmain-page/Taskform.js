import { getFirestore } from "@firebase/firestore";
import { app } from "../../Firebaseconfig";
import { useState, useEffect } from "react";
import { collection, getDocs, addDoc } from "@firebase/firestore";
import { ArrowBack, BackHand } from "@mui/icons-material"; 
import { Link } from "react-router-dom";
function Taskform() {
  const db = getFirestore(app);
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

  const usersCollectionRef = collection(db, "users");

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
        task_prority: newsetTaskPriority,
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
     
        <h2> <Link to="/createtasks"><ArrowBack /></Link>  Create a new task</h2>
      </div>
      <form className="create-task-form">
        {showSuccessMessage && <div>success</div>}
        {showErrorMessage && <div>error</div>}

        <label>Task Title</label>
        <input
          type="text"
          value={taskTitle}
          className="input-fields"
          onChange={(e) => setTaskTitle(e.target.value)}
        />

        <label> Task Descscription</label>
        <textarea
          cols="30"
          rows="10"
          value={taskDescription}
          onChange={(e) => setTaskDescription(e.target.value)}
        ></textarea>

        <label>Due Date</label>
        <input
          type="date"
          className="input-fields"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
        />

        <label>Task Priority</label>
        <div className="priority-labels">
          <label className="priority-label">High</label>
          <input
            type="checkbox"
            checked={highPriority}
            onChange={(e) => setHighPriority(e.target.checked)}
          />
        </div>

        <div>
          <label className="priority-label">Medium</label>
          <input
            type="checkbox"
            checked={mediumPriority}
            onChange={(e) => setMediumPriority(e.target.checked)}
          />
        </div>
        <div>
          <label className="priority-label">Low</label>
          <input
            type="checkbox"
            checked={lowPriority}
            onChange={(e) => setLowPriority(e.target.checked)}
          />
        </div>
        <label>Status</label>
        <div>
          <select
            value={taskStatus}
            onChange={(e) => setTaskStatus(e.target.value)}
          >
            <option value="In progress" key="">
              In progress
            </option>
            <option value="pending" key="">
              Pending
            </option>
            <option value="complete" key="">
              Complete
            </option>
          </select>
        </div>

        <button
          style={{ margin: `0`, marginTop: `10px` }}
          className="create-task-button"
          onClick={handleSubmit}
        >
          Create Task
        </button>
      </form>
    </div>
  );
}

export default Taskform;