# Bench runner image for Fly.io (see docs/FLY.md). Like the Railway runner, the machine idles and runs are
# started over SSH, so a multi-hour run is not tied to a request or a deploy.
FROM node:24-slim

WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci --omit=dev --no-audit --no-fund
COPY tsconfig.json idle.mjs ./
COPY src ./src

CMD ["node", "idle.mjs"]
