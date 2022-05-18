FROM node:14-alpine AS base
RUN mkdir -p /usr/app
WORKDIR /usr/app


# Build back app
FROM base AS back-build
COPY ./back ./
RUN npm install
RUN npm run build

# Release
FROM base AS release
COPY --from=back-build /usr/app/dist ./
COPY ./back/package.json ./
COPY ./back/package-lock.json ./
RUN npm ci --only=production

ENV NODE_ENV=production
ENV STATIC_FILES_PATH=./public
ENV API_MOCK=false
ENV CORS_ORIGIN=false

ENTRYPOINT ["node", "index"]
