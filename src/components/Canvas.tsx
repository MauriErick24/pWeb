import React, { useState } from "react";
import { Tools } from "./Tools";
import useEscapeKey from "../hooks/useEscape";

interface Figure {
  id: number;
  type: "circle" | "square" | "triangle";
  x: number;
  y: number;
  zindex: number;
  selected: boolean;
  size: number; // nuevo
  rotation: number; // nuevo
}

export const Canvas = () => {
  const [figures, setFigures] = useState<Figure[]>([]);
  const [draggingId, setDraggingId] = useState<number | null>(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  // Deseleccionar figuras con ESC
  useEscapeKey(() => {
    setFigures((prev) =>
      prev.map((fig) => ({
        ...fig,
        selected: false,
      }))
    );
  });

  const handleDrop = (e: React.DragEvent) => {
    if (draggingId == null) {
      const type = e.dataTransfer.getData("figure-type") as
        | "circle"
        | "square"
        | "triangle";
      const rect = e.currentTarget.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const zindex = figures.length;

      const newFigure: Figure = {
        id: Date.now(),
        type,
        x,
        y,
        zindex,
        selected: false,
        size: 50,
        rotation: 0,
      };

      console.log(newFigure);

      setFigures([...figures, newFigure]);
    }
  };

  const handleClickFigure = (actId: number) => {
    setFigures((prev) =>
      prev.map((fig) => ({
        ...fig,
        selected: fig.id === actId,
      }))
    );
  };

  const handleUp = () => {
    setFigures((prev) =>
      prev.map((fig) =>
        fig.selected ? { ...fig, zindex: fig.zindex + 1 } : fig
      )
    );
  };

  const handleDown = () => {
    setFigures((prev) =>
      prev.map((fig) =>
        fig.selected ? { ...fig, zindex: fig.zindex - 1 } : fig
      )
    );
  };

  const handleFront = () => {
    setFigures((prev) =>
      prev.map((fig) =>
        fig.selected ? { ...fig, zindex: fig.zindex + 100 } : fig
      )
    );
  };

  const handleBack = () => {
    setFigures((prev) =>
      prev.map((fig) => (fig.selected ? { ...fig, zindex: 1 } : fig))
    );
  };

  const handleMouseDown = (
    e: React.MouseEvent<HTMLDivElement>,
    fig: Figure
  ) => {
    setDraggingId(fig.id);
    setOffset({
      x: e.nativeEvent.offsetX,
      y: e.nativeEvent.offsetY,
    });
    handleClickFigure(fig.id);
  };

  const handleZoomIn = () => {
    setFigures((prev) =>
      prev.map((fig) => (fig.selected ? { ...fig, size: fig.size + 10 } : fig))
    );
  };

  const handleZoomOut = () => {
    setFigures((prev) =>
      prev.map((fig) =>
        fig.selected ? { ...fig, size: Math.max(10, fig.size - 10) } : fig
      )
    );
  };

  const handleRotate = () => {
    setFigures((prev) =>
      prev.map((fig) =>
        fig.selected ? { ...fig, rotation: (fig.rotation + 45) % 360 } : fig
      )
    );
  };

  const handleDelete = () => {
    setFigures((prev) => prev.filter((fig) => !fig.selected));
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (draggingId !== null) {
      const canvasRect = e.currentTarget.getBoundingClientRect();
      const newX = e.clientX - canvasRect.left - offset.x;
      const newY = e.clientY - canvasRect.top - offset.y;

      setFigures((prev) =>
        prev.map((fig) =>
          fig.id === draggingId ? { ...fig, x: newX, y: newY } : fig
        )
      );
    }
  };

  const handleMouseUp = () => {
    setDraggingId(null);
  };

  return (
    <div className="flex gap-5">
      <Tools
        onClickBtnUp={handleUp}
        onClickBtnDown={handleDown}
        onClickBtnFront={handleFront}
        onClickBtnBack={handleBack}
        onClickBtnZoomIn={handleZoomIn}
        onClickBtnZoomOut={handleZoomOut}
        onClickBtnRotate={handleRotate}
        onClickBtnDelete={handleDelete}
      />
      <div
        className="w-full h-[500px] border-2 border-gray-400 relative bg-gray-100 rounded-lg"
        onDragOver={(e) => e.preventDefault()}
        onDrop={handleDrop}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
      >
        {figures.map((fig) => (
          <div
            key={fig.id}
            className={`absolute 
            ${fig.type === "circle" ? "rounded-full bg-red-400" : ""}
            ${fig.type === "square" ? "bg-green-400" : ""}
            ${
              fig.type === "triangle"
                ? "w-0 h-0 border-l-[32px] border-r-[32px] border-b-[64px] border-transparent border-b-yellow-400"
                : ""
            }
            ${
              fig.selected
                ? "ring-4 ring-blue-500"
                : fig.type === "triangle"
                ? ""
                : "shadow-xs shadow-black"
            }
            cursor-pointer`}
            style={{
              left: fig.x,
              top: fig.y,
              zIndex: fig.zindex,
              width: fig.type === "triangle" ? "auto" : fig.size,
              height: fig.type === "triangle" ? "auto" : fig.size,
              transform: `rotate(${fig.rotation}deg)`,
              transformOrigin: "center",
            }}
            onMouseDown={(e) => handleMouseDown(e, fig)}
          ></div>
        ))}
      </div>
    </div>
  );
};
