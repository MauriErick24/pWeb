import React from "react";
import { NavBar } from "../components/NavBar";
import { Btn1 } from "../components/Btn1";
import { FigurePalette } from "../components/FigurePalette";
import { Canvas } from "../components/Canvas";

const QuizCreator = () => {
  return (
    <div>
      <NavBar />
      <div className="p-8">
        <h2 className="font-bold text-[25px] pb-5">Apila las figuras</h2>
        <div className="flex flex-row gap-5">
          <div className="flex flex-col gap-2 border-2 border-black-500 p-1">
            Posicion
            <Btn1 nameBtn={"Up"} onClickBtn={() => console.log("Up")} />
            <Btn1 nameBtn={"Down"} onClickBtn={() => console.log("Down")} />
            <Btn1 nameBtn={"Front"} onClickBtn={() => console.log("Front")} />
            <Btn1 nameBtn={"Back"} onClickBtn={() => console.log("Back")} />
            <Btn1 nameBtn={"Delete"} onClickBtn={() => console.log("Delete")} />
          </div>
          <div className="basis-230">
            Espacio trabajo
            <Canvas />
          </div>
          <div className="basis-50">
            Figuras
            <FigurePalette />
          </div>
          <div className="basis-10">Carga</div>
        </div>
      </div>
    </div>
  );
};

export default QuizCreator;
