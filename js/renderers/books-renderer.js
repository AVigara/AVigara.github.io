"use strict";

import { parseHTML } from "/js/utils/parseHTML.js";

const booksRenderer = {
    asCard: function (book) {
        let html = `<div class="col">
        <div class="card">
            <img src="${book.imageUrl}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title d-flex justify-content-center">${book.title}</h5>
                <p class="card-text d-flex justify-content-center">${book.author}</p>
                <small class="card-text d-flex">Pages: ${book.numPages}</small>
                <small class="card-text d-flex justify-content-end">Relase: ${book.releaseDate}</small>
                <br>
                <div class="card-text d-flex justify-content-center">
                    <button type="button" class="btn btn-warning" onclick="window.location.href='create_book.html?book=${book.bookId}'">Modify Book</button>
                </div>
            </div>
        </div>
    </div>`;

        return parseHTML(html);

    },

    asCardGallery: function (books) {

        let container = document.getElementById("gallery_container");

        for(let book of books){
            container.appendChild(this.asCard(book));
        }

    }
};

export { booksRenderer };