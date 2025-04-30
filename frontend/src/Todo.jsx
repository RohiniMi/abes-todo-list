import React, { useEffect, useState } from 'react';
import ViewTask from './Components/ViewTask.jsx';
import AddTask from './Components/AddTask.jsx';
import axios from 'axios';
import './styles/Todo.css';

const Todo = () => {
    const [inputBox, setInputBox] = useState(false);
    const [task, setTask] = useState(null);
    const [update, setUpdate] = useState(null);
    const [list,setList] = useState([]);
    const handler = async () => {
        try {
            const res = await axios.get("http://localhost:7800/task");
            setList(res.data);
        }
        catch (error) {
            console.log(error);
        }
    }
    return (
        <div className="todo-container">
            <h2>🌟 My Todo List</h2>
            <ViewTask setInputBox={setInputBox} setTask={setTask} update={update} setUpdate={setUpdate} handler={handler}list={list} setList={setList} />

            <button className="add-task-btn" onClick={() => { setInputBox(true); setTask("") }}> + ADD TASK</button>

            {inputBox && <AddTask setInputBox={setInputBox} setTask={setTask} task={task} setUpdate={setUpdate} update={update} handler={handler} />}
        </div>
    );
};

export default Todo;
