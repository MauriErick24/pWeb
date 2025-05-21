import React, { useState } from "react";
import { ChevronRightIcon, ChevronLeftIcon, Equal } from "lucide-react";
import { toast } from "sonner";
import { ModalPreview } from "./ModalPreview";

interface Figure {
  id: number;
  type: "circle" | "square" | "triangle";
  x: number;
  y: number;
  zindex: number;
  selected: boolean;
  size: number;
  rotation: number;
}

type ResponseAreaType = {
  figures: Figure[];
  setFigures: React.Dispatch<React.SetStateAction<Figure[]>>;
};

type IconType = ">" | "<" | ">=" | "<=" | "=";

type AnswerItem =
  | { kind: "figure"; data: Figure }
  | { kind: "icon"; value: IconType };

export const ResponseArea: React.FC<ResponseAreaType> = ({ figures }) => {
  const [answer, setAnswer] = useState<AnswerItem[]>([]);
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const handleClickOtion = (item: IconType) => {
    const last = answer[answer.length - 1];

    if (!last) {
      toast.error("Debes iniciar con una figura.");
      return;
    }

    if (last.kind === "icon") {
      toast.error("No puedes agregar dos operadores seguidos.");
      return;
    }

    setAnswer((prev) => [...prev, { kind: "icon", value: item }]);
  };

  const isValidAnswer = () => {
    if (answer.length === 0) return false;
    return answer[answer.length - 1].kind === "figure";
  };

  const handleSelect = (item: Figure) => {
    const last = answer[answer.length - 1];

    //  No permitir figura si la anterior también es figura
    if (last?.kind === "figure") {
      toast.error("No puedes agregar dos figuras seguidas.");
      return;
    }

    //  No repetir figura
    const alreadyUsed = answer.some(
      (el) => el.kind === "figure" && el.data.id === item.id
    );
    if (alreadyUsed) {
      toast.error("Esta figura ya fue utilizada.");
      return;
    }

    setAnswer((prev) => [...prev, { kind: "figure", data: item }]);
  };

  const handleReset = () => {
    setAnswer([]);
  };

  return (
    <div className="mt-8 bg-white rounded-lg shadow-sm border border-gray-100 p-4">
      <h2 className="text-xl font-medium text-indigo-800 mb-4">
        Escribe la respuesta utilizando orden parcial
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h3 className="font-medium text-gray-700 mb-2">RESPUESTA</h3>
          <div className="flex flex-wrap items-center gap-2 p-3 border border-gray-200 rounded-lg min-h-16">
            {answer.map((resp, index) => (
              <span key={index}>
                {resp.kind === "icon" ? (
                  (() => {
                    switch (resp.value) {
                      case ">":
                        return <ChevronRightIcon size={24} />;
                      case "<":
                        return <ChevronLeftIcon size={24} />;
                      case ">=":
                        return (
                          <span className="flex items-center">
                            <ChevronRightIcon size={20} />
                            <Equal size={20} />
                          </span>
                        );
                      case "<=":
                        return (
                          <span className="flex items-center">
                            <ChevronLeftIcon size={20} />
                            <Equal size={20} />
                          </span>
                        );
                      case "=":
                        return <Equal size={24} />;
                      default:
                        return null;
                    }
                  })()
                ) : (
                  <div
                    className={`
                                w-10 h-10
                                ${
                                  resp.data.type === "circle"
                                    ? "rounded-full bg-red-400"
                                    : ""
                                }
                                ${
                                  resp.data.type === "square"
                                    ? "bg-green-400"
                                    : ""
                                }
                                ${
                                  resp.data.type === "triangle"
                                    ? "w-0 h-0 border-l-[22px] border-r-[22px] border-b-[34px] border-transparent border-b-yellow-400"
                                    : ""
                                }
                              `}
                  ></div>
                )}
              </span>
            ))}

            {/* <div className="w-10 h-10 rounded-full bg-red-400"></div>
            <ChevronRightIcon size={24} className="text-gray-600" /> */}
            {/* <div className="flex-1"></div> */}
          </div>
          <div>
            <button
              className="text-sm text-indigo-600 hover:text-indigo-800  p-1 m-1"
              onClick={handleReset}
            >
              Reiniciar respuesta
            </button>
          </div>
        </div>
        <div>
          <h3 className="font-medium text-gray-700 mb-2">FIGURAS UTILIZADAS</h3>
          <div className="flex flex-wrap items-center gap-4 p-3 border border-gray-200 rounded-1g min-h-16">
            {/* <div className="w-10 h-10 rounded-full bg-red-400"></div>
            <div className="w-10 h-10 bg-green-400"></div> */}
            {figures.map((fig) => (
              <div
                key={fig.id}
                className={`
                        ${
                          fig.type === "circle" ? "rounded-full bg-red-400" : ""
                        }
                        ${fig.type === "square" ? "bg-green-400" : ""}
                        ${
                          fig.type === "triangle"
                            ? "w-0 h-0 border-l-[32px] border-r-[32px] border-b-[64px] border-transparent border-b-yellow-400"
                            : ""
                        }

                        cursor-pointer`}
                style={{
                  width: 50,
                  height: 50,
                }}
                onClick={() => handleSelect(fig)}
              ></div>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-6">
        <h3 className="font-medium text-gray-700 mb-2">OPCIONES</h3>
        <div className="flex flex-wrap gap-3">
          <button
            className="p-3 border border-gray-200 rounded-lg hover:bg-gray-50"
            onClick={() => handleClickOtion(">")}
          >
            <ChevronRightIcon size={24} />
          </button>
          <button
            className="p-3 border border-gray-200 rounded-lg hover:bg-gray-50"
            onClick={() => handleClickOtion("<")}
          >
            <ChevronLeftIcon size={24} />
          </button>
          <button
            className="p-3 border border-gray-200 rounded-lg hover:bg-gray-50 flex items-center"
            onClick={() => handleClickOtion(">=")}
          >
            <ChevronRightIcon size={24} />
            <Equal size={24} />
          </button>
          <button
            className="p-3 border border-gray-200 rounded-lg hover:bg-gray-50 flex items-center"
            onClick={() => handleClickOtion("<=")}
          >
            <ChevronLeftIcon size={24} />
            <Equal size={24} />
          </button>
          <button
            className="p-3 border border-gray-200 rounded-lg hover:bg-gray-50"
            onClick={() => handleClickOtion("=")}
          >
            <Equal size={24} />
          </button>
        </div>
      </div>
      <div className="mt-6 flex justify-end gap-2">
        <button className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition-colors"
          onClick={openModal}
        >
          Vista previa
        </button>
        <ModalPreview isOpen={isModalOpen} onClose={closeModal} title="Pregunta Interativa">
          <h1>dfdfdf</h1>
        </ModalPreview>
        <button
          className={`px-6 py-2 rounded-lg transition-colors ${
            isValidAnswer()
              ? "bg-green-600 text-white hover:bg-green-700"
              : "bg-gray-300 text-gray-500 cursor-not-allowed"
          }`}
          disabled={!isValidAnswer()}
        >
          Aceptar
        </button>
      </div>
    </div>
  );
};
