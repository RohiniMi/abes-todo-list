import React from 'react';
import axios from 'axios';
const DeleteTask = ({ index, handleDelete }) => {
    const handeler = async (index) => {
        try {
            await axios.delete(`http://localhost:7800/task/${index}`);
            alert("Task deleted successfully.");
            handleDelete(index);
        } catch (error) {
            alert("Error while deleting.");
        }
    }
    return (
        <button className="delete-task-btn" onClick={() => { handeler(index); }}>
            ❌
        </button>
    );

};

export default DeleteTask;
