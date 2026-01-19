### 1. Introduction

The purpose of this project is to design and implement a fully functional CRUD (Create, Read, Update, Delete) API for a simple blogging platform using Node.js and MongoDB. The project focuses on backend development while also including a basic frontend interface to demonstrate full-stack interaction.

This assignment helps to understand how RESTful APIs work, how data is stored and managed in a NoSQL database, and how a server communicates with a client application. The project was developed as an individual task.

---

### 2. Technologies Used

The following technologies were used in this project:

* **Node.js** – JavaScript runtime environment for server-side development
* **Express.js** – Web framework for building RESTful APIs
* **MongoDB** – NoSQL database for storing blog data
* **Mongoose** – ODM (Object Data Modeling) library for MongoDB
* **HTML & JavaScript** – Basic frontend interface
* **Postman** – Manual testing of API endpoints

---

### 3. Project Structure

The project follows a clean and organized structure:

* **models/** – contains the Mongoose schema for blog posts
* **controllers/** – handles business logic and database operations
* **routes/** – defines API endpoints
* **public/** – contains frontend files (HTML and JavaScript)
* **server.js** – main entry point of the application

This separation improves readability, maintainability, and scalability.

---

### 4. Blog Model Design

Each blog post includes the following fields:

* **Title** (string, required)
* **Body** (string, required)
* **Author** (string, optional, default: "Anonymous")
* **Timestamps** (createdAt, updatedAt)

Mongoose timestamps are used to automatically track when a blog post is created and updated.

---

### 5. API Endpoints

The following RESTful API endpoints were implemented:

* **POST /blogs** – Creates a new blog post
* **GET /blogs** – Retrieves all blog posts
* **GET /blogs/:id** – Retrieves a single blog post by ID
* **PUT /blogs/:id** – Updates an existing blog post
* **DELETE /blogs/:id** – Deletes a blog post

Each endpoint uses appropriate HTTP methods and status codes.

---

### 6. Data Validation and Error Handling

Data validation ensures that all blog posts include a title and a body. If required fields are missing, the server returns a `400 Bad Request` status.

Error handling is implemented for:

* Invalid request data
* Non-existent blog IDs
* Database connection issues

Clear and meaningful error messages are returned to the client.

---

### 7. Frontend Interface

A simple frontend interface was developed using HTML and JavaScript. It allows users to:

* Create new blog posts
* View all existing blog posts

The frontend communicates with the backend API using the Fetch API.

---

### 8. Testing

All API endpoints were tested manually using Postman. The tests verified:

* Successful creation, retrieval, update, and deletion of blog posts
* Proper validation and error responses
* Correct HTTP status codes

The frontend interface was also tested to ensure proper interaction with the API.

---

### 9. Conclusion

This project successfully demonstrates the implementation of a CRUD API using Node.js, Express, and MongoDB. It helped to strengthen understanding of RESTful services, database operations, and basic full-stack development. The application meets all assignment requirements and follows good coding practices.



