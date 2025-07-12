const myLibrary = [];

function Book(bookName, bookAuthor, bookPages, bookChecked) {
  this.bookName = bookName;
  this.bookAuthor = bookAuthor;
  this.bookPages = bookPages;
  this.bookChecked = bookChecked;
}

const formContainer = document.getElementById("addform");
const bookForm = document.getElementById("bookform");
const newBookBtn = document.getElementById("newBook");
const display = document.getElementById("cards");


newBookBtn.addEventListener("click", () => {
  formContainer.style.display = "block";
  newBookBtn.style.display = "none";
});

bookForm.addEventListener("submit", (e) => {
  e.preventDefault();
  addBook();
  renderBooks();
  formContainer.style.display = "none";
  newBookBtn.style.display = "block";
  bookForm.reset();
});

function addBook() {
  const name = document.getElementById("bookname").value;
  const author = document.getElementById("author").value;
  const pages = document.getElementById("pages").value;
  const checkbox = document.getElementById("read");
  const checkedStatus = checkbox.checked ? "Read" : "Not Read";

  const newBookObj = new Book(name, author, pages, checkedStatus);
  myLibrary.push(newBookObj);
}

function renderBooks() {
  display.innerHTML = ""; 

  myLibrary.forEach((book, index) => {
    const bookCard = document.createElement("div");
    bookCard.classList.add("book-cards");

    bookCard.innerHTML = `
      <h3>${book.bookName}</h3>
      <p>${book.bookAuthor}</p>
      <p>${book.bookPages}</p>
      <p>${book.bookChecked}</p>
      <button class="deletebtn">Delete</button>
    `;

    const deleteBtn = bookCard.querySelector(".deletebtn");
    deleteBtn.addEventListener("click", () => deleteBook(index));

    display.appendChild(bookCard);
  });
}

function deleteBook(index) {
  myLibrary.splice(index, 1);
  renderBooks(); 
}
