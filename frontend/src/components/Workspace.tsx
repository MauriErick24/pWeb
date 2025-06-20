import React, { useState } from "react";
import useEscapeKey from "../hooks/useEscape";

interface Figure {
  id: number;
  type: "circle" | "square" | "triangle" | "image";
  x: number;
  y: number;
  zindex: number;
  selected: boolean;
  size: number;
  rotation: number;
  src?: string;
}

type CanvasProps = {
  figures: Figure[];
  setFigures: React.Dispatch<React.SetStateAction<Figure[]>>;
  canvasRef?: React.RefObject<HTMLDivElement | null>;
};

export const Workspace: React.FC<CanvasProps> = ({
  figures,
  setFigures,
  canvasRef,
}) => {
  const [draggingId, setDraggingId] = useState<number | null>(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  useEscapeKey(() => {
    setFigures((prev) =>
      prev.map((fig) => ({
        ...fig,
        selected: false,
      }))
    );
  });

  const handleClickFigure = (actId: number) => {
    setFigures((prev) =>
      prev.map((fig) => ({
        ...fig,
        selected: fig.id === actId,
      }))
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

  const handleDrop = (e: React.DragEvent) => {
    if (draggingId == null) {
      const type = e.dataTransfer.getData("figure-type") as Figure["type"];
      const src = e.dataTransfer.getData("image-src");
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
        ...(type === "image" && { src }),
      };

      console.log(newFigure);

      setFigures([...figures, newFigure]);
    }
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

  const handleReset = () => {
    setFigures([]);
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
      <div className="bg-gray-50 px-4 py-2 border-b border-gray-100">
        <h2 className="font-medium text-gray-700">Área de trabajo</h2>
      </div>

      <div className="aspect-video w-full bg-white p-4 flex items-center justify-center relative overflow-x-auto">
        {" "}
        {/* scroll -> overflow-x-auto */}
        <div
          className="w-full h-[500px] relative "
          ref={canvasRef}
          onDragOver={(e) => e.preventDefault()}
          onDrop={handleDrop}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
        >
          {figures.map((fig) => (
            <div
              key={fig.id}
              className={`absolute ${
                fig.selected ? "ring-4 ring-blue-500" : ""
              } cursor-pointer`}
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
            >
              {fig.type === "image" && fig.src ? (
                <img
                  src={fig.src}
                  alt="imagen"
                  className="w-full h-full object-contain rounded"
                />
              ) : fig.type === "circle" ? (
                <div className="w-full h-full rounded-full bg-red-400 shadow" />
              ) : fig.type === "square" ? (
                <div className="w-full h-full bg-green-400 shadow" />
              ) : fig.type === "triangle" ? (
                <div className="w-0 h-0 border-l-[32px] border-r-[32px] border-b-[64px] border-transparent border-b-yellow-400" />
              ) : null}
            </div>
          ))}
        </div>
      </div>
      <div className="bg-gray-50 px-4 py-2 border-t border-gray-100 flex justify-between items-center">
        <span className="text-sm text-gray-500">
          Arrastra y suelta las figuras
        </span>
        <button
          className="text-sm text-indigo-600 hover:text-indigo-800"
          onClick={handleReset}
        >
          Reiniciar
        </button>
      </div>
    </div>
  );
};
