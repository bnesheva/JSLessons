/* globals $ */

/* 
Create a function that takes an id or DOM element and:
  
*/

function solve() {
    return function (selector) {
        var buttons = document.getElementsByClassName('button'),
            buttonsLen = buttons.length,
            i,
            contents = document.getElementsByClassName('content'),
            contentsLen = contents.length,
            j,
            validator = {
            isNotStringNorDOMElement: function (toCheck) {
                if (typeof toCheck !== 'string' && toCheck.tagName === undefined) {
                    throw new Error(toCheck + ' must be string or HTML Element!');
                };
            },
            ifExists: function (toCheck) {
                if (toCheck === undefined) {
                    throw new Error('Please provide selector');
                };
            },
            ifInDOM: function (toCheck) {
                if (document.getElementById(toCheck) === null && (document.getElementsByTagName(toCheck)).length < 1) {
                    throw new Error('no such thing on this page');
                }
            },
        }
        //start validation
        validator.ifExists(selector);
        validator.isNotStringNorDOMElement(selector);
        validator.ifInDOM(selector);

        //action
        function hideOrShow() {
            //console.log('event fired');
            var i, j, buttonInd;
            var sibs = [];
            function getNextSiblings(elem) {
                while (elem = elem.nextSibling) {
                    if (elem.className === 'button') {
                        break;
                    }
                    if (elem.className === 'content' && elem.nextElementSibling && (elem.nextElementSibling).className === 'button') {
                        sibs.push(elem);
                    }
                }
            }
            for (i = 0; i < buttonsLen; i += 1) {
                if (buttons[i] === this) {
                    buttonInd = i;
                }
            }
            getNextSiblings(buttons[buttonInd]);
            if (sibs.length > 0) {
                if (sibs[0].style.display === 'none') {
                    sibs[0].style.display = '';
                    this.innerHTML = 'hide';
                }
                else {
                    sibs[0].style.display = 'none';
                    this.innerHTML = 'show';
                }
            }
           // for (j = buttonInd; j < buttonsLen - 1; j += 1) {
              //  console.log(buttons[j + 1]);
              //  getNextSiblings(buttons[j]);
           // }
            //console.log(sibs);
            //console.log('button is ' + buttonInd);
        }
        for (i = 0; i < buttonsLen; i += 1) {
            buttons[i].innerHTML = 'hide';
            buttons[i].addEventListener('click', hideOrShow, false);
        }
    };
};

module.exports = solve;


/////////////////////////
