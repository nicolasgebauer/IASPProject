# Usamos Node.js versión 20
FROM node:20

# Establecemos el directorio de trabajo en el contenedor
WORKDIR /app

# Copiamos el archivo package.json y package-lock.json (si usas yarn, también deberías copiar yarn.lock)
COPY package*.json ./

# Instalamos las dependencias
RUN npm install

# Copiamos el resto de los archivos de la aplicación
COPY . .

# Exponemos el puerto 3000, que es el puerto predeterminado de Next.js
EXPOSE 3000

# El comando para arrancar la aplicación en modo desarrollo
CMD ["npm", "run", "dev"]
