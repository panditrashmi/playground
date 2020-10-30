# base image
FROM node:12.16.1-alpine As builder

# create and set working directory. This WORKDIR command will create the working directory in our docker image. 
# going forward any command will be run in the context of this directory.
RUN mkdir -p /app
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install and cache app dependencies
COPY package.json package-lock.json ./

#This RUN command will restore node_modules define in our package.json
RUN npm install
RUN npm install -g @angular/cli@10.1.6


# This COPY command copies all the files from our current directory to the container working directory. 
# this will copy all our source files.
COPY . /app

#This command will build our angular project in production mode and create production ready files
# in dist/ folder.
RUN npm run build --prod


# start app
CMD ng serve --host 0.0.0.0