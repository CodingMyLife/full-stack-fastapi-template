# Stage 0, "build-stage", based on Node.js, to build and compile the frontend
FROM node:24-alpine AS build-stage

WORKDIR /app

COPY package.json /app/

COPY frontend/package.json /app/frontend/

WORKDIR /app/frontend

RUN npm install

COPY ./frontend /app/frontend
ARG NEXT_PUBLIC_API_URL
ENV NEXT_PUBLIC_API_URL=${NEXT_PUBLIC_API_URL}

RUN npm run build


# Stage 1, based on Node.js, to serve the Next.js standalone app
FROM node:24-alpine

WORKDIR /app

COPY --from=build-stage /app/frontend/.next/standalone ./
COPY --from=build-stage /app/frontend/.next/static ./.next/static
COPY --from=build-stage /app/frontend/public ./public

ENV NODE_ENV=production
ENV PORT=3000
ENV HOSTNAME=0.0.0.0

EXPOSE 3000

CMD ["node", "server.js"]
