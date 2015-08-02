/* globals $ */

/* 
Create a function that takes an id or DOM element and an array of contents
* if an id is provided, select the element
* Add divs to the element
  * Each div's content must be one of the items from the contents array
* The function must remove all previous content from the DOM element provided
* Throws if:
  * The provided first parameter is neither string or existing DOM element
  * The provided id does not select anything (there is no element that has such an id)
  * Any of the function params is missing
  * Any of the function params is not as described
  * Any of the contents is neight `string` or `number`
    * In that case, the content of the element **must not be** changed   
*/

module.exports = function () {

    return function (element, contents) {
        var validator = {
            isNotStringNorNumber: function (toCheck) {
                if (typeof toCheck !== 'string' && typeof toCheck !== 'number') {
                    throw new Error(toCheck + ' must be string or number!');
                };
            },
            isNotStringNorDOMElement: function (toCheck) {
                if (typeof toCheck !== 'string' && toCheck.tagName === undefined) {
                    throw new Error(toCheck + ' must be string or HTML Element!');
                };
            },
            ifExists: function (toCheck) {
                if (toCheck === undefined) {
                    throw new Error('Please provide all required parameters');
                };
            },
            ifIdInDOM: function (toCheck) {
                if (document.getElementById(toCheck) === null) {
                    return false;
                }
                else {
                    return true;
                };
            },
            ifTagInDOM: function (toCheck) {
                console.log(toCheck + ' ' + document.getElementsByTagName(toCheck));
                if ((document.getElementsByTagName(toCheck)).length < 1) {
                    return false;
                }
                else {
                    return true;
                };
            }
        }
        //start validation
        validator.ifExists(element);
        validator.ifExists(contents);
        validator.isNotStringNorDOMElement(element);
        if (!(Array.isArray(contents))) {
            throw new Error('here you need an Array!')
        }
        if (Array.isArray(contents)) {
//            if (contents.length < 1) {
//                throw new Error('Please provide some content!');
//            };
            contents.forEach(function (value, index, arr) {
                validator.isNotStringNorNumber(arr[index]);
            });
            writeContent();
        }

        //Actions
        function writeContent() {
            var i,
                j,
                selectedTags,
                len1,
                len = contents.length,
                contentToWrite = '';

            for (i = 0; i < len; i += 1) {
                contentToWrite += '<div>' + contents[1] + '</div>';
            };
            if (typeof element === 'string') {
                if (validator.ifIdInDOM(element)) {
                    document.getElementById(element).innerHTML = contentToWrite;
                }
                else {
                    throw new Error(element + ' element does not exist in this document!')
                }
            }
            else if (element.tagName !== undefined) {
                if (validator.ifTagInDOM((element.tagName).toLowerCase())) {
                    selectedTags = document.getElementsByTagName((element.tagName).toLowerCase());
                    len1 = selectedTags.length;
                    for (j = 0; j < len1; j += 1) {
                        selectedTags[j].innerHTML = contentToWrite;
                    }
                }
                else {
                    throw new Error(element.tagName + ' element does not exist in this document!')
                }
            }
        };
    };
};
