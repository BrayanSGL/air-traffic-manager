FROM node:20-alpine as build
WORKDIR /app

COPY package*.json ./


RUN npm install

# Copiar los archivos de la aplicación
COPY . .

# Construir la aplicación
RUN npm run build

#correr la aplicación
FROM nginx:stable-alpine

COPY --from=build /app/air-traffic-manager/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]

