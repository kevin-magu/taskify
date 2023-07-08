import React from 'react'

function Taskform() {
  return (
    <div className="create-tasks-main-container">
    <div className="create-tasks-main">
      <h2>Create a new task</h2>
    </div>
    <form className="create-task-form">

      <label>Task Title</label>
      <input type="text" className='input-fields'/>

      <label> Task Descscription</label>
      <textarea cols="30" rows="10"></textarea> 

      <label>Due Date</label>
      <input type="date" className='input-fields' />

      <label>Task Priority</label>
      <div  className='priority-labels'>
        <label className='priority-label'>High</label>
        <input type="checkbox" />
      </div>

      <div>
        <label className='priority-label'>Medium</label>
        <input type="checkbox" />
      </div>
      <div>
        <label className='priority-label'>Low</label>
        <input type="checkbox" />
      </div>
      <label>Status</label>
        <div>
        <select>
            <option value="" key=""></option>
            <option value="status" key="">Pending</option>
            <option value="status" key="">Complete</option>
        </select>
        </div>

        <button style={{ margin: `0`, marginTop:`10px` }} className='create-task-button'>Create Task</button>
    </form>
  </div>
  )
}

export default Taskform