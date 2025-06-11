import { useState } from "react";
import api from "../api/api";
import { useNavigate } from "react-router-dom";

interface RegisterForm {
  nombre: string;
  email: string;
  password: string;
  role: "PROFESOR" | "ADMINISTRADOR";
}

const Register = () => {
  const [form, setForm] = useState<RegisterForm>({
    nombre: "",
    email: "",
    password: "",
    role: "PROFESOR",
  });
  const navigate = useNavigate();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await api.post("/auth/register", form);
    navigate("/login");
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md space-y-4"
      >
        <h2 className="text-2xl font-bold text-center">Registrarse</h2>
        <input
          name="nombre"
          placeholder="Nombre completo"
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-400"
        />
        <input
          name="email"
          placeholder="Correo electrónico"
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-400"
        />
        <input
          name="password"
          type="password"
          placeholder="Contraseña"
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-400"
        />
        <select
          name="role"
          value={form.role}
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-400"
        >
          <option value="PROFESOR">Profesor</option>
          <option value="ADMINISTRADOR">Administrador</option>
        </select>
        <button
          type="submit"
          className="w-full bg-green-600 text-white p-3 rounded-lg hover:bg-green-700 transition"
        >
          Registrarse
        </button>
      </form>
    </div>
  );
};

export default Register;
