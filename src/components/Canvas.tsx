// src/components/Canvas.tsx
import React, { useState } from "react";
import { Tools } from "./Tools";

interface Figure {
  id: number;
  type: "circle" | "square";
  x: number;
  y: number;
  zindex: number;
  selected: boolean;
}

export const Canvas = () => {
  const [figures, setFigures] = useState<Figure[]>([]);
  const [selectedFig, setSelectedFig] = useState<Figure | undefined>(undefined);

  const handleDrop = (e: React.DragEvent) => {
    const type = e.dataTransfer.getData("figure-type") as "circle" | "square";
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const zindex = figures.length;
    const selected = false;

    console.log("zindex:", zindex);

    const newFigure: Figure = {
      id: Date.now(),
      type,
      x,
      y,
      zindex,
      selected,
    };

    setFigures([...figures, newFigure]);
  };

  const handleClickFigure = (actId: number) => {
    console.log("figura:", actId);
    const fig: Figure | undefined = figures.find((f) => f.id === actId);
    if (fig !== undefined) {
      fig.selected = true;
      setSelectedFig(fig);
    }
    if (selectedFig !== undefined && fig !== selectedFig) {
      selectedFig.selected = false;
      setSelectedFig(fig);
    }
  };

  const handleUp = () => {
    if (selectedFig !== undefined) {
      selectedFig.zindex = selectedFig.zindex + 1;
      console.log("Figura", selectedFig);
      setSelectedFig(selectedFig);
    }
  };

  return (
    <div className="flex gap-5">
      <Tools onClickBtn={handleUp} />
      <div
        className="w-full h-[500px] border-2 border-gray-400 relative bg-gray-100 rounded-lg"
        onDragOver={(e) => e.preventDefault()}
        onDrop={handleDrop}
      >
        {figures.map((fig) => (
          <div
            key={fig.id}
            className={`absolute ${
              fig.type === "circle" ? "rounded-full" : ""
            } ${fig.type === "circle" ? "bg-red-400" : "bg-green-400"} ${
              fig.selected ? "ring-4 ring-blue-500" : ""
            }`}
            style={{
              left: fig.x,
              top: fig.y,
              width: 50,
              height: 50,
              zIndex: fig.zindex,
            }}
            onClick={() => handleClickFigure(fig.id)}
          ></div>
        ))}
      </div>
    </div>
  );
};
