// JavaScript source code



function solve() {

    var module = (function () {
        var item,
            book,
            validator;
        //Validations

        validator = {
            ifDefined: function (val, name) {
                name = name || 'value';
                if (val === undefined) {
                    throw new Error(name + 'cannot be undefined!')
                }
            },
            ifStr: function (str, name) {
                name = name || 'value';
                if (typeof str !== 'string') {
                    throw new Error(name + ' must be a string!');
                }
            },
            ifStrNotEmpty: function (str, name) {
                name = name || 'value';
                if (str.length < 1) {
                    throw new Error(name + ' cannot be empty!');
                }
            }
        }

        //Item

        item = (function () {
            var currentItemId = 0;
            var item = Object.create({});

            Object.defineProperty(item, 'init', {
                value: function (description, name) {
                    this.description = description;
                    this.name = name;
                    this._id = ++currentItemId;

                    return this;
                }

            });

            Object.defineProperty(item, 'id', {
                get: function () {
                    return this._id;
                }
            });

            Object.defineProperty(item, 'description', {
                get: function () {
                    return this._description;
                },
                set: function (val) {
                    validator.ifDefined(val, 'Item Descr.');
                    validator.ifStr(val, 'Item Descr.');
                    validator.ifStrNotEmpty(val, 'Item Descr.');

                    this._description = val;
                }
            });

            Object.defineProperty(item, 'name', {
                get: function () {
                    return this._name;
                },
                set: function (val) {
                    validator.ifDefined(val, 'Item Name');
                    validator.ifStr(val, 'Item Name');
                    if (val.length < 2 || val.length > 40) {
                        throw new Error('Wrong Item Name length!')
                    };

                    this._name = val;
                }
            });

            return item;
        }());

        //Book

        var book = (function (parent) {

            var book = Object.create(parent);

            Object.defineProperty(book, 'init', {
                value: function (name, isbn, genre, description) {

                    parent.init.call(this, description, name);

                    this.isbn = isbn;
                    this.genre = genre;

                    return this;

                }
            });

            Object.defineProperty(book, 'isbn', {
                get: function () {
                    return this._isbn;
                },
                set: function (val) {
                    if (val.length !== 10 && val.length !== 13) {
                        throw new Error('wrong isbn length!')
                    }
                    if (isNaN(parseInt(val))) {
                        throw new Error('isbn must be a number!')
                    }
                    this._isbn = val;
                }
            });

            Object.defineProperty(book, 'genre', {
                get: function () {
                    return this._genre;
                },
                set: function (val) {
                    validator.ifStr(val, 'book genre')
                    if (val.length < 2 || val.length > 40) {
                        throw new Error('wrong genre length!')
                    }

                    this._genre = val;
                }
            });

            return book;
        }(item));

        
        //Media

        var media = (function (parent) {

            var media = Object.create(parent);

            Object.defineProperty(media, 'init', {
                value: function (name, rating, duration, description) {

                    parent.init.call(this, description, name);

                     this.rating = rating;
                    this.duration = duration;

                    return this;

                }
            });

            Object.defineProperty(media, 'rating', {
                get: function () {
                    return this._rating;
                },
                set: function (val) {
                    
                    if (isNaN(parseInt(val))) {
                        throw new Error('rating must be a number!')
                    }
                    if (val<1 || val > 5) {
                        throw new Error('wrong rating!')
                    }
                    this._rating = val;
                }
            });

            Object.defineProperty(media, 'duration', {
                get: function () {
                    return this._duration;
                },
                set: function (val) {

                    if (isNaN(parseInt(val))) {
                        throw new Error('duration must be a number!')
                    }
                    if (val < 1 ) {
                        throw new Error('wrong rating!')
                    }
                    this._duration = val;
                }
            });

            return media;
        }(item));

        //Catalog

        var catalog = (function () {
            var currentCatId = 0;
            var catalog = Object.create({});

            Object.defineProperty(catalog, 'init', {
                value: function (name) {
                    this.name = name;
                    this.items = [];
                    this._id = ++currentCatId;
                    
                    return this;
                }
            });

            Object.defineProperty(catalog, 'id', {
                get: function () {
                    return this._id;
                }
            });

            Object.defineProperty(catalog, 'name', {
                get: function () {
                    return this._name;
                },
                set: function (val) {
                    validate.ifStr(val);
                    if(val.length < 2 || val.length > 40) {
                        throw new Error ('wrong catalog name')
                    }
                    this._name = val;
                }
            });

            Object.defineProperty(catalog, 'add', {
                value: function () {


                    if (Array.isArray(arguments[0])) {
                        var j,

                            len = this.arguments.length;
                        if (len < 1) {
                            throw new Error('');
                        }

                        for (j = 0; j < len; j += 1) {

                            if (arguments[0].id == undefined) {
                                throw new Error('');
                            }
                            (this.items).push(arguments[0][j]);
                        }
                    }
                    else {
                        var i,
                            len = this.arguments.length;
                        if (len < 1) {
                            throw new Error('');
                        }

                        for (i = 0; i < len; i += 1) {

                            if (arguments[i].id == undefined) {
                                throw new Error('');
                            }
                            (this.items).push(arguments[i]);
                        }
                    }
                    
                    return this;
                }
                
            });
            Object.defineProperty(catalog, 'find', {
                function() {

                }
            })

            Object.defineProperty(catalog, 'search', {
                function() {

                }
            })
            
            return catalog;
        }());

        var bookCatalog = (function (parent) {
            var bookCatalog = Object.create(parent);

            Object.defineProperty(bookCatalog, 'init', {
                value: function (name) {
                    parent.init.call(this, name);
                    parent.apply(this, add);
                    parent.apply(this, find);
                    parent.apply(this, search);
                    return this;
                }
            });


            return bookCatalog;
        }(catalog));


        var mediaCatalog = (function (parent) {
            var mediaCatalog = Object.create(parent);

            Object.defineProperty(mediaCatalog, 'init', {
                value: function (name) {
                    parent.init.call(this, name);
                    parent.apply(this, add);

                    parent.apply(this, find);
                    parent.apply(this, search);
                    return this;
                }
            })

            return mediaCatalog;
        }(catalog));







    //return starts here



        return {
            getBook: function (name, isbn, genre, description) {
                //return a book instance
                return Object.create(book).init(name, isbn, genre, description);
            },
            getMedia: function (name, rating, duration, description) {
                //return a media instance
                return Object.create(media).init(name, rating, duration, description);
            },
            getBookCatalog: function (name) {
                //return a book catalog instance
                return Object.create(bookCatalog).init(name);
            },
            getMediaCatalog: function (name) {
                //return a media catalog instance
                return Object.create(mediaCatalog).init(name);
            }
        };
    }());

    return module;
}












// to test with

//var module = solve()

//var thing = module.getBook('gdsfgfd', '1234567890', 'efdsf', 'dfdvxccvx');





//var module = solve();

//var catalog = module.getBookCatalog('John\'s catalog');

//var book1 = module.getBook('The secrets of the JavaScript Ninja', '1234567890', 'IT', 'A book about JavaScript');


//var book2 = module.getBook('JavaScript: The Good Parts', '0123456789', 'IT', 'A good book about JS');



//catalog.add(book1);
//catalog.add(book2);

//console.log(catalog.find(book1.id));
//returns book1

//console.log(catalog.find({id: book2.id, genre: 'IT'}));
//returns book2

//console.log(catalog.search('js')); 
// returns book2

//console.log(catalog.search('javascript'));
//returns book1 and book2

//console.log(catalog.search('Te sa zeleni'))
//returns []
