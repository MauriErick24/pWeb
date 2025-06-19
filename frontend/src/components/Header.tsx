import { BookOpenIcon, UserIcon, LogOutIcon } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export const Header = () => {
  const { isAuthenticated, user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  const getInitial = (name: string | undefined) =>
    name?.charAt(0)?.toUpperCase() || "?";

  return (
    <header className="bg-gradient-to-r from-indigo-600 to-blue-500 text-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <BookOpenIcon size={24} />
          <Link to="/" className="text-xl font-semibold">
            EduShapes
          </Link>
        </div>

        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/" className="hover:text-indigo-100 transition-colors">
            Inicio
          </Link>
          <Link to="#" className="hover:text-indigo-100 transition-colors">
            Ejercicios
          </Link>
          <Link to="#" className="hover:text-indigo-100 transition-colors">
            Recursos
          </Link>
          <Link to="#" className="hover:text-indigo-100 transition-colors">
            Ayuda
          </Link>
        </nav>

        <div className="flex items-center space-x-4">
          {!isAuthenticated ? (
            <>
              <Link
                to="/login"
                className="bg-white text-indigo-600 px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-indigo-50 transition-colors"
              >
                <UserIcon size={18} />
                <span>Iniciar Sesión</span>
              </Link>
              <Link
                to="/register"
                className="bg-indigo-100 text-indigo-700 px-4 py-2 rounded-lg hover:bg-indigo-200 transition-colors"
              >
                Registrarse
              </Link>
            </>
          ) : (
            <div className="flex items-center space-x-3">
              <div className="w-9 h-9 bg-indigo-800 text-white rounded-full flex items-center justify-center font-bold">
                {getInitial(user?.nombre)}
              </div>
              <span className="font-medium">{user?.nombre}</span>
              <button
                onClick={handleLogout}
                className="bg-red-500 text-white px-3 py-2 rounded-lg hover:bg-red-600 transition-colors flex items-center space-x-1"
              >
                <LogOutIcon size={16} />
                <span>Cerrar sesión</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};
