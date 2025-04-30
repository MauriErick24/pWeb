// src/components/FigurePalette.tsx
import React from "react";

const figures = [
  { type: "circle", label: "Círculo" },
  { type: "square", label: "Cuadro" },
];

export const FigurePalette = () => {
  const handleDragStart = (event: React.DragEvent, type: string) => {
    event.dataTransfer.setData("figure-type", type);
  };

  return (
    <div className="flex flex-col gap-4 p-4 border-2 border-black rounded-lg">
      {/* {figures.map((fig) => (
        <div
          key={fig.type}
          draggable
          onDragStart={(e) => handleDragStart(e, fig.type)}
          className="p-2 border rounded cursor-grab bg-white shadow-md"
        >
          {fig.label}
        </div>
      ))} */}
      <div
        draggable
        onDragStart={(e) => handleDragStart(e, "circle")}
        className="w-16 h-16 bg-red-400 rounded-full cursor-pointer"
      />
      <div
        draggable
        onDragStart={(e) => handleDragStart(e, "square")}
        className="w-16 h-16 bg-green-400 cursor-pointer"
      />
      <div
        draggable
        onDragStart={(e) => e.dataTransfer.setData("shape", "triangle")}
        className="w-0 h-0 border-l-[32px] border-r-[32px] border-b-[64px] border-transparent border-b-yellow-400 cursor-pointer"
      />
    </div>
  );
};
