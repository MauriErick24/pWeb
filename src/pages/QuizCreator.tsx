import React from "react";
import { NavBar } from "../components/NavBar";
import { Btn1 } from "../components/Btn1";
import { FigurePalette } from "../components/FigurePalette";
import { Canvas } from "../components/Canvas";
import { Tools } from "../components/Tools";

const QuizCreator = () => {
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
          <div className="basis-10 flex flex-col">
            <input type="file" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizCreator;
