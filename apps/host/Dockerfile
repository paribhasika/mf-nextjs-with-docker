FROM node:18-alpine AS base

# Set working directory
WORKDIR /app

COPY /apps/host/.dockerignore .


RUN npm install -g turbo
RUN npm install -g next@^12.2.2
COPY . .

COPY /apps/host/.env.development  ./.env

# First install the dependencies (as they change less often)
RUN npm i

# Build the project
RUN npm run build -- --filter=host

EXPOSE 3000
ENV PORT 3000

CMD npm run start -- --filter=host