import { toast } from "sonner";
import {
  ArrowUpIcon,
  ArrowDownIcon,
  ZoomInIcon,
  ZoomOutIcon,
  RotateCwIcon,
  TrashIcon,
  Scissors,
} from "lucide-react";

const API_BGREMOVER = "http://localhost:5000/remove-background";

interface Figure {
  id: number;
  type: "circle" | "square" | "triangle" | "image";
  x: number;
  y: number;
  zindex: number;
  selected: boolean;
  size: number;
  rotation: number;
  src?: string;
}

type ControlPanelType = {
  figures: Figure[];
  setFigures: React.Dispatch<React.SetStateAction<Figure[]>>;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
};

export const ControlPanel: React.FC<ControlPanelType> = ({
  setFigures,
  figures,
  setLoading,
}) => {
  const handleUp = () => {
    setFigures((prev) =>
      prev.map((fig) =>
        fig.selected ? { ...fig, zindex: fig.zindex + 1 } : fig
      )
    );
  };

  const handleDown = () => {
    setFigures((prev) =>
      prev.map((fig) =>
        fig.selected ? { ...fig, zindex: fig.zindex - 1 } : fig
      )
    );
  };

  const handleFront = () => {
    setFigures((prev) =>
      prev.map((fig) =>
        fig.selected ? { ...fig, zindex: fig.zindex + 100 } : fig
      )
    );
  };

  const handleBack = () => {
    setFigures((prev) =>
      prev.map((fig) => (fig.selected ? { ...fig, zindex: 1 } : fig))
    );
  };

  const handleZoomIn = () => {
    setFigures((prev) =>
      prev.map((fig) => (fig.selected ? { ...fig, size: fig.size + 10 } : fig))
    );
  };

  const handleZoomOut = () => {
    setFigures((prev) =>
      prev.map((fig) =>
        fig.selected ? { ...fig, size: Math.max(10, fig.size - 10) } : fig
      )
    );
  };

  const handleRotate = () => {
    setFigures((prev) =>
      prev.map((fig) =>
        fig.selected ? { ...fig, rotation: (fig.rotation + 45) % 360 } : fig
      )
    );
  };

  const handleRemoveBackground = async () => {
    const selectedImage = figures.find(
      (fig) => fig.selected && fig.type === "image"
    );

    if (!selectedImage || !selectedImage.src) {
      toast.warning("Selecciona una imagen para quitar el fondo.");
      return;
    }

    try {
      setLoading(true);
      const blob = await fetch(selectedImage.src).then((res) => res.blob());
      const formData = new FormData();
      formData.append("image", blob, "image.png");

      const response = await fetch(API_BGREMOVER, {
        method: "POST",
        body: formData,
      });

      const resultBlob = await response.blob();
      const newUrl = URL.createObjectURL(resultBlob);

      setFigures((prev) =>
        prev.map((fig) =>
          fig.id === selectedImage.id ? { ...fig, src: newUrl } : fig
        )
      );
      toast.success("El fondo se ha quitado.");
    } catch (error) {
      console.error("Error al quitar fondo:", error);
      toast.error(
        "Hubo un error al quitar el fondo. Revise su conexion con el servidor."
      );
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = () => {
    setFigures((prev) => prev.filter((fig) => !fig.selected));
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-4">
      <div className="mb-6">
        <h3 className="text-sm font-medium text-gray-700 mb-3">Posición</h3>
        <div className="flex flex-col gap-2">
          <button
            className="bg-gray-100 hover:bg-gray-200 p-2 rounded flex items-center justify-center gap-2"
            onClick={handleUp}
          >
            <ArrowUpIcon size={20} />
            <span>Arriba</span>
          </button>

          <button
            className="bg-gray-100 hover:bg-gray-200 p-2 rounded flex items-center justify-center gap-2"
            onClick={handleDown}
          >
            <ArrowDownIcon size={20} />
            <span>Abajo</span>
          </button>

          <button
            className="bg-gray-100 hover:bg-gray-200 p-2 rounded flex items-center justify-center gap-2"
            onClick={handleFront}
          >
            <ArrowUpIcon size={20} /> <ArrowUpIcon size={20} />
            <span>Frente</span>
          </button>

          <button
            className="bg-gray-100 hover:bg-gray-200 p-2 rounded flex items-center justify-center gap-2"
            onClick={handleBack}
          >
            <ArrowDownIcon size={20} /> <ArrowDownIcon size={20} />
            <span>Atras</span>
          </button>
        </div>
      </div>
      <div className="mb-6">
        <h3 className="text-sm font-medium text-gray-700 mb-3">Transformar</h3>
        <div className="flex flex-col gap-2">
          <button
            className="bg-gray-100 hover:bg-gray-200 p-2 rounded flex items-center justify-center gap-2"
            onClick={handleZoomIn}
          >
            <ZoomInIcon size={18} />
            <span>Ampliar</span>
          </button>
          <button
            className="bg-gray-100 hover:bg-gray-200 p-2 rounded flex items-center justify-center gap-2"
            onClick={handleZoomOut}
          >
            <ZoomOutIcon size={18} />
            <span>Reducir</span>
          </button>
          <button
            className="bg-gray-100 hover:bg-gray-200 p-2 rounded flex items-center justify-center gap-2"
            onClick={handleRotate}
          >
            <RotateCwIcon size={18} />
            <span>Rotar</span>
          </button>
          <button
            className="bg-gray-100 hover:bg-gray-200 p-2 rounded flex items-center justify-center gap-2"
            onClick={handleRemoveBackground}
          >
            <Scissors size={18} />
            <span>Quitar fondo</span>
          </button>
        </div>
      </div>
      <div>
        <h3 className="text-sm font-medium text-gray-700 mb-3">Otros</h3>
        <button
          className="bg-red-50 text-red-600 hover:bg-red-100 w-full p-2 rounded flex items-center justify-center gap-2"
          onClick={handleDelete}
        >
          <TrashIcon size={18} />
          <span>Eliminar</span>
        </button>
      </div>
    </div>
  );
};
