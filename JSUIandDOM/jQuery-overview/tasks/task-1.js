/* globals $ */

/* 
Create a function that takes a selector and COUNT, then generates inside a UL with COUNT LIs:   
  * The UL must have a class `items-list`
  * Each of the LIs must:
    * have a class `list-item`
    * content "List item #INDEX"
      * The indices are zero-based
  * If the provided selector does not selects anything, do nothing
  * Throws if
    * COUNT is a `Number`, but is less than 1
    * COUNT is **missing**, or **not convertible** to `Number`
      * _Example:_
        * Valid COUNT values:
          * 1, 2, 3, '1', '4', '1123'
        * Invalid COUNT values:
          * '123px' 'John', {}, [] 
*/

function solve() {
    return function (selector, count) {
        var fragment,
            ul,
            i,
            validator = {
            ifExists: function (toCheck) {
                if (toCheck === undefined) {
                    throw new Error('please provide data');
                }
            },
            ifNaN: function (toCheck) {
                if (typeof toCheck !== 'number' || toCheck === NaN) {
                    throw new Error('please provide number')
                }
            },
            ifLessThan1: function (toCheck) {
                if (toCheck < 1) {
                    throw new Error('number must be more than 1')
                }
            },
            isString: function (toCheck) {
                if (typeof toCheck !== 'string') {
                    throw new Error('this needs to be string');
                }
            }
        }; 

        //validation
        validator.ifExists(selector);
        validator.ifExists(count);
        validator.ifNaN(count);
        validator.ifLessThan1(count);
        validator.isString(selector);

        //
        
        ul = $(document.createElement('ul'));
        ul.addClass('items-list');

            var fragment = $(document.createDocumentFragment());
            for (i = 0; i < count; i += 1) {
                li = $('<li>' + 'List item #' + i + '</li>').addClass('list-item');
                fragment.append(li);
            }
            $(selector).append(ul);
            $(fragment).appendTo('.items-list');
        

    };
}

module.exports = solve;