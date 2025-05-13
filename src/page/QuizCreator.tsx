import { NavBar } from "../components/NavBar";
import { FigurePalette } from "../components/FigurePalette";
import { Canvas } from "../components/Canvas";

const QuizCreator = () => {
  const clickOpcion: React.MouseEventHandler<HTMLButtonElement> = () => {
    console.log("Click");
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
                <div className="border-2 border-gray-400 rounded-sm p-2 h-20">
                  asdf
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
                    <button
                      className="border-3 border-gray-400 rounded-sm p-2 w-10 h-10 flex items-center justify-center"
                      onClick={(e) => clickOpcion(e)}
                    >
                      {">"}
                    </button>
                    <button className="border-3 border-gray-400 rounded-sm p-2 w-10 h-10 flex items-center justify-center">
                      {"<"}
                    </button>
                    <button className="border-3 border-gray-400 rounded-sm p-2 w-10 h-10 flex items-center justify-center">
                      {">="}
                    </button>
                    <button className="border-3 border-gray-400 rounded-sm p-2 w-10 h-10 flex items-center justify-center">
                      {"<="}
                    </button>
                    <button className="border-3 border-gray-400 rounded-sm p-2 w-10 h-10 flex items-center justify-center">
                      {"="}
                    </button>
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
