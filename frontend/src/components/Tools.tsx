import React from "react";
import { Btn1 } from "./Btn1";

interface handleProps {
  onClickBtnUp: React.MouseEventHandler<HTMLButtonElement>;
  onClickBtnDown: React.MouseEventHandler<HTMLButtonElement>;
  onClickBtnFront: React.MouseEventHandler<HTMLButtonElement>;
  onClickBtnBack: React.MouseEventHandler<HTMLButtonElement>;
  onClickBtnZoomIn: React.MouseEventHandler<HTMLButtonElement>;
  onClickBtnZoomOut: React.MouseEventHandler<HTMLButtonElement>;
  onClickBtnRotate: React.MouseEventHandler<HTMLButtonElement>;
  onClickBtnDelete: React.MouseEventHandler<HTMLButtonElement>;
}

export const Tools: React.FC<handleProps> = ({
  onClickBtnUp,
  onClickBtnDown,
  onClickBtnFront,
  onClickBtnBack,
  onClickBtnZoomIn,
  onClickBtnZoomOut,
  onClickBtnRotate,
  onClickBtnDelete,
}) => {
  return (
    <div className="flex flex-col gap-2 border-2 border-black-500 p-1">
      <div>
        <div className="font-bold">Posición</div>
        <Btn1 nameBtn={"Up"} onClickBtn={onClickBtnUp} typeBtn="up" />
        <Btn1 nameBtn={"Down"} onClickBtn={onClickBtnDown} typeBtn="down" />
        <Btn1 nameBtn={"Front"} onClickBtn={onClickBtnFront} typeBtn="front" />
        <Btn1 nameBtn={"Back"} onClickBtn={onClickBtnBack} typeBtn="back" />
      </div>

      <div>
        <div className="font-bold mt-2">Transformar</div>
        <Btn1
          nameBtn={"Zoom In"}
          onClickBtn={onClickBtnZoomIn}
          typeBtn="zoomin"
        />
        <Btn1
          nameBtn={"Zoom Out"}
          onClickBtn={onClickBtnZoomOut}
          typeBtn="zoomout"
        />
        <Btn1
          nameBtn={"Rotate"}
          onClickBtn={onClickBtnRotate}
          typeBtn="rotate"
        />
      </div>

      <div>
        <div className="font-bold mt-2">Otros</div>
        <Btn1
          nameBtn={"Delete"}
          onClickBtn={onClickBtnDelete}
          typeBtn="delete"
        />
      </div>
    </div>
  );
};
