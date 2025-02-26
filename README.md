# REST API for Book Management

This is a simple REST API built with Node.js and Express.js to manage a collection of books. The API performs CRUD operations and stores data in a JSON file.

## Features

- **GET /books** → Retrieve all books
- **GET /books/:id** → Retrieve a single book by its ID
- **POST /books** → Add a new book
  - Fields: `title`, `author`, `year`
  - Auto-generates a unique `id` for each book
- **PUT /books/:id** → Update an existing book
- **DELETE /books/:id** → Remove a book by its ID

## Data Storage

- Book data is stored in a `books.json` file
- The API reads and writes to this file safely


## Project Structure

```
book-management-api/
│
├── controllers/            # Logic for handling requests
│   ├── bookController.js   # CRUD functions for books
│
├── routes/                 # API route definitions
│   ├── bookRoutes.js       # Routes for book operations
│
├── data/                   # Data storage
│   ├── books.json          # JSON file for book data
│
├── middleware/             # Custom middleware (optional)
│   ├── logger.js           # Logs incoming requests
│
├── utils/                  # Utility functions (optional)
│   ├── fileHelper.js       # Functions for reading/writing JSON
│
├── .env                    # Environment variables
├── .gitignore              # Files to ignore in Git
├── package.json            # Project dependencies and scripts
├── server.js               # Express app and server configuration
├── README.md               # Project documentation
```

## Endpoints

| Method | Endpoint        | Description              |
|--------|-----------------|--------------------------|
| GET    | /books          | Get all books            |
| GET    | /books/:id      | Get a single book by ID  |
| POST   | /books          | Add a new book           |
| PUT    | /books/:id      | Update an existing book  |
| DELETE | /books/:id      | Delete a book by ID      |

