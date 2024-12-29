# BlinkIO-Assesment

## Overview

In this project, you will find a full-stack web application that allows users to register, log in, and manage a task list. The tasks are stored in a database, and the application ensures that users can retrieve their tasks upon subsequent logins. The project is divided into two main components:

- **Frontend**: A React application for user interaction.
- **Backend**: A Node.js server using Express that handles API routes for user authentication and task management.

## Tech Stack

- **Frontend**: React (with JavaScript/TypeScript)
- **Backend**: Node.js with Express
- **Database**: MongoDB (for storing user and task data)
- **Authentication**: JWT (JSON Web Token) for secure login

## Folder Structure

```bash
test_assignment/
├── backend/                  # Node.js Express server and API
│   ├── models/                # Mongoose models for users and tasks
│   ├── routes/                # API routes for authentication and task management
│   ├── app.js                 # Main server file
│   └── .env                   # Environment variables (e.g., DB connection, JWT secret)
│
├── frontend/                  # React frontend for the user interface
│   ├── public/                # Public assets like index.html
│   ├── src/                   # React components, hooks, services
│   │   ├── components/        # React components for login, registration, task list and Navbar
│   │   ├── App.js             # Main React component
│   │   └── App.css            # Basic styling for the app
│   └── .env                   # Frontend environment settings (e.g., API URL)
└── .gitignore                 # Ignored files and directories (e.g., node_modules, .env)
```
## Instructions
1. Clone this repo.
2. cd to **test_assignment**.
3. To set up dependencies:-
   ```bash
   cd backend
   npm install
   ```
   ```bash
   cd frontend
   npm install
   ```

