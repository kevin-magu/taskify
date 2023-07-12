// Taskcard.js
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { useAuth } from "../../AuthContext";
import { db } from "../Firebaseconfig";

function Taskcard() {
  const { currentUser } = useAuth();
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      const querySnapshot = await getDocs(
        collection(db, `users/${currentUser.uid}/tasks`)
      );
      const taskData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setTasks(taskData);
    };

    fetchTasks();
  }, [currentUser.uid]);

  return (
    <div className="task-card-container">
      {tasks.map((task) => (
        <div className="task-card" key={task.id}>
          {/* Display task details */}
        </div>
      ))}
    </div>
  );
}

export default Taskcard;
