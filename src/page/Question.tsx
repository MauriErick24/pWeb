// ruta -> question
import { NavBar } from "../components/NavBar";
import { QuestionCard } from "../components/QuestionCard";

const QuestionCardPage = () => {
  return (
    <>
        <NavBar />
        <div className="p-6 bg-gray-50 min-h-screen">
            <QuestionCard
                id={1}
                type="opcion_multiple"
                question="¿Pitágoras fue?"
                options={["filosofo", "cerrajero", "carpintero"]}
                correctAnswer="filosofo"
            />

            <QuestionCard
                id={2}
                type="completar"
                question="La (a) ________ nace gracias al asombro de los humanos"
                options={["a. filosofía", "iglesia", "matemática"]}
                correctAnswer="a. filosofía"
            />
        </div>
    </>
    
  );
};

export default QuestionCardPage;
