import { NavBar } from "../components/NavBar";
import { FigurePalette } from "../components/FigurePalette";
import { Canvas } from "../components/Canvas";
import { useState } from "react";

const operators = [">", "<", ">=", "<=", "="];

const QuizCreator = () => {
  const [answer, setAnswer] = useState<string[]>([]);

  const clickOpcion = (item: string) => {
    console.log("Click");
    setAnswer((prev) => [...prev, item]);
  };

  return (
    <div>
      <NavBar />
      <div className="p-8">
        <h2 className="font-bold text-[25px] pb-5">Apila las figuras</h2>
        <div className="flex flex-row gap-5">
          <div className="basis-230">
            <Canvas />
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
                  {answer.map((resp) => (
                    <span className="border-3 border-gray-400 rounded-sm p-1">
                      {resp}
                    </span>
                  ))}
                </div>
              </div>
              <div className="w-1/3">
                FIGURAS UTILIZADAS
                <div className="">
                  <div className="border-2 border-gray-400 rounded-sm p-2 mb-5 h-20">
                    asdf
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
