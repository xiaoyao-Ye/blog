FROM node:16-alpine as build-stage

WORKDIR /app
RUN corepack enable
RUN apk add --no-cache git

COPY package.json pnpm-lock.yaml ./
RUN --mount=type=cache,id=pnpm-store,target=/root/.pnpm-store \
    pnpm install --frozen-lockfile

COPY . .

RUN pnpm run docs:build

FROM nginx:stable-alpine as production-stage

COPY --from=build-stage /app/docs/.vitepress/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
