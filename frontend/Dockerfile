# Usar Node
FROM node:18-alpine

WORKDIR /app

# Copiar package.json y tsconfig.json
COPY package*.json ./

# Instalar dependencias
RUN npm install

# Copiar código
COPY . .

# Exponer puerto Vite
EXPOSE 5173

# Correr Vite
CMD ["npm", "run", "dev", "--", "--host"]
