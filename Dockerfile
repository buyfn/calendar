FROM node:8-alpine

# Create a work directory and copy over our dependency manifest files.
WORKDIR /usr/src/app
COPY package.json yarn.lock ./
RUN yarn
COPY . ./
RUN yarn build

# Expose PORT 3000 on our virtual machine so we can run our server
EXPOSE 3000
