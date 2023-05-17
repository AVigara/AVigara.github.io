"use strict";

import { BooksAPI_auto } from "/js/api/_Books.js";
import { messageRenderer } from "/js/renderers/messages.js";
import { booksValidator } from "/js/validators/create_book_validator.js";

const urlParams = new URLSearchParams(window.location.search); // Objeto query de la ventana
const bookId = urlParams.get("book"); // Extrae el parámetro

async function main() {

    if (bookId == null || bookId == "") {
        let form = document.getElementById("createBookForm");
        form.onsubmit = createBook;
    }else{
        let form = document.getElementById("createBookForm");
        form.onsubmit = updateBook;
        updateForm(bookId);
        updateButton();
    }

}

async function updateButton(){
    let button = document.getElementById("createButton");
    button.textContent = "Update";
}

async function updateBook(event){
    event.preventDefault();
    let target = event.target;
    let formData = new FormData(target);

    try {
        booksValidator.validate(formData);

        await BooksAPI_auto.update(formData, bookId);

        messageRenderer.showSuccessMessage("Book updated successfully");
    } catch (error) {
        messageRenderer.showErrorMessage(error);
    }
}

async function updateForm(){
    try {
        let bookData = await BooksAPI_auto.getById(bookId);

        let bookName = document.getElementById("bookName");
        bookName.value = bookData.title;

        let bookAuthor = document.getElementById("bookAuthor");
        bookAuthor.value = bookData.author;

        let bookReleaseDate = document.getElementById("bookReleaseDate");
        bookReleaseDate.value = bookData.releaseDate;

        let bookNumPages = document.getElementById("bookNumPages");
        bookNumPages.value = bookData.numPages;

        let bookImageURL = document.getElementById("bookImageURL");
        bookImageURL.value = bookData.imageUrl;
    } catch (error) {
        messageRenderer.showErrorMessage(error);
    }
}

async function createBook(event){
    event.preventDefault();
    let target = event.target;
    let formData = new FormData(target);

    try {
        booksValidator.validate(formData);

        await BooksAPI_auto.create(formData);

        window.location.reload();
    } catch (error) {
        messageRenderer.showErrorMessage(error);
    }

}

document.addEventListener("DOMContentLoaded", main);