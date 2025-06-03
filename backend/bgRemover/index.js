import express from "express";
import cors from "cors";
import multer from "multer";
import { exec } from "child_process";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(cors());
const port = 5000;

const upload = multer({ dest: "uploads/" });

const processedDir = path.join(__dirname, "processed");
if (!fs.existsSync(processedDir)) {
  fs.mkdirSync(processedDir);
}

app.post("/remove-background", upload.single("image"), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: "No se subió ninguna imagen" });
  }

  const inputPath = path.join(__dirname, req.file.path);
  const outputPath = path.join(processedDir, `${req.file.filename}.png`);

  const cmd = `python "${path.join(
    __dirname,
    "remove_bg.py"
  )}" "${inputPath}" "${outputPath}"`;

  exec(cmd, (error, stdout, stderr) => {
    if (error) {
      console.error("Error al ejecutar remove_bg.py:", error);
      console.error(stderr);
      return res.status(500).json({ error: "Error al procesar la imagen" });
    }

    fs.readFile(outputPath, (err, data) => {
      if (err) {
        console.error("Error al leer imagen procesada:", err);
        return res
          .status(500)
          .json({ error: "Error al leer imagen procesada" });
      }

      res.set("Content-Type", "image/png");
      res.send(data);

      fs.unlink(inputPath, () => {});
      fs.unlink(outputPath, () => {});
    });
  });
});

app.listen(port, () => {
  console.log(`🟢 Servidor listo en http://localhost:${port}`);
});
