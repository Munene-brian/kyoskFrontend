# FROM nginx:1.25.4-alpine
# COPY dist/kyosk /usr/share/nginx/html
# COPY nginx.conf /etc/nginx/conf.d/default.conf
# EXPOSE 80
# CMD nginx -g 'daemon off;'


FROM node:20.12.0-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm install --legacy-peer-deps
RUN npx ngcc --properties ec2023 browser module main --first-only --create-ivy-entry-points
COPY . .
RUN npm run build
FROM nginx:stable
COPY --from=build /app/dist/kyosk /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]