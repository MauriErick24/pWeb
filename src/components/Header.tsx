import React from "react";

export const Header = () => {
  return (
    <section className="">
      <div className="container mx-auto flex flex-col items-center px-4 py-16 text-center md:py-32 md:px-10 lg:px-32 xl:max-w-3xl">
        <h1 className="text-4xl font-bold leading-none sm:text-5xl">
          DESARROLLO DE JUEGO EDUCATIVO PROGRAMACION WEB
          
        </h1>
        <p className="px-8 mt-8 mb-12 text-lg">
          Cupiditate minima voluptate temporibus quia? Architecto beatae esse ab
          amet vero eaque explicabo!
        </p>
        <div className="flex flex-wrap justify-center">
          <button className="px-8 py-3 m-2 text-lg font-semibold rounded-2xl bg-sky-300 cursor-pointer border-2 ">
            Get started
          </button>
          <button className="px-8 py-3 m-2 text-lg border rounded-2xl cursor-pointer hover:bg-amber-300">
            Learn more
          </button>
        </div>
      </div>
    </section>
  );
};
