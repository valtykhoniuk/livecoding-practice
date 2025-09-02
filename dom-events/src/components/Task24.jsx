import { useState } from "react";

export default function Task24() {
  const [dropped, setDropped] = useState([]);

  const handleDragStart = (e, color) => {
    e.dataTransfer.setData("color", color);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const color = e.dataTransfer.getData("color");
    setDropped((prev) => [...prev, color]);
  };

  return (
    <div>
      <h2>Drag & Drop</h2>

      <div style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
        <div
          draggable
          onDragStart={(e) => handleDragStart(e, "tomato")}
          style={{ width: 80, height: 80, background: "tomato" }}
        ></div>
        <div
          draggable
          onDragStart={(e) => handleDragStart(e, "skyblue")}
          style={{ width: 80, height: 80, background: "skyblue" }}
        ></div>
      </div>

      <div
        onDragOver={(e) => e.preventDefault()}
        onDrop={handleDrop}
        style={{
          width: 300,
          minHeight: 200,
          border: "2px dashed gray",
          display: "flex",
          gap: "10px",
          flexWrap: "wrap",
          padding: 10,
        }}
      >
        {dropped.map((color, i) => (
          <div
            key={i}
            style={{ width: 60, height: 60, background: color }}
          ></div>
        ))}
      </div>
    </div>
  );
}
