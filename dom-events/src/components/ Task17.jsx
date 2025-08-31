import React from "react";
import { useState } from "react";

const Task17 = () => {
  const [items, setItems] = useState(["Apple", "Orange", "Lemon", "Grape"]);

  const sortElements = (items) => {
    const sortedArray = [...items].sort((a, b) =>
      a.localeCompare(b, "uk", { sensitivity: "base" })
    );
    setItems(sortedArray);
  };

  return (
    <div>
      <h1>Task 17</h1>
      <button
        onClick={() => {
          sortElements(items);
        }}
      >
        Sort
      </button>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default Task17;
