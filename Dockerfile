FROM node:16-alpine

# install dependencies
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn

# Copy all local files into the image.
COPY . ./
RUN yarn build


FROM node:16-slim

WORKDIR /app
COPY --from=0 /app/build ./build
COPY . .

RUN npm install -g serve
CMD ["serve", "-s", "build"]