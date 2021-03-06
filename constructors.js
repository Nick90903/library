// Contains all Books
let myLibrary = [];

const container = document.querySelector('.container');

// New book Elements
const popUp = document.querySelector('#form');
popUp.style.display = 'none';
const newBookBtn = document.querySelector('.newBook');
// Pulls up New Book form
newBookBtn.addEventListener('click', () => popUp.style.display = 'flex');
// Closes New Book form
const closeForm = document.querySelector('.close');
closeForm.addEventListener('click', () => popUp.style.display = 'none', form.reset());

const submit = document.querySelector('#addBtn');
submit.addEventListener('click', () => addBookToLibrary() );


// Base for books
function Book(title, author, pages, read) {
    if(title == ''){alert('Title Can Not Be Blank'); return;}
    if(author == ''){alert('Author Can Nat Be Blank'); return;}
    if(pages <= 0) {alert('Pages Must Be A Positive Integer'); return;}
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function () {
        return `${title} by ${author}, ${pages} pages, ${read == true ? 'has': 'has not'} been read`;
    }
}

// Edit to use form!!!!!!!!!!!!!!!
function addBookToLibrary(){
    myLibrary.push(new Book(form.title.value,
                            form.author.value,
                            form.pages.value,
                            form.read.value));
    popUp.style.display = 'none';
    form.reset();
    listBooks();
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

console.table(myLibrary);