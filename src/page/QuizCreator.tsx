import { useState } from "react";
import { Header } from "../components/Header";
import { ControlPanel } from "../components/ControlPanel";
import { Workspace } from "../components/Workspace";
import { ResponseArea } from "../components/ResponseArea";
import Palette from "../components/Palette";
import { QuestionDetails } from "../components/QuestionDetails";

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

const QuizCreator = () => {
  const [figures, setFigures] = useState<Figure[]>([]);

  return (
    <div>
      <div className="flex flex-col w-full min-h-screen bg-gray-50">
        <Header />
        <main className="flex-1 container mx-auto px-4 py-6 md:px-6">
          <QuestionDetails />

          <h1 className="text-2xl font-bold text-indigo-800 mb-6">
            Apila las figuras
          </h1>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            <div className="lg:col-span-2">
              <ControlPanel setFigures={setFigures} figures={[]} />
            </div>
            <div className="lg:col-span-7">
              <Workspace figures={figures} setFigures={setFigures} />
            </div>
            <div className="lg:col-span-3 bg-white rounded-lg shadow-sm p-4 border border-gray-100">
              <h2 className="font-semibold text-gray-700 mb-3">
                Figuras disponibles
              </h2>
              <Palette />
            </div>
          </div>
          <ResponseArea figures={figures} />
        </main>
      </div>
    </div>
  );
};

export default QuizCreator;
