import React, { useState, useEffect } from "react";
import "./App.css";
import TaskForm from "./components/TaskForm";
import TaskColumn from "./components/TaskColumn";
import Todo from "./assets/direct-hit.png";
import doingIcon from "./assets/glowing-star.png";
import doneIcon from "./assets/check-mark-button.png";

// Retrieve tasks from localStorage, and ensure tasks are initialized as an empty array if no tasks are found
const oldTasks = localStorage.getItem("tasks");

const App = () => {
  const [tasks, setTasks] = useState(JSON.parse(oldTasks) || []);  // Ensures tasks is an array

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));  // Make sure to save the correct state to localStorage
  }, [tasks]);

  const handleDelete = (taskIndex) => {
    const newTasks = tasks.filter((_, index) => index !== taskIndex); // Removes the task by index
    setTasks(newTasks);
  };

  return (
    <div className="app">
      <TaskForm setTasks={setTasks} />
      <main className="app_main">
        <TaskColumn 
          title="To Do" 
          icon={Todo} 
          tasks={tasks} 
          status="todo" 
          handleDelete={handleDelete} 
        />
        <TaskColumn 
          title="Doing" 
          icon={doingIcon} 
          tasks={tasks} 
          status="doing" 
          handleDelete={handleDelete} 
        />
        <TaskColumn 
          title="Done" 
          icon={doneIcon} 
          tasks={tasks} 
          status="done" 
          handleDelete={handleDelete} 
        />
      </main>
    </div>
  );
};

export default App;
