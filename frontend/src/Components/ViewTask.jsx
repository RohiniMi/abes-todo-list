import React, { useEffect, useState } from 'react';
import axios from 'axios';
import UpdateTask from './UpdateTask.jsx';
import DeleteTask from './DeleteTask.jsx';
const ViewTask =  ({ setInputBox, setTask, update, setUpdate, list,setList ,handler}) => {
    useEffect(() => {
        handler();
    }, [])
    const handleDelete = (id) => {
        setList(prevTasks => prevTasks.filter(task => task._id !== id));
    }
    return (
        <div>
            {/* {console.log(handler())} */}
            <ul className="task-list" > {list.map((t) => (
                <>
                    <li key={t._id} className='task-item'>
                        <UpdateTask taskObj={t} setInputBox={setInputBox} setTask={setTask} setUpdate={setUpdate} handler={handler} />
                        {t.task}
                        <DeleteTask index={t._id} handleDelete={handleDelete} />
                    </li>
                </>
            ))}
            </ul>
        </div>
    )
}

export default ViewTask