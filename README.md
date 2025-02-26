# Book Management System

This is a full-stack Book Management System built with Express.js for the backend and HTML, CSS, and vanilla JavaScript for the frontend. It allows you to manage a collection of books with features like adding, updating, and deleting books.

## Project Structure

```
project-root/
|-- data/
|   |-- books.json            # JSON file storing book data
|-- public/
|   |-- index.html            # Frontend HTML
|   |-- style.css             # Frontend CSS
|   |-- script.js             # Frontend JavaScript
|-- controllers/
|   |-- bookControllers.js    # Controller functions for book routes
|-- middleware/
|   |-- logger.js             # Middleware for logging requests
|-- routes/
|   |-- bookRoutes.js         # Express routes for book API
|-- utils/
|   |-- fileHelper.js         # Helper functions for file read/write
|-- server.js                 # Express server setup
|-- README.md                 # Project documentation
```

## Setup Instructions

1. **Clone the Repository:**
```bash
git clone https://github.com/your-repo/book-management-system.git
cd book-management-system
```

2. **Install Dependencies:**
```bash
npm install express
```

3. **Run the Server:**
```bash
node server.js
```
Server will start at `http://localhost:3000`

4. **Access the Frontend:**
Open your browser and go to `http://localhost:3000/`

## API Endpoints

| Method | Endpoint       | Description           |
|--------|----------------|----------------------|
| GET    | `/books`        | Get all books         |
| GET    | `/books/:id`    | Get a single book     |
| POST   | `/books`        | Add a new book        |
| PUT    | `/books/:id`    | Update a book         |
| DELETE | `/books/:id`    | Delete a book         |

## Frontend Functionality

- **Add Book:** Fill the form and click `Add Book`.
- **Edit Book:** Click `Edit`, provide new details.
- **Delete Book:** Click `Delete` to remove a book.

## Logger Middleware
Logs every request method, URL, and date to the console.

## File Storage
Books are stored in `data/books.json` in JSON format.

## Future Improvements
- Add form validation.
- Show notifications on success or failure.
- Implement better UI with more styles.

