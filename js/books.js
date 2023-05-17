"use strict";

import { BooksAPI_auto } from "/js/api/_Books.js";
import { booksRenderer } from "/js/renderers/books-renderer.js";




async function main() {

    let books = await BooksAPI_auto.getAll();

    booksRenderer.asCardGallery(books);

}

document.addEventListener("DOMContentLoaded", main);