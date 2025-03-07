# JWT Authentication Project

This project demonstrates a simple JWT (JSON Web Token) authentication system using a React frontend and a Node.js backend.

## Project Structure

```
JWT/
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── server.js
│   └── ...other backend files
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Login.jsx
│   │   │   ├── SignUp.jsx
│   │   ├── pages/
│   │   │   ├── Books.jsx
│   │   ├── App.js
│   │   ├── index.js
│   └── ...other frontend files
└── README.md
```

## Getting Started

### Prerequisites

- Node.js
- npm or yarn

### Backend Setup

1. Navigate to the backend directory:
   ```sh
   cd backend
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

3. Start the backend server:
   ```sh
   npm start
   ```

### Frontend Setup

1. Navigate to the frontend directory:
   ```sh
   cd frontend
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

3. Start the frontend development server:
   ```sh
   npm start
   ```

## Usage

1. Open your browser and navigate to `http://localhost:3000`.
2. You can sign up for a new account, log in, and view the list of books.

## Project Details

### Backend

- **Node.js**: JavaScript runtime for the backend.
- **Express**: Web framework for Node.js.
- **JWT**: JSON Web Token for authentication.
- **MongoDB**: NoSQL database for storing user and book data.

### Frontend

- **React**: JavaScript library for building user interfaces.
- **Axios**: Promise-based HTTP client for making API requests.
- **React Router**: Library for routing in React applications.

## License

This project is licensed under the MIT License.
