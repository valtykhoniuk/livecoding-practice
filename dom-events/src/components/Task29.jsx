// 29) Валідація форми: числові поля повинні приймати лише числа, email має містити @.

import React, { useState } from "react";

const Task29 = () => {
  const [num, setNum] = useState(0);
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.includes("@") || email.trim() === "") {
      alert("Email should have @");
    }
  };

  return (
    <div>
      <h1>Task 29</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Number input: </label>
          <input
            type="number"
            value={num}
            onChange={(e) => setNum(e.target.value)}
          />
        </div>
        <div>
          <label>Email input: </label>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button type="submit">Send it</button>
      </form>
    </div>
  );
};

export default Task29;
