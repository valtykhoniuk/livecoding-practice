import React from "react";
import { useState } from "react";

const Task18 = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isValidEmail(email)) {
      alert("Email unccorect");
      return;
    }
    if (!isValidPassword(password)) {
      alert("Password should be longer");
      return;
    }
    console.log("Great!Form was submitted");
  };

  const isValidEmail = (email) => {
    return email.includes("@");
  };

  const isValidPassword = (password) => {
    return password >= 6;
  };

  return (
    <>
      <h1>Task 18</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email: </label>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></input>
        </div>
        <div>
          <label>Password: </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></input>
        </div>
        <button type="submit">Send</button>
      </form>
    </>
  );
};

export default Task18;
