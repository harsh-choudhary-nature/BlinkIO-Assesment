import React, { useEffect, useState } from 'react';
import axios from 'axios';

const TaskList = () => {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState('');

    useEffect(() => {
        const fetchTasks = async () => {
            const token = localStorage.getItem('token');
            const res = await axios.get('http://localhost:4000/api/tasks', {
                headers: { Authorization: token },
            });
            setTasks(res.data.tasks);
        };
        fetchTasks();
    }, []);

    const addTask = async () => {
        const token = localStorage.getItem('token');
        const res = await axios.post(
            'http://localhost:4000/api/tasks',
            { task: newTask },
            { headers: { Authorization: token } }
        );
        setTasks(res.data.tasks);
        setNewTask('');
    };

    const deleteTask = async task => {
        const token = localStorage.getItem('token');
        const res = await axios.delete(
            'http://localhost:4000/api/tasks',
            { data: { task }, headers: { Authorization: token } }
        );
        setTasks(res.data.tasks);
    };

    return (
        <div className="task-list-container">
            <h2>Task List</h2>
            <div className="task-form">
                <input 
                    className="task-input" 
                    value={newTask} 
                    onChange={e => setNewTask(e.target.value)} 
                    placeholder="Enter new task"
                />
                <button className="add-task-button" onClick={addTask}>Add Task</button>
            </div>
            <ul className="task-list">
                {tasks.map(task => (
                    <li key={task} className="task-item">
                        {task} 
                        <button className="delete-button" onClick={() => deleteTask(task)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>

    );
};

export default TaskList;
