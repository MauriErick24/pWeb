// components/AddQuestionButton.tsx
import { FC } from "react";

interface AddQuestionButtonProps {
  onClick: () => void;
}

const AddQuestionButton: FC<AddQuestionButtonProps> = ({ onClick }) => {
  return (
    <div className="flex justify-end mb-4">
      <button
        onClick={onClick}
        className="bg-purple-200 hover:bg-purple-300 text-purple-900 font-semibold py-2 px-4 rounded-lg transition-all"
      >
        + Añadir pregunta
      </button>
    </div>
  );
};

export default AddQuestionButton;
