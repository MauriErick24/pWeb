import React, { JSX } from "react";

interface Btn1Props {
  nameBtn: string;
  typeBtn: "up" | "down" | "front" | "back" | "delete"; // 🔧 claves válidas
  onClickBtn: React.MouseEventHandler<HTMLButtonElement>;
}

const svgIcons: Record<
  "up" | "down" | "front" | "back" | "delete",
  JSX.Element
> = {
  up: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
    >
      <path
        fill="currentColor"
        d="M12.75 5.82v8.43a.75.75 0 1 1-1.5 0V5.81L8.99 8.07A.75.75 0 1 1 7.93 7l2.83-2.83a1.75 1.75 0 0 1 2.47 0L16.06 7A.75.75 0 0 1 15 8.07l-2.25-2.25zM15 10.48l6.18 3.04a1 1 0 0 1 0 1.79l-7.86 3.86a3 3 0 0 1-2.64 0l-7.86-3.86a1 1 0 0 1 0-1.8L9 10.49v1.67L4.4 14.4l6.94 3.42c.42.2.9.2 1.32 0l6.94-3.42-4.6-2.26v-1.67z"
      ></path>
    </svg>
  ),
  down: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
    >
      <path
        fill="currentColor"
        d="M12.75 18.12V9.75a.75.75 0 1 0-1.5 0v8.37l-2.26-2.25a.75.75 0 0 0-1.06 1.06l2.83 2.82c.68.69 1.79.69 2.47 0l2.83-2.82A.75.75 0 0 0 15 15.87l-2.25 2.25zM15 11.85v1.67l6.18-3.04a1 1 0 0 0 0-1.79l-7.86-3.86a3 3 0 0 0-2.64 0L2.82 8.69a1 1 0 0 0 0 1.8L9 13.51v-1.67L4.4 9.6l6.94-3.42c.42-.2.9-.2 1.32 0L19.6 9.6 15 11.85z"
      ></path>
    </svg>
  ),
  front: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
    >
      <path
        fill="currentColor"
        d="M12.75 3.82v9.43a.75.75 0 1 1-1.5 0V3.81L8.99 6.07A.75.75 0 1 1 7.93 5l2.83-2.83a1.75 1.75 0 0 1 2.47 0L16.06 5A.75.75 0 0 1 15 6.07l-2.25-2.25zM15 8.48l6.18 3.04a1 1 0 0 1 0 1.79l-7.86 3.86a3 3 0 0 1-2.64 0l-7.86-3.86a1 1 0 0 1 0-1.8L9 8.49v1.67L4.4 12.4l6.94 3.42c.42.2.9.2 1.32 0l6.94-3.42-4.6-2.26V8.48zm4.48 7.34 1.7.83a1 1 0 0 1 0 1.8l-7.86 3.86a3 3 0 0 1-2.64 0l-7.86-3.86a1 1 0 0 1 0-1.8l1.7-.83 1.7.83-1.82.9 6.94 3.41c.42.2.9.2 1.32 0l6.94-3.41-1.82-.9 1.7-.83z"
      ></path>
    </svg>
  ),
  back: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
    >
      <path
        fill="currentColor"
        d="m19.48 10.82 1.7.83a1 1 0 0 1 0 1.8L15 16.49V14.8l4.6-2.26-1.82-.9 1.7-.83zm-14.96 0-1.7.83a1 1 0 0 0 0 1.8L9 16.49V14.8l-4.6-2.26 1.82-.9-1.7-.83zm8.23 9.5L15 18.07a.75.75 0 0 1 1.06 1.06l-2.83 2.83c-.68.68-1.79.68-2.47 0l-2.83-2.83a.75.75 0 0 1 1.06-1.06l2.26 2.26V6.9a.75.75 0 1 1 1.5 0v13.43zM15 11.35V9.68l4.6-2.27L12.66 4c-.42-.2-.9-.2-1.32 0L4.4 7.4 9 9.68v1.67L2.82 8.3a1 1 0 0 1 0-1.8l7.86-3.86a3 3 0 0 1 2.64 0l7.86 3.87a1 1 0 0 1 0 1.79L15 11.35z"
      ></path>
    </svg>
  ),

  delete: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
    >
      <path
        fill="currentColor"
        d="M8 5a3 3 0 0 1 3-3h2a3 3 0 0 1 3 3h4.25a.75.75 0 1 1 0 1.5H19V18a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3V6.5H3.75a.75.75 0 0 1 0-1.5H8zM6.5 6.5V18c0 .83.67 1.5 1.5 1.5h8c.83 0 1.5-.67 1.5-1.5V6.5h-11zm3-1.5h5c0-.83-.67-1.5-1.5-1.5h-2c-.83 0-1.5.67-1.5 1.5zm-.25 4h1.5v8h-1.5V9zm4 0h1.5v8h-1.5V9z"
      ></path>
    </svg>
  ),
};

export const Btn1: React.FC<Btn1Props> = ({ nameBtn, typeBtn, onClickBtn }) => {
  return (
    <div className="flex flex-col items-center">
      <button
        className="w-15 border-2 border-sky-500 rounded-lg flex flex-col items-center"
        onClick={onClickBtn}
      >
        {svgIcons[typeBtn]}
        {nameBtn}
      </button>
    </div>
  );
};
