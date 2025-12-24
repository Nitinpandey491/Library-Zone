// // Get the local storage
// let storage2 = window.localStorage;

// // Function to add a book
// function issueBook() {
//     let bookname = document.getElementById("book-name").value;
//     let usertype = document.getElementById("user-type").value;
//     let idnumber = document.getElementById("id-number").value;

//     // Create a new book object
//     let issue = {
//         name : bookname,
//         type: usertype,
//         id: idnumber
//     };

//     // Add the book to local storage
//     storage2.setItem(idnumber, JSON.stringify(issue));

//     // Clear the form fields
//     document.getElementById("book-name").value = "";
//     document.getElementById("user-type").value = "";
//     document.getElementById("id-number").value = "";

//     // Update the books table
//     updateIssueTable();
// }

// // Function to update the books table
// function updateIssueTable() {
//     let booksTable = document.getElementById("issue-books-table");
//     let booksTbody = document.getElementById("issue-books-tbody");

//     // Clear the table body
//     booksTbody.innerHTML = "";

//     // Get all the books from local storage
//     for (let i = 0; i < storage2.length; i++) {
//         let key = storage2.key(i);
//         let issue = JSON.parse(storage2.getItem(key));

//         // Create a new table row
//         let row = document.createElement("tr");

//         // Create table cells for book title, author, and ISBN
//         let nameCell = document.createElement("td");
//         nameCell.textContent = issue.name;
//         row.appendChild(nameCell);

//         let typeCell = document.createElement("td");
//         typeCell.textContent = issue.type;
//         row.appendChild(typeCell);

//         let idCell = document.createElement("td");
//         idCell.textContent = issue.id;
//         row.appendChild(idCell);

//         // Create a table cell for actions (edit and delete)
//         let actionsCell = document.createElement("td");
//         let editButton = document.createElement("button");
//         editButton.textContent = "Edit";
//         editButton.onclick = function() {
//             editIssue(issue.id);
//         };
//         actionsCell.appendChild(editButton);

//         let deleteButton = document.createElement("button");
//         deleteButton.textContent = "Delete";
//         deleteButton.onclick = function() {
//             deleteIssue(issue.id);
//         };
//         actionsCell.appendChild(deleteButton);

//         row.appendChild(actionsCell);

//         // Add the row to the table body
//         booksTbody.appendChild(row);
//     }
// }

// // Function to edit a book
// function editIssue(id) {
//     let issue = JSON.parse(storage2.getItem(id));

//     // Populate the form fields with the book data
//     document.getElementById("book-name").value = issue.name;
//     document.getElementById("user-type").value = issue.type;
//     document.getElementById("id-number").value = issue.id;

//     // Show the edit button
//     document.getElementById("add-issue-btn").textContent = "Update Book";
// }

// // Function to delete a book
// function deleteIssue(id) {
//     storage2.removeItem(id);
//     updateIssueTable();
// }

// // Add event listener to the add book button
// document.getElementById("add-issue-btn").addEventListener("click", issueBook);

// // Update the books table on page load
// updateIssueTable();
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('add-issue-form');
    const tbody = document.getElementById('issue-books-tbody');

    // Add book event handler
    form.addEventListener('submit', (event) => {
        event.preventDefault();

        // Retrieve values from the form
        const name = document.getElementById('book-name').value;
        const type = document.getElementById('user-type').value;
        const id = document.getElementById('id-number').value;
        const from = document.getElementById('d-from').value;
        const to = document.getElementById('d-to').value;

        // Create a new table row
        const tr = document.createElement('tr');

        tr.innerHTML = `
            <td>${name}</td>
            <td>${type}</td>
            <td>${id}</td>
            <td>${from}</td>
            <td>${to}</td>
            <td><button class="delete-btn" style="color:white; background-color:red;">Return</button></td>
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
