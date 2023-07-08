import { initializeApp } from "firebase/app"
import {getFirestore} from "@firebase/firestore"
import {app} from "../../Firebaseconfig"
import { useState } from "react";
import {collection, getDocs,addDoc} from "firebase/firestore";



function Taskform() {
    const db = getFirestore(app);
    const [taskTitle, setTaskTitle] = useState('');
    const [taskDescription, setTaskDescription] = useState('');
    const [dueDate, setDueDate] = useState('');
    const [taskPriority, setTaskPriority] = useState('');
    const [taskStatus, setTaskStatus] = useState('In Progress')
    const [highPriority, setHighPriority] = useState('');
    const [mediumPriority, setMediumPriority] = useState('');
    const [lowPriority, setLowPriority] = useState('');
    const usersCollectionRef = collection(db, "users");

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (highPriority) {
            setTaskPriority('High');
        } else if(mediumPriority){
            setTaskPriority('Medium');   
        } else if(lowPriority){
            setTaskPriority ('Low');
    }
    
    try {
        await addDoc(usersCollectionRef, {task_title: taskTitle, task_description: taskDescription, task_prority: taskPriority,task_duedate: dueDate,task_status: taskStatus});
    } catch (error) {
        console.log(error);
    }
    
}

  return (
    <div className="create-tasks-main-container">
    <div className="create-tasks-main">
      <h2>Create a new task</h2>
    </div>
    <form className="create-task-form">

      <label>Task Title</label>
      <input type="text" value={taskTitle} className='input-fields' onChange={(e) => setTaskTitle(e.target.value)}/>

      <label> Task Descscription</label>
      <textarea cols="30" rows="10" value={taskDescription} onChange={(e)=> setTaskDescription(e.target.value)}></textarea> 

      <label>Due Date</label>
      <input type="date" className='input-fields' value={dueDate} onChange={(e) => setDueDate(e.target.value)}/>

      <label>Task Priority</label>
      <div  className='priority-labels'>
        <label className='priority-label'>High</label>
        <input type="checkbox" checked={highPriority} onChange={(e)=> setHighPriority(e.target.checked)}/>
      </div>

      <div>
        <label className='priority-label'>Medium</label>
        <input type="checkbox" checked={mediumPriority}  onChange={(e)=> setMediumPriority(e.target.checked)}/>
      </div>
      <div>
        <label className='priority-label'>Low</label>
        <input type="checkbox" checked={lowPriority} onChange={(e)=> setLowPriority(e.target.checked)} />
      </div>
      <label>Status</label>
        <div>
        <select value={taskStatus} onChange={(e)=> setTaskStatus(e.target.value)}>
            <option value="In progress" key="">In progress</option>
            <option value="status" key="">Pending</option>
            <option value="status" key="">Complete</option>
        </select>
        </div>

        <button style={{ margin: `0`, marginTop:`10px` }} className='create-task-button' onClick={handleSubmit}>Create Task</button>
    </form>
  </div>
  )
}

export default Taskform