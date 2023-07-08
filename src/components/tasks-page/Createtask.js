import { Link } from "react-router-dom"

function Createtask() {
  return (
    <div>
        <Link id="link-to-edit" to={'/createtasksmain'}>
        <button className="create-task-button"> <span>+</span> <p>Create Task</p></button>
        </Link>
    </div>
  )
}

export default Createtask