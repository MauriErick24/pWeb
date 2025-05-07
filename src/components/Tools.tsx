import React from "react";
import { Btn1 } from "./Btn1";

interface handleProps {
  onClickBtnUp: React.MouseEventHandler<HTMLButtonElement>;
  onClickBtnDown: React.MouseEventHandler<HTMLButtonElement>;
  onClickBtnFront: React.MouseEventHandler<HTMLButtonElement>;
  onClickBtnBack: React.MouseEventHandler<HTMLButtonElement>;
}

export const Tools: React.FC<handleProps> = ({
  onClickBtnUp,
  onClickBtnDown,
  onClickBtnFront,
  onClickBtnBack,
}) => {
  return (  
    <div className="flex flex-col gap-2 border-2 border-black-500 p-1">
      Posicion
      <Btn1 nameBtn={"Up"} onClickBtn={onClickBtnUp} typeBtn="up"/>
      <Btn1 nameBtn={"Down"} onClickBtn={onClickBtnDown} typeBtn="down"/>
      <Btn1 nameBtn={"Front"} onClickBtn={onClickBtnFront} typeBtn="front"/>
      <Btn1 nameBtn={"Back"} onClickBtn={onClickBtnBack} typeBtn="back"/>
      <Btn1 nameBtn={"Delete"} onClickBtn={() => console.log("Delete")} typeBtn="delete"/>
    </div>
  );
};
