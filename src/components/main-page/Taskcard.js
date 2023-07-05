import { Edit } from "@mui/icons-material"

function Taskcard() {
  return (
    <div className='task-card'>
        <p className='task-description'>
            Finish Introduction to computer Science -Havard
        </p>
        <p className='task-status'>Status: <span>Pending...</span></p>
        <p className='task-due-date'>Due Date: 12/07/2023</p>
        
        <p className='edit'><a href="#"> <Edit /> </a></p>
    </div>
  )
}

export default Taskcard