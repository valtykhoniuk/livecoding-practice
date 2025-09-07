// 42) Використай useEffect для console.log при зміні props або state.
import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const Task42 = () => {
  const [num, setNum] = useState(0);

  useEffect(() => {
    console.log("Number was changed");
  }, [num]);

  return (
    <div>
      <h1>Task 42</h1>
      {num}
      <button onClick={() => setNum((prev) => prev + 1)}>increase</button>
    </div>
  );
};

export default Task42;
