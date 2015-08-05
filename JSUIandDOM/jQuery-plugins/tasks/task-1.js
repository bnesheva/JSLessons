// JavaScript source code

function solve() {
    return function (selector) {
        var selected = $(selector);
        var mainDiv = $('<div />').addClass('dropdown-list');

        selected.hide();
        selected.wrap(mainDiv);


    };
}

//module.exports = solve;
