import React, { useState, useContext, useEffect } from 'react';
import { TaskListContext } from '../context/TaskListContext';

const TaskForm = () => {
    const [title, setTitle] = useState('');
    const { addTask, clearList, editTask, editItem } = useContext(TaskListContext);

    useEffect(() => {
        if (editItem !== null) {
            setTitle(editItem.title)
        } else {
            setTitle('')
        }
    }, [editItem]);

    const handleSubmit = e => {
        e.preventDefault();
        if (!editItem) {
            addTask(title)
            setTitle('')
        } else {
            editTask(title, editItem.id)
        }
    }
    const handleChange = e => {
        setTitle(e.target.value)
    }
    return (
        <form onSubmit={handleSubmit} className="form">
            <input
                type="text"
                placeholder="Add Task..."
                value={title}
                onChange={handleChange}
                required
                className="task-input"
            />
            <div className="buttons">
                <button type="submit" className="btn add-task-btn">
                    {editItem ? 'Edit Task' : 'Add Task'}
                </button>
                <button className="btn clear-btn" onClick={clearList}>
                    Clear
                </button>
            </div>
        </form>
    )
}

export default TaskForm
