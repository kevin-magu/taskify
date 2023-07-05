import Createtask from "../components/main-page/Createtask";
import Userpic from "../components/main-page/Userpic";
import Loginbutton from "../components/main-page/Loginbutton"; 
import Taskcard from "../components/main-page/Taskcard";

import '../styles/Home.css';
function Home() {
  return (
    <div>
        <div className="header2">
          <Createtask />
          <Userpic />
          <Loginbutton />
        </div>
        <div className="task-card-container">
              <Taskcard />
              <Taskcard />
          </div>
    </div>
  )
}

export default Home