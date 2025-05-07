import { Plus } from "lucide-react";
import { NavBar } from "../components/NavBar";

const preguntas = [
  { title: "Que es la Encapsulación?", bg: "from-purple-500 to-pink-500" },
  {
    title: "Que son las Clases Abstractas?",
    bg: "from-lime-400 to-emerald-600",
  },
  { title: "Que son las Interfaces?", bg: "from-red-200 to-red-500" },
  { title: "Que es la Herencia?", bg: "from-cyan-300 to-green-500" },
  {
    title: "Cual es la diferencia entre una Clase y un Objeto?",
    bg: "from-blue-300 to-indigo-600",
  },
  { title: "Que son las Interfaces?", bg: "from-purple-700 to-pink-600" },
  { title: "Que son las Interfaces?", bg: "from-orange-400 to-green-400" },
];

export const Cuestionario = () => {
  return (
    <>
      <NavBar />
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">
          Cuestionario de POO
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {preguntas.map((pregunta) => (
            <div
              className={`rounded-2xl bg-gradient-to-br ${pregunta.bg} text-white p-4 shadow-lg flex flex-col justify-between min-h-[180px] hover:scale-105 transition-transform duration-300`}
            >
              <div className="text-center mt-4 font-semibold text-xl">
                {pregunta.title}
              </div>
            </div>
          ))}

          {/* Tarjeta para agregar una nueva categoría */}
          <button className="rounded-xl p-4 bg-gradient-to-br from-gray-300 to-gray-400 text-gray-800 shadow-md hover:scale-105 transition-transform duration-300 flex flex-col items-center justify-center space-y-2">
            <Plus size={40} />
            <span className="text-lg font-medium">Agregar</span>
          </button>
        </div>
      </div>
    </>
  );
};
