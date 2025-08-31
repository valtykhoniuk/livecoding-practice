import React from "react";
import { useState } from "react";

const Task19 = () => {
  const [visible, setVisible] = useState(true);

  return (
    <div>
      <h1>Task 19</h1>
      <button
        onClick={() => {
          setVisible(!visible);
        }}
      >
        change visibility
      </button>

      {visible && (
        <p>
          Counting objects: 100% (20/20), done. Delta compression using up to 10
          threads Compressing objects: 100% (17/17), done. Writing objects: 100%
          (19/19), 25.80 KiB | 12.90 MiB/s, done.
        </p>
      )}
    </div>
  );
};

export default Task19;
