import React, { useEffect } from "react";
import { useQuill } from "react-quilljs";
import "quill/dist/quill.snow.css";

interface dificultyType {
  easyStart: number;
  easyEnd: number;
  mediumStart: number;
  mediumEnd: number;
  hardStart: number;
  hardEnd: number;
}

interface Question {
  title: string;
  description: string;
  question: string;
  dificulty: dificultyType;
}

type QuestionDetailsProps = {
  setQuestion: React.Dispatch<React.SetStateAction<Question | null>>;
};

export const QuestionDetails: React.FC<QuestionDetailsProps> = ({
  setQuestion,
}) => {
  const tituloEditor = useQuill();
  const descripcionEditor = useQuill();
  const consignaEditor = useQuill();

  const defaultState: Question = {
    title: "",
    description: "",
    question: "",
    dificulty: {
      easyStart: 0,
      easyEnd: 0,
      mediumStart: 0,
      mediumEnd: 0,
      hardStart: 0,
      hardEnd: 0,
    },
  };

  useEffect(() => {
    if (tituloEditor.quill) {
      tituloEditor.quill.on("text-change", () => {
        const text = tituloEditor.quill!.root.innerHTML;
        setQuestion((prev) => ({
          ...(prev ?? defaultState),
          title: text,
        }));
      });
    }
  }, [tituloEditor.quill]);

  useEffect(() => {
    if (descripcionEditor.quill) {
      descripcionEditor.quill.on("text-change", () => {
        const text = descripcionEditor.quill!.root.innerHTML;
        setQuestion((prev) => ({
          ...(prev ?? defaultState),
          description: text,
        }));
      });
    }
  }, [descripcionEditor.quill]);

  useEffect(() => {
    if (consignaEditor.quill) {
      consignaEditor.quill.on("text-change", () => {
        const text = consignaEditor.quill!.root.innerHTML;
        setQuestion((prev) => ({
          ...(prev ?? defaultState),
          question: text,
        }));
      });
    }
  }, [consignaEditor.quill]);

  const handleAgeChange = (
    nivel: "Fácil" | "Medio" | "Difícil",
    value: string
  ) => {
    const [startStr, endStr] = value.split("-").map((s) => s.trim());
    const start = parseInt(startStr);
    const end = parseInt(endStr);

    if (isNaN(start) || isNaN(end)) return;

    setQuestion((prev) => {
      const current = prev ?? defaultState;

      const updatedDificulty = { ...current.dificulty };

      if (nivel === "Fácil") {
        updatedDificulty.easyStart = start;
        updatedDificulty.easyEnd = end;
      } else if (nivel === "Medio") {
        updatedDificulty.mediumStart = start;
        updatedDificulty.mediumEnd = end;
      } else if (nivel === "Difícil") {
        updatedDificulty.hardStart = start;
        updatedDificulty.hardEnd = end;
      }

      return {
        ...current,
        dificulty: updatedDificulty,
      };
    });
  };

  return (
    <div>
      <h1 className="text-2xl font-bold text-indigo-800 mb-2">Titulo</h1>
      <div className="mb-4 bg-white border border-gray-200 rounded-lg p-2">
        <div ref={tituloEditor.quillRef} />
      </div>

      <h1 className="text-2xl font-bold text-indigo-800 mb-2">Descripcion</h1>
      <div className="mb-4 bg-white border border-gray-200 rounded-lg p-2">
        <div ref={descripcionEditor.quillRef} />
      </div>

      <h1 className="text-2xl font-bold text-indigo-800 mb-2">Consigna</h1>
      <div className="mb-4 bg-white border border-gray-200 rounded-lg p-2">
        <div ref={consignaEditor.quillRef} />
      </div>

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
                onChange={(e) => handleAgeChange(nivel as any, e.target.value)}
              />
            </div>
          ))}
        </div>
      </div>

      <hr className="my-5" />
    </div>
  );
};
