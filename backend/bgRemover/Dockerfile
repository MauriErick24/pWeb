# Etapa base con Python 3.12.6 y Node.js + npm
FROM python:3.12.6-slim

# Instalar Node.js y npm
RUN apt-get update && apt-get install -y curl gnupg && \
    curl -fsSL https://deb.nodesource.com/setup_20.x | bash - && \
    apt-get install -y nodejs && \
    apt-get clean && rm -rf /var/lib/apt/lists/*

# Establecer directorio de trabajo
WORKDIR /app

# Copiar dependencias de Python
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt
# RUN pip install --no-cache-dir rembg onnxruntime pillow

# Copiar dependencias de Node.js
COPY package*.json ./
RUN npm install

# Copiar el resto de la aplicación
COPY . .

# Puerto por el que se expondrá el servidor
EXPOSE 5000

# Comando por defecto
CMD ["node", "index.js"]
