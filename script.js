document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('add-book-form');
    const tbody = document.getElementById('books-tbody');

    // Add book event handler
    form.addEventListener('submit', (event) => {
        event.preventDefault();

        // Retrieve values from the form
        const title = document.getElementById('book-title').value;
        const author = document.getElementById('book-author').value;
        const isbn = document.getElementById('book-isbn').value;

        // Create a new table row
        const tr = document.createElement('tr');

        tr.innerHTML = `
            <td>${title}</td>
            <td>${author}</td>
            <td>${isbn}</td>
             <td><button class="delete-btn" style="color:white; background-color:red;">Delete</button></td>
        `;

        // Append the new row to the table
        tbody.appendChild(tr);

        // Clear form fields
        form.reset();
    });

    // Delegate delete event to table body
    tbody.addEventListener('click', (event) => {
        if (event.target.classList.contains('delete-btn')) {
            const row = event.target.closest('tr');
            tbody.removeChild(row);
        }
    });
});
