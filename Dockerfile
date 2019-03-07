FROM node:8-alpine

# Create a work directory and copy over our dependency manifest files.
WORKDIR /usr/src/app
COPY package.json yarn.lock ./
RUN yarn
COPY /src ./src
COPY .babelrc firebaseConfig.js webpack.dev.js webpack.prod.js webpack.common.js ./
RUN yarn build

# Expose PORT 3000 on our virtual machine so we can run our server
EXPOSE 3000
