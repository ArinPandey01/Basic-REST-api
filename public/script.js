const bookForm = document.getElementById('book-form');
const bookList = document.getElementById('book-list');

async function fetchBooks() {
    const res = await fetch('/books');
    const books = await res.json();
    bookList.innerHTML = books.map(book => `
        <tr>
            <td>${book.id}</td>
            <td>${book.name}</td>
            <td>${book.author}</td>
            <td>${book.year}</td>
            <td>
                <button onclick="updateBook(${book.id})">Edit</button>
                <button onclick="deleteBook(${book.id})">Delete</button>
            </td>
        </tr>
    `).join('');
}

// Add a new book
bookForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const book = {
        name: document.getElementById('name').value,
        author: document.getElementById('author').value,
        year: document.getElementById('year').value
    };

    await fetch('/books', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(book)
    });

    bookForm.reset();
    fetchBooks();
});

// Delete a book
async function deleteBook(id) {
    await fetch(`/books/${id}`, {
        method: 'DELETE'
    });
    fetchBooks();
}

// Placeholder for update functionality
async function updateBook(id) {
    const newName = prompt('Enter new name:');
    const newAuthor = prompt('Enter new author:');
    const newYear = prompt('Enter new year:');

    if (newName && newAuthor && newYear) {
        await fetch(`/books/${id}`, {
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({name: newName, author: newAuthor, year: newYear})
        });
        fetchBooks();
    }
}

fetchBooks();
