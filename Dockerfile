FROM node:12.22.0

# Setting working directory. All the path will be relative to WORKDIR
WORKDIR /usr/src/app

# Declaring all arg to use for env in build time
ARG NODE_ENV

ARG NEXT_PUBLIC_ENDPOINT 
# Declaring env from the arg value
ENV NODE_ENV=${NODE_ENV}
ENV NEXT_PUBLIC_ENDPOINT=${NEXT_PUBLIC_ENDPOINT} 
# Installing dependencies
COPY package*.json ./
RUN yarn install

# Copying source files
COPY . .

# Building app
RUN yarn build

# Running the app
CMD [ "yarn", "start" ]