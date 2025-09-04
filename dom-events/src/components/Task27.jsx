// 27) Показ/приховування підказки при фокусі на полі input.
import React, { useState } from "react";

const Task27 = () => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div>
      <h1>Task 27</h1>
      <form>
        <input
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
      </form>
      {isFocused && <p> onFocus was triggered!</p>}
    </div>
  );
};

export default Task27;
