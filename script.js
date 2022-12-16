const openModal = document.getElementById("open-modal");
const addBook = document.getElementById("submit-book");
const books = document.getElementById("books");
const book = document.createElement("div");
const titleInput = document.getElementById("title");
const authorInput = document.getElementById("author");
const pagesInput = document.getElementById("pages");
const form = document.getElementById("form");
let library = [];
let booksDiv= [];
let = garbage = [];


openModal.addEventListener("click", ()=>{
    form.style.display="flex";
    
   

})


addBook.addEventListener("click", ()=>{
    books.innerHTML="";
   
    let currentBook= {
        "title":titleInput.value,
        "author":authorInput.value,
        "number":pagesInput.value
    }
    library.push(currentBook);
    form.style.display="none";
    loadBooks()
    // for(let i=0; i<booksDiv.length;i++){

    // }
   
})

function loadBooks(){
    
    for (let i=0;i<library.length; i++){
        //book
        let ThisBook = document.createElement("div");
        ThisBook.classList.add("book")
        let title = document.createElement("h3");
        let author = document.createElement("h3");
        let pages = document.createElement("h3");
        let button = document.createElement("button");
        //text in the book
        title.innerHTML=library[i]["title"];
        
        author.innerHTML="By: "+library[i]["author"];
        
        pages.innerHTML="pages : "+library[i]["number"];
        
        button.innerHTML = "Delete";
        //append text to book
        
        ThisBook.appendChild(title);
        ThisBook.appendChild(author);
        ThisBook.appendChild(pages);
        ThisBook.appendChild(button);
        //append book to the section
        booksDiv.push(ThisBook);
        books.appendChild(ThisBook);
        
       
        
            
    }
    for (let j=0; j<books.childNodes.length;j++){
    books.childNodes[j].childNodes[3].addEventListener("click", ()=>{
        console.log("hehe")
        //books.removeChild(books.childNodes[j]);
        library.splice(j, 1);
        books.innerHTML="";
        loadBooks()
        
    }) 
    
    }

}

