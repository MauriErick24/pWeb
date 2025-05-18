import { NavBar } from "../components/NavBar";
import { FigurePalette } from "../components/FigurePalette";
import { Canvas } from "../components/Canvas";
import { useState } from "react";

const operators = [">", "<", ">=", "<=", "="];
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
type AnswerItem = Figure | string;

const QuizCreator = () => {
  // const [answer, setAnswer] = useState<string[]>([]);
  const [answer, setAnswer] = useState<AnswerItem[]>([]);

  const [figures, setFigures] = useState<Figure[]>([]);

  const clickOpcion = (item: string) => {
    setAnswer((prev) => [...prev, item]);
  };

  const handleSelect = (item: Figure) => {
    setAnswer((prev) => [...prev, item]);
  };

  return (
    <div>
      <NavBar />
      <div className="p-8">
        <h2 className="font-bold text-[25px] pb-5">Apila las figuras</h2>
        <div className="flex flex-row gap-5">
          <div className="basis-230">
            <Canvas figures={figures} setFigures={setFigures} />
          </div>
          <div className="basis-50">
            <FigurePalette />
          </div>
          {/* <div className="basis-10 flex flex-col">
            <input type="file" />
          </div> */}
        </div>
        <hr className="m-2" />
        <div className="m-2">
          <h2 className="font-bold text-[25px] pb-5">
            Escribe la respuesta utilizando orden parcial
            <div className="flex justify-around gap-2">
              <div className="w-2/3">
                RESPUESTA
                <div className="border-2 border-gray-400 rounded-sm p-2 h-20 flex gap-1">
                  {answer.map((resp, index) => (
                    <span
                      key={index}
                      className="border-3 border-gray-400 rounded-sm p-1 flex items-center justify-center"
                    >
                      {typeof resp === "string" ? (
                        resp
                      ) : (
                        <div
                          className={`w-6 h-6 ${
                            resp.type === "circle"
                              ? "rounded-full bg-red-400"
                              : resp.type === "square"
                              ? "bg-green-400"
                              : ""
                          } ${
                            resp.type === "triangle"
                              ? "w-0 h-0 border-l-[12px] border-r-[12px] border-b-[24px] border-transparent border-b-yellow-400"
                              : ""
                          }`}
                        ></div>
                      )}
                    </span>
                  ))}
                </div>
              </div>
              <div className="w-1/3">
                FIGURAS UTILIZADAS
                <div className="">
                  <div className="border-2 border-gray-400 rounded-sm p-2 mb-5 h-20 flex justify-around items-center">
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
                  OPCIONES
                  <div className="border-2 border-gray-400 rounded-sm p-2 flex justify-around">
                    {operators.map((op) => (
                      <button
                        className="border-3 border-gray-400 rounded-sm p-2 w-10 h-10 flex items-center justify-center"
                        onClick={() => clickOpcion(op)}
                      >
                        {op}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default QuizCreator;
