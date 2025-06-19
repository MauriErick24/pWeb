interface PruebaProps {
  imagen: string | null;
}

export const Prueba = ({ imagen }: PruebaProps) => {
  return (
    <div>
      <p>En el div de abajo debe cargarse la captura</p>
      <div>
        {imagen ? (
          <img src={imagen} alt="Captura del card" className="mt-4 w-full" />
        ) : (
          <p className="text-sm text-gray-500">Todavía no se ha capturado nada.</p>
        )}
      </div>
    </div>
  );
};
