Node.js CRUD API with PostgreSQL & Docker

A simple CRUD application built with Node.js, PostgreSQL, and Docker.

The project demonstrates basic Create, Read, Update, and Delete operations using a PostgreSQL database running inside a Docker container.

Tech Stack

Node.js

PostgreSQL

Docker

REST API

Git

Features

Create records

Get all records

Get a record by ID

Update records

Delete records

PostgreSQL database running with Docker

Project Structure
.
├── src/
│   └── ...
├── .env.example
├── .gitignore
├── docker-compose.yml
├── package.json
└── README.md

Prerequisites

Make sure you have installed:

Node.js

Docker

Git

Getting Started
1. Clone the repository
git clone https://github.com/YOUR_USERNAME/YOUR_REPOSITORY.git
cd YOUR_REPOSITORY

2. Install dependencies
npm install

3. Configure environment variables

Create a .env file based on .env.example:

cp .env.example .env


Update the database configuration if required.

Example:

PORT=3000
DB_HOST=localhost
DB_PORT=5432
DB_NAME=mydb
DB_USER=postgres
DB_PASSWORD=postgres

4. Start PostgreSQL with Docker
docker compose up -d


Check that the container is running:

docker compose ps

5. Start the application
npm start


For development, if your project supports it:

npm run dev


The API should now be available at:

http://localhost:3000

API Endpoints
Method	Endpoint	Description
GET	/api/items	Get all items
GET	/api/items/:id	Get an item by ID
POST	/api/items	Create an item
PUT	/api/items/:id	Update an item
DELETE	/api/items/:id	Delete an item

Replace /api/items with the actual route used in your project.

Example Request
Create an item
POST /api/items
Content-Type: application/json

{
  "name": "Example Item"
}

Response
{
  "id": 1,
  "name": "Example Item"
}

Docker Commands

Start the PostgreSQL container:

docker compose up -d


Stop the containers:

docker compose down


View logs:

docker compose logs


Stop containers and remove volumes:

docker compose down -v

Environment Variables
Variable	Description
PORT	Port used by the Node.js server
DB_HOST	PostgreSQL host
DB_PORT	PostgreSQL port
DB_NAME	PostgreSQL database name
DB_USER	PostgreSQL username
DB_PASSWORD	PostgreSQL password
License

This project is for learning and demonstration purposes.
