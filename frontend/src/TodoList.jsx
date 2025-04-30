import React, { useState } from 'react';

const TodoList = () => {
    const [showInput, setShowInput] = useState(false);
    const [task, setTask] = useState('');

    const handleAddTaskClick = () => {
        setShowInput(true);
    };

    const handleInputChange = (e) => {
        setTask(e.target.value);
    };

    const handleAddClick = () => {
        alert(`Task added: ${task}`);
        setTask('');
        setShowInput(false); // Optional: Hide after adding
    };

    return (
        <div className="p-4">
            <button
                onClick={handleAddTaskClick}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
                Add Task
            </button>

            {showInput && (
                <div className="mt-4 flex gap-2">
                    <input
                        type="text"
                        value={task}
                        onChange={handleInputChange}
                        placeholder="Enter your task"
                        className="border px-3 py-2 rounded w-full"
                    />
                    <button
                        onClick={handleAddClick}
                        className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                    >
                        Add
                    </button>
                </div>
            )}
        </div>
    );
};

export default TodoList;
