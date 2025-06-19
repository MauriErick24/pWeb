// components/AddQuestionMenu.tsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";

interface Props {
  routes: Record<string, string>; // { interactiva: "/quiz/creator", fdg: "/cf" }
}

export const AddQuestionMenu = ({ routes }: Props) => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const handleClick = (type: keyof typeof routes) => {
    setOpen(false);
    navigate(routes[type]); // Redireccionar a la vista adecuada
  };

  return (
    <div className="relative">
      <button
        //className="bg-purple-200 px-4 py-2 rounded"
        className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded-lg transition-all"
        onClick={() => setOpen(!open)}
      >
        + Añadir pregunta
      </button>
      {open && (
        <div className="absolute right-0 bg-white shadow rounded w-48 mt-2 z-50">
          <button
            className="block w-full px-4 py-2 hover:bg-gray-100 text-left"
            onClick={() => handleClick("opcion_multiple")}
          >
            Opción múltiple
          </button>
          <button
            className="block w-full px-4 py-2 hover:bg-gray-100 text-left"
            onClick={() => handleClick("interactiva")}
          >
            Interactiva
          </button>
        </div>
      )}
    </div>
  );
};

//export default AddQuestionMenu;
