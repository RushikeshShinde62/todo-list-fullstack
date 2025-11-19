# Full Stack Todo App

React + Node.js + Express + Concurrently  

A simple full-stack Todo List application with a React front-end and an Express/Node.js back-end.  

This project uses concurrently to run client & server together and includes installation scripts for both.  

## 🚀 Features

React front-end with modern UI  

Node.js + Express back-end API  

Full CRUD for todos (currently GET/POST/DELETE)  

CORS enabled  

Centralized root scripts  

Clean file structure  

.gitignore included to avoid node_modules commits

## 🛠 Technologies Used
### Frontend  

React (Vite or CRA depending on setup)  

Axios  

CSS / Inline Styles

### Backend  

Node.js  

Express.js  

CORS  


### Tools  

nodemon  

concurrently  

## 📦 Installation
### 1️⃣ Clone the repository
git clone `https://github.com/RushikeshShinde62/todo-list-fullstack.git`
cd todo-list-fullstack

### 2️⃣ Install all dependencies (server + client)

From the root directory, run:

```npm run install:all```


This runs:

npm install inside /server

npm install inside /client

### ▶️ Running the App (Development)

To start both server + client at the same time:

```npm run dev```


This runs:

Express backend on ```http://localhost:5000```

React frontend on ```http://localhost:5173```

## Backend routes:

GET    /api/todos  

POST   /api/todos  

DELETE /api/todos/:id  

## 🧪 API Examples
Add Todo

POST /api/todos

{
  "text": "Learn Express"
}  

Sample Response
{
  "id": 1,
  "text": "Learn Express"
}

## 📘 Available Scripts
Root Scripts
```"install:all": "concurrently \"npm install --prefix server\" \"npm install --prefix client\"",  ```

```"server": "nodemon server/server.js",  ```

```"client": "npm start --prefix client",  ```

```"dev": "concurrently \"npm run server\" \"npm run client\""  ```

Run server only:
```npm run server```

Run client only:
```npm run client```

## 🤝 Contributing

Pull requests are welcome!
Feel free to improve UI, add features, or suggest enhancements.
