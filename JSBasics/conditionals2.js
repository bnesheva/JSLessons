//Task 1 - Exchange if greater
console.log('Task 1 - Exchange if greater');

var a = 5;

var b = 2;

var change;

if (a > b) {;
    change = a;
    a = b;
    b = change;
};
console.log(a + ' ' + b);
//The rest of the examples
function task1 (a, b) {
    if (a > b) {
        var change = '';
        change = a;
        a = b;
        b = change;
    };
    console.log(a + ' ' + b);
}
task1(4, 3);
task1(5.5, 4.5);

//Task 2 - Multiplication Sign

console.log('Task 2 - Multiplication Sign');

var a = 5;
var b = 2;
var c = 2;
var sign;

if (a > 0 && b > 0 && c > 0) {
    sign = '+';
}
else if (a < 0 && b < 0 && c < 0) {
    sign = '-';
}
else if (a < 0 && b > 0 && c > 0) {
    sign = '-';
}
else if (a < 0 && b < 0 && c > 0) {
    sign = '+';
}
else if (a === 0 && b < 0 && c > 0) {
    sign = '0';
}
console.log(sign);

//the rest of the example
function task2(a, b, c) {
    if (a > 0 && b > 0 && c > 0) {
        sign = '+';
    }
    else if (a < 0 && b < 0 && c < 0) {
        sign = '-';
    }
    else if (a < 0 && b > 0 && c > 0) {
        sign = '-';
    }
    else if (a < 0 && b < 0 && c > 0) {
        sign = '+';
    }
    else if (a === 0 && b < 0 && c > 0) {
        sign = '0';
    }
    console.log(sign);
}

task2(-2, -2, 1);
task2(-2, 4, 3);
task2(0, -2.5, 4);
task2(-1, -0.5, -5.1);

//Task 3 - Biggest of 3

console.log('Task 3 - Biggest of 3');

var a = 5;
var b = 2;
var c = 2;
if (a > b) {
    if (a > c) {
        console.log(a);
    }
    else {
        console.log(c);
    }
}
else if (b > a) {
    if (b > c) {
        console.log(b);
    }
    else {
        console.log(c);
    }
}
else if (c > b && c > b) {
    console.log(c);
}


//The rest of the examples
function task3(a, b, c) {
    if (a > b) {
        if (a > c) {
            console.log(a);
        }
        else {
            console.log(c);
        }
    }
    else if (b > a) {
        if (b > c) {
            console.log(b);
        }
        else {
            console.log(c);
        }
    }
    else if (c > b && c > b) {
        console.log(c);
    }

}
task3(-2, -2, 1);
task3(-2, 4, 3);
task3(0, -2.5, 5);
task3(-0.1, -0.5, -1.1);
 
//Task 4 - Sort Numbers
console.log('Task 4 - Sort Numbers');

var a = 5;
var b = 1;
var c = 2;
if (a >= b) {
    if (a >= c) {
        if (b >= c) {
            console.log(a + ' ' + b + ' ' + c);
        }
        else {
            console.log(a + ' ' + c + ' ' + b);
        }
    }
    else {
        if (b >= a) {
            console.log(c + ' ' + b + ' ' + a);
        }
        else {
            console.log(c + ' ' + a + ' ' + b);
        }
    }
}
else if (b > a) {
    if (b >= c) {
        if (a >= c) {
            console.log(b + ' ' + a + ' ' + c);
        }
        else {
            console.log(b + ' ' + c + ' ' + a);
        }
    }
    else {
        if (b >= a) {
            console.log(c + ' ' + b + ' ' + a);
        }
        else {
            console.log(c + ' ' + a + ' ' + b);
        }
    }
}

//the rest of the example
function task4(a, b, c) {
    if (a >= b) {
        if (a >= c) {
            if (b >= c) {
                console.log(a + ' ' + b + ' ' + c);
            }
            else {
                console.log(a + ' ' + c + ' ' + b);
            }
        }
        else {
            if (b >= a) {
                console.log(c + ' ' + b + ' ' + a);
            }
            else {
                console.log(c + ' ' + a + ' ' + b);
            }
        }
    }
    else if (b > a) {
        if (b >= c) {
            if (a >= c) {
                console.log(b + ' ' + a + ' ' + c);
            }
            else {
                console.log(b + ' ' + c + ' ' + a);
            }
        }
        else {
            if (b >= a) {
                console.log(c + ' ' + b + ' ' + a);
            }
            else {
                console.log(c + ' ' + a + ' ' + b);
            }
        }
    }
}

task4(-2, -2, 1);
task4(-2, 4, 3);
task4(0, -2.5, 5);
task4(-1.1, -0.5, -0.1);
task4(10, 20, 30);
task4(1, 1, 1);

//Task 5 - Digit as word
console.log('Task 5 - Digit as word');

var myNumber = 2;
var digit;

switch (myNumber) {
    case 1: digit = 'one'; break;
    case 2: digit = 'two'; break;
    case 3: digit = 'three'; break;
    case 4: digit = 'four'; break;
    case 5: digit = 'five'; break;
    case 6: digit = 'six'; break;
    case 7: digit = 'seven'; break;
    case 8: digit = 'eight'; break;
    case 9: digit = 'nine'; break;
    case 0: digit = 'zero'; break;
    default: digit = 'not a digit'; break;
}
console.log(digit);

//The rest of the examples

function task5(myNumber) {
    switch (myNumber) {
        case 1: digit = 'one'; break;
        case 2: digit = 'two'; break;
        case 3: digit = 'three'; break;
        case 4: digit = 'four'; break;
        case 5: digit = 'five'; break;
        case 6: digit = 'six'; break;
        case 7: digit = 'seven'; break;
        case 8: digit = 'eight'; break;
        case 9: digit = 'nine'; break;
        case 0: digit = 'zero'; break;
        default: digit = 'not a digit'; break;
    }
    console.log(digit);
}

task5(1);
task5(0);
task5(5);
task5(-0.1);
task5('hi');
task5(9);
task5(10);





//Task 6 - Square root
console.log('Task 6 - Square roots');

var a = 2;
var b = 5;
var c = -3;
var part1;
var root1;
var root2;

var part1 = Math.sqrt(b * b - (4 * a * c));

var root1 = (-b - part1) / (2 * a);
var root2 = (-b + part1) / (2 * a);

if (isNaN(root1) && isNaN(root2)) {
    console.log('no real roots')
}
else {
    if (isNaN(root1)) {
        console.log('x2=' + root2);
    }
    else if (isNaN(root2)) {
        console.log('x1=' + root1)
    }
    else if (root1 === root2) {
        console.log('x1=x2=' + root1);
    }
    else {
        console.log('x1=' + root1 + '; x2=' + root2);
    }
}

//Rest of the example
function task6(a, b, c) {
    var part1 = Math.sqrt(b * b - (4 * a * c));

    var root1 = (-b - part1) / (2 * a);
    var root2 = (-b + part1) / (2 * a);

    if (isNaN(root1) && isNaN(root2)) {
        console.log('no real roots')
    }
    else {
        if (isNaN(root1)) {
            console.log('x2=' + root2);
        }
        else if (isNaN(root2)) {
            console.log('x1=' + root1)
        }
        else if (root1 === root2) {
            console.log('x1=x2=' + root1);
        }
        else {
            console.log('x1=' + root1 + '; x2=' + root2);
        }
    }

}

task6(-1, 3, 0);
task6(-0.5, 4, -8);
task6(5, 2, 8);





//Task 7 - The biggest of 5

console.log('Task 7 - The biggest of 5');

var a = 5;
var b = 2;
var c = 2;
var d = 4;
var e = 1;
var biggest;

if (a >= b) {
    if (a >= c) {
        if (a >= d) {
            if (a >= e) {
                biggest = a;
            }
        }
    }
}
if (b >= a) {
    if (b >= c) {
        if (b >= d) {
            if (b >= e) {
                biggest = b;
            }
        }
    }
}
if (c >= a) {
    if (c >= b) {
        if (c >= d) {
            if (c >= e) {
                biggest = c;
            }
        }
    }
}
if (d >= a) {
    if (d >= b) {
        if (d >= c) {
            if (d >= e) {
                biggest = d;
            }
        }
    }
}
if (e >= a) {
    if (e >= b) {
        if (e >= c) {
            if (e >= d) {
                biggest = e;
            }
        }
    }
}
console.log(biggest);


//The rest of the examples
function task7(a, b, c, d, e) {

    if (a >= b) {
        if (a >= c) {
            if (a >= d) {
                if (a >= e) {
                    biggest = a;
                }
            }
        }
    }
    if (b >= a) {
        if (b >= c) {
            if (b >= d) {
                if (b >= e) {
                    biggest = b;
                }
            }
        }
    }
    if (c >= a) {
        if (c >= b) {
            if (c >= d) {
                if (c >= e) {
                    biggest = c;
                }
            }
        }
    }
    if (d >= a) {
        if (d >= b) {
            if (d >= c) {
                if (d >= e) {
                    biggest = d;
                }
            }
        }
    }
    if (e >= a) {
        if (e >= b) {
            if (e >= c) {
                if (e >= d) {
                    biggest = e;
                }
            }
        }
    }
    console.log(biggest);
}

task7(-2, -22, 1, 0, 0);
task7(-2, 4, 3, 2, 0);
task7(0, -2.5, 0, 5, 5);
task7(-3, -0.5, -1.1, -2, -0.1);

//Task 8 - Numbers as words
console.log('Taks 8 - Numbers as words');
var myNumber = 0;
number = myNumber.toString();
digit1 = number.charAt(number.length - 1);
digit2 = number.charAt(number.length - 2);
digit3 = number.charAt(number.length - 3);

d1Name = '';
d2Name = '';
d3Name = '';

//Regular naming for hungreds
switch (digit3) {
    case '1': d3Name = 'One hundred'; break;
    case '2': d3Name = 'Two hundred'; break;
    case '3': d3Name = 'Three hundred'; break;
    case '4': d3Name = 'Four hundred'; break;
    case '5': d3Name = 'Five hundred'; break;
    case '6': d3Name = 'Six hundred'; break;
    case '7': d3Name = 'Seven hundred'; break;
    case '8': d3Name = 'Eight hundred'; break;
    case '9': d3Name = 'Nine hundred'; break;

}
//Regular naming for tens
switch (digit2) {
    case '2': d2Name = 'twenty'; break;
    case '3': d2Name = 'thirty'; break;
    case '4': d2Name = 'fourty'; break;
    case '5': d2Name = 'fifty'; break;
    case '6': d2Name = 'sixty'; break;
    case '7': d2Name = 'seventy'; break;
    case '8': d2Name = 'eighty'; break;
    case '9': d2Name = 'ninety'; break;
}
//Regular naming for digits
switch (digit1) {
    case '1': d1Name = 'one'; break;
    case '2': d1Name = 'two'; break;
    case '3': d1Name = 'three'; break;
    case '4': d1Name = 'four'; break;
    case '5': d1Name = 'five'; break;
    case '6': d1Name = 'six'; break;
    case '7': d1Name = 'seven'; break;
    case '8': d1Name = 'eight'; break;
    case '9': d1Name = 'nine'; break;
}
//Special conditions

if (digit2 === '1') {
    d2Name = d1Name;
    d1Name = 'teen';
    switch (digit1) {
        case '3': d2Name = 'thir'; break;
        case '5': d2Name = 'fif'; break;
        case '8': d2Name = 'eigh'; break;
    }
    if (digit1 === '0') {
        d2Name = 'ten';
        d1Name = '';
    }
    if (digit1 === '1') {
        d2Name = 'eleven';
        d1Name = '';
    }
    if (digit1 === '2') {
        d2Name = 'twelve';
        d1Name = '';
    }
}
if (myNumber <= 999 && myNumber > 0) {

    if (myNumber <= 99) {
        if (myNumber <= 9) {
            d1Name = d1Name.charAt(0).toUpperCase() + d1Name.slice(1);
            console.log(d1Name);
        }
        else {
            d2Name = d2Name.charAt(0).toUpperCase() + d2Name.slice(1);

            if (digit2 === '1') {
                console.log(d2Name + d1Name);
            }
            else {
                console.log(d2Name + ' ' + d1Name);
            }
        }
    }
    else {
        if (digit1 === '0' && digit2 === '0') {
            console.log(d3Name);
        }
        else if ((digit2 === '0' && digit1 !== '0') || d1Name === 'teen') {
            console.log(d3Name + ' and ' + d2Name + d1Name);
        }
        else {
            console.log(d3Name + ' and ' + d2Name + ' ' + d1Name);
        }
    }
}
else if (myNumber === 0) {
    d1name = 'Zero';
    console.log(d1Name);
}
else {
    console.log('try with number 0 - 100');
}
// the rest of the example

function task8(myNumber) {
    number = myNumber.toString();
    digit1 = number.charAt(number.length - 1);
    digit2 = number.charAt(number.length - 2);
    digit3 = number.charAt(number.length - 3);

    d1Name = '';
    d2Name = '';
    d3Name = '';

    //Regular naming for hungreds
    switch (digit3) {
        case '1': d3Name = 'One hundred'; break;
        case '2': d3Name = 'Two hundred'; break;
        case '3': d3Name = 'Three hundred'; break;
        case '4': d3Name = 'Four hundred'; break;
        case '5': d3Name = 'Five hundred'; break;
        case '6': d3Name = 'Six hundred'; break;
        case '7': d3Name = 'Seven hundred'; break;
        case '8': d3Name = 'Eight hundred'; break;
        case '9': d3Name = 'Nine hundred'; break;

    }
    //Regular naming for tens
    switch (digit2) {
        case '2': d2Name = 'twenty'; break;
        case '3': d2Name = 'thirty'; break;
        case '4': d2Name = 'fourty'; break;
        case '5': d2Name = 'fifty'; break;
        case '6': d2Name = 'sixty'; break;
        case '7': d2Name = 'seventy'; break;
        case '8': d2Name = 'eighty'; break;
        case '9': d2Name = 'ninety'; break;
    }
    //Regular naming for digits
    switch (digit1) {
        case '1': d1Name = 'one'; break;
        case '2': d1Name = 'two'; break;
        case '3': d1Name = 'three'; break;
        case '4': d1Name = 'four'; break;
        case '5': d1Name = 'five'; break;
        case '6': d1Name = 'six'; break;
        case '7': d1Name = 'seven'; break;
        case '8': d1Name = 'eight'; break;
        case '9': d1Name = 'nine'; break;
    }
    //Special conditions
    if (myNumber === 0) {
        d1name = 'Zero';
        console.log(d1Name);
    }

    if (digit2 === '1') {
        d2Name = d1Name;
        d1Name = 'teen';
        switch (digit1) {
            case '3': d2Name = 'thir'; break;
            case '5': d2Name = 'fif'; break;
            case '8': d2Name = 'eigh'; break;
        }
        if (digit1 === '0') {
            d2Name = 'ten';
            d1Name = '';
        }
        if (digit1 === '1') {
            d2Name = 'eleven';
            d1Name = '';
        }
        if (digit1 === '2') {
            d2Name = 'twelve';
            d1Name = '';
        }
    }
    if (myNumber <= 999 && myNumber > 0) {

        if (myNumber <= 99) {
            if (myNumber <= 9) {
                d1Name = d1Name.charAt(0).toUpperCase() + d1Name.slice(1);
                console.log(d1Name);
            }
            else {
                d2Name = d2Name.charAt(0).toUpperCase() + d2Name.slice(1);

                if (digit2 === '1') {
                    console.log(d2Name + d1Name);
                }
                else {
                    console.log(d2Name + ' ' + d1Name);
                }
            }
        }
        else {
            if (digit1 === '0' && digit2 === '0') {
                console.log(d3Name);
            }
            else if ((digit2 === '0' && digit1 !== '0') || d1Name === 'teen') {
                console.log(d3Name + ' and ' + d2Name + d1Name);
            }
            else {
                console.log(d3Name + ' and ' + d2Name + ' ' + d1Name);
            }
        }
    }
    else {
        console.log('try with number 0 - 100');
    }
}

task8(9);
task8(10);
task8(12);
task8(25);
task8(98);
task8(98);
task8(273);
task8(400);
task8(501);
task8(617);
task8(711);
task8(999);
task8(19);
