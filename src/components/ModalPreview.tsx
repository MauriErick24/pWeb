import { FC, ReactNode } from "react";
import { X } from "lucide-react";

interface PreviewProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children?: ReactNode;
}

export const ModalPreview: FC<PreviewProps> = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
      <div className="relative w-full max-w-7xl max-h-full mx-auto">
        <div className="relative rounded-lg shadow-sm bg-gray-700">
          {/* Modal header */}
          <div className="flex items-center justify-between p-4 border-b border-gray-600">
            <h3 className="text-xl font-medium text-white">
              {title}
            </h3>
            <button
              className="text-gray-400 rounded-lg w-8 h-8 inline-flex justify-center items-center hover:bg-gray-600 hover:text-white"
              onClick={onClose}
            >
              <X size={18} />
            </button>
          </div>

          {/* Modal body PENDOIENTEEEEE revision de estilos */}
          <div className="p-4 md:p-5 space-y-4 text-base leading-relaxed text-gray-500 dark:text-gray-400">
            {children}
          </div>

          {/* Modal footer */}
          <div className="p-4 border-t border-gray-600">
            <button
              className="text-white bg-blue-600 hover:bg-blue-800 rounded-lg text-sm px-5 py-2.5"
              onClick={onClose}
            >
              Aceptar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
