import { FC } from "react";
import { TrashIcon, PencilIcon } from "@heroicons/react/24/solid"; // npm install @heroicons/react

const typeLabels: Record<QuestionType, string> = {
    opcion_multiple: "Opción múltiple",
    completar: "Arrastrar y soltar",
    respuesta_corta: "Respuesta corta",
};

type QuestionType = "opcion_multiple" | "completar" | "respuesta_corta";

interface QuestionCardProps {
  id: number;
  title: string;
  description: string;
  question: string;
  img: string;
  answer: string;
}

export const QuestionCard: FC<QuestionCardProps> = ({
  title,
  description,
  question,
  img,
  answer,
}) => {
  const parsedAnswer = (() => {
    try {
      return JSON.parse(answer);
    } catch (e) {
      return [];
    }
  })();

  return (
    <div className="border rounded-lg p-4 shadow-md mb-6 bg-white">
      <div className="mb-2 text-sm text-indigo-700 font-medium">
        Pregunta Interactiva
      </div>

      <div
        className="text-lg font-semibold mb-1"
        dangerouslySetInnerHTML={{ __html: title }}
      />
      <div
        className="text-gray-600 mb-2"
        dangerouslySetInnerHTML={{ __html: description }}
      />
      <div
        className="font-medium text-gray-800 mb-4"
        dangerouslySetInnerHTML={{ __html: question }}
      />

      <div className="mb-4">
        <img alt="Zona de trabajo" className="w-full max-w-md rounded border" />
      </div>

      <div className="text-sm font-medium text-gray-700 mb-1">Respuesta esperada:</div>
      <div className="flex flex-wrap items-center gap-2 bg-gray-100 p-3 rounded border">
        {parsedAnswer.map((item: any, index: number) => (
          <span key={index}>
            {item.kind === "icon" ? (
              <span className="font-bold text-gray-600">{item.value}</span>
            ) : item.kind === "figure" ? (
              <div style={{ width: 32, height: 32 }} className="flex items-center justify-center">
                {item.data.type === "circle" && (
                  <div className="w-8 h-8 rounded-full bg-red-400"></div>
                )}
                {item.data.type === "square" && (
                  <div className="w-8 h-8 bg-green-400"></div>
                )}
                {item.data.type === "triangle" && (
                  <div className="w-0 h-0 border-l-[16px] border-r-[16px] border-b-[32px] border-transparent border-b-yellow-400"></div>
                )}
                {item.data.type === "image" && item.data.src && (
                  <img
                    src={item.data.src}
                    alt="Figura respuesta"
                    className="w-full h-full object-contain rounded"
                  />
                )}
              </div>
            ) : null}
          </span>
        ))}
      </div>

      <div className="flex items-center justify-end gap-3">
        <button className="text-sm text-red-600 hover:underline flex items-center gap-1">
          <TrashIcon className="h-4 w-4" /> Eliminar
        </button>
      </div>
    </div>
  );
};