# 🧩 MongoDB CRUD API - Node.js + TypeScript

A simple RESTful API to manage users with name and email using Node.js, TypeScript, and MongoDB.

## 🚀 Technologies Used

- Node.js
- TypeScript
- Express.js
- MongoDB
- Docker & Docker Compose
- ESLint & Prettier
- Vitest (for testing)

## 📦 Installation

### Clone the repository

```bash
git clone https://github.com/Gustavo-Zamai/mongodb-crud-api-ts.git
cd mongodb-crud-api-ts
```

### Environment variables
#### Create a .env file based on the following example:

```env
PORT=3000
MONGODB_URI=mongodb://mongo:27017/apitest
```
Make sure MongoDB is running locally or use Docker Compose.

### Install dependencies
```bash
npm install
```
## ▶️ Running the Project
### Development (with watch mode)
```bash
npm run start:watch
```
### Production
Build the project:

```bash
npm run build
```
Then start it:
```bash
npm run prod
```

## 🐳 Docker Usage
### Build the image
```bash
npm run docker:build
```
### Run the container
```bash
npm run docker:run
```
Or use Docker Compose:
```bash
docker-compose up --build
```

## 🧪 Running Tests
```bash
npm run test
```
Watch mode:

```bash
npm run test:watch
```
Coverage:

```bash
npm run test:coverage
```

## 📁 API Endpoints

| Method | Endpoint      | Description        |
|--------|---------------|--------------------|
| GET    | `/users`      | List all users     |
| GET    | `/users/:id`  | Get user by ID     |
| POST   | `/users`      | Create a new user  |
| PUT    | `/users/:id`  | Update a user      |
| DELETE | `/users/:id`  | Delete a user      |


## ✨ Features
- Simple user management (name & email)

- MongoDB integration
 
- Type-safe development with TypeScript
 
- Ready for Docker deployment
 
- Code formatting and linting setup

## 👨‍💻 Author
#### Gustavo Zamai

[LinkedIn](https://www.linkedin.com/in/gustavo-sim%C3%A3o-zamai-664a5521a/) • 
[GitHub](https://github.com/Gustavo-Zamai)