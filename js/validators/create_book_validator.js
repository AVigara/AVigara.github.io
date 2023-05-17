"use strict";

import { parseHTML } from "/js/utils/parseHTML.js";
import { BooksAPI_auto } from "/js/api/_Books.js";
import { booksRenderer } from "/js/renderers/books-renderer.js";
import { messageRenderer } from "/js/renderers/messages.js";

const booksValidator = {
    validate: function (formData) {

        if (formData.get("author").length < 3) {
            throw "Author's name length must have at least 3 letters";
        }

        if (formData.get("numPages") < 0) {
            throw "Pages cannot be negative";
        }

        if (formData.get("numPages") > 5000) {
            throw "Pages cannot be more than 5000";            
        }

    },
};

export { booksValidator };