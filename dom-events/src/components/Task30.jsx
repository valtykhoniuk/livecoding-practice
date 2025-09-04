import React, { useState } from "react";
import "./Task30.css";

const Task30 = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <h1>Task 30</h1>
      <button onClick={() => setIsOpen(true)}>Open modal</button>
      {isOpen && (
        <div className="modal-bg" onClick={() => setIsOpen(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <p>This is modal</p>
            <button onClick={() => setIsOpen(false)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Task30;
