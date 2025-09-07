import React from "react";

const ChildA = ({ value, setValue }) => {
  return (
    <div>
      <p>Child A: </p>
      {value}
      <button onClick={() => setValue((prev) => prev + 1)}> + </button>
    </div>
  );
};

export default ChildA;
