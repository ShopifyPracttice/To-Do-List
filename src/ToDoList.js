import React, { useState } from 'react';

const ToDoList = () => {
    const [tasks, setTasks] = useState([]);
  const [inputTask, setInputTask] = useState('');

  const handleInputChange = (e) => {
    setInputTask(e.target.value);
  };

  const handleAddTask = () => {
    if (inputTask.trim() !== '') {
      setTasks([...tasks, inputTask]);
      setInputTask('');
    }
  };

  const handleDeleteTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };
    return ( 
        <div className="todo-list-container">
        <h2>My To-Do List</h2>
        <div className="input-group">
          <input
            type="text"
            placeholder="Enter a task"
            value={inputTask}
            onChange={handleInputChange}
            className="task-input"
          />
          <button onClick={handleAddTask} className="add-button">
            Add
          </button>
        </div>
        <ul className="task-list">
          {tasks.map((task, index) => (
            <li key={index} className="task-item">
              {task}
              <button onClick={() => handleDeleteTask(index)} className="delete-button">
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
     );
}
 
export default ToDoList;