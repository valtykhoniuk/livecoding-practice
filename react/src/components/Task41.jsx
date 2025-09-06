//41) Створи компонент списку з фільтром за текстом.

import React from "react";
import { useState } from "react";

const Task41 = () => {
  const [filter, setFilter] = useState("");
  const [items, setItems] = useState(["purple", "blue", "yellow", "green"]);

  const filteredItems = items.filter((item) =>
    item.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <h1>Task 41</h1>
      <div>
        <input
          value={filter}
          type="text"
          placeholder="Filter items..."
          onChange={(e) => setFilter(e.target.value)}
        />
        <ul>
          {filteredItems.length > 0 ? (
            filteredItems.map((item, index) => <li key={index}>{item}</li>)
          ) : (
            <li>No results found</li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Task41;
