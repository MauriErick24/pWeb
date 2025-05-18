import { BookOpenIcon, UserIcon } from "lucide-react";
export const Header = () => {
  return (
    <header className="bg-gradient-to-r from-indigo-600 to-blue-500 text-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <BookOpenIcon size={24} />
          <span className="text-xl font-semibold">EduShapes</span>
        </div>
        <nav className="hidden md:flex items-center space-x-6">
          <a href="#" className="hover:text-indigo-100 transition-colors">
            Inicio
          </a>
          <a href="#" className="hover:text-indigo-100 transition-colors">
            Ejercicios
          </a>
          <a href="#" className="hover:text-indigo-100 transition-colors">
            Recursos
          </a>
          <a href="#" className="hover:text-indigo-100 transition-colors">
            Ayuda
          </a>
        </nav>
        <button className="bg-white text-indigo-600 px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-indigo-50 transition-colors">
          <UserIcon size={18} />
          <span>Iniciar Sesión</span>
        </button>
      </div>
    </header>
  );
};
