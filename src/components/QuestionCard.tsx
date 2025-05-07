import { FC } from "react";
import { TrashIcon, PencilIcon } from "@heroicons/react/24/solid"; // npm install @heroicons/react

type QuestionType = "opcion_multiple" | "completar";

interface QuestionCardProps {
  id: number;
  question: string;
  type: QuestionType;
  options: string[];
  correctAnswer: string;
}

export const QuestionCard: FC<QuestionCardProps> = ({
  question,
  type,
  options,
  correctAnswer,
}) => {
  return (
    <div className="border rounded-lg p-4 shadow-md mb-6 bg-white">
      <div className="flex flex-col md:flex-row md:justify-between items-start md:items-center mb-4">
        <span className="text-sm font-medium text-gray-500">
          {type === "opcion_multiple" ? "1. Opción múltiple" : "2. Arrastrar y soltar"}
        </span>
        <div className="flex items-center gap-2 mt-2 md:mt-0">
          <select className="text-sm border border-gray-300 rounded px-2 py-1">
            <option>30 segundos</option>
            <option>1 minuto</option>
            <option>1.5 minutos</option>
          </select>
          <select className="text-sm border border-gray-300 rounded px-2 py-1">
            <option>1 punto</option>
            <option>2 puntos</option>
          </select>
        </div>
      </div>

      <p className="font-semibold mb-4">{question}</p>

      <ul className="space-y-2 mb-4">
        {options.map((opt, index) => (
          <li
            key={index}
            className={`px-3 py-2 rounded border ${
              opt === correctAnswer
                ? "border-green-500 bg-green-50 text-green-700"
                : "border-red-300 bg-red- text-red-700"
            }`}
          >
            {opt}
          </li>
        ))}
      </ul>

      <div className="flex items-center justify-end gap-3">
        <button className="text-sm text-blue-600 hover:underline flex items-center gap-1">
          <PencilIcon className="h-4 w-4" /> Editar
        </button>
        <button className="text-sm text-red-600 hover:underline flex items-center gap-1">
          <TrashIcon className="h-4 w-4" /> Eliminar
        </button>
      </div>
    </div>
  );
};