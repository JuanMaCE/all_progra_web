# Django Project with Docker + SQLite

This project demonstrates how to containerize a Django application using Docker with a local SQLite database.

## Prerequisites

- Docker Desktop installed on Windows
- WSL 2 enabled and integrated with Docker Desktop
- Basic knowledge of Django

## Branch

- Create and use the branch `hw-06` for this homework:
```bash
git checkout main
git pull
git checkout -b hw-06

How to Run
Build the Docker image:
docker compose build
Start the container:
docker compose up
Access the application:

Open your browser and go to: http://localhost:8000

Stop the container:

docker compose down