import React from "react";
import { useState } from "react";

const Task16 = () => {
  const [items, setItems] = useState(["Apple", "Orange", "Lemon"]);

  const removeItem = (index) => {
    setItems(items.filter((_, i) => i !== index));
  };

  return (
    <div>
      <h1>Task 16</h1>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item} <button onClick={() => removeItem(index)}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Task16;
