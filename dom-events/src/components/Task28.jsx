// 28) Реалізуй простий accordion.
import React, { useState } from "react";

const Task28 = () => {
  const headers = ["A header", "B header", "C header"];
  const decs = ["A desc", "B desc", "C desc"];
  const [isOpen, setIsOpen] = useState([false, false, false]);

  return (
    <div>
      <h1>Task 28</h1>

      {headers.map((item, index) => (
        <div key={index}>
          <p>{item}</p>
          <button
            onClick={() =>
              setIsOpen((prev) => prev.map((el, i) => (i === index ? !el : el)))
            }
          >
            click
          </button>
          {isOpen[index] && decs[index]}
        </div>
      ))}
    </div>
  );
};

export default Task28;
