// ruta -> question
//import { NavBar } from "../components/NavBar";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Header } from "../components/Header";
import { QuestionCard } from "../components/QuestionCard";
import { AddQuestionButton } from "../components/AddQuestionButton";
import { getAllPreguntas, Pregunta } from "../services/questions.service";

const QuestionCardPage = () => {
  const [preguntas, setPreguntas] = useState<Pregunta[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    getAllPreguntas()
      .then(setPreguntas)
      .catch((error) => console.error("Error al cargar preguntas:", error));
  }, []);

  const handleAddQuestion = () => {
    navigate("/create/interactive");
  };

  return (
    <>
      {/*<NavBar />*/}
      <Header />
      <div className="p-6 bg-gray-50 min-h-screen">
        <div className="flex justify-end mb-4">
          <AddQuestionButton
            onClick={handleAddQuestion}
          />
        </div>

        {preguntas.length === 0 ? (
          <p className="text-gray-500">No hay preguntas guardadas.</p>
        ) : (
          preguntas.map((p) => (
            <QuestionCard
              key={p.id}
              id={p.id}
              title={p.title}
              description={p.description}
              question={p.question}
              img={p.img}
              answer={p.answer}
            />
          ))
        )}
      </div>
    </>
  );
};

export default QuestionCardPage;
