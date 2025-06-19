# 🧠 Editor de Preguntas Interactivas

¡Crea, gestiona y comparte contenido educativo como nunca antes!

Este proyecto es una herramienta poderosa y flexible diseñada para profesores que buscan crear **preguntas interactivas**, listas para ser exportadas, compartidas y utilizadas.

## 🚀 Características principales

### 🎓 Roles de usuario

- **Profesor / Autor**
  - Crear preguntas interactivas y tradicionales.
  - Compartir contenido fácilmente.
  - Exportar preguntas como archivos HTML o XML con recursos incluidos (imágenes, PDFs, etc).
- **Administrador**
  - Gestión general del sistema y usuarios.

---

### ❓ Tipos de Preguntas

<!-- #### 🔹 Preguntas No Interactivas (modo clásico)

- **Respuesta corta**
  Ideal para preguntas como: “¿Quién es…?”

  - Permite múltiples respuestas correctas con variantes comunes.
  - Verificación semántica básica y tolerancia de errores ortográficos.

- **Selección múltiple**
  - Define opciones correctas con diferentes pesos.
  - Penalización opcional por respuestas incorrectas (en porcentaje). -->

<!-- #### 🔸 Preguntas Interactivas (modo avanzado) -->

#### 🔸 Preguntas Interactivas

- Arrastrar y soltar elementos: imágenes, palabras, símbolos, dibujos.
- Ordenamiento parcial o completo.
- Puzzle interactivo y dinámico.
- Vista previa en tiempo real de cada pregunta creada.
- Validación integrada de cada pregunta antes de su publicación.

---

## 🛠️ Tecnologías

- ⚛️ **React**
- ⌨️ **TypeScript**
- ⚡ **Vite** (ultra rápido y moderno)
- 📦 Modular y preparado para escalabilidad

---

## 🧰 Requisitos previos

### 📦 Instalar Bun

Este proyecto utiliza [**Bun**](https://bun.sh/) como gestor de paquetes y entorno de ejecución.  
Si aún no lo tienes instalado, puedes hacerlo ejecutando:

```bash
curl -fsSL https://bun.sh/install | bash
```

Nota: Después de instalar, reinicia tu terminal o ejecuta source ~/.bashrc, source ~/.zshrc o equivalente según tu shell, para habilitar el comando bun.

## 📦 Instalación y configuración inicial

```bash
# Clonar el repositorio
git clone https://github.com/MauriErick24/pWeb.git
cd pWeb

# Instalar dependencias
bun install

# Iniciar servidor de desarrollo
bun run dev
```
