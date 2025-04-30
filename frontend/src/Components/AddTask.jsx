import React, { useEffect, useState } from 'react';
import axios from 'axios';
const AddTask = ({setInputBox,setTask,task,setUpdate,update,handler}) => {
    const addHandler = async() => {        
        if (task.trim() !== "") {
            if (update) {           
                await axios.put(`https://abes-todo-list.onrender.com/task/${update._id}`, { task });
            } else {
                await axios.post("https://abes-todo-list.onrender.com/task", { task });
            }
           setInputBox(false);
           setTask("");
           handler();
        }
    }
    return (
        <div>
            <div className="input-box">
                <input
                    id = "input"
                    type="text"
                    value={task}
                    placeholder="Enter new task"
                    onChange={(e) => setTask(e.target.value)}
                /> 
                <button className="add-btn" onClick={() => addHandler()}>ADD</button>
            </div>
        </div>
    )
}

export default AddTask