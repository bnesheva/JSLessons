// JavaScript source code
// Task 1 - English Digit
console.log('Task 1 - English Digit');
var number,
    i,
    endDigit;
function enDigit(number) {
    number += '';
    i = number.length - 1;
    endDigit = number[i];
    switch(endDigit) {
        case ('1'):
            endDigit = 'one';
            break;
        case ('2'):
            endDigit = 'two';
            break;
        case ('3'):
            endDigit = 'three';
            break;
        case ('4'):
            endDigit = 'four';
            break;
        case ('5'):
            endDigit = 'five';
            break;
        case ('6'):
            endDigit = 'six';
            break;
        case ('7'):
            endDigit = 'seven';
            break;
        case ('8'):
            endDigit = 'eight';
            break;
        case ('9'):
            endDigit = 'nine';
            break;
        case ('0'):
            endDigit = 'zero';
            break;
        default:
            endDigit = 'will not tell ;)';
            break;
    }
    console.log(endDigit);
}
enDigit(512);
enDigit(1024);
enDigit(12309);

//Task2 - Reverse Number
console.log('Task 2 - Reverse number');

var number,
    reversing,
    reversed,
    i,
    str,
    len;

function ReverseNum(number) {
    reversing = ''
    str = number += '',
    len = str.length;
    for (i = len-1; i >= 0; i -= 1) {
        reversing = reversing + str[i];
    }
    console.log(reversing);
}
ReverseNum(256);
ReverseNum(123.45);

//Task3 - Occurances of word

var str,
    toFind,
    count,
    noCaseSens,
    searching;
function findWord(str, toFind, noCaseSens) {
    function wordFinding() {
        console.log('in string "' + str + '" to find "' + toFind + '"');
        searching = new RegExp(toFind, "g");
        console.log(searching);
        count = (str.match(searching) || []).length;
        console.log(count);
    }
    if (noCaseSens === true|| noCaseSens === null) {// I decide to treat skipped value as non- Case Sensitive case
        wordFinding();
    }
    else {
        str = str.toLowerCase();
        toFind = toFind.toLowerCase();
        wordFinding();
    }
}
findWord('Hi there, are you there, stay There', 'There', true);

//Task4 - Number of elements
console.log('Task4 - Number of elements')
function countDivs() {
    console.log(document.getElementsByTagName('div').length);
}
countDivs();



//Task 5 - First Occurance
console.log('Task 5 - First Occurance')

var str,
    word,
    i,
    toFind,
    match;
function FirstOccuranceWord(str, word){
    i = str.indexOf(word);
    console.log('index of first occurance of "' + word + '" is ' + i);
    function check() {
        toFind = new RegExp(word, "g");
        match = toFind.exec(str);
        if (match !== null) {
            if (match.index === i) {
                console.log('search seems OK :)');
            }
        }
        else {
            console.log('notihing found')
        }
    }
    check();
}
FirstOccuranceWord('it was a long time ago when when it was so serene and quiet. ', 'wasfger');

//Task 6 - Larger than Neighbours
console.log('Task 5 - Larger than Neighbours');

var numbers,
    len,
    i;
function compare(numbers) {
    len = numbers.length;
    for (i = 0; i < len; i += 1) {
        switch (i) {
            case (0):
                console.log('first integer is ' + numbers[i]);
                if (numbers[i] > numbers[i + 1]) {
                    console.log('and is bigger than its only neghbour');
                }
                break;
            case (len -1):
                console.log('last integer is ' + numbers[i]);
                if (numbers[i] > numbers[i - 1]) {
                    console.log('and is bigger than its only neghbour');
                }
                break;
            default:
                console.log('this integer is ' + numbers[i]);
                if ((numbers[i] > numbers[i - 1]) && (numbers[i] > numbers[i + 1])) {
                    console.log('and is bigger than its neghbours');
                }
                break;
        }
    }
}
compare([20, 3, 5, 9, 7, 8, 12]);

//Task 7 - first occurance
console.log('Task 7 - first occurance');
var numbers,
    len,
    i;

function firstOccurance(numbers) {
    len = numbers.length;
    for (i = 0; i < len; i += 1) {
        switch (i) {
            case (0):
                //console.log('first integer is ' + numbers[i]);
                if (numbers[i] > numbers[i + 1]) {
                    console.log('integer on index ' + i + ' is bigger than its only neghbour');
                    return;
                }
                break;
            case (len - 1):
                //console.log('last integer is ' + numbers[i]);
                if (numbers[i] > numbers[i - 1]) {
                    console.log('integer on index ' + i + ' is bigger than its only neghbour');
                    return;
                }
                break;
            default:
                //console.log('this integer is ' + numbers[i]);
                if ((numbers[i] > numbers[i - 1]) && (numbers[i] > numbers[i + 1])) {
                    console.log('integer on index ' + i + ' is bigger than its neghbours');
                    return;
                }
                break;
        }
    }
    console.log('at the end i is ' + i);
}

firstOccurance([1, 3, 5, 9, 7, 8, 12]);







