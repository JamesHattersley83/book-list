// Book Constructor
function Book(title, author, isbn) {
  this.title = title;
  this.author = author;
  this.isbn = isbn;
}

// UI Constructor
function UI() {}

// Add book to list
UI.prototype.addBookToList = function(book) {
  const list = document.querySelector('#book-list');
  // Create tr element
  const row = document.createElement('tr');
  // Insert Columns
  row.innerHTML = `
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.isbn}</td>
    <td><a href="#" class="delete">X</a></td>`;

  list.appendChild(row);
};

// show alert
UI.prototype.showAlert = function(message, className) {
  // create div
  const div = document.createElement('div');
  // Add classes
  div.className = `alert ${className}`;
  // add text
  div.appendChild(document.createTextNode(message));
  // Get Parent
  const container = document.querySelector('.container');
  // Get form
  const form = document.querySelector('#book-form');
  // Insert alert
  container.insertBefore(div, form);

  // Remove alert after 3 secs
  setTimeout(function() {
    document.querySelector('.alert').remove();
  }, 3000);
};

// Clear field function
UI.prototype.clearFields = function() {
  document.getElementById('title').value = '';
  document.getElementById('author').value = '';
  document.getElementById('isbn').value = '';
};

// Event Listeners
document.getElementById('book-form').addEventListener('submit', function(e) {
  // Get form values
  const title = document.querySelector('#title').value;
  const author = document.querySelector('#author').value;
  const isbn = document.querySelector('#isbn').value;

  console.log(isbn);

  // Instantiate book
  const book = new Book(title, author, isbn);

  // Instantiate UI
  const ui = new UI();

  // Validate
  if (title === '' || author === '' || isbn === '') {
    // Error alert
    ui.showAlert('Pleasr fill in all the fields', 'error');
  } else {
    // Add book to list
    ui.addBookToList(book);

    // Clear fields
    ui.clearFields();
  }

  e.preventDefault();
});
