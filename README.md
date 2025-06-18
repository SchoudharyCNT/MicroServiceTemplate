# MicroServiceTemplate

This repository contains a minimal example of a micro service setup with a Fastify gateway and two Express services. Docker Compose can be used to run all services together.

## Services

- **gateway** – entry point that proxies requests to the user and transaction services.
- **user-service** – handles authentication (signup/login).
- **transaction-service** – simple CRUD for transactions belonging to a user.

## Running locally

1. Ensure Docker and Docker Compose are installed.
2. From the repository root run:

```bash
docker-compose up --build
```

The services will be available on the following ports:

- Gateway: `http://localhost:3000`
- User service: `http://localhost:4001`
- Transaction service: `http://localhost:4002`

A PostgreSQL instance is started automatically for development.

## Environment

Each service contains an `.env` file with the minimal configuration required to run the example. Adjust these values as needed for production use.
