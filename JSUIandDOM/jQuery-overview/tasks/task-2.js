/* globals $ */

/*
Create a function that takes a selector and:
* Finds all elements with class `button` or `content` within the provided element
  * Change the content of all `.button` elements with "hide"
* When a `.button` is clicked:
  * Find the topmost `.content` element, that is before another `.button` and:
    * If the `.content` is visible:
      * Hide the `.content`
      * Change the content of the `.button` to "show"       
    * If the `.content` is hidden:
      * Show the `.content`
      * Change the content of the `.button` to "hide"
    * If there isn't a `.content` element **after the clicked `.button`** and **before other `.button`**, do nothing
* Throws if:
  * The provided ID is not a **jQuery object** or a `string` 
*/

function solve() {
    return function (selector) {
        if (typeof selector === 'string') {
            selector = $(selector);
        }
        if ($(selector).length < 1) {
            throw new Error('invalid selector!');

        }

        var button = selector.find('.button');
        button.text('hide');



        button.text('hide');
        button.on('click', function () {
            var contentsAfter = $(this).nextAll();
            var len = contentsAfter.length;
            var i;
            for (i = 0; i < len; i += 1) {
                // console.log(contentsAfter[i]);
                // console.log($(contentsAfter[i]).next().attr('class'));
                if ($(contentsAfter[i]).hasClass('button')) {
                    break;
                }
                if ($(contentsAfter[i]).hasClass('content')) {
                    if ($(contentsAfter[i]).next().hasClass('button') ) {
                    //   console.log('match!')
                        if ($(contentsAfter[i]).css('display') === 'none') {
                            $(contentsAfter[i]).css('display', '');
                            $(this).text('hide');
                        }
                        else {
                            $(contentsAfter[i]).css('display', 'none');
                            $(this).text('show');
                        }
                    }
                }
            }
        });
    };
};

module.exports = solve;