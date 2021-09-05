import React, { useState, useEffect } from 'react';
import { v4 as uuid } from 'uuid';
import { TaskListContext } from './TaskListContext';

const TaskListContextImplementation = ({ children }) => {
    const [editItem, setEditItem] = useState(null);

    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks))
    }, [tasks])

    // Add tasks
    const addTask = title => {
        setTasks([...tasks, { title, id: uuid() }]);
    }

    // Remove tasks
    const removeTask = id => {
        setTasks(tasks.filter(task => task.id !== id))
    }

    // Clear tasks
    const clearList = () => {
        setTasks([])
    }

    // Find task
    const findItem = id => {
        const item = tasks.find(task => task.id === id)
        setEditItem(item)
    }

    // Edit task
    const editTask = (title, id) => {
        const newTasks = tasks.map(task => (task.id === id ? { title, id } : task))
        console.log(newTasks)
        setTasks(newTasks)
        setEditItem(null)
    }

    return (
        <TaskListContext.Provider value={{
            tasks, addTask, removeTask,
            clearList,
            findItem,
            editTask,
            editItem
        }}>
            {children}
        </TaskListContext.Provider>
    )

}


export default TaskListContextImplementation
