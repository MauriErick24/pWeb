import { useState } from "react";
import { RichTextEditor } from "./RichTextEditor";

export const QuestionDetails = () => {
  const [titulo, setTitulo] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [consigna, setConsigna] = useState("");
  return (
    <div>
      <h1 className="text-2xl font-bold text-indigo-800 mb-2">Titulo</h1>
      <RichTextEditor content={titulo} setContent={setTitulo} />
      {/*<input
        type="text"
        placeholder="Titulo..."
        className="w-full p-1 border border-gray-200 rounded-lg hover:bg-gray-50 mb-4"
      />*/}

      <h1 className="text-2xl font-bold text-indigo-800 mb-2">Descripcion</h1>
      <RichTextEditor content={descripcion} setContent={setDescripcion} />

      <h1 className="text-2xl font-bold text-indigo-800 mb-2">Consigna</h1>
      <RichTextEditor content={consigna} setContent={setConsigna} />

      {/* Dificultad - Edad */}
      <div className="mt-6">
        <h1 className="text-2xl font-bold text-indigo-800 mb-4">
          Dificultad - Rango de edad
        </h1>

        <div className="space-y-4">
          {["Fácil", "Medio", "Difícil"].map((nivel) => (
            <div
              key={nivel}
              className="flex flex-col md:flex-row md:items-center gap-2"
            >
              <label className="w-full md:w-24 font-medium text-gray-700">
                {nivel}
              </label>
              <input
                type="text"
                placeholder="Edad ej: 6-8"
                className="w-full md:flex-1 p-1 border border-gray-200 rounded-lg hover:bg-gray-50"
              />
            </div>
          ))}
        </div>
      </div>

      <hr className="my-5" />
    </div>
  );
};
