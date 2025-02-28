# JWT Authentication in Express.js

## Introduction
This project demonstrates how to implement JSON Web Token (JWT) authentication in an Express.js application. JWT is a secure method for transmitting information between parties as a JSON object.

## Features
- User registration and login
- JWT token generation and verification
- Protected routes requiring authentication

## Technologies Used
- Node.js
- Express.js
- JSON Web Token (JWT)
- bcrypt.js (for password hashing)
- MongoDB & Mongoose (optional for user storage)

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/yourusername/jwt-express-auth.git
   cd jwt-express-auth
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Create a `.env` file and add the following variables:
   ```env
   PORT=5000
   JWT_SECRET=your_secret_key
   MONGO_URI=your_mongodb_connection_string (if using MongoDB)
   ```
4. Start the server:
   ```sh
   npm start
   ```

## Project Structure
```
.
├── server.js
├── routes
│   ├── authRoutes.js
├── controllers
│   ├── authController.js
├── models
│   ├── User.js (if using MongoDB)
├── middleware
│   ├── authMiddleware.js
├── .env
├── package.json
└── README.md
```

## Usage

### 1. Register a User
Endpoint: `POST /api/auth/register`

Request Body:
```json
{
  "username": "testuser",
  "email": "test@example.com",
  "password": "password123"
}
```
Response:
```json
{
  "message": "User registered successfully"
}
```

### 2. Login a User
Endpoint: `POST /api/auth/login`

Request Body:
```json
{
  "email": "test@example.com",
  "password": "password123"
}
```
Response:
```json
{
  "token": "your_jwt_token"
}
```

### 3. Access Protected Route
Endpoint: `GET /api/protected`

Headers:
```json
{
  "Authorization": "Bearer your_jwt_token"
}
```
Response:
```json
{
  "message": "Access granted to protected route"
}
```

