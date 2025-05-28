import { useState } from "react";
import { toast } from "sonner";
import { TrashIcon } from "lucide-react";

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

type ContentPreviewType = {
  figures: Figure[];
  image: string | null;
};

type AnswerItem =
  | { kind: "figure"; data: Figure };

export const ContentPreview: React.FC<ContentPreviewType> = ({ figures, image }) => {
  const [answer, setAnswer] = useState<AnswerItem[]>([]);
  
  const handleSelect = (item: Figure) => {
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
    <div>
      <div className="mt-8 bg-white rounded-lg shadow-sm border border-gray-100 p-4">
        {/*aqui va la foto de las figuras utilizadas en el area de trabajo*/}
        {image ? (
          <img src={image} alt="Área de trabajo" className="w-full rounded shadow" />
        ) : (
          <p className="text-gray-400">No hay imagen para mostrar</p>
        )}
      </div>
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
                {<div
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
                }
              </span>
            ))}
          </div>
          <div>
            <button
              className="flex items-center gap-2 text-sm text-indigo-600 hover:text-indigo-800 p-1 m-1"
              onClick={handleReset}
            >
              <TrashIcon size={18} />
              <span>Reiniciar respuesta</span>
            </button>
          </div>
        </div>
        <div>
          <h3 className="font-medium text-gray-700 mb-2">FIGURAS UTILIZADAS</h3>
          <div className="flex flex-wrap items-center gap-4 p-3 border border-gray-200 rounded-1g min-h-16">
            {figures.map((fig) => (
              <div
                key={fig.id}
                className={`
                        ${
                          fig.type === "circle" ? "rounded-full bg-red-400" : ""
                        }
                        ${
                          fig.type === "square" ? "bg-green-400" : ""
                        }
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
    </div>
    </div>
  );
};
