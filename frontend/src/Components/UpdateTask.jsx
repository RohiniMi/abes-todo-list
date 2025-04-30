import React from 'react';
import axios from 'axios';
const UpdateTask = ({ taskObj, setInputBox, setTask,setUpdate,handler}) => {
  const updateHandler = async (taskObj) => {
    setInputBox(true);
    setTask(taskObj.task)
    setUpdate(taskObj);
    handler();
  }
  return (
    <button className="update-task-btn" onClick={() => updateHandler(taskObj)}>
      🖉
    </button>
  )
};

export default UpdateTask;


