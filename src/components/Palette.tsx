import React from "react";

export const Palette = () => {
  const handleDragStart = (event: React.DragEvent, type: string) => {
    event.dataTransfer.setData("figure-type", type);
  };

  return (
    <div className="flex flex-col gap-4 items-center">
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
        onDragStart={(e) => handleDragStart(e, "triangle")}
        className="w-0 h-0 border-l-[32px] border-r-[32px] border-b-[64px] border-transparent border-b-yellow-400 cursor-pointer"
      />
    </div>
  );
};

export default Palette;
