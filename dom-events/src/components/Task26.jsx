//26) Додай елементи у список через input + кнопку.
import React, { useState } from "react";

const Task26 = () => {
  const [items, setItems] = useState([]);
  const [listItem, setListItem] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setItems([...items, listItem]);
  };

  return (
    <div>
      <h1>Task 26</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={listItem}
          onChange={(e) => setListItem(e.target.value)}
        />
        <button type="submit">Add to the list</button>
      </form>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default Task26;
