FROM node:20 as build
WORKDIR /app

COPY package*.json ./


RUN npm install

# Copiar los archivos de la aplicación
COPY . .

# Construir la aplicación
RUN npm run build

#correr la aplicación
FROM nginx:stable-alpine

COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]

