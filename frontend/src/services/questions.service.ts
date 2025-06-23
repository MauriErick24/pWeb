// src/services/questions.service.ts
export interface Pregunta {
  id: number;
  title: string;
  description: string;
  question: string;
  img: string;
  answer: string;
}

export const getAllPreguntas = async (): Promise<Pregunta[]> => {
  const token = localStorage.getItem("token");

  const response = await fetch("http://localhost:8080/api/preguntas", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    throw new Error("Error al obtener preguntas");
  }

  return await response.json();
};
