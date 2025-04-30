// src/components/Canvas.tsx
import React, { useState } from "react";

interface Figure {
  id: number;
  type: "circle" | "square";
  x: number;
  y: number;
  zindex: number;
}

export const Canvas = () => {
  const [figures, setFigures] = useState<Figure[]>([]);

  const handleDrop = (e: React.DragEvent) => {
    const type = e.dataTransfer.getData("figure-type") as "circle" | "square";
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const zindex = figures.length;

    console.log("zindex:", zindex);

    const newFigure: Figure = {
      id: Date.now(),
      type,
      x,
      y,
      zindex,
    };

    setFigures([...figures, newFigure]);
  };

  return (
    <div
      className="w-full h-[500px] border-2 border-gray-400 relative bg-gray-100 rounded-lg"
      onDragOver={(e) => e.preventDefault()}
      onDrop={handleDrop}
    >
      {figures.map((fig) => (
        <div
          key={fig.id}
          className={`absolute ${fig.type === "circle" ? "rounded-full" : ""} ${
            fig.type === "circle" ? "bg-red-400" : "bg-green-400"
          }`}
          style={{
            left: fig.x,
            top: fig.y,
            width: 50,
            height: 50,
          }}
        ></div>
      ))}
    </div>
  );
};
