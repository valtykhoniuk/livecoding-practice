import React from "react";
import Child from "./Child";

const Task43 = () => {
  const user = { name: "Labubusha", age: 5 };

  return (
    <div>
      <h1>Task 43</h1>
      <Child name={user.name} age={user.age} />
    </div>
  );
};

export default Task43;
