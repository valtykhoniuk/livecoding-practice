// 45) Реалізуй простий select або dropdown із вибором значення.

import React from "react";
import { useState } from "react";

const Task45 = () => {
  const [selectedChoice, setSelectedChoice] = useState(0);

  return (
    <div>
      <h1>Task 45</h1>
      <select
        value={selectedChoice}
        onChange={(e) => setSelectedChoice(e.target.value)}
      >
        <option value="">--choose--</option>
        <option value="blue">Blue</option>
        <option value="violet">Violet</option>
        <option value="pink">Pink</option>
      </select>
    </div>
  );
};

export default Task45;
