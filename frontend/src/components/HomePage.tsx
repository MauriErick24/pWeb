import { Link } from "react-router-dom";

export const HomePage = () => {
  return (
    <section className="">
      <div className="container mx-auto flex flex-col items-center px-4 py-16 text-center md:py-32 md:px-10 lg:px-32 xl:max-w-3xl">
        <h1 className="text-4xl font-bold leading-none sm:text-5xl">
          EDITOR DE PREGUNTAS INTERACTIVAS
        </h1>
        <p className="px-8 mt-8 mb-12 text-lg">
          Programación Web
        </p>
        <div className="flex flex-wrap justify-center">
          <Link to="/question" className="px-8 py-3 m-2 text-lg font-semibold rounded-2xl cursor-pointer border-2 bg-indigo-600 text-white hover:bg-indigo-700">
            Mis Preguntas
          </Link>
        </div>
      </div>
    </section>
  );
};
