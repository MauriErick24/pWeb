import React, { useRef, useState } from "react";

type Props = {
  onAddImage: (imgUrl: string) => void;
};

export const Palette: React.FC<Props> = ({ onAddImage }) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [uploadedImages, setUploadedImages] = useState<string[]>([]);

  const handleDragStart = (event: React.DragEvent, type: string, src?: string) => {
    event.dataTransfer.setData("figure-type", type);
    if(src) {
      event.dataTransfer.setData("image-src", src);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const url = URL.createObjectURL(file);
    setUploadedImages(prev => [...prev, url]);
    onAddImage(url);
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
      {/***********************/}
      {uploadedImages.map((src, index) => (
        <img
          key={index}
          src={src}
          draggable
          onDragStart={(e) => handleDragStart(e, "image", src)}
          className="w-16 h-16 object-contain border border-gray-300 rounded cursor-pointer"
        />
      ))}
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        className="hidden"
      />
      <button
        className="mt-4 px-3 py-1 bg-blue-500 text-white rounded text-sm"
        onClick={() => fileInputRef.current?.click()}
      >
        Subir imagen
      </button>
      {/***********************/}
    </div>
  );
};

export default Palette;
