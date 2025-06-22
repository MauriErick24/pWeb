import React, { useState } from "react";
import { ChevronRightIcon, ChevronLeftIcon, Equal } from "lucide-react";
import { toast } from "sonner";
import { ModalPreview } from "./ModalPreview";
import { ContentPreview } from "./ContentPreview";
import html2canvas from "html2canvas-pro";

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

// interface dataToSave {
//   img: string;
// }

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

type ResponseAreaType = {
  figures: Figure[];
  // setFigures: React.Dispatch<React.SetStateAction<Figure[]>>;
  canvasRef: React.RefObject<HTMLDivElement | null>;
  question: Question | null;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
};

type IconType = ">" | "<" | ">=" | "<=" | "=";

type AnswerItem =
  | { kind: "figure"; data: Figure }
  | { kind: "icon"; value: IconType };

export const ResponseArea: React.FC<ResponseAreaType> = ({
  figures,
  canvasRef,
  question,
  setLoading,
}) => {
  const [answer, setAnswer] = useState<AnswerItem[]>([]);
  const [isModalOpen, setModalOpen] = useState(false);
  const [image, setImage] = useState<string | null>(null);
  // const [data, setData] = useState<dataToSave | null>(null);

  const openModal = async () => {
    setLoading(true);

    try {
      if (canvasRef.current) {
        const canvas = await html2canvas(canvasRef.current);
        const dataURL = canvas.toDataURL("image/png");
        setImage(dataURL);
        setModalOpen(true);
      } else {
        toast.error("No se pudo capturar el área de trabajo.");
      }
    } catch (error) {
      toast.error("Ocurrió un error al capturar la imagen.");
      console.error(error);
    } finally {
      setLoading(false);
    }
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

    if (last?.kind === "figure") {
      toast.error("No puedes agregar dos figuras seguidas.");
      return;
    }

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

  const handleResetLast = () => {
    if (answer.length > 0) {
      setAnswer((prev) => prev.slice(0, -1));
    }
  };

  const handleClickSave = async () => {
    if (canvasRef.current) {
      const canvas = await html2canvas(canvasRef.current);
      const dataURL = canvas.toDataURL("image/png");
      const data = { img: dataURL, question };

      // console.log("🚀 ~ handleClickSave ~ question:", question);
      console.log("🚀 ~ handleClickSave ~ data:", data);
    } else {
      toast.error("No se pudo capturar el área de trabajo.");
    }
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
                    style={{ width: 40, height: 40 }}
                    className="flex items-center justify-center"
                  >
                    {resp.data.type === "circle" ? (
                      <div className="w-10 h-10 rounded-full bg-red-400"></div>
                    ) : resp.data.type === "square" ? (
                      <div className="w-10 h-10 bg-green-400"></div>
                    ) : resp.data.type === "triangle" ? (
                      <div className="w-0 h-0 border-l-[20px] border-r-[20px] border-b-[40px] border-transparent border-b-yellow-400"></div>
                    ) : resp.data.type === "image" && resp.data.src ? (
                      <img
                        src={resp.data.src}
                        alt="Respuesta figura"
                        className="w-full h-full object-contain rounded"
                      />
                    ) : null}
                  </div>
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
            <button
              className="text-sm text-indigo-600 hover:text-indigo-800  p-1 m-1"
              onClick={handleResetLast}
            >
              Borrar ultimo
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
                className={`cursor-pointer`}
                /*className={`
                        ${
                          fig.type === "circle" ? "rounded-full bg-red-400" : ""
                        }
                        ${fig.type === "square" ? "bg-green-400" : ""}
                        ${
                          fig.type === "triangle"
                            ? "w-0 h-0 border-l-[32px] border-r-[32px] border-b-[64px] border-transparent border-b-yellow-400"
                            : ""
                        }

                        cursor-pointer`}*/
                style={{
                  width: 50,
                  height: 50,
                }}
                onClick={() => handleSelect(fig)}
              >
                {fig.type === "circle" ? (
                  <div className="w-full h-full rounded-full bg-red-400"></div>
                ) : fig.type === "square" ? (
                  <div className="w-full h-full bg-green-400"></div>
                ) : fig.type === "triangle" ? (
                  <div className="w-0 h-0 border-l-[25px] border-r-[25px] border-b-[50px] border-transparent border-b-yellow-400"></div>
                ) : fig.type === "image" && fig.src ? (
                  <img
                    src={fig.src}
                    alt="Imagen figura"
                    className="w-full h-full object-contain rounded"
                  />
                ) : null}
              </div>
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
          {/* <button
            className="p-3 border border-gray-200 rounded-lg hover:bg-gray-50"
            onClick={() => handleClickOtion("<")}
          >
            <ChevronLeftIcon size={24} />
          </button> */}
          {/* <button
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
          </button> */}
          <button
            className="p-3 border border-gray-200 rounded-lg hover:bg-gray-50"
            onClick={() => handleClickOtion("=")}
          >
            <Equal size={24} />
          </button>
        </div>
      </div>
      <div className="mt-6 flex justify-end gap-2">
        <button
          className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition-colors"
          onClick={openModal}
        >
          Vista previa
        </button>
        <ModalPreview
          isOpen={isModalOpen}
          onClose={closeModal}
          title="Pregunta Interativa"
        >
          <ContentPreview figures={figures} image={image} />
        </ModalPreview>
        <button
          className={`px-6 py-2 rounded-lg transition-colors ${
            isValidAnswer()
              ? "bg-green-600 text-white hover:bg-green-700"
              : "bg-gray-300 text-gray-500 cursor-not-allowed"
          }`}
          disabled={!isValidAnswer()}
          onClick={handleClickSave}
        >
          Aceptar
        </button>
      </div>
    </div>
  );
};
