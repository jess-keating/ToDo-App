# TODO App

A full-stack Todo application built with Node.js/Express backend and vanilla JavaScript frontend. Create, edit, complete, and delete tasks with a MongoDB database.

## Features
- Create tasks with title and due date
- Mark tasks complete/incomplete
- Edit existing tasks
- Delete tasks
- Filter tasks by status
- Sort tasks by due date
- Responsive design

## Tech Stack
- **Backend**: Node.js, Express, MongoDB, Mongoose
- **Frontend**: HTML, CSS, JavaScript (Vanilla)
- **Tools**: Nodemon, CORS

## Project Structure
```
├── backend/
│   ├── models/
│   │   └── Task.js          # MongoDB schema
│   ├── routes/
│   │   └── tasks.js         # API routes
│   ├── .env.example         # Environment template
│   ├── index.js             # Server entry point
│   └── package.json
├── frontend/
│   ├── index.html
│   ├── css/
│   │   └── styles.css
│   └── js/
│       └── script.js
└── readme.md
```

## Setup

### Prerequisites
- Node.js installed
- MongoDB Atlas account

### Installation

1. Clone the repository
2. Install backend dependencies:
   ```bash
   cd backend
   npm install
   ```

3. Set up environment variables:
   ```bash
   cp .env.example .env
   ```
   Edit `backend/.env` with your MongoDB URI and credentials

4. Start the backend:
   ```bash
   npm start
   ```
   Server runs on `http://localhost:3000`

5. Open frontend in browser:
   ```
   Open frontend/index.html in your browser
   ```

## API Endpoints
- `GET /tasks` - Get all tasks (with optional filtering/sorting)
- `POST /tasks/new` - Create new task
- `PATCH /tasks/complete/:id` - Mark task complete
- `PATCH /tasks/incomplete/:id` - Mark task incomplete
- `PUT /tasks/update/:id` - Edit task
- `DELETE /tasks/delete/:id` - Delete task

## Environment Variables
See `backend/.env.example` for required variables:
- `PORT` - Server port (default: 3000)
- `MONGO_URI` - MongoDB connection string
- `NAME` - App name

---

## Learning Notes

### Node.js Module Types
- CommonJS: `const express = require('express')`
- ES Modules: `import express from 'express'` (when `"type": "module"` in package.json)

### Git vs GitHub
- **Git** - Distributed version control system (command line tool)
- **GitHub** - Cloud platform hosting Git repositories

### URI vs URL
- **URI** (Uniform Resource Identifier) - Identifies any resource by name, location, or both
- **URL** (Uniform Resource Locator) - Specific type of URI using http/https

_______________________________

Notes from class:
# Node-JS

### Type module
If the user set the module on package.json to CommonJS he/she will need to use the import like this on any js file.

Example:
`const express = require('express')`

Else if the user set the type to Module like `"type": "module",` he/she will need to use the import like this on any js file.

`import express from 'express'`

# What's the difference between GIT and GITHUB

GIT -> open-source, distributed version control system used by command line

GITHUB | BITBUCKET | GITLAB -> they're cloud infra structure companies using git


## Difference between URI and URL
URL (Uniform Resource Locator) is a specific type of URI (Uniform Resource Identifier) that identifies a resource by its location and provides the means to access it, whereas a URI is a broader term that identifies a resource by name, location, or both.

URI is any endpoint where is reachable

URL is the main http or https
