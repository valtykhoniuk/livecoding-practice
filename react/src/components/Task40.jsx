// 40) Реалізуй ToDo List: додавання та видалення задач, збереження state у компоненті.
import React, { useState } from "react";

const Task40 = () => {
  const [tasks, setTasks] = useState([{ text: "Make soup", done: false }]);
  const [newTask, setNewTask] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const t = newTask.trim();
    if (!t) return;
    setTasks((prev) => [...prev, { text: t, done: false }]);
    setNewTask("");
  };

  const deleteTask = (index) => {
    setTasks((prev) => prev.filter((_, i) => i !== index));
  };

  const toggleTask = (index) => {
    setTasks((prev) =>
      prev.map((prevTask, i) =>
        i === index ? { ...prevTask, done: !prevTask.done } : prevTask
      )
    );
  };

  return (
    <div>
      <h1>Task 40</h1>
      <form onSubmit={handleSubmit}>
        <label>Write task: </label>
        <input
          value={newTask}
          type="text"
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button type="submit">Send</button>
      </form>

      <ul>
        {tasks.map((task, index) => (
          <li
            key={index}
            style={{
              textDecoration: task.done ? "line-through" : "none",
              display: "flex",
              alignItems: "center",
              gap: "10px",
            }}
          >
            {task.text}
            <button onClick={() => toggleTask(index)}>Change status</button>
            <button onClick={() => deleteTask(index)}>Delete task</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Task40;
