// 49) Modal компонент із props isOpen та onClose.
import React, { useState } from "react";
import Modal from "./Modal";
// import "./Modal.css";

const Task49 = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <h1>Task 49</h1>
      <button onClick={() => setIsOpen(true)}>Open modal</button>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </div>
  );
};

export default Task49;
