// ruta -> question
import { NavBar } from "../components/NavBar";
import { QuestionCard } from "../components/QuestionCard";
import { AddQuestionMenu } from "../components/AddQuestionMenu";

const QuestionCardPage = () => {
  return (
    <>
      <NavBar />
      <div className="p-6 bg-gray-50 min-h-screen">
        <div className="flex justify-end mb-4">
          <AddQuestionMenu
            routes={{
              opcion_multiple: "/#",
              interactiva: "/create/interactive",
            }}
          />
        </div>

        <QuestionCard
          id={1}
          type="opcion_multiple"
          question="Cuando una variable se define dentro de una clase, ¿qué se considera?"
          options={[
            "Una variable de clase",
            "Una variable variable",
            "Una variable temprana",
            "Una variable de instancia",
          ]}
          correctAnswer="Una variable de instancia"
        />

        <QuestionCard
          id={2}
          type="respuesta_corta"
          question="El principio de ocultar los detalles internos de una clase y exponer solo lo necesario se conoce como:"
          options={[
            "Herencia",
            "Encapsulamiento",
            "Polimorfismo",
            "Abstracción",
          ]}
          correctAnswer="Encapsulamiento"
        />
      </div>
    </>
  );
};

export default QuestionCardPage;
