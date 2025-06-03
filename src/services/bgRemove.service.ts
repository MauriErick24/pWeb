// src/services/bgRemove.service.ts

export const removeImageBackground = async (file: File): Promise<Blob> => {
  const formData = new FormData();
  formData.append("image", file);

  const response = await fetch("http://localhost:5000/remove-background", {
    method: "POST",
    body: formData,
  });

  if (!response.ok) {
    throw new Error("Error al quitar fondo");
  }

  return await response.blob(); // <- devuelve imagen procesada
};
