import React, { useContext } from 'react';
import { AuthContext } from '../AuthContext';
import Taskform from '../components/createtaskmain-page/Taskform';

function CreatetasksMain() {
  const { isLoggedIn } = useContext(AuthContext);

  return (
    <div>
      {isLoggedIn ? <Taskform /> : <p>Please log in to create tasks.</p>}
    </div>
  );
}

export default CreatetasksMain;
