FROM node:13.8.0
EXPOSE 5000 
ENV CI=TRUE
RUN apt update && apt install xsel
WORKDIR /app
COPY . .
RUN yarn install && yarn build
RUN yarn test
RUN yarn global add serve
ENTRYPOINT serve -s build
