FROM node:6.14.2

# Create app directory
WORKDIR /usr/src/app

# Bundle app source
COPY . .

EXPOSE 80
CMD [ "npm", "start" ]
