import React from "react";
import { Btn1 } from "./Btn1";

interface handleProps {
  onClickBtn: React.MouseEventHandler<HTMLButtonElement>;
}

export const Tools: React.FC<handleProps> = ({ onClickBtn }) => {
  return (
    <div className="flex flex-col gap-2 border-2 border-black-500 p-1">
      Posicion
      <Btn1 nameBtn={"Up"} onClickBtn={onClickBtn} />
      <Btn1 nameBtn={"Down"} onClickBtn={() => console.log("Down")} />
      <Btn1 nameBtn={"Front"} onClickBtn={() => console.log("Front")} />
      <Btn1 nameBtn={"Back"} onClickBtn={() => console.log("Back")} />
      <Btn1 nameBtn={"Delete"} onClickBtn={() => console.log("Delete")} />
    </div>
  );
};
