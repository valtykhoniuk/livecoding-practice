import React from "react";
import { useState } from "react";
import ChildA from "./ChildA";
import ChildB from "./ChildB";

const Task44 = () => {
  const [value, setValue] = useState(0);

  return (
    <div>
      <h1>Task44</h1>
      <ChildA value={value} setValue={setValue} />
      <ChildB value={value} />
    </div>
  );
};

export default Task44;
