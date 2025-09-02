import React, { useState } from "react";

const Task22 = () => {
  const [clicks, setClicks] = useState(0);

  return (
    <div>
      <h1>Task 22</h1>
      <button onClick={() => setClicks((prev) => prev + 1)}>{clicks}</button>
    </div>
  );
};

export default Task22;
