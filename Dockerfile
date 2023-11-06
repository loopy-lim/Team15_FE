# Build stage
FROM krmp-d2hub-idock.9rum.cc/goorm/node:16 AS build
WORKDIR /usr/src/app
COPY . /usr/src/app
RUN npm install --global pnpm
RUN corepack enable
RUN pnpm install --frozen-lockfile
RUN pnpm run build

# Run stage
FROM krmp-d2hub-idock.9rum.cc/goorm/node:16
WORKDIR /usr/src/app
COPY --from=build /usr/src/app/dist ./borrow-me/frontend
RUN npm install --global pnpm
RUN corepack enable
RUN pnpm install --frozen-lockfile
RUN cd /usr/src/app/borrow-me
RUN pnpm run build
EXPOSE 3000
CMD ["pnpm", "run", "start:prod"]