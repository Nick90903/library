// Contains all Books
let myLibrary = [];

const container = document.querySelector('.container');

// Base for books
function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function () {
        return `${title} by ${author}, ${pages} pages, ${read == true ? 'has': 'has not'} been read`;
    }
}

// Edit to use form!!!!!!!!!!!!!!!
function addBookToLibrary(title, author, pages, read){
    myLibrary.push(new Book(title, author, pages, read));
}


// Sends book data for each book in myLibrary
function listBooks() {
    console.log('listing Books');
    removeAll();
    for(let i = 0; i < myLibrary.length; i++) {
        createBook(myLibrary[i].title, myLibrary[i].author, myLibrary[i].pages, myLibrary[i].read, i);
    }
    addListeners();
}

// Recieves book data and creates book container to display all book data
function createBook(title, author, pages, read, index) {
    console.log('creating Log')
    const bookContainer = document.createElement('div');
    const bookTitle = document.createElement('h2');
    const bookAuthor = document.createElement('h2');
    const bookPages = document.createElement('h2');
    const hasRead = document.createElement("INPUT");
    const toggleRead = document.createElement('button');
    const removeBtn = document.createElement('button');
    const buttonContainer = document.createElement('div');
    

    bookContainer.classList.add('bookContainer');
    bookContainer.value = index;

    bookTitle.textContent = title;
    bookTitle.classList.add('bookTitle');

    bookAuthor.textContent = author;
    bookAuthor.classList.add('bookAuthor');
    
    bookPages.textContent = pages.toString();
    bookPages.classList.add('bookPages');

    hasRead.setAttribute("type", "checkbox");
    hasRead.checked = read;
    hasRead.classList.add('hasRead');

    toggleRead.textContent = 'Finished';
    toggleRead.value = index;
    toggleRead.classList.add('toggleRead');

    removeBtn.textContent = 'Remove';
    removeBtn.value = index;
    console.log(removeBtn.value);
    removeBtn.classList.add('removeBtn');

    

    buttonContainer.appendChild(toggleRead);
    buttonContainer.appendChild(removeBtn);

    bookContainer.appendChild(bookTitle);
    bookContainer.appendChild(bookAuthor);
    bookContainer.appendChild(bookPages);
    bookContainer.appendChild(hasRead);
    bookContainer.appendChild(buttonContainer);

    container.appendChild(bookContainer);

}

// Adds click listeners to all buttons on the page
function addListeners() {
    console.log('addListeners');
    const removeButtons = document.querySelectorAll('.removeBtn');
    removeButtons.forEach(button => {
        console.log('remove button listener added');
        button.addEventListener('click', function() {
            removeBook(this.value);
        })
    })

    const changeRead = document.querySelectorAll('.toggleRead');
    changeRead.forEach(button => {
        console.log('change read button listener added');
        button.addEventListener('click', function() {
            toggleReadValue(this.value);
        })
    })
}

// Removes book container from page and book from myLibrary
function removeBook(index) {
   console.log(index);
   
    console.log(`Removing book ${index} from myLibrary. This will be book ${console.log(myLibrary[index])}`);
    myLibrary.splice(index, 1);
    // Creates array of all book containers 
    const toRemove = document.querySelectorAll('.bookContainer');
    // Checks each book container to see if the values match, If they do, Remove the container
    toRemove.forEach(element => {
        if(element.value == index) {
            element.remove();
            listBooks();
        }
    })
}

// Toggles between read and not read
function toggleReadValue(index) {
    myLibrary[index].read = !myLibrary[index].read;
    console.log(myLibrary[index].read);
    listBooks();
}

// Removes Everything
function removeAll() {
    const toRemove = document.querySelectorAll('.bookContainer');
    toRemove.forEach(box => {
        box.remove();
    })
}

// Temp Book Data
addBookToLibrary('title1', 'author1', 450, false);
addBookToLibrary('title2', 'author2', 455, true);

listBooks();

console.table(myLibrary);