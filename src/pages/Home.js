import Createtask from "../components/main-page/Createtask";
import Userpic from "../components/main-page/Userpic";
import Loginbutton from "../components/main-page/Loginbutton";

import '../styles/Home.css';
function Home() {
  return (
    <div>
        <div className="header2">
          <Createtask />
          <Userpic />
          <Loginbutton />
          <div className="task-card-container">

          </div>
        </div>
    </div>
  )
}

export default Home