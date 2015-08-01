/* Task Description */
/* 
	*	Create a module for working with books
		*	The module must provide the following functionalities:
			*	Add a new book to category
				*	Each book has unique title, author and ISBN
				*	It must return the newly created book with assigned ID
				*	If the category is missing, it must be automatically created
			*	List all books
				*	Books are sorted by ID
				*	This can be done by author, by category or all
			*	List all categories
				*	Categories are sorted by ID
		*	Each book/catagory has a unique identifier (ID) that is a number greater than or equal to 1
			*	When adding a book/category, the ID is generated automatically
		*	Add validation everywhere, where possible
			*	Book title and category name must be between 2 and 100 characters, including letters, digits and special characters ('!', ',', '.', etc)
			*	Author is any non-empty string
			*	Unique params are Book title and Book ISBN
			*	Book ISBN is an unique code that contains either 10 or 13 digits
			*	If something is not valid - throw Error
*/
function solve() {
    var library = (function () {
        var books = [];
        var categories = [];


        //
        function listBooks(toSearch) {
            if (books.length === 0) {
                return books;
            }
            if (toSearch !== undefined) {
                // check if sorting by certain category
                if (toSearch.category !== undefined) {
                    return books.filter(function (book) {
                        if (book.category === toSearch.category) {
                            return book;
                        }
                    });
                }
                // check if sorting by certain author
                if (toSearch.author !== undefined) {
                    return books.filter(function (book) {
                        if (book.author === toSearch.author) {
                            return book;
                        }
                    });
                }
            }

            return books;
        }

        function addBook(book) {
            book.ID = books.length + 1;

            // Check the title, author and ISBN
            if (!(book.title) || !(book.author) || !(book.isbn)) {
                throw 'Please provide title, author and ISBN!';
            }
            if (isNaN(parseInt(book.isbn)) || (book.isbn.length !== 10 && book.isbn.length !== 13)) {
                throw 'Please provide valid ISBN!';
            }
            if (book.title.length < 2 && book.title.length > 100) {
                throw 'Please provide valid title!';
            }
            if (book.author ==='') {
                throw 'Please provide author!';
            }
            if (!(book.category)) {
                book.category = 'Uncategorized';
            }

            var i,
                len = books.length,
                lenCat = categories.length;
            //Checking for existing title or ISBN
            for (i = 0; i < len; i += 1) {
                if (books[i].title === book.title) {
                    throw 'This title already exists!';
                }
                if (books[i].isbn === book.isbn) {
                    throw 'This ISBN already exists!';
                }
            }
            //Check if a category exist and add if not
            var toAddCategory = true;
            if (categories.length > 0) {
                for (i = 0; i < lenCat; i += 1) {
                    if (categories[i] === book.category) {
                        toAddCategory = false;
                        break;
                    }
                }
            }
            if (toAddCategory) {
                categories.push(book.category);
            }

            books.push(book);
            return book;
        }

        function listCategories() {
            if (books.length === 0) {
                categories = [];
            }


            return categories;
        }

        return {
            books: {
                list: listBooks,
                add: addBook
            },
            categories: {
                list: listCategories
            }
        };
    }());
    return library;
}
module.exports = solve;



//addBook({
//    author : 'Sam Jackson',
//    title : 'Test Name',
//    isbn : '1234567894'
//})