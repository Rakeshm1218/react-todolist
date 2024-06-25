import React, { useState } from "react";
import "./TodoList.css";

const ToDoList = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleInputChange = (e) => {
    setNewTask(e.target.value);
  };
  const addTask = () => {
    if (newTask.trim() !== "") {
      setTasks((t) => [...t, newTask]);
      setNewTask("");
    } else {
      alert("Please enter a task");
    }
  };
  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };
  const moveTaskUp = (index) => {
    if (index > 0) {
      const updatedTasks = [...tasks];
      const temp = updatedTasks[index];
      updatedTasks[index] = updatedTasks[index - 1];
      updatedTasks[index - 1] = temp;
      setTasks(updatedTasks);
    }
  };
  const moveTaskDown = (index) => {
    if (index < tasks.length - 1) {
      const updatedTasks = [...tasks];
      const temp = updatedTasks[index];
      updatedTasks[index] = updatedTasks[index + 1];
      updatedTasks[index + 1] = temp;
      setTasks(updatedTasks);
    }
  };
  return (
    <div className="to-do-list">
      <h1>To-Do-List</h1>
      <div>
        <input
          type="text"
          placeholder="Enter a Task..."
          value={newTask}
          onChange={handleInputChange}
          className="task-input"
        />
        <button className="btn addTask-btn" onClick={addTask}>
          Add
        </button>
      </div>
      <ol className="task-list">
        {tasks.map((task, index) => (
          <li key={index} className="tasks">
            <span className="task">{task}</span>
            <button onClick={() => deleteTask(index)} className="btn delete">
              <i className="fas fa-trash"></i>
            </button>
            <button
              onClick={() => moveTaskUp(index)}
              id="upBtn"
              className="btn up"
            >
              <i className="fa-solid fa-angle-up"></i>
            </button>
            <button
              onClick={() => moveTaskDown(index)}
              id="downBtn"
              className="btn down"
            >
              <i className="fas fa-angle-down"></i>
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default ToDoList;
