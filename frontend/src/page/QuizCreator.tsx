import { useState, useRef } from "react";
import { Header } from "../components/Header";
import { ControlPanel } from "../components/ControlPanel";
import { Workspace } from "../components/Workspace";
import { ResponseArea } from "../components/ResponseArea";
import Palette from "../components/Palette";
import { QuestionDetails } from "../components/QuestionDetails";

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

const QuizCreator = () => {
  const [figures, setFigures] = useState<Figure[]>([]);
  const [question, setQuestion] = useState<Question | null>(null);
  const canvasRef = useRef<HTMLDivElement | null>(null);

  return (
    <div>
      <div className="flex flex-col w-full min-h-screen bg-gray-50">
        <Header />
        <main className="flex-1 container mx-auto px-4 py-6 md:px-6">
          <QuestionDetails
            // question={question}
            setQuestion={setQuestion}
          />

          <h1 className="text-2xl font-bold text-indigo-800 mb-6">
            Apila las figuras
          </h1>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            <div className="lg:col-span-2">
              <ControlPanel setFigures={setFigures} figures={figures} />
            </div>
            <div className="lg:col-span-7">
              <Workspace
                figures={figures}
                setFigures={setFigures}
                canvasRef={canvasRef}
              />
            </div>
            <div className="lg:col-span-3 bg-white rounded-lg shadow-sm p-4 border border-gray-100">
              <h2 className="font-semibold text-gray-700 mb-3">
                Figuras disponibles
              </h2>
              <Palette onAddImage={() => {}} />
            </div>
          </div>
          <ResponseArea
            figures={figures}
            canvasRef={canvasRef}
            question={question}
          />
        </main>
      </div>
    </div>
  );
};

export default QuizCreator;
