FROM node:13.8.0 as build
ENV CI=TRUE
WORKDIR /app
COPY . .
RUN yarn install && yarn build
RUN yarn test

FROM node:alpine as publish
WORKDIR /app
COPY --from=build /app/build .
RUN yarn global add serve
EXPOSE 5000
ENTRYPOINT serve -s /app
