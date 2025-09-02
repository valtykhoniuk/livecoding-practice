import React, { useState } from "react";

const Task23 = () => {
  const [index, setIndex] = useState(0);

  const images = [
    "https://picsum.photos/id/1011/300/200",
    "https://picsum.photos/id/1015/300/200",
    "https://picsum.photos/id/1016/300/200",
  ];

  return (
    <>
      <h1>Task 23</h1>
      <button
        onClick={() =>
          index > 0 ? setIndex(index - 1) : setIndex(images.length - 1)
        }
      >
        back
      </button>
      <img src={images[index]} alt="gallery" />
      <button
        onClick={() =>
          index !== images.length - 1 ? setIndex(index + 1) : setIndex(0)
        }
      >
        next
      </button>
    </>
  );
};

export default Task23;
