FROM node:9

WORKDIR /usr/src/app
COPY . .
RUN npm install
RUN npm test

ARG PORT
ENV PORT ${PORT}

EXPOSE ${PORT}

CMD ["npm", "start"]
