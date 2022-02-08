FROM node:16-alpine

# install dependencies
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci

# Copy all local files into the image.
COPY . .

RUN npm run build

FROM node:16-slim

WORKDIR /app
COPY --from=0 /app/build ./build
COPY . .

RUN npm install -g serve
CMD ["serve", "-s", "build"]