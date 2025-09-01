import React from "react";
import { useState } from "react";

const Task21 = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <div>
      <h1>Task 21</h1>
      <div
        onMouseEnter={() => {
          setHovered(true);
        }}
        onMouseLeave={() => {
          setHovered(false);
        }}
        style={{
          padding: 16,
          borderRadius: 8,
          transition: "background-color .2s",
          backgroundColor: hovered ? "gold" : "",
          color: hovered ? "black" : "",
        }}
      >
        <p>Put cursor here</p>
      </div>
    </div>
  );
};

export default Task21;
